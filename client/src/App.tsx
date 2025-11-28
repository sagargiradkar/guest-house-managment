import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/ui/theme-provider"
import { Toaster } from "./components/ui/toaster"
import { AuthProvider } from "./contexts/AuthContext"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { SearchResults } from "./pages/SearchResults"
import { HotelDetails } from "./pages/HotelDetails"
import { BookingPage } from "./pages/BookingPage"
import { BookingConfirmation } from "./pages/BookingConfirmation"
import { GuestDashboard } from "./pages/guest/GuestDashboard"
import { MyBookings } from "./pages/guest/MyBookings"
import { UserProfile } from "./pages/guest/UserProfile"
import { WriteReview } from "./pages/guest/WriteReview"
import { OwnerDashboard } from "./pages/owner/OwnerDashboard"
import { MyHotels } from "./pages/owner/MyHotels"
import { HotelForm } from "./pages/owner/HotelForm"
import { RoomManagement } from "./pages/owner/RoomManagement"
import { RoomForm } from "./pages/owner/RoomForm"
import { HousekeepingDashboard } from "./pages/owner/HousekeepingDashboard"
import { OwnerAnalytics } from "./pages/owner/OwnerAnalytics"
import { AdminDashboard } from "./pages/admin/AdminDashboard"
import { AdminBookings } from "./pages/admin/AdminBookings"
import { AdminHotels } from "./pages/admin/AdminHotels"
import { AdminUsers } from "./pages/admin/AdminUsers"
import { AdminAnalytics } from "./pages/admin/AdminAnalytics"
import { BlankPage } from "./pages/BlankPage"

function App() {
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="light" storageKey="ui-theme">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
              <Route index element={<Home />} />
              <Route path="search" element={<SearchResults />} />
              <Route path="hotels/:id" element={<HotelDetails />} />
              <Route path="booking" element={<BookingPage />} />
              <Route path="booking-confirmation" element={<BookingConfirmation />} />

              {/* Guest Routes */}
              <Route path="dashboard" element={<GuestDashboard />} />
              <Route path="my-bookings" element={<MyBookings />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="review/:bookingId" element={<WriteReview />} />

              {/* Owner Routes */}
              <Route path="owner/dashboard" element={<OwnerDashboard />} />
              <Route path="owner/hotels" element={<MyHotels />} />
              <Route path="owner/hotels/new" element={<HotelForm />} />
              <Route path="owner/hotels/:id/edit" element={<HotelForm />} />
              <Route path="owner/hotels/:hotelId/rooms" element={<RoomManagement />} />
              <Route path="owner/hotels/:hotelId/rooms/new" element={<RoomForm />} />
              <Route path="owner/hotels/:hotelId/rooms/:roomId/edit" element={<RoomForm />} />
              <Route path="owner/housekeeping" element={<HousekeepingDashboard />} />
              <Route path="owner/analytics" element={<OwnerAnalytics />} />

              {/* Admin Routes */}
              <Route path="admin/dashboard" element={<AdminDashboard />} />
              <Route path="admin/bookings" element={<AdminBookings />} />
              <Route path="admin/hotels" element={<AdminHotels />} />
              <Route path="admin/users" element={<AdminUsers />} />
              <Route path="admin/analytics" element={<AdminAnalytics />} />
            </Route>

            <Route path="*" element={<BlankPage />} />
          </Routes>
        </Router>
        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App