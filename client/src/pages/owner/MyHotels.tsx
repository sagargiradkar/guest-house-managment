import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HotelCard } from '@/components/HotelCard';
import { Hotel } from '@/types/hotel';
import { getHotelsByOwner } from '@/api/hotels';
import { useToast } from '@/hooks/useToast';
import { useAuth } from '@/contexts/AuthContext';
import { Plus } from 'lucide-react';

export function MyHotels() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  const loadHotels = useCallback(async () => {
    try {
      console.log('Loading owner hotels...');
      const response = await getHotelsByOwner(user!._id);
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
  }, [user, toast]);

  useEffect(() => {
    if (user) {
      loadHotels();
    }
  }, [user, loadHotels]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Hotels</h1>
          <p className="text-muted-foreground">Manage your properties</p>
        </div>
        <Button onClick={() => navigate('/owner/hotels/new')} className="bg-gradient-to-r from-blue-600 to-purple-600">
          <Plus className="h-4 w-4 mr-2" />
          Add Hotel
        </Button>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="h-96 animate-pulse bg-muted"></Card>
          ))}
        </div>
      ) : hotels.length === 0 ? (
        <Card className="p-12 text-center">
          <h3 className="text-xl font-semibold mb-2">No hotels yet</h3>
          <p className="text-muted-foreground mb-4">Start by adding your first property</p>
          <Button onClick={() => navigate('/owner/hotels/new')} className="bg-gradient-to-r from-blue-600 to-purple-600">
            <Plus className="h-4 w-4 mr-2" />
            Add Hotel
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          ))}
        </div>
      )}
    </div>
  );
}