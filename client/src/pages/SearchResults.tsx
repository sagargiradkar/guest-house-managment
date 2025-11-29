// pages/SearchResults.tsx
import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchBar, SearchParams } from "@/components/SearchBar";
import { HotelCard } from "@/components/HotelCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Hotel } from "@/types/hotel";
// import { getHotels } from '@/api/hotels'; // COMMENTED OUT
import { useToast } from "@/hooks/useToast";
import { ROOM_TYPES, AMENITIES } from "@/lib/constants";
import {
	Filter,
	X,
	SlidersHorizontal,
	Search,
	Star,
	MapPin,
} from "lucide-react";
import { MOCK_HOTELS } from "@/lib/mockData";

export function SearchResults() {
	const location = useLocation();
	const navigate = useNavigate();
	const { toast } = useToast();
	const [hotels, setHotels] = useState<Hotel[]>([]);
	const [loading, setLoading] = useState(true);
	const [contentLoaded, setContentLoaded] = useState(false);
	const [showMobileFilters, setShowMobileFilters] = useState(false);

	// Search params
	const [searchParams, setSearchParams] = useState<SearchParams>(
		location.state || {
			location: "",
			checkIn: "",
			checkOut: "",
			guests: 1,
		}
	);

	// Filters
	const [priceRange, setPriceRange] = useState([0, 10000]);
	const [selectedRoomTypes, setSelectedRoomTypes] = useState<string[]>([]);
	const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
	const [minRating, setMinRating] = useState(0);
	const [sortBy, setSortBy] = useState("popularity");

	// UPDATED: Load hotels from mock data instead of API
	const loadHotels = useCallback(async () => {
		try {
			console.log("Loading hotels with params:", searchParams);
			setLoading(true);

			// Simulate API delay
			await new Promise((resolve) => setTimeout(resolve, 500));

			// Filter mock data based on search params
			let filteredData = [...MOCK_HOTELS];

			// Filter by location if specified
			// Filter by location if specified
			if (searchParams.location) {
				filteredData = filteredData.filter(
					(hotel) =>
						hotel.location.city
							.toLowerCase()
							.includes(searchParams.location.toLowerCase()) ||
						hotel.location.state
							.toLowerCase()
							.includes(searchParams.location.toLowerCase()) ||
						hotel.location.address
							.toLowerCase()
							.includes(searchParams.location.toLowerCase())
				);
			}

			setHotels(filteredData);
			setTimeout(() => setContentLoaded(true), 300);

			// Show success message
			if (filteredData.length === 0 && searchParams.location) {
				toast({
					title: "No results",
					description: `No properties found in ${searchParams.location}. Showing all properties.`,
					variant: "default",
				});
				setHotels(MOCK_HOTELS);
			}
		} catch (error) {
			console.error("Error loading hotels:", error);
			toast({
				title: "Error",
				description: "Failed to load hotels",
				variant: "destructive",
			});
			// Fallback to showing all hotels
			setHotels(MOCK_HOTELS);
		} finally {
			setLoading(false);
		}
	}, [searchParams, toast]);

	/* COMMENTED OUT - Original API call
  const loadHotels = useCallback(async () => {
    try {
      console.log('Loading hotels with params:', searchParams);
      setLoading(true);
      const response = await getHotels(searchParams);
      setHotels(response.hotels);
      setTimeout(() => setContentLoaded(true), 300);
    } catch (error) {
      console.error('Error loading hotels:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to load hotels',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, [searchParams, toast]);
  */

	useEffect(() => {
		loadHotels();
	}, [loadHotels]);

	const handleSearch = (params: SearchParams) => {
		console.log("New search params:", params);
		setSearchParams(params);
	};

	const handleRoomTypeToggle = (roomType: string) => {
		setSelectedRoomTypes((prev) =>
			prev.includes(roomType)
				? prev.filter((t) => t !== roomType)
				: [...prev, roomType]
		);
	};

	const handleAmenityToggle = (amenity: string) => {
		setSelectedAmenities((prev) =>
			prev.includes(amenity)
				? prev.filter((a) => a !== amenity)
				: [...prev, amenity]
		);
	};

	const clearFilters = () => {
		console.log("Clearing all filters");
		setPriceRange([0, 10000]);
		setSelectedRoomTypes([]);
		setSelectedAmenities([]);
		setMinRating(0);
	};

	const activeFiltersCount =
		selectedRoomTypes.length +
		selectedAmenities.length +
		(minRating > 0 ? 1 : 0) +
		(priceRange[0] > 0 || priceRange[1] < 10000 ? 1 : 0);

	// UPDATED: Enhanced filtering logic
	const filteredHotels = hotels.filter((hotel) => {
		// Price filter
		if (hotel.price < priceRange[0] || hotel.price > priceRange[1])
			return false;

		// Rating filter
		if (minRating > 0 && hotel.rating < minRating) return false;

		// Room type filter
		if (
			selectedRoomTypes.length > 0 &&
			!selectedRoomTypes.includes(hotel.roomType)
		)
			return false;

		// Amenities filter
		if (selectedAmenities.length > 0) {
			const hasAllAmenities = selectedAmenities.every((amenity) =>
				hotel.amenities.includes(amenity)
			);
			if (!hasAllAmenities) return false;
		}

		return true;
	});

	// UPDATED: Enhanced sorting logic
	const sortedHotels = [...filteredHotels].sort((a, b) => {
		switch (sortBy) {
			case "price_low":
				return a.price - b.price;
			case "price_high":
				return b.price - a.price;
			case "rating":
				return b.rating - a.rating;
			case "name":
				return a.name.localeCompare(b.name);
			case "popularity":
			default:
				return b.reviews - a.reviews; // Sort by number of reviews
		}
	});

	// Filter Component (reusable for desktop and mobile)
	const FiltersContent = () => (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<h3 className="font-bold text-lg">Filters</h3>
				{activeFiltersCount > 0 && (
					<Button
						variant="ghost"
						size="sm"
						onClick={clearFilters}
						className="text-red-600 hover:text-red-700 hover:bg-red-50"
					>
						Clear All ({activeFiltersCount})
					</Button>
				)}
			</div>

			{/* Price Range */}
			<div className="space-y-4 pb-6 border-b">
				<Label className="text-base font-semibold">
					Price Range (per night)
				</Label>
				<Slider
					value={priceRange}
					onValueChange={setPriceRange}
					max={10000}
					step={500}
					className="w-full"
				/>
				<div className="flex items-center justify-between">
					<div className="text-sm">
						<span className="font-medium text-gray-900">
							₹{priceRange[0]}
						</span>
					</div>
					<div className="text-sm">
						<span className="font-medium text-gray-900">
							₹{priceRange[1]}
						</span>
					</div>
				</div>
			</div>

			{/* Rating */}
			<div className="space-y-4 pb-6 border-b">
				<Label className="text-base font-semibold">
					Minimum Rating
				</Label>
				<div className="space-y-2">
					{[
						{ value: 0, label: "Any Rating" },
						{ value: 3, label: "3+ Stars" },
						{ value: 4, label: "4+ Stars" },
						{ value: 4.5, label: "4.5+ Stars" },
					].map((option) => (
						<div
							key={option.value}
							className={`flex items-center justify-between p-3 rounded-lg border-2 cursor-pointer transition-all ${
								minRating === option.value
									? "border-red-600 bg-red-50"
									: "border-gray-200 hover:border-gray-300"
							}`}
							onClick={() => setMinRating(option.value)}
						>
							<div className="flex items-center gap-2">
								<Star
									className={`h-4 w-4 ${
										minRating === option.value
											? "fill-red-600 text-red-600"
											: "text-gray-400"
									}`}
								/>
								<span className="text-sm font-medium">
									{option.label}
								</span>
							</div>
							{minRating === option.value && (
								<div className="w-2 h-2 rounded-full bg-red-600"></div>
							)}
						</div>
					))}
				</div>
			</div>

			{/* Room Types */}
			<div className="space-y-4 pb-6 border-b">
				<Label className="text-base font-semibold">Room Type</Label>
				<div className="space-y-3">
					{ROOM_TYPES.map((type) => (
						<div
							key={type.value}
							className="flex items-center space-x-3"
						>
							<Checkbox
								id={`room-${type.value}`}
								checked={selectedRoomTypes.includes(type.value)}
								onCheckedChange={() =>
									handleRoomTypeToggle(type.value)
								}
								className="data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
							/>
							<label
								htmlFor={`room-${type.value}`}
								className="text-sm font-medium cursor-pointer flex-1"
							>
								{type.label}
							</label>
						</div>
					))}
				</div>
			</div>

			{/* Amenities */}
			<div className="space-y-4">
				<Label className="text-base font-semibold">
					Popular Amenities
				</Label>
				<div className="max-h-64 overflow-y-auto space-y-3 pr-2">
					{AMENITIES.slice(0, 12).map((amenity) => (
						<div
							key={amenity}
							className="flex items-center space-x-3"
						>
							<Checkbox
								id={`amenity-${amenity}`}
								checked={selectedAmenities.includes(amenity)}
								onCheckedChange={() =>
									handleAmenityToggle(amenity)
								}
								className="data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
							/>
							<label
								htmlFor={`amenity-${amenity}`}
								className="text-sm font-medium cursor-pointer flex-1"
							>
								{amenity}
							</label>
						</div>
					))}
				</div>
			</div>
		</div>
	);

	return (
		<div className="min-h-screen bg-gray-50 -mt-28 pt-20">
			{/* Search Bar Section */}
			<div className="bg-white shadow-sm border-b">
				<div className="container mx-auto px-4 py-6">
					<SearchBar onSearch={handleSearch} />
				</div>
			</div>

			<div className="container mx-auto px-4 py-8">
				{/* Results Header */}
				<div
					className={`mb-8 transition-all duration-700 ${
						contentLoaded
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-4"
					}`}
				>
					<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
						<div>
							<h1 className="text-3xl font-bold text-gray-900 mb-2">
								{searchParams.location ? (
									<span className="flex items-center gap-2">
										<MapPin className="h-8 w-8 text-red-600" />
										Hotels in {searchParams.location}
									</span>
								) : (
									"Search Results"
								)}
							</h1>
							<p className="text-gray-600 flex items-center gap-2">
								<span className="font-semibold text-gray-900">
									{sortedHotels.length}
								</span>{" "}
								properties found
								{activeFiltersCount > 0 && (
									<Badge variant="secondary" className="ml-2">
										{activeFiltersCount} filters active
									</Badge>
								)}
							</p>
						</div>

						<div className="flex items-center gap-3">
							{/* Mobile Filter Button */}
							<Sheet
								open={showMobileFilters}
								onOpenChange={setShowMobileFilters}
							>
								<SheetTrigger asChild>
									<Button
										variant="outline"
										className="lg:hidden relative"
									>
										<SlidersHorizontal className="h-4 w-4 mr-2" />
										Filters
										{activeFiltersCount > 0 && (
											<Badge className="ml-2 bg-red-600">
												{activeFiltersCount}
											</Badge>
										)}
									</Button>
								</SheetTrigger>
								<SheetContent
									side="left"
									className="w-[300px] sm:w-[400px] overflow-y-auto"
								>
									<SheetHeader>
										<SheetTitle>Filters</SheetTitle>
										<SheetDescription>
											Refine your search to find the
											perfect property
										</SheetDescription>
									</SheetHeader>
									<div className="mt-6">
										<FiltersContent />
									</div>
								</SheetContent>
							</Sheet>

							{/* Sort Dropdown */}
							<Select value={sortBy} onValueChange={setSortBy}>
								<SelectTrigger className="w-[180px] md:w-[200px]">
									<SelectValue placeholder="Sort by" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="popularity">
										Most Popular
									</SelectItem>
									<SelectItem value="rating">
										Highest Rated
									</SelectItem>
									<SelectItem value="price_low">
										Price: Low to High
									</SelectItem>
									<SelectItem value="price_high">
										Price: High to Low
									</SelectItem>
									<SelectItem value="name">
										Name: A to Z
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
					{/* Desktop Filters Sidebar */}
					<aside className="hidden lg:block">
						<Card className="sticky top-36 shadow-lg border-0">
							<CardContent className="p-6">
								<FiltersContent />
							</CardContent>
						</Card>
					</aside>

					{/* Results Grid */}
					<div className="lg:col-span-3">
						{loading ? (
							<div className="space-y-6">
								{[1, 2, 3, 4].map((i) => (
									<Card key={i} className="overflow-hidden">
										<div className="flex flex-col md:flex-row">
											<Skeleton className="h-64 md:h-48 md:w-64" />
											<div className="flex-1 p-6 space-y-4">
												<Skeleton className="h-6 w-3/4" />
												<Skeleton className="h-4 w-1/2" />
												<Skeleton className="h-4 w-full" />
												<Skeleton className="h-4 w-2/3" />
												<div className="flex gap-2">
													<Skeleton className="h-6 w-16" />
													<Skeleton className="h-6 w-16" />
													<Skeleton className="h-6 w-16" />
												</div>
											</div>
										</div>
									</Card>
								))}
							</div>
						) : sortedHotels.length === 0 ? (
							<Card className="shadow-lg border-0">
								<CardContent className="p-12 text-center">
									<div className="flex flex-col items-center">
										<div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
											<Search className="h-10 w-10 text-gray-400" />
										</div>
										<h3 className="text-2xl font-bold text-gray-900 mb-2">
											No hotels found
										</h3>
										<p className="text-gray-600 mb-6 max-w-md">
											We couldn't find any properties
											matching your search criteria. Try
											adjusting your filters or search
											parameters.
										</p>
										<div className="flex flex-col sm:flex-row gap-3">
											<Button
												onClick={clearFilters}
												variant="outline"
											>
												Clear All Filters
											</Button>
											<Button
												onClick={() => navigate("/")}
												className="bg-red-600 hover:bg-red-700"
											>
												Back to Home
											</Button>
										</div>
									</div>
								</CardContent>
							</Card>
						) : (
							<div className="space-y-6">
								{sortedHotels.map((hotel, index) => (
									<div
										key={hotel._id}
										className={`transition-all duration-700 ${
											contentLoaded
												? "opacity-100 translate-y-0"
												: "opacity-0 translate-y-4"
										}`}
										style={{
											transitionDelay: `${index * 100}ms`,
										}}
									>
										<HotelCard hotel={hotel} />
									</div>
								))}
							</div>
						)}

						{/* Pagination */}
						{sortedHotels.length > 0 && (
							<div
								className={`mt-8 text-center transition-all duration-700 ${
									contentLoaded
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
								style={{ transitionDelay: "400ms" }}
							>
								<p className="text-gray-600">
									Showing{" "}
									<span className="font-semibold text-gray-900">
										{sortedHotels.length}
									</span>{" "}
									of{" "}
									<span className="font-semibold text-gray-900">
										{hotels.length}
									</span>{" "}
									properties
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
