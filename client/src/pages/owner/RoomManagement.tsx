import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function RoomManagement() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Room Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>Rooms</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">Room management would be implemented here</p>
          <Button onClick={() => navigate('/owner/hotels')}>Back to Hotels</Button>
        </CardContent>
      </Card>
    </div>
  );
}