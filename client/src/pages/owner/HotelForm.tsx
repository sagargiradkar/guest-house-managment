import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function HotelForm() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add New Hotel</h1>
      <Card>
        <CardHeader>
          <CardTitle>Hotel Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">Hotel form would be implemented here</p>
          <Button onClick={() => navigate('/owner/hotels')}>Back to Hotels</Button>
        </CardContent>
      </Card>
    </div>
  );
}