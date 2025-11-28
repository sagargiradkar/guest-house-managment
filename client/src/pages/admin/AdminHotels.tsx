import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AdminHotels() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">All Hotels</h1>
      <Card>
        <CardHeader>
          <CardTitle>Hotel Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Admin hotels management would be implemented here</p>
        </CardContent>
      </Card>
    </div>
  );
}