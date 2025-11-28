import { useState, useEffect, useRef } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { useToast } from "@/hooks/useToast"
import {
  LogIn
} from "lucide-react"
import { useAuth } from "@/contexts/AuthContext"

type LoginForm = {
  email: string
  password: string
}

export function Login() {
  const [loading, setLoading] = useState(false)
  const [searchParams] = useSearchParams()
  const { toast } = useToast()
  const { login, loginWithOAuth, authStrategy, authConfig, setAuthData, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<LoginForm>()
  const exchangeInProgress = useRef(false)

  // Handle OAuth callback with authorization code
  useEffect(() => {
    const code = searchParams.get('code')
    const error = searchParams.get('error')

    if (error) {
      toast({
        variant: "destructive",
        title: "Authentication Failed",
        description: `Error: ${error}`,
      })
      return
    }

    if (code && !exchangeInProgress.current) {
      exchangeInProgress.current = true
      const exchangeCode = async () => {
        try {
          setLoading(true)
          const redirectUri = `${window.location.origin}/login`
          const response = await fetch('/api/auth/oauth/exchange', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code, redirectUri })
          })

          if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.message || 'Token exchange failed')
          }

          const data = await response.json()
          const { accessToken, refreshToken, ...userData } = data

          setAuthData(accessToken, refreshToken, userData)
          toast({
            title: "Success",
            description: "Logged in successfully",
          })
          navigate("/")
        } catch (err: Error) {
          console.error('Failed to exchange code:', err)
          toast({
            variant: "destructive",
            title: "Error",
            description: err.message || 'Authentication failed',
          })
          navigate("/login", { replace: true })
        } finally {
          setLoading(false)
        }
      }
      exchangeCode()
    }
  }, [searchParams, toast, navigate, setAuthData])

  const onSubmit = async (data: LoginForm) => {
    try {
      setLoading(true)
      await login(data.email, data.password);
      toast({
        title: "Success",
        description: "Logged in successfully",
      })
      navigate("/")
    } catch (error) {
      console.error("Login error:", error.message)
      toast({
        variant: "destructive",
        title: "Error",
        description: error?.message,
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const code = searchParams.get('code')
    const error = searchParams.get('error')

    if (authStrategy === 'pythagora_oauth' && !code && !error && !isAuthenticated) {
      try {
        loginWithOAuth()
      } catch (error) {
        console.error("OAuth login error:", error.message)
        toast({
          variant: "destructive",
          title: "Error",
          description: error?.message,
        })
      }
    }
  }, [authStrategy, searchParams, isAuthenticated, loginWithOAuth, toast])

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  if (authStrategy === null || (authStrategy === 'pythagora_oauth' && !isAuthenticated)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary p-4">
        <Card className="w-full max-w-md">
          <CardContent className="flex items-center justify-center py-8">
            <div className="text-muted-foreground">
              {authStrategy === 'pythagora_oauth' ? 'Redirecting to Pythagora...' : 'Loading...'}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome back</CardTitle>
          <CardDescription>Enter your credentials to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                "Loading..."
              ) : (
                <>
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </>
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            variant="link"
            className="text-sm text-muted-foreground"
            onClick={() => navigate("/register")}
          >
            Don't have an account? Sign up
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
