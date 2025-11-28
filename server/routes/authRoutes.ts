import dotenv from 'dotenv';
import express from 'express';
import { Request, Response } from 'express';
import UserService from '../services/userService';
import { requireUser } from './middlewares/auth';
import User from '../models/User';
import { generateAccessToken, generateRefreshToken } from '../utils/auth';
import jwt from 'jsonwebtoken';
import { ALL_ROLES } from 'shared';
import { Issuer, Client } from 'openid-client';

dotenv.config();

const router = express.Router();

const AUTH_STRATEGY = process.env.AUTH_STRATEGY || 'email';

const PYTHAGORA_IDP_URL = process.env.PYTHAGORA_IDP_URL;
const OAUTH_CLIENT_ID = process.env.OAUTH_CLIENT_ID;
const OAUTH_CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;

interface AuthRequest extends Request {
  user?: Record<string, unknown>;
}

interface AuthConfigResponse {
  strategy: string;
  oauth?: {
    authorizeUrl: string;
    clientId: string;
    scope: string;
  };
}

async function generateTokensAndReturnUser(user: User) {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  user.refreshToken = refreshToken;
  await user.save();

  return { ...user.toObject(), accessToken, refreshToken };
}

let oidcClient: Client | null = null;

async function getOidcClient(): Promise<Client> {
  if (oidcClient) {
    return oidcClient;
  }

  if (!PYTHAGORA_IDP_URL || !OAUTH_CLIENT_ID || !OAUTH_CLIENT_SECRET) {
    throw new Error('OAuth configuration missing');
  }

  const issuer = await Issuer.discover(PYTHAGORA_IDP_URL);

  oidcClient = new issuer.Client({
    client_id: OAUTH_CLIENT_ID,
    client_secret: OAUTH_CLIENT_SECRET,
    response_types: ['code'],
    token_endpoint_auth_method: 'client_secret_post',
  });

  return oidcClient;
}

router.get('/config', (req: Request, res: Response) => {
  const config: AuthConfigResponse = {
    strategy: AUTH_STRATEGY
  };

  if (AUTH_STRATEGY === 'pythagora_oauth') {
    if (!PYTHAGORA_IDP_URL || !OAUTH_CLIENT_ID) {
      return res.status(500).json({
        error: 'OAuth not configured. Please set PYTHAGORA_IDP_URL and OAUTH_CLIENT_ID environment variables.'
      });
    }

    config.oauth = {
      authorizeUrl: `${PYTHAGORA_IDP_URL}/oauth/authorize`,
      clientId: OAUTH_CLIENT_ID,
      scope: 'openid profile email'
    };
  }

  res.json(config);
});

if (AUTH_STRATEGY === 'pythagora_oauth') {
  router.post('/oauth/exchange', async (req: Request, res: Response) => {
    const { code, redirectUri } = req.body;

    if (!code) {
      return res.status(400).json({ message: 'Code is required' });
    }

    if (!redirectUri) {
      return res.status(400).json({ message: 'Redirect URI is required' });
    }

    try {
      const client = await getOidcClient();
      const tokenSet = await client.callback(
        redirectUri,
        { code: code as string }
      );
      const claims = tokenSet.claims();

      if (!claims.sub) {
        return res.status(400).json({ message: 'Invalid claims in ID token' });
      }

      let user = await User.findOne({ oauthId: claims.sub });
      if (!user) {
        let email = claims.email;

        if (!email) {
          try {
            const userinfo = await client.userinfo(tokenSet.access_token!);
            email = userinfo.email;
          } catch (err) {
            console.error('Failed to get user info:', err);
            return res.status(400).json({ message: 'Failed to fetch user info' });
          }
        }
        if (!email) {
          return res.status(400).json({ message: 'No email found in user info' });
        }

        user = await User.findOne({ email: email as string });
        if (user) {
          user.oauthProvider = 'pythagora';
          user.oauthId = claims.sub;
          await user.save();
        } else {
          user = await User.create({
            email: email as string,
            password: null,
            oauthProvider: 'pythagora',
            oauthId: claims.sub
          });
        }
      }
      const response = await generateTokensAndReturnUser(user);
      return res.json(response);
    } catch (error: unknown) {
      console.error('OAuth token exchange error:', error);
      return res.status(400).json({ message: 'Authentication failed. Please try again.' });
    }
  });
}

if (AUTH_STRATEGY === 'email') {
  router.post('/login', async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
      const user = await UserService.authenticateWithPassword(email, password);
      if (!user) {
        return res.status(400).json({ message: 'Email or password is incorrect' });
      }
      const response = await generateTokensAndReturnUser(user);
      return res.json(response);
    } catch (error: unknown) {
      return res.status(400).json({ message: error.message || 'Authentication failed' });
    }
  });

  router.post('/register', async (req: AuthRequest, res: Response) => {
    if (req.user) {
      return res.json({ user: req.user });
    }
    try {
      const user = await UserService.create(req.body);
      const response = await generateTokensAndReturnUser(user);
      return res.status(200).json(response);
    } catch (error: unknown) {
      console.error(`Error while registering user: ${error}`);
      return res.status(400).json({ message: error.message || 'Registration failed' });
    }
  });
}

router.post('/logout', requireUser(ALL_ROLES), async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?._id;

    if (!userId) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    const user = await User.findById(userId);
    if (user) {
      user.refreshToken = null;
      await user.save();
    }

    return res.status(200).json({ message: 'User logged out successfully.' });
  } catch (error: unknown) {
    return res.status(400).json({ message: error.message || 'Logout failed' });
  }
});

router.post('/refresh', async (req: Request, res: Response) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({
      success: false,
      message: 'Refresh token is required'
    });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!) as jwt.JwtPayload;

    const user = await UserService.get(decoded.sub);

    if (!user) {
      return res.status(403).json({
        success: false,
        message: 'User not found'
      });
    }

    if (user.refreshToken !== refreshToken) {
      return res.status(403).json({
        success: false,
        message: 'Invalid refresh token'
      });
    }

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    user.refreshToken = newRefreshToken;
    await user.save();

    return res.status(200).json({
      success: true,
      data: {
        ...user.toObject(),
        accessToken: newAccessToken,
        refreshToken: newRefreshToken
      }
    });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorName = error instanceof Error ? error.name : 'UnknownError';
    console.error(`Token refresh error: ${errorMessage}`);

    if (errorName === 'TokenExpiredError') {
      return res.status(403).json({
        success: false,
        message: 'Refresh token has expired'
      });
    }

    return res.status(403).json({
      success: false,
      message: 'Invalid refresh token'
    });
  }
});

router.get('/me', requireUser(ALL_ROLES), async (req: AuthRequest, res: Response) => {
  return res.status(200).json(req.user);
});

export default router;
