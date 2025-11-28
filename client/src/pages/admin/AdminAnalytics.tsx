import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AdminAnalytics() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">System Analytics</h1>
      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Admin analytics would be implemented here</p>
        </CardContent>
      </Card>
    </div>
  );
}