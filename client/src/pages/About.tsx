// pages/About.tsx
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
	Building2,
	Users,
	Award,
	Target,
	Heart,
	Shield,
	TrendingUp,
	Globe,
	CheckCircle2,
	Phone,
	Mail,
	Linkedin,
} from "lucide-react";

export function About() {
	const navigate = useNavigate();
	const [contentLoaded, setContentLoaded] = useState(false);

	useEffect(() => {
		// Simulate content loading
		const timer = setTimeout(() => setContentLoaded(true), 300);
		return () => clearTimeout(timer);
	}, []);

	// Company statistics
	const stats = [
		{ label: "Properties", value: "150+", icon: Building2 },
		{ label: "Happy Guests", value: "5000+", icon: Users },
		{ label: "Cities Covered", value: "12+", icon: Globe },
		{ label: "Years of Excellence", value: "8+", icon: Award },
	];

	// Core values
	const values = [
		{
			icon: Heart,
			title: "Guest-Centric",
			description:
				"We put our guests at the heart of everything we do, ensuring comfort and satisfaction.",
		},
		{
			icon: Shield,
			title: "Trust & Safety",
			description:
				"All properties are verified and meet our strict quality and safety standards.",
		},
		{
			icon: Award,
			title: "Excellence",
			description:
				"We strive for excellence in service delivery and property management.",
		},
		{
			icon: TrendingUp,
			title: "Innovation",
			description:
				"Continuously improving our platform and services with cutting-edge technology.",
		},
	];

	// Team members
	const team = [
		{
			name: "Rajesh Kumar",
			role: "Founder & CEO",
			image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
			bio: "15+ years in hospitality industry",
			linkedin: "#",
		},
		{
			name: "Priya Sharma",
			role: "Chief Operations Officer",
			image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
			bio: "Expert in property management",
			linkedin: "#",
		},
		{
			name: "Amit Patel",
			role: "Head of Technology",
			image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
			bio: "Tech innovator & problem solver",
			linkedin: "#",
		},
		{
			name: "Sneha Reddy",
			role: "Customer Experience Lead",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
			bio: "Passionate about guest satisfaction",
			linkedin: "#",
		},
	];

	// Timeline/Milestones
	const milestones = [
		{
			year: "2016",
			title: "Company Founded",
			description: "Started with 5 properties in Pune",
		},
		{
			year: "2018",
			title: "Expansion",
			description: "Extended services to Mumbai and Bangalore",
		},
		{
			year: "2020",
			title: "Digital Transformation",
			description: "Launched our online booking platform",
		},
		{
			year: "2023",
			title: "Industry Recognition",
			description: "Awarded Best Corporate Housing Provider",
		},
		{
			year: "2025",
			title: "Pan-India Presence",
			description: "150+ properties across 12 major cities",
		},
	];

	return (
		<div className="min-h-screen -mt-12">
			{/* Hero Section */}
			<section className="relative h-[500px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
				<div
					className="absolute inset-0 bg-cover bg-center opacity-20"
					style={{
						backgroundImage:
							"url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920)",
					}}
				/>
				<div className="relative z-10 container mx-auto px-4 h-full flex items-center">
					<div
						className={`max-w-3xl text-white transition-all duration-700 ${
							contentLoaded
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-4"
						}`}
					>
						<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
							About{" "}
							<span className="text-red-500">
								Corporate Housing
							</span>
						</h1>
						<p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
							Redefining corporate accommodation with trust,
							comfort, and excellence since 2016.
						</p>
					</div>
				</div>
			</section>

			{/* Statistics Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{stats.map((stat, index) => (
							<Card
								key={index}
								className={`text-center hover:shadow-lg transition-all duration-700 border-t-4 border-t-red-600 ${
									contentLoaded
										? "opacity-100 scale-100"
										: "opacity-0 scale-95"
								}`}
								style={{ transitionDelay: `${index * 100}ms` }}
							>
								<CardContent className="p-6">
									<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
										<stat.icon className="h-8 w-8" />
									</div>
									<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
										{stat.value}
									</h3>
									<p className="text-gray-600 font-medium">
										{stat.label}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Our Story Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div
							className={`transition-all duration-700 ${
								contentLoaded
									? "opacity-100 translate-x-0"
									: "opacity-0 -translate-x-4"
							}`}
						>
							<h2 className="text-4xl font-bold mb-6 text-gray-900">
								Our Story
							</h2>
							<div className="space-y-4 text-gray-600 leading-relaxed">
								<p>
									Founded in 2016, Corporate Housing began
									with a simple vision: to provide safe,
									comfortable, and affordable accommodations
									for corporate professionals, expatriates,
									and business travelers across India.
								</p>
								<p>
									What started as a small operation with just
									5 properties in Pune has grown into one of
									India's most trusted corporate housing
									providers, serving over 5,000 satisfied
									guests across 12 major cities.
								</p>
								<p>
									Our success is built on three pillars:
									quality properties, exceptional service, and
									innovative technology. We carefully select
									and verify each property to ensure it meets
									our stringent standards for safety, comfort,
									and convenience.
								</p>
								<p>
									Today, we continue to expand our portfolio
									while maintaining the personal touch and
									attention to detail that our guests have
									come to expect and appreciate.
								</p>
							</div>
						</div>
						<div
							className={`transition-all duration-700 ${
								contentLoaded
									? "opacity-100 translate-x-0"
									: "opacity-0 translate-x-4"
							}`}
						>
							<img
								src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
								alt="Our Story"
								className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Mission & Vision Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-8">
						<Card
							className={`hover:shadow-xl transition-all duration-700 ${
								contentLoaded
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
						>
							<CardContent className="p-8">
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-4">
										<Target className="h-6 w-6" />
									</div>
									<h3 className="text-2xl font-bold text-gray-900">
										Our Mission
									</h3>
								</div>
								<p className="text-gray-600 leading-relaxed">
									To provide exceptional corporate housing
									solutions that combine comfort, convenience,
									and value, making every guest feel at home
									no matter where business takes them. We aim
									to set new standards in corporate
									accommodation through quality properties,
									transparent pricing, and outstanding
									customer service.
								</p>
							</CardContent>
						</Card>

						<Card
							className={`hover:shadow-xl transition-all duration-700 ${
								contentLoaded
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-4"
							}`}
							style={{ transitionDelay: "100ms" }}
						>
							<CardContent className="p-8">
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-4">
										<Award className="h-6 w-6" />
									</div>
									<h3 className="text-2xl font-bold text-gray-900">
										Our Vision
									</h3>
								</div>
								<p className="text-gray-600 leading-relaxed">
									To become India's most trusted and preferred
									corporate housing platform, recognized for
									innovation, reliability, and guest
									satisfaction. We envision a future where
									finding quality corporate accommodation is
									seamless, transparent, and accessible to
									everyone, supported by cutting-edge
									technology and personalized service.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Core Values Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div
						className={`text-center mb-12 transition-all duration-700 ${
							contentLoaded
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-4"
						}`}
					>
						<h2 className="text-4xl font-bold mb-4 text-gray-900">
							Our Core Values
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							The principles that guide everything we do
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{values.map((value, index) => (
							<Card
								key={index}
								className={`text-center hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
									contentLoaded
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
								style={{ transitionDelay: `${index * 100}ms` }}
							>
								<CardContent className="p-6">
									<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
										<value.icon className="h-8 w-8" />
									</div>
									<h3 className="text-xl font-semibold mb-3 text-gray-900">
										{value.title}
									</h3>
									<p className="text-gray-600">
										{value.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Timeline Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div
						className={`text-center mb-12 transition-all duration-700 ${
							contentLoaded
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-4"
						}`}
					>
						<h2 className="text-4xl font-bold mb-4 text-gray-900">
							Our Journey
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Key milestones that shaped our growth
						</p>
					</div>

					<div className="max-w-4xl mx-auto">
						{milestones.map((milestone, index) => (
							<div
								key={index}
								className={`flex gap-6 mb-8 transition-all duration-700 ${
									contentLoaded
										? "opacity-100 translate-x-0"
										: "opacity-0 -translate-x-4"
								}`}
								style={{ transitionDelay: `${index * 100}ms` }}
							>
								<div className="flex flex-col items-center">
									<div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
										{milestone.year}
									</div>
									{index !== milestones.length - 1 && (
										<div className="w-1 h-full bg-red-200 mt-2" />
									)}
								</div>
								<Card className="flex-1 hover:shadow-lg transition-shadow mb-6">
									<CardContent className="p-6">
										<h3 className="text-xl font-bold text-gray-900 mb-2">
											{milestone.title}
										</h3>
										<p className="text-gray-600">
											{milestone.description}
										</p>
									</CardContent>
								</Card>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-16 bg-gray-50">
				<div className="container mx-auto px-4">
					<div
						className={`text-center mb-12 transition-all duration-700 ${
							contentLoaded
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-4"
						}`}
					>
						<h2 className="text-4xl font-bold mb-4 text-gray-900">
							Meet Our Leadership Team
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Experienced professionals dedicated to your comfort
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{team.map((member, index) => (
							<Card
								key={index}
								className={`overflow-hidden hover:shadow-xl transition-all duration-700 group ${
									contentLoaded
										? "opacity-100 scale-100"
										: "opacity-0 scale-95"
								}`}
								style={{ transitionDelay: `${index * 100}ms` }}
							>
								<div className="relative h-64 overflow-hidden">
									<img
										src={member.image}
										alt={member.name}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
								</div>
								<CardContent className="p-6 text-center">
									<h3 className="text-xl font-bold text-gray-900 mb-1">
										{member.name}
									</h3>
									<p className="text-red-600 font-semibold mb-2">
										{member.role}
									</p>
									<p className="text-gray-600 text-sm mb-4">
										{member.bio}
									</p>
									<a
										href={member.linkedin}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-red-600 hover:text-white transition-colors"
									>
										<Linkedin className="h-5 w-5" />
									</a>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4">
					<div
						className={`text-center mb-12 transition-all duration-700 ${
							contentLoaded
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-4"
						}`}
					>
						<h2 className="text-4xl font-bold mb-4 text-gray-900">
							Why Choose Us
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							What sets us apart in corporate housing
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								title: "Verified Properties",
								description:
									"Every property undergoes rigorous quality checks and verification",
								icon: CheckCircle2,
							},
							{
								title: "Transparent Pricing",
								description:
									"No hidden charges. What you see is what you pay",
								icon: Shield,
							},
							{
								title: "Best Locations",
								description:
									"Properties strategically located near business hubs",
								icon: Globe,
							},
							{
								title: "Flexible Bookings",
								description:
									"Short-term and long-term stays with easy cancellation",
								icon: Award,
							},
							{
								title: "24/7 Support",
								description:
									"Round-the-clock assistance for all your needs",
								icon: Users,
							},
							{
								title: "Modern Amenities",
								description:
									"Fully furnished with WiFi, housekeeping, and more",
								icon: Building2,
							},
						].map((item, index) => (
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
									<div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-4">
										<item.icon className="h-6 w-6" />
									</div>
									<h3 className="text-xl font-bold text-gray-900 mb-2">
										{item.title}
									</h3>
									<p className="text-gray-600">
										{item.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
				<div className="container mx-auto px-4 text-center text-white">
					<h2 className="text-4xl font-bold mb-4">
						Ready to Experience the Difference?
					</h2>
					<p className="text-xl mb-8 max-w-2xl mx-auto">
						Join thousands of satisfied guests who trust us for
						their corporate housing needs
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
						<Link to="/search">
							<Button
								size="lg"
								className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
							>
								Browse Properties
							</Button>
						</Link>
						<Link to="/contact">
							<Button
								size="lg"
								variant="outline"
								className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
							>
								Contact Us
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Contact Info Bar */}
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
							href="mailto:info@corporatehousing.com"
							className="flex items-center gap-2 hover:text-red-500 transition-colors"
						>
							<Mail className="h-5 w-5 text-red-500" />
							<span className="font-semibold">
								info@corporatehousing.com
							</span>
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
