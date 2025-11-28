import { LogOut, Hotel, LayoutDashboard, Calendar, User, Settings, Users, BarChart3, ClipboardList, Menu } from "lucide-react"
import { Button } from "./ui/button"
import { ThemeToggle } from "./ui/theme-toggle"
import { useAuth } from "@/contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { ROLES } from "shared/config/roles"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { useState } from "react"

export function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLogout = () => {
    console.log('User logging out')
    logout()
    navigate("/login")
  }

  const NavLinks = () => {
    if (!user) return null

    const links = []

    // Common links for all authenticated users
    links.push(
      <Button key="home" variant="ghost" onClick={() => { navigate("/"); setMobileMenuOpen(false); }}>
        <Hotel className="h-4 w-4 mr-2" />
        Browse Hotels
      </Button>
    )

    if (user.role === ROLES.GUEST) {
      links.push(
        <Button key="dashboard" variant="ghost" onClick={() => { navigate("/dashboard"); setMobileMenuOpen(false); }}>
          <LayoutDashboard className="h-4 w-4 mr-2" />
          Dashboard
        </Button>,
        <Button key="bookings" variant="ghost" onClick={() => { navigate("/my-bookings"); setMobileMenuOpen(false); }}>
          <Calendar className="h-4 w-4 mr-2" />
          My Bookings
        </Button>
      )
    }

    if (user.role === ROLES.OWNER) {
      links.push(
        <Button key="owner-dashboard" variant="ghost" onClick={() => { navigate("/owner/dashboard"); setMobileMenuOpen(false); }}>
          <LayoutDashboard className="h-4 w-4 mr-2" />
          Dashboard
        </Button>,
        <Button key="my-hotels" variant="ghost" onClick={() => { navigate("/owner/hotels"); setMobileMenuOpen(false); }}>
          <Hotel className="h-4 w-4 mr-2" />
          My Hotels
        </Button>,
        <Button key="housekeeping" variant="ghost" onClick={() => { navigate("/owner/housekeeping"); setMobileMenuOpen(false); }}>
          <ClipboardList className="h-4 w-4 mr-2" />
          Housekeeping
        </Button>,
        <Button key="analytics" variant="ghost" onClick={() => { navigate("/owner/analytics"); setMobileMenuOpen(false); }}>
          <BarChart3 className="h-4 w-4 mr-2" />
          Analytics
        </Button>
      )
    }

    if (user.role === ROLES.ADMIN) {
      links.push(
        <Button key="admin-dashboard" variant="ghost" onClick={() => { navigate("/admin/dashboard"); setMobileMenuOpen(false); }}>
          <LayoutDashboard className="h-4 w-4 mr-2" />
          Dashboard
        </Button>,
        <Button key="admin-hotels" variant="ghost" onClick={() => { navigate("/admin/hotels"); setMobileMenuOpen(false); }}>
          <Hotel className="h-4 w-4 mr-2" />
          Hotels
        </Button>,
        <Button key="admin-bookings" variant="ghost" onClick={() => { navigate("/admin/bookings"); setMobileMenuOpen(false); }}>
          <Calendar className="h-4 w-4 mr-2" />
          Bookings
        </Button>,
        <Button key="admin-users" variant="ghost" onClick={() => { navigate("/admin/users"); setMobileMenuOpen(false); }}>
          <Users className="h-4 w-4 mr-2" />
          Users
        </Button>,
        <Button key="admin-analytics" variant="ghost" onClick={() => { navigate("/admin/analytics"); setMobileMenuOpen(false); }}>
          <BarChart3 className="h-4 w-4 mr-2" />
          Analytics
        </Button>
      )
    }

    return <>{links}</>
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <div 
            className="text-xl font-bold cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" 
            onClick={() => navigate("/")}
          >
            GuestHub
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <NavLinks />
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col gap-2 mt-8">
                <NavLinks />
                <Button variant="ghost" onClick={() => { navigate("/profile"); setMobileMenuOpen(false); }}>
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                <Button variant="ghost" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="hidden md:flex">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">{user?.name || user?.email}</p>
                  <p className="text-xs text-muted-foreground capitalize">{user?.role}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}