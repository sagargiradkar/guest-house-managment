import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar, SearchParams } from '@/components/SearchBar';
import { HotelCard } from '@/components/HotelCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Hotel } from '@/types/hotel';
import { getHotels } from '@/api/hotels';
import { useToast } from '@/hooks/useToast';
import { Sparkles, Shield, Clock, Award } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [featuredHotels, setFeaturedHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  const loadFeaturedHotels = useCallback(async () => {
    try {
      console.log('Loading featured hotels...');
      const response = await getHotels();
      setFeaturedHotels(response.hotels.slice(0, 6));
    } catch (error) {
      console.error('Error loading featured hotels:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to load hotels',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    loadFeaturedHotels();
  }, [loadFeaturedHotels]);

  const handleSearch = (params: SearchParams) => {
    console.log('Search params:', params);
    navigate('/search', { state: params });
  };

  const features = [
    {
      icon: Sparkles,
      title: 'Best Price Guarantee',
      description: 'Find the best deals on hotels worldwide'
    },
    {
      icon: Shield,
      title: 'Secure Booking',
      description: 'Your data is safe with us'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'We are here to help anytime'
    },
    {
      icon: Award,
      title: 'Easy Cancellation',
      description: 'Flexible cancellation policies'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative -mt-6 -mx-6 px-6 py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white mb-8">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">
            Find Your Perfect Stay
          </h1>
          <p className="text-xl opacity-90">
            Discover amazing hotels and guest houses around the world
          </p>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Featured Hotels */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Hotels</h2>
            <p className="text-muted-foreground">Handpicked accommodations for you</p>
          </div>
          <Button
            variant="outline"
            onClick={() => navigate('/search')}
            className="hidden md:flex"
          >
            View All
          </Button>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="h-96 animate-pulse bg-muted"></Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredHotels.map((hotel) => (
              <HotelCard key={hotel._id} hotel={hotel} />
            ))}
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 -mx-6 px-6 rounded-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section>
        <h2 className="text-3xl font-bold mb-6">Popular Destinations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['New York', 'Miami', 'Los Angeles', 'Chicago'].map((city) => (
            <Card
              key={city}
              className="relative h-48 overflow-hidden cursor-pointer group hover:shadow-xl transition-all"
              onClick={() => navigate('/search', { state: { location: city } })}
            >
              <img
                src={`https://source.unsplash.com/400x300/?${city},city`}
                alt={city}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">{city}</h3>
                  <p className="text-sm opacity-90">Explore hotels</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}