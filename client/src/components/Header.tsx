// components/Header.jsx
import { LogOut, Hotel, LayoutDashboard, Calendar, User, Settings, Users, BarChart3, ClipboardList, Menu, ChevronDown, Phone, X } from "lucide-react"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
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
import { Avatar, AvatarFallback } from "./ui/avatar"

export function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const handleLogout = () => {
    console.log('User logging out')
    logout()
    navigate("/login")
  }

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!user?.name) return 'U'
    const names = user.name.split(' ')
    if (names.length >= 2) {
      return `${names[0][0]}${names[1][0]}`.toUpperCase()
    }
    return user.name[0].toUpperCase()
  }

  // Navigation Menu Data
  const menuItems = [
    {
      title: "HOME",
      path: "/",
    },
    {
      title: "WHAT WE DO",
      hasDropdown: true,
      items: [
        { title: "Corporate Stay Solutions", path: "/services/corporate-stay" },
        { title: "Corporate Guest Houses", path: "/services/guest-houses" },
        { title: "Expat Housing", path: "/services/expat-housing" },
        { title: "NRI Housing", path: "/services/nri-housing" },
        { title: "Corporate Furnished Homes", path: "/services/furnished-homes" },
      ]
    },
    {
      title: "WHERE WE SERVE",
      hasDropdown: true,
      items: [
        { title: "Pune", path: "/locations/pune" },
        { title: "Mumbai", path: "/locations/mumbai" },
        { title: "Bangalore", path: "/locations/bangalore" },
        { title: "Delhi", path: "/locations/delhi" },
      ]
    },
    {
      title: "GUEST SERVICE",
      hasDropdown: true,
      items: [
        { title: "Amenities", path: "/guest-services/amenities" },
        { title: "Housekeeping", path: "/guest-services/housekeeping" },
        { title: "Support 24/7", path: "/guest-services/support" },
      ]
    },
    {
      title: "MORE",
      hasDropdown: true,
      items: [
        { title: "About Us", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "FAQ", path: "/faq" },
        // { title: "Blog", path: "/blog" },
      ]
    },
  ]

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
      {/* Main Navigation */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <Hotel className="h-8 w-8 text-red-600 mr-2" />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 leading-tight">CORPORATE</span>
                <span className="text-xs font-semibold text-gray-600 leading-tight">HOUSING</span>
              </div>
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center justify-center flex-1 px-8">
              <ul className="flex items-center gap-8">
                {menuItems.map((item, index) => (
                  <li key={index} className="relative group">
                    {item.hasDropdown ? (
                      <div>
                        <button
                          className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-red-600 transition py-2"
                          onClick={() => toggleDropdown(index)}
                        >
                          {item.title}
                          <ChevronDown className="h-3 w-3" />
                        </button>
                        
                        {/* Dropdown Menu */}
                        <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                          <div className="bg-white shadow-lg rounded-md border mt-2">
                            {item.items.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.path}
                                onClick={(e) => {
                                  e.preventDefault()
                                  navigate(subItem.path)
                                }}
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition first:rounded-t-md last:rounded-b-md"
                              >
                                {subItem.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <a
                        href={item.path}
                        onClick={(e) => {
                          e.preventDefault()
                          navigate(item.path)
                        }}
                        className="text-sm font-medium text-gray-700 hover:text-red-600 transition"
                      >
                        {item.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Side - Auth Buttons (Desktop) */}
            {/* <div className="hidden lg:flex items-center gap-3">
              {!user ? (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => navigate("/login")}
                    className="text-gray-700 hover:text-red-600 font-medium"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => navigate("/register")}
                    className="bg-red-600 hover:bg-red-700 text-white font-medium"
                  >
                    Sign Up
                  </Button>
                </>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                      <Avatar className="h-10 w-10 border-2 border-red-600">
                        <AvatarFallback className="bg-red-600 text-white font-semibold">
                          {getUserInitials()}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate("/profile")}>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    {user.role === ROLES.GUEST && (
                      <DropdownMenuItem onClick={() => navigate("/my-bookings")}>
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>My Bookings</span>
                      </DropdownMenuItem>
                    )}
                    {user.role === ROLES.OWNER && (
                      <DropdownMenuItem onClick={() => navigate("/owner/dashboard")}>
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                      </DropdownMenuItem>
                    )}
                    {user.role === ROLES.ADMIN && (
                      <DropdownMenuItem onClick={() => navigate("/admin/dashboard")}>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Admin Panel</span>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={handleLogout}
                      className="text-red-600 focus:text-red-600 focus:bg-red-50"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div> */}

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Hotel className="h-6 w-6 text-red-600 mr-2" />
                    <span className="font-bold text-gray-900">CORPORATE HOUSING</span>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col gap-1">
                  {menuItems.map((item, index) => (
                    <div key={index}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(index)}
                            className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                          >
                            {item.title}
                            <ChevronDown 
                              className={`h-4 w-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                            />
                          </button>
                          {activeDropdown === index && (
                            <div className="ml-4 mt-1 space-y-1">
                              {item.items.map((subItem, subIndex) => (
                                <a
                                  key={subIndex}
                                  href={subItem.path}
                                  onClick={(e) => {
                                    e.preventDefault()
                                    navigate(subItem.path)
                                    setMobileMenuOpen(false)
                                  }}
                                  className="block px-3 py-2 text-sm text-gray-600 hover:text-red-600 hover:bg-gray-50 rounded-md"
                                >
                                  {subItem.title}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a
                          href={item.path}
                          onClick={(e) => {
                            e.preventDefault()
                            navigate(item.path)
                            setMobileMenuOpen(false)
                          }}
                          className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                          {item.title}
                        </a>
                      )}
                    </div>
                  ))}

                  <div className="border-t my-4"></div>

                  {/* Mobile Auth Buttons */}
                  {/* {!user ? (
                    <div className="space-y-2 px-3">
                      <Button
                        variant="outline"
                        onClick={() => {
                          navigate("/login")
                          setMobileMenuOpen(false)
                        }}
                        className="w-full"
                      >
                        Login
                      </Button>
                      <Button
                        onClick={() => {
                          navigate("/register")
                          setMobileMenuOpen(false)
                        }}
                        className="w-full bg-red-600 hover:bg-red-700"
                      >
                        Sign Up
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-1 px-3">
                      <div className="px-3 py-2 mb-2">
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          navigate("/profile")
                          setMobileMenuOpen(false)
                        }}
                        className="w-full justify-start"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </Button>
                      {user.role === ROLES.GUEST && (
                        <Button
                          variant="ghost"
                          onClick={() => {
                            navigate("/my-bookings")
                            setMobileMenuOpen(false)
                          }}
                          className="w-full justify-start"
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          My Bookings
                        </Button>
                      )}
                      {user.role === ROLES.OWNER && (
                        <Button
                          variant="ghost"
                          onClick={() => {
                            navigate("/owner/dashboard")
                            setMobileMenuOpen(false)
                          }}
                          className="w-full justify-start"
                        >
                          <LayoutDashboard className="h-4 w-4 mr-2" />
                          Dashboard
                        </Button>
                      )}
                      {user.role === ROLES.ADMIN && (
                        <Button
                          variant="ghost"
                          onClick={() => {
                            navigate("/admin/dashboard")
                            setMobileMenuOpen(false)
                          }}
                          className="w-full justify-start"
                        >
                          <Settings className="h-4 w-4 mr-2" />
                          Admin Panel
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        onClick={() => {
                          handleLogout()
                          setMobileMenuOpen(false)
                        }}
                        className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Logout
                      </Button>
                    </div>
                  )} */}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
