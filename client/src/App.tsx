import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme-provider";
import { Toaster } from "./components/ui/toaster";
import { AuthProvider } from "./contexts/AuthContext";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { SearchResults } from "./pages/SearchResults";
import { HotelDetails } from "./pages/HotelDetails";
import { BookingPage } from "./pages/BookingPage";
import { BookingConfirmation } from "./pages/BookingConfirmation";
import { GuestDashboard } from "./pages/guest/GuestDashboard";
import { MyBookings } from "./pages/guest/MyBookings";
import { UserProfile } from "./pages/guest/UserProfile";
import { WriteReview } from "./pages/guest/WriteReview";
import { OwnerDashboard } from "./pages/owner/OwnerDashboard";
import { MyHotels } from "./pages/owner/MyHotels";
import { HotelForm } from "./pages/owner/HotelForm";
import { RoomManagement } from "./pages/owner/RoomManagement";
import { RoomForm } from "./pages/owner/RoomForm";
import { HousekeepingDashboard } from "./pages/owner/HousekeepingDashboard";
import { OwnerAnalytics } from "./pages/owner/OwnerAnalytics";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminBookings } from "./pages/admin/AdminBookings";
import { AdminHotels } from "./pages/admin/AdminHotels";
import { AdminUsers } from "./pages/admin/AdminUsers";
import { AdminAnalytics } from "./pages/admin/AdminAnalytics";
import { BlankPage } from "./pages/BlankPage";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { FAQ } from "./pages/FAQ";
import { CorporateStay } from "./pages/CorporateStay";
import { GuestHouses } from "./pages/GuestHouses";
import { FurnishedHomes } from "./pages/FurnishedHomes";
import { Amenities } from "./pages/Amenities";
import { Housekeeping } from "./pages/Housekeeping";
import { Support } from "./pages/Support";
import { ExpatHousing } from "./pages/ExpatHousing";
import { NRIHousing } from "./pages/NRIHousing";
import { Pune } from "./pages/locations/Pune";
import { Mumbai } from "./pages/locations/Mumbai";
import { Bangalore } from "./pages/locations/Bangalore";
import { Delhi } from "./pages/locations/Delhi";
function App() {
	return (
		<AuthProvider>
			<ThemeProvider defaultTheme="light" storageKey="ui-theme">
				<Router>
					<Routes>
						{/* Login/Register without Layout */}
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />

						{/* All other routes with Layout (includes navbar) */}
						<Route path="/" element={<Layout />}>
							{/* Public Routes */}
							<Route index element={<Home />} />
							<Route index path="/about" element={<About />} />
							<Route
								index
								path="/contact"
								element={<Contact />}
							/>
							<Route path="/faq" element={<FAQ />} />
							<Route
								path="services/corporate-stay"
								element={<CorporateStay />}
							/>
							<Route
								path="services/guest-houses"
								element={<GuestHouses />}
							/>
							<Route
								path="guest-services/amenities"
								element={<Amenities />}
							/>
							<Route
								path="guest-services/housekeeping"
								element={<Housekeeping />}
							/>
							<Route
								path="services/nri-housing"
								element={<NRIHousing />}
							/>

							<Route
								path="guest-services/support"
								element={<Support />}
							/>

							<Route
								path="services/expat-housing"
								element={<ExpatHousing />}
							/>

							<Route
								path="services/furnished-homes"
								element={<FurnishedHomes />}
							/>

							<Route path="search" element={<SearchResults />} />
							<Route
								path="hotels/:id"
								element={<HotelDetails />}
							/>
							<Route path="locations/pune" element={<Pune />} />
							<Route
								path="locations/mumbai"
								element={<Mumbai />}
							/>
							<Route
								path="locations/bangalore"
								element={<Bangalore />}
							/>
							<Route path="locations/delhi" element={<Delhi />} />

							{/* Protected Routes */}
							<Route
								path="booking"
								element={
									<ProtectedRoute>
										<BookingPage />
									</ProtectedRoute>
								}
							/>
							<Route
								path="booking-confirmation"
								element={
									<ProtectedRoute>
										<BookingConfirmation />
									</ProtectedRoute>
								}
							/>

							{/* Guest Routes */}
							<Route
								path="dashboard"
								element={
									<ProtectedRoute>
										<GuestDashboard />
									</ProtectedRoute>
								}
							/>
							<Route
								path="my-bookings"
								element={
									<ProtectedRoute>
										<MyBookings />
									</ProtectedRoute>
								}
							/>
							<Route
								path="profile"
								element={
									<ProtectedRoute>
										<UserProfile />
									</ProtectedRoute>
								}
							/>
							<Route
								path="review/:bookingId"
								element={
									<ProtectedRoute>
										<WriteReview />
									</ProtectedRoute>
								}
							/>

							{/* Owner Routes */}
							<Route
								path="owner/dashboard"
								element={
									<ProtectedRoute
										allowedRoles={["owner", "admin"]}
									>
										<OwnerDashboard />
									</ProtectedRoute>
								}
							/>
							<Route
								path="owner/hotels"
								element={
									<ProtectedRoute
										allowedRoles={["owner", "admin"]}
									>
										<MyHotels />
									</ProtectedRoute>
								}
							/>
							<Route
								path="owner/hotels/new"
								element={
									<ProtectedRoute
										allowedRoles={["owner", "admin"]}
									>
										<HotelForm />
									</ProtectedRoute>
								}
							/>
							<Route
								path="owner/hotels/:id/edit"
								element={
									<ProtectedRoute
										allowedRoles={["owner", "admin"]}
									>
										<HotelForm />
									</ProtectedRoute>
								}
							/>
							<Route
								path="owner/hotels/:hotelId/rooms"
								element={
									<ProtectedRoute
										allowedRoles={["owner", "admin"]}
									>
										<RoomManagement />
									</ProtectedRoute>
								}
							/>
							<Route
								path="owner/hotels/:hotelId/rooms/new"
								element={
									<ProtectedRoute
										allowedRoles={["owner", "admin"]}
									>
										<RoomForm />
									</ProtectedRoute>
								}
							/>
							<Route
								path="owner/hotels/:hotelId/rooms/:roomId/edit"
								element={
									<ProtectedRoute
										allowedRoles={["owner", "admin"]}
									>
										<RoomForm />
									</ProtectedRoute>
								}
							/>
							<Route
								path="owner/housekeeping"
								element={
									<ProtectedRoute
										allowedRoles={[
											"owner",
											"staff",
											"admin",
										]}
									>
										<HousekeepingDashboard />
									</ProtectedRoute>
								}
							/>
							<Route
								path="owner/analytics"
								element={
									<ProtectedRoute
										allowedRoles={["owner", "admin"]}
									>
										<OwnerAnalytics />
									</ProtectedRoute>
								}
							/>

							{/* Admin Routes */}
							<Route
								path="admin/dashboard"
								element={
									<ProtectedRoute allowedRoles={["admin"]}>
										<AdminDashboard />
									</ProtectedRoute>
								}
							/>
							<Route
								path="admin/bookings"
								element={
									<ProtectedRoute allowedRoles={["admin"]}>
										<AdminBookings />
									</ProtectedRoute>
								}
							/>
							<Route
								path="admin/hotels"
								element={
									<ProtectedRoute allowedRoles={["admin"]}>
										<AdminHotels />
									</ProtectedRoute>
								}
							/>
							<Route
								path="admin/users"
								element={
									<ProtectedRoute allowedRoles={["admin"]}>
										<AdminUsers />
									</ProtectedRoute>
								}
							/>
							<Route
								path="admin/analytics"
								element={
									<ProtectedRoute allowedRoles={["admin"]}>
										<AdminAnalytics />
									</ProtectedRoute>
								}
							/>
						</Route>

						<Route path="*" element={<BlankPage />} />
					</Routes>
				</Router>
				<Toaster />
			</ThemeProvider>
		</AuthProvider>
	);
}

export default App;
