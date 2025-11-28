import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/useToast';
import { createReview } from '@/api/reviews';
import { Star } from 'lucide-react';

export function WriteReview() {
  const { bookingId } = useParams<{ bookingId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [overallRating, setOverallRating] = useState(0);
  const [cleanliness, setCleanliness] = useState(0);
  const [comfort, setComfort] = useState(0);
  const [location, setLocation] = useState(0);
  const [service, setService] = useState(0);
  const [valueForMoney, setValueForMoney] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const RatingStars = ({ rating, setRating, label }: { rating: number; setRating: (r: number) => void; label: string }) => (
    <div className="space-y-2">
      <Label>{label}</Label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className="transition-transform hover:scale-110"
          >
            <Star
              className={`h-8 w-8 ${
                star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (overallRating === 0) {
      toast({
        title: 'Rating Required',
        description: 'Please provide an overall rating',
        variant: 'destructive'
      });
      return;
    }

    try {
      console.log('Submitting review...');
      setLoading(true);

      await createReview({
        bookingId: bookingId!,
        hotelId: 'hotel1', // Would come from booking data
        userId: 'user1', // Would come from auth
        userName: 'User Name',
        overallRating,
        ratings: {
          cleanliness,
          comfort,
          location,
          service,
          valueForMoney
        },
        reviewText,
        images: [],
        stayDate: new Date().toISOString(),
        isAnonymous: false
      });

      toast({
        title: 'Review Submitted',
        description: 'Thank you for your feedback!'
      });

      navigate('/my-bookings');
    } catch (error) {
      console.error('Error submitting review:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to submit review',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Write a Review</h1>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Share Your Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RatingStars rating={overallRating} setRating={setOverallRating} label="Overall Rating *" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RatingStars rating={cleanliness} setRating={setCleanliness} label="Cleanliness" />
              <RatingStars rating={comfort} setRating={setComfort} label="Comfort" />
              <RatingStars rating={location} setRating={setLocation} label="Location" />
              <RatingStars rating={service} setRating={setService} label="Service" />
              <RatingStars rating={valueForMoney} setRating={setValueForMoney} label="Value for Money" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="reviewText">Your Review *</Label>
              <Textarea
                id="reviewText"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Share your experience with other travelers..."
                rows={6}
                required
              />
              <p className="text-sm text-muted-foreground">{reviewText.length} characters</p>
            </div>

            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={() => navigate('/my-bookings')}>
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-blue-600 to-purple-600"
              >
                {loading ? 'Submitting...' : 'Submit Review'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}