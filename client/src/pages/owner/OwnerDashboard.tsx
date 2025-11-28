import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Hotel, Bed, Calendar, DollarSign, TrendingUp, Users } from 'lucide-react';

export function OwnerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Owner Dashboard</h1>
        <p className="text-muted-foreground">Manage your properties and bookings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90 mb-1">Total Properties</p>
                <p className="text-3xl font-bold">3</p>
              </div>
              <Hotel className="h-12 w-12 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90 mb-1">Total Rooms</p>
                <p className="text-3xl font-bold">45</p>
              </div>
              <Bed className="h-12 w-12 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90 mb-1">Occupancy Rate</p>
                <p className="text-3xl font-bold">78%</p>
              </div>
              <TrendingUp className="h-12 w-12 opacity-80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90 mb-1">Monthly Revenue</p>
                <p className="text-3xl font-bold">$45K</p>
              </div>
              <DollarSign className="h-12 w-12 opacity-80" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/owner/hotels')}>
              <Hotel className="h-4 w-4 mr-2" />
              Manage Hotels
            </Button>
            <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/owner/housekeeping')}>
              <Users className="h-4 w-4 mr-2" />
              Housekeeping
            </Button>
            <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/owner/analytics')}>
              <TrendingUp className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">No recent bookings</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}