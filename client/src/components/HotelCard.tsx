// components/HotelCard.tsx
import { Star, MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Hotel } from "@/types/hotel";
import { useNavigate } from "react-router-dom";

interface HotelCardProps {
	hotel: Hotel;
}

export function HotelCard({ hotel }: HotelCardProps) {
	const navigate = useNavigate();

	const handleViewDetails = () => {
		console.log("Navigating to property details:", hotel._id);
		navigate(`/property/${hotel._id}`); // Updated route
	};

	return (
		<Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
			<div className="relative h-48 overflow-hidden">
				<img
					src={hotel.images[0]}
					alt={hotel.name}
					className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
				/>
				<Badge className="absolute top-3 right-3 bg-red-600 text-white">
					{hotel.roomType}
				</Badge>
				{hotel.availability && (
					<Badge className="absolute top-3 left-3 bg-green-600 text-white">
						Available
					</Badge>
				)}
			</div>

			<CardContent className="p-4">
				<h3 className="text-xl font-semibold mb-2 line-clamp-1">
					{hotel.name}
				</h3>

				<div className="flex items-center text-sm text-muted-foreground mb-2">
					<MapPin className="h-4 w-4 mr-1 text-red-600" />
					<span className="line-clamp-1">
						{hotel.location.city}, {hotel.location.state}
					</span>
				</div>

				<p className="text-sm text-muted-foreground line-clamp-2 mb-3">
					{hotel.description}
				</p>

				<div className="flex items-center gap-2 mb-3 flex-wrap">
					{hotel.amenities.slice(0, 3).map((amenity) => (
						<Badge
							key={amenity}
							variant="secondary"
							className="text-xs"
						>
							{amenity}
						</Badge>
					))}
					{hotel.amenities.length > 3 && (
						<Badge variant="secondary" className="text-xs">
							+{hotel.amenities.length - 3} more
						</Badge>
					)}
				</div>

				<div className="flex items-center justify-between">
					<div className="flex items-center gap-1">
						<Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
						<span className="font-semibold">{hotel.rating}</span>
						<span className="text-sm text-muted-foreground">
							({hotel.reviews} reviews)
						</span>
					</div>
					<div className="text-right">
						<p className="text-xs text-muted-foreground">
							Starting from
						</p>
						<p className="text-lg font-bold text-red-600">
							₹{hotel.price}
						</p>
						<p className="text-xs text-muted-foreground">
							per night
						</p>
					</div>
				</div>
			</CardContent>

			<CardFooter className="p-4 pt-0">
				<Button
					onClick={handleViewDetails}
					className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
				>
					View Details
				</Button>
			</CardFooter>
		</Card>
	);
}
