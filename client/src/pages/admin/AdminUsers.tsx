import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function AdminUsers() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">User Management</h1>
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Admin users management would be implemented here</p>
        </CardContent>
      </Card>
    </div>
  );
}