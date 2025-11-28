import { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { getTodayString, getTomorrowString } from '@/lib/date-utils';

interface SearchBarProps {
  onSearch: (params: SearchParams) => void;
  className?: string;
}

export interface SearchParams {
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export function SearchBar({ onSearch, className = '' }: SearchBarProps) {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState(getTodayString());
  const [checkOut, setCheckOut] = useState(getTomorrowString());
  const [guests, setGuests] = useState(1);

  const handleSearch = () => {
    console.log('Search initiated with params:', { location, checkIn, checkOut, guests });
    onSearch({ location, checkIn, checkOut, guests });
  };

  return (
    <Card className={`p-6 bg-white/90 backdrop-blur-sm shadow-xl ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Where are you going?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            min={getTodayString()}
            className="pl-10"
          />
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={checkIn}
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Users className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
              className="pl-10"
            />
          </div>
          <Button onClick={handleSearch} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
}