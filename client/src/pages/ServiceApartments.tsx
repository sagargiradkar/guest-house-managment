// pages/services/ServiceApartments.tsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
	Home,
	Wifi,
	Utensils,
	Shirt,
	Shield,
	Clock,
	CheckCircle2,
	Star,
	Phone,
	Mail,
	ArrowRight,
	MapPin,
	Bed,
	Users,
	Calendar,
	IndianRupee,
	Briefcase,
	Building2,
	Bath,
	Maximize,
	Laptop,
	Car,
	Dumbbell,
	Coffee,
	Wind,
	Tv,
	Microwave,
	Refrigerator,
	Sofa,
	DoorOpen,
	Sparkles,
	Zap,
	HeartHandshake,
	TrendingDown,
	Package,
	UserCheck,
	Lock,
	Droplet,
	CircleParking,
	Plane, // ✅ ADD THIS
	Camera,
} from "lucide-react";

export function ServiceApartments() {
	const navigate = useNavigate();
	const [contentLoaded, setContentLoaded] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setContentLoaded(true), 300);
		return () => clearTimeout(timer);
	}, []);

	// Hero carousel images
	const heroImages = [
		{
			url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1920",
			title: "Premium Service Apartments",
			subtitle: "Fully furnished homes with hotel-like amenities",
		},
		{
			url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920",
			title: "Your Home Away From Home",
			subtitle: "Comfort, convenience, and flexibility combined",
		},
		{
			url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1920",
			title: "Extended Stay Solutions",
			subtitle: "Perfect for business travelers and families",
		},
	];

	// Featured properties
	const properties = [
		{
			image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
			title: "Executive Studio Apartment",
			location: "Koramangala, Bangalore",
			beds: 1,
			baths: 1,
			sqft: 600,
			price: "₹35,000/month",
			duration: "Min 1 Month",
			features: ["WiFi", "Housekeeping", "Kitchen"],
		},
		{
			image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
			title: "Deluxe 1BHK Service Apartment",
			location: "Bandra, Mumbai",
			beds: 1,
			baths: 1,
			sqft: 800,
			price: "₹50,000/month",
			duration: "Min 1 Month",
			features: ["WiFi", "Gym", "Pool"],
		},
		{
			image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
			title: "Premium 2BHK Service Suite",
			location: "Cyber City, Gurugram",
			beds: 2,
			baths: 2,
			sqft: 1200,
			price: "₹70,000/month",
			duration: "Min 1 Month",
			features: ["WiFi", "Parking", "Security"],
		},
		{
			image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
			title: "Luxury 3BHK Service Apartment",
			location: "Hinjewadi, Pune",
			beds: 3,
			baths: 2,
			sqft: 1600,
			price: "₹95,000/month",
			duration: "Min 1 Month",
			features: ["WiFi", "Balcony", "Modular Kitchen"],
		},
	];

	// Key amenities
	const amenities = [
		{
			icon: Wifi,
			title: "High-Speed WiFi",
			description: "Unlimited high-speed internet connectivity",
		},
		{
			icon: Utensils,
			title: "Fully Equipped Kitchen",
			description: "Modular kitchen with all appliances",
		},
		{
			icon: Shirt,
			title: "Housekeeping",
			description: "Daily/weekly cleaning services included",
		},
		{
			icon: Wind,
			title: "Air Conditioning",
			description: "Climate control in all rooms",
		},
		{
			icon: Tv,
			title: "Entertainment",
			description: "Smart TV with streaming services",
		},
		{
			icon: Lock,
			title: "24/7 Security",
			description: "CCTV surveillance and security staff",
		},
		{
			icon: CircleParking,
			title: "Free Parking",
			description: "Dedicated parking space included",
		},
		{
			icon: Droplet,
			title: "Water Supply",
			description: "24/7 water supply and backup",
		},
	];

	// Why choose service apartments
	const benefits = [
		{
			icon: TrendingDown,
			title: "Cost Effective",
			description: "Up to 30% cheaper than hotels for extended stays",
			color: "bg-green-100 text-green-600",
		},
		{
			icon: Home,
			title: "Spacious Living",
			description:
				"More space with separate living, bedroom, and kitchen areas",
			color: "bg-blue-100 text-blue-600",
		},
		{
			icon: Utensils,
			title: "Cook Your Meals",
			description: "Save money and eat healthy with your own kitchen",
			color: "bg-purple-100 text-purple-600",
		},
		{
			icon: Calendar,
			title: "Flexible Stays",
			description: "Daily, weekly, or monthly rentals available",
			color: "bg-red-100 text-red-600",
		},
		{
			icon: UserCheck,
			title: "Privacy & Freedom",
			description: "Live independently with hotel-like services",
			color: "bg-yellow-100 text-yellow-600",
		},
		{
			icon: Briefcase,
			title: "Perfect for Business",
			description: "Ideal for business travelers and professionals",
			color: "bg-indigo-100 text-indigo-600",
		},
	];

	// Service apartment vs Hotel comparison
	const comparison = [
		{
			feature: "Average Cost (30 days)",
			serviceApartment: "₹50,000 - ₹80,000",
			hotel: "₹1,20,000 - ₹2,00,000",
			winner: "apartment",
		},
		{
			feature: "Space",
			serviceApartment: "800-1500 sqft",
			hotel: "300-400 sqft",
			winner: "apartment",
		},
		{
			feature: "Kitchen Facilities",
			serviceApartment: "Full Kitchen",
			hotel: "Not Available",
			winner: "apartment",
		},
		{
			feature: "Privacy",
			serviceApartment: "Complete Privacy",
			hotel: "Limited Privacy",
			winner: "apartment",
		},
		{
			feature: "Housekeeping",
			serviceApartment: "Weekly/Daily",
			hotel: "Daily",
			winner: "hotel",
		},
		{
			feature: "Flexibility",
			serviceApartment: "Very Flexible",
			hotel: "Limited",
			winner: "apartment",
		},
	];

	// Ideal for categories
	const idealFor = [
		{
			icon: Briefcase,
			title: "Business Travelers",
			description: "Long-term corporate assignments and projects",
			highlights: [
				"WiFi & Workspace",
				"Near Business Hubs",
				"Flexible Duration",
			],
		},
		{
			icon: Users,
			title: "Families",
			description: "Vacations or temporary relocation with family",
			highlights: [
				"Multiple Bedrooms",
				"Kitchen Facilities",
				"Safe Neighborhoods",
			],
		},
		{
			icon: Building2,
			title: "Corporate Housing",
			description: "Bulk bookings for employee accommodation",
			highlights: [
				"Group Discounts",
				"Centralized Billing",
				"Dedicated Support",
			],
		},
		{
			icon: Plane,
			title: "Expats & NRIs",
			description: "Visiting or relocating to India",
			highlights: [
				"International Standards",
				"Virtual Tours",
				"Hassle-Free Setup",
			],
		},
	];

	// Popular locations
	const locations = [
		{
			city: "Bangalore",
			image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600",
			apartments: 85,
			areas: ["Whitefield", "Koramangala", "HSR Layout", "Indiranagar"],
			priceRange: "₹35k - ₹1L",
		},
		{
			city: "Mumbai",
			image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600",
			apartments: 95,
			areas: ["Bandra", "Andheri", "Powai", "BKC"],
			priceRange: "₹45k - ₹1.5L",
		},
		{
			city: "Pune",
			image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600",
			apartments: 70,
			areas: ["Hinjewadi", "Baner", "Kharadi", "Wakad"],
			priceRange: "₹30k - ₹80k",
		},
		{
			city: "Gurugram",
			image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600",
			apartments: 65,
			areas: ["Cyber City", "Golf Course Road", "Sohna Road", "MG Road"],
			priceRange: "₹40k - ₹1.2L",
		},
	];

	// Booking process
	const process = [
		{
			step: "01",
			title: "Search & Select",
			description:
				"Browse properties and choose your ideal service apartment",
			icon: MapPin,
		},
		{
			step: "02",
			title: "Virtual/Physical Tour",
			description: "Schedule a tour to view the property",
			icon: Camera,
		},
		{
			step: "03",
			title: "Book & Pay",
			description: "Secure your booking with flexible payment options",
			icon: IndianRupee,
		},
		{
			step: "04",
			title: "Move In",
			description: "Get your keys and enjoy your new home",
			icon: DoorOpen,
		},
	];

	// Testimonials
	const testimonials = [
		{
			name: "Arjun Mehta",
			role: "Software Engineer, TCS",
			image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
			rating: 5,
			text: "Stayed for 6 months during my project in Bangalore. The service apartment was perfect - spacious, clean, and had everything I needed. Much better than a hotel and more affordable too!",
		},
		{
			name: "Sneha Kapoor",
			role: "Marketing Manager",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
			rating: 5,
			text: "Moved to Mumbai with my family for a year. The 2BHK service apartment gave us the space we needed. Kids loved having their own room and I enjoyed cooking in the kitchen. Great experience!",
		},
		{
			name: "Vikram Singh",
			role: "Consultant, Deloitte",
			image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
			rating: 5,
			text: "Perfect for business travelers! WiFi was excellent, workspace was comfortable, and location was close to my office. Housekeeping kept everything clean. Highly recommend!",
		},
	];

	// Pricing packages
	const packages = [
		{
			name: "Short Stay",
			duration: "1-7 Days",
			icon: Calendar,
			features: [
				"Daily housekeeping",
				"WiFi & utilities included",
				"Flexible check-in/out",
				"No long-term commitment",
			],
			price: "Starting ₹2,500/day",
			popular: false,
		},
		{
			name: "Extended Stay",
			duration: "1-3 Months",
			icon: Clock,
			features: [
				"Weekly housekeeping",
				"All amenities included",
				"10% discount on monthly rent",
				"Dedicated support manager",
			],
			price: "Starting ₹35,000/month",
			popular: true,
		},
		{
			name: "Long Term",
			duration: "3+ Months",
			icon: Building2,
			features: [
				"Bi-weekly housekeeping",
				"Priority maintenance",
				"15-20% discount",
				"Negotiable terms",
			],
			price: "Starting ₹30,000/month",
			popular: false,
		},
	];

	return (
		<div className="min-h-screen -mt-28">
			{/* Hero Carousel Section */}
			<section className="relative h-[600px]">
				<Carousel
					opts={{
						loop: true,
					}}
					plugins={[
						Autoplay({
							delay: 5000,
						}),
					]}
					className="w-full h-full"
				>
					<CarouselContent>
						{heroImages.map((slide, index) => (
							<CarouselItem key={index}>
								<div className="relative h-[600px]">
									<img
										src={slide.url}
										alt={slide.title}
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
									<div className="absolute inset-0 flex items-center">
										<div className="container mx-auto px-4">
											<div className="max-w-2xl text-white animate-slide-up">
												<div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-full">
													<Home className="h-4 w-4" />
													SERVICE APARTMENTS
												</div>
												<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
													{slide.title}
												</h1>
												<p className="text-xl md:text-2xl mb-8 text-gray-200">
													{slide.subtitle}
												</p>
												<div className="flex flex-col sm:flex-row gap-4">
													<Button
														size="lg"
														className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 shadow-xl"
														onClick={() =>
															navigate("/search")
														}
													>
														Browse Apartments
														<ArrowRight className="ml-2 h-5 w-5" />
													</Button>
													<Button
														size="lg"
														variant="outline"
														className="border-2 border-white text-black hover:bg-white hover:text-gray-900 font-semibold px-8"
														onClick={() =>
															navigate("/contact")
														}
													>
														Contact Us
													</Button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="left-4" />
					<CarouselNext className="right-4" />
				</Carousel>
			</section>

			{/* Introduction Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto text-center">
						<h2
							className={`text-4xl font-bold mb-6 text-gray-900 transition-all duration-700 ${
								contentLoaded
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
						>
							Experience the Best of Both Worlds
						</h2>
						<p
							className={`text-xl text-gray-600 leading-relaxed mb-6 transition-all duration-700 ${
								contentLoaded
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
							style={{ transitionDelay: "100ms" }}
						>
							Service apartments combine the comfort and space of
							a home with the amenities and services of a hotel.
							Perfect for business travelers, families, and anyone
							seeking a home-like environment during extended
							stays.
						</p>
						<p
							className={`text-lg text-gray-600 leading-relaxed transition-all duration-700 ${
								contentLoaded
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
							style={{ transitionDelay: "200ms" }}
						>
							Enjoy fully furnished apartments with modern
							amenities, flexible booking options, and significant
							cost savings compared to traditional hotels.
						</p>
					</div>
				</div>
			</section>

			{/* Key Amenities */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-4 text-gray-900">
							Premium Amenities Included
						</h2>
						<p className="text-xl text-gray-600">
							Everything you need for a comfortable stay
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
						{amenities.map((amenity, index) => (
							<Card
								key={index}
								className={`hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
									contentLoaded
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
								style={{ transitionDelay: `${index * 50}ms` }}
							>
								<CardContent className="p-6 text-center">
									<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
										<amenity.icon className="h-8 w-8" />
									</div>
									<h3 className="text-lg font-semibold mb-2 text-gray-900">
										{amenity.title}
									</h3>
									<p className="text-sm text-gray-600">
										{amenity.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Featured Properties */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-4 text-gray-900">
							Featured Service Apartments
						</h2>
						<p className="text-xl text-gray-600">
							Handpicked properties for your perfect stay
						</p>
					</div>

					<Carousel
						opts={{
							align: "start",
							loop: true,
						}}
						className="w-full max-w-6xl mx-auto"
					>
						<CarouselContent>
							{properties.map((property, index) => (
								<CarouselItem
									key={index}
									className="md:basis-1/2 lg:basis-1/3"
								>
									<Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group h-full">
										<div className="relative h-64 overflow-hidden">
											<img
												src={property.image}
												alt={property.title}
												className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
											/>
											<div className="absolute top-4 left-4">
												<Badge className="bg-red-600 text-white">
													{property.duration}
												</Badge>
											</div>
											<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
												{property.price}
											</div>
											<div className="absolute bottom-4 left-4 flex gap-2">
												{property.features.map(
													(feature, idx) => (
														<span
															key={idx}
															className="bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded text-xs font-medium"
														>
															{feature}
														</span>
													)
												)}
											</div>
										</div>
										<CardContent className="p-6">
											<h3 className="text-xl font-bold text-gray-900 mb-2">
												{property.title}
											</h3>
											<p className="text-gray-600 mb-4 flex items-center">
												<MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
												{property.location}
											</p>
											<div className="grid grid-cols-3 gap-2 text-sm text-gray-600 mb-4">
												<span className="flex items-center">
													<Bed className="h-4 w-4 mr-1" />
													{property.beds} Bed
												</span>
												<span className="flex items-center">
													<Bath className="h-4 w-4 mr-1" />
													{property.baths} Bath
												</span>
												<span className="flex items-center">
													<Maximize className="h-4 w-4 mr-1" />
													{property.sqft} sqft
												</span>
											</div>
											<Button
												className="w-full bg-red-600 hover:bg-red-700"
												onClick={() =>
													navigate("/search")
												}
											>
												View Details
											</Button>
										</CardContent>
									</Card>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</section>

			{/* Why Choose Service Apartments */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-4 text-gray-900">
							Why Choose Service Apartments?
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Benefits that make service apartments the smart
							choice
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
						{benefits.map((benefit, index) => (
							<Card
								key={index}
								className={`hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
									contentLoaded
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
								style={{ transitionDelay: `${index * 100}ms` }}
							>
								<CardContent className="p-6">
									<div
										className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${benefit.color} mb-4`}
									>
										<benefit.icon className="h-8 w-8" />
									</div>
									<h3 className="text-xl font-semibold mb-2 text-gray-900">
										{benefit.title}
									</h3>
									<p className="text-gray-600">
										{benefit.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Comparison Table */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-4 text-gray-900">
							Service Apartments vs Hotels
						</h2>
						<p className="text-xl text-gray-600">
							See how we compare for extended stays
						</p>
					</div>

					<div className="max-w-4xl mx-auto">
						<Card>
							<CardContent className="p-0">
								<div className="overflow-x-auto">
									<table className="w-full">
										<thead className="bg-gray-50">
											<tr>
												<th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
													Feature
												</th>
												<th className="px-6 py-4 text-center text-sm font-semibold text-red-600">
													Service Apartment
												</th>
												<th className="px-6 py-4 text-center text-sm font-semibold text-gray-500">
													Hotel
												</th>
											</tr>
										</thead>
										<tbody className="divide-y divide-gray-200">
											{comparison.map((item, index) => (
												<tr
													key={index}
													className="hover:bg-gray-50 transition-colors"
												>
													<td className="px-6 py-4 text-sm font-medium text-gray-900">
														{item.feature}
													</td>
													<td
														className={`px-6 py-4 text-center text-sm ${
															item.winner ===
															"apartment"
																? "font-semibold text-red-600"
																: "text-gray-600"
														}`}
													>
														{item.serviceApartment}
														{item.winner ===
															"apartment" && (
															<CheckCircle2 className="h-4 w-4 inline ml-2 text-green-600" />
														)}
													</td>
													<td
														className={`px-6 py-4 text-center text-sm ${
															item.winner ===
															"hotel"
																? "font-semibold text-gray-900"
																: "text-gray-500"
														}`}
													>
														{item.hotel}
														{item.winner ===
															"hotel" && (
															<CheckCircle2 className="h-4 w-4 inline ml-2 text-green-600" />
														)}
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Ideal For Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-4 text-gray-900">
							Ideal For
						</h2>
						<p className="text-xl text-gray-600">
							Who benefits most from service apartments?
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
						{idealFor.map((category, index) => (
							<Card
								key={index}
								className={`hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
									contentLoaded
										? "opacity-100 scale-100"
										: "opacity-0 scale-95"
								}`}
								style={{ transitionDelay: `${index * 100}ms` }}
							>
								<CardContent className="p-6 text-center">
									<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
										<category.icon className="h-8 w-8" />
									</div>
									<h3 className="text-xl font-bold mb-2 text-gray-900">
										{category.title}
									</h3>
									<p className="text-gray-600 mb-4">
										{category.description}
									</p>
									<div className="space-y-2">
										{category.highlights.map(
											(highlight, idx) => (
												<div
													key={idx}
													className="flex items-center justify-center text-sm text-gray-600"
												>
													<CheckCircle2 className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
													{highlight}
												</div>
											)
										)}
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Pricing Packages */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-4 text-gray-900">
							Flexible Pricing Plans
						</h2>
						<p className="text-xl text-gray-600">
							Choose the plan that fits your stay duration
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{packages.map((pkg, index) => (
							<Card
								key={index}
								className={`relative hover:shadow-2xl transition-all duration-700 ${
									pkg.popular
										? "border-2 border-red-600 transform scale-105"
										: ""
								} ${
									contentLoaded
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
								style={{ transitionDelay: `${index * 100}ms` }}
							>
								{pkg.popular && (
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
										<Badge className="bg-red-600 text-white px-6 py-1">
											Most Popular
										</Badge>
									</div>
								)}
								<CardContent className="p-8">
									<div className="text-center mb-6">
										<div
											className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
												pkg.popular
													? "bg-red-100 text-red-600"
													: "bg-gray-100 text-gray-600"
											} mb-4`}
										>
											<pkg.icon className="h-8 w-8" />
										</div>
										<h3 className="text-2xl font-bold text-gray-900 mb-2">
											{pkg.name}
										</h3>
										<p className="text-gray-600">
											{pkg.duration}
										</p>
									</div>
									<div className="mb-6">
										<p className="text-3xl font-bold text-gray-900 mb-6">
											{pkg.price}
										</p>
										<ul className="space-y-3">
											{pkg.features.map(
												(feature, idx) => (
													<li
														key={idx}
														className="flex items-start text-gray-600"
													>
														<CheckCircle2 className="h-5 w-5 mr-3 text-green-600 flex-shrink-0 mt-0.5" />
														{feature}
													</li>
												)
											)}
										</ul>
									</div>
									<Button
										className={`w-full ${
											pkg.popular
												? "bg-red-600 hover:bg-red-700"
												: "bg-gray-900 hover:bg-gray-800"
										}`}
										onClick={() => navigate("/search")}
									>
										Get Started
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Popular Locations */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-4 text-gray-900">
							Available Locations
						</h2>
						<p className="text-xl text-gray-600">
							Service apartments in major cities
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
						{locations.map((location, index) => (
							<Card
								key={index}
								className={`overflow-hidden hover:shadow-xl transition-all duration-700 group cursor-pointer ${
									contentLoaded
										? "opacity-100 scale-100"
										: "opacity-0 scale-95"
								}`}
								style={{ transitionDelay: `${index * 100}ms` }}
								onClick={() =>
									navigate("/search", {
										state: { location: location.city },
									})
								}
							>
								<div className="relative h-48 overflow-hidden">
									<img
										src={location.image}
										alt={location.city}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
									<div className="absolute bottom-4 left-4 text-white">
										<h3 className="text-2xl font-bold mb-1">
											{location.city}
										</h3>
										<p className="text-sm">
											{location.apartments} Apartments
										</p>
									</div>
								</div>
								<CardContent className="p-6">
									<div className="mb-3">
										<p className="text-sm text-gray-500 mb-2">
											Popular Areas:
										</p>
										<div className="flex flex-wrap gap-1">
											{location.areas
												.slice(0, 3)
												.map((area, idx) => (
													<Badge
														key={idx}
														variant="secondary"
														className="text-xs"
													>
														{area}
													</Badge>
												))}
										</div>
									</div>
									<p className="text-sm text-gray-600">
										<span className="font-semibold text-red-600">
											{location.priceRange}
										</span>
										/month
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Booking Process */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-4 text-gray-900">
							Easy Booking Process
						</h2>
						<p className="text-xl text-gray-600">
							Get started in 4 simple steps
						</p>
					</div>

					<div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
						{process.map((item, index) => (
							<div
								key={index}
								className={`text-center transition-all duration-700 ${
									contentLoaded
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
								style={{ transitionDelay: `${index * 100}ms` }}
							>
								<div className="relative mb-6">
									<div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4">
										{item.step}
									</div>
									<div className="w-16 h-16 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
										<item.icon className="h-8 w-8" />
									</div>
									{index < process.length - 1 && (
										<div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-red-200" />
									)}
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-2">
									{item.title}
								</h3>
								<p className="text-gray-600">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-4 text-gray-900">
							What Our Guests Say
						</h2>
						<p className="text-xl text-gray-600">
							Real experiences from satisfied customers
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
						{testimonials.map((testimonial, index) => (
							<Card
								key={index}
								className={`hover:shadow-xl transition-all duration-700 ${
									contentLoaded
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
								style={{ transitionDelay: `${index * 100}ms` }}
							>
								<CardContent className="p-6">
									<div className="flex items-center mb-4">
										{Array.from({
											length: testimonial.rating,
										}).map((_, i) => (
											<Star
												key={i}
												className="h-5 w-5 text-yellow-400 fill-yellow-400"
											/>
										))}
									</div>
									<p className="text-gray-600 mb-6 leading-relaxed italic">
										"{testimonial.text}"
									</p>
									<div className="flex items-center">
										<img
											src={testimonial.image}
											alt={testimonial.name}
											className="w-12 h-12 rounded-full object-cover mr-4"
										/>
										<div>
											<p className="font-semibold text-gray-900">
												{testimonial.name}
											</p>
											<p className="text-sm text-gray-500">
												{testimonial.role}
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
				<div className="container mx-auto px-4 text-center text-white">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Ready to Book Your Service Apartment?
					</h2>
					<p className="text-xl mb-8 max-w-2xl mx-auto">
						Experience the comfort of home with hotel-like
						amenities. Book now and save up to 30%!
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Button
							size="lg"
							className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
							onClick={() => navigate("/search")}
						>
							Browse Apartments
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="border-2 border-white text-black hover:bg-white hover:text-red-600 font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
							onClick={() => navigate("/contact")}
						>
							<Phone className="h-5 w-5 mr-2" />
							Contact Us
						</Button>
					</div>
				</div>
			</section>

			{/* Contact Bar */}
			<section className="py-8 bg-gray-900 text-white">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8">
						<a
							href="tel:+918788800500"
							className="flex items-center gap-2 hover:text-red-500 transition-colors"
						>
							<Phone className="h-5 w-5 text-red-500" />
							<span className="font-semibold">
								+91 8788 800 500
							</span>
						</a>
						<a
							href="mailto:apartments@corporatehousing.com"
							className="flex items-center gap-2 hover:text-red-500 transition-colors"
						>
							<Mail className="h-5 w-5 text-red-500" />
							<span className="font-semibold">
								apartments@corporatehousing.com
							</span>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
