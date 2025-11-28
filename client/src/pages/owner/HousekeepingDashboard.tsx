import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function HousekeepingDashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Housekeeping Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Room Status</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">Housekeeping dashboard would be implemented here</p>
          <Button onClick={() => navigate('/owner/dashboard')}>Back to Dashboard</Button>
        </CardContent>
      </Card>
    </div>
  );
}