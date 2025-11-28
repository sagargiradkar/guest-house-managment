import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchBar, SearchParams } from '@/components/SearchBar';
import { HotelCard } from '@/components/HotelCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Hotel } from '@/types/hotel';
import { getHotels } from '@/api/hotels';
import { useToast } from '@/hooks/useToast';
import { ROOM_TYPES, AMENITIES } from '@/lib/constants';
import { Filter, X } from 'lucide-react';

export function SearchResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  
  // Search params
  const [searchParams, setSearchParams] = useState<SearchParams>(
    location.state || {
      location: '',
      checkIn: '',
      checkOut: '',
      guests: 1
    }
  );
  
  // Filters
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedRoomTypes, setSelectedRoomTypes] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('popularity');

  const loadHotels = useCallback(async () => {
    try {
      console.log('Loading hotels with params:', searchParams);
      setLoading(true);
      const response = await getHotels(searchParams);
      setHotels(response.hotels);
    } catch (error) {
      console.error('Error loading hotels:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to load hotels',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  }, [searchParams, toast]);

  useEffect(() => {
    loadHotels();
  }, [loadHotels]);

  const handleSearch = (params: SearchParams) => {
    console.log('New search params:', params);
    setSearchParams(params);
  };

  const handleRoomTypeToggle = (roomType: string) => {
    setSelectedRoomTypes(prev =>
      prev.includes(roomType)
        ? prev.filter(t => t !== roomType)
        : [...prev, roomType]
    );
  };

  const handleAmenityToggle = (amenity: string) => {
    setSelectedAmenities(prev =>
      prev.includes(amenity)
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  const clearFilters = () => {
    console.log('Clearing all filters');
    setPriceRange([0, 1000]);
    setSelectedRoomTypes([]);
    setSelectedAmenities([]);
    setMinRating(0);
  };

  const filteredHotels = hotels.filter(hotel => {
    if (minRating > 0 && hotel.rating < minRating) return false;
    if (selectedAmenities.length > 0) {
      const hasAllAmenities = selectedAmenities.every(amenity =>
        hotel.amenities.includes(amenity)
      );
      if (!hasAllAmenities) return false;
    }
    return true;
  });

  const sortedHotels = [...filteredHotels].sort((a, b) => {
    switch (sortBy) {
      case 'price_low':
        return 0; // Would need room prices
      case 'price_high':
        return 0; // Would need room prices
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            {searchParams.location ? `Hotels in ${searchParams.location}` : 'Search Results'}
          </h1>
          <p className="text-muted-foreground">
            Found {sortedHotels.length} properties
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Most Popular</SelectItem>
              <SelectItem value="price_low">Price: Low to High</SelectItem>
              <SelectItem value="price_high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Rating: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <aside className={`lg:block ${showFilters ? 'block' : 'hidden'}`}>
          <Card className="sticky top-20">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Filters</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>

              {/* Price Range */}
              <div className="space-y-3">
                <Label>Price Range</Label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={1000}
                  step={10}
                  className="w-full"
                />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Room Types */}
              <div className="space-y-3">
                <Label>Room Type</Label>
                {ROOM_TYPES.map((type) => (
                  <div key={type.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={type.value}
                      checked={selectedRoomTypes.includes(type.value)}
                      onCheckedChange={() => handleRoomTypeToggle(type.value)}
                    />
                    <label
                      htmlFor={type.value}
                      className="text-sm cursor-pointer"
                    >
                      {type.label}
                    </label>
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <div className="space-y-3">
                <Label>Amenities</Label>
                <div className="max-h-48 overflow-y-auto space-y-2">
                  {AMENITIES.slice(0, 10).map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Checkbox
                        id={amenity}
                        checked={selectedAmenities.includes(amenity)}
                        onCheckedChange={() => handleAmenityToggle(amenity)}
                      />
                      <label
                        htmlFor={amenity}
                        className="text-sm cursor-pointer"
                      >
                        {amenity}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="space-y-3">
                <Label>Minimum Rating</Label>
                <Select value={minRating.toString()} onValueChange={(v) => setMinRating(Number(v))}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0">Any</SelectItem>
                    <SelectItem value="3">3+ Stars</SelectItem>
                    <SelectItem value="4">4+ Stars</SelectItem>
                    <SelectItem value="4.5">4.5+ Stars</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Results */}
        <div className="lg:col-span-3 space-y-4">
          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="h-64 animate-pulse bg-muted"></Card>
              ))}
            </div>
          ) : sortedHotels.length === 0 ? (
            <Card className="p-12 text-center">
              <h3 className="text-xl font-semibold mb-2">No hotels found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria or filters
              </p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </Card>
          ) : (
            sortedHotels.map((hotel) => (
              <HotelCard key={hotel._id} hotel={hotel} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}