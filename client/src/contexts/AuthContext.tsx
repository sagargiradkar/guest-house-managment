import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { login as apiLogin, register as apiRegister, getAuthConfig } from "../api/auth";
import { User } from "@shared/types/user";

type AuthStrategy = 'email' | 'pythagora_oauth';

type AuthConfig = {
  strategy: AuthStrategy;
  oauth?: {
    authorizeUrl: string;
    clientId: string;
    scope: string;
  };
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  authStrategy: AuthStrategy | null;
  authConfig: AuthConfig | null;
  login: (email: string, password: string) => Promise<void>;
  loginWithOAuth: () => void;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setAuthData: (accessToken: string, refreshToken: string, userData: User) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem("accessToken");
  });
  const [user, setUser] = useState<User | null>(() => {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
  });
  const [authConfig, setAuthConfig] = useState<AuthConfig | null>(null);
  const [authStrategy, setAuthStrategy] = useState<AuthStrategy | null>(null);

  useEffect(() => {
    const fetchAuthConfig = async () => {
      try {
        const config = await getAuthConfig();
        setAuthConfig(config);
        setAuthStrategy(config.strategy);
      } catch (error) {
        console.error('Failed to fetch auth config:', error);
        setAuthStrategy('email');
      }
    };
    fetchAuthConfig();
  }, []);

  const setAuthData = (accessToken, refreshToken, userData) => {
    if (accessToken || refreshToken) {
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userData", JSON.stringify(userData));
      setUser(userData);
      setIsAuthenticated(true);
    } else {
      throw new Error('Neither refreshToken nor accessToken was returned.');
    }
  };

  const resetAuth = () => {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userData");
    setUser(null);
    setIsAuthenticated(false);
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await apiLogin(email, password);
      const { accessToken, refreshToken, ...userData } = response;
      setAuthData(accessToken, refreshToken, userData);
    } catch (error) {
      resetAuth();
      throw new Error(error?.message || 'Login failed');
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const response = await apiRegister(email, password);
      const { accessToken, refreshToken, ...userData } = response;
      setAuthData(accessToken, refreshToken, userData);
    } catch (error) {
      resetAuth();
      throw new Error(error?.message || 'Registration failed');
    }
  };

  const loginWithOAuth = () => {
    if (!authConfig?.oauth) {
      throw new Error('OAuth not configured');
    }

    const { authorizeUrl, clientId, scope } = authConfig.oauth;

    const redirectUri = `${window.location.origin}/login`;
    const state = Math.random().toString(36).substring(7);

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      redirect_uri: redirectUri,
      scope: scope,
      state: state
    });
    window.location.href = `${authorizeUrl}?${params.toString()}`;
  };

  const logout = () => {
    resetAuth();
    window.location.reload();
  };

  return (
      <AuthContext.Provider value={{
        user,
        isAuthenticated,
        authStrategy,
        authConfig,
        login,
        loginWithOAuth,
        register,
        logout,
        setAuthData
      }}>
        {children}
      </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

