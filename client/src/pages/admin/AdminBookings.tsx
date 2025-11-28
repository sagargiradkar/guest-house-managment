import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AdminBookings() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Bookings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Booking Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Admin bookings management would be implemented here</p>
        </CardContent>
      </Card>
    </div>
  );
}