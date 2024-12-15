import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { FilterPanel } from '../ui/FilterPanel';
import { Input } from '../ui/input';
import { MemberCard } from '../ui/MemberCard';
import { useBooking } from '@/stores/booking';

interface EntourageMember {
  id: string;
  name: string;
  tagline: string;
  image: string;
  price: number;
  traits: string[];
  availability: string[];
}

const MOCK_MEMBERS: EntourageMember[] = [
  {
    id: '1',
    name: 'Sophie Chen',
    tagline: 'Food Influencer & Social Butterfly',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    price: 299,
    traits: ['Elegant', 'Sociable', 'Foodie'],
    availability: ['2024-03-20', '2024-03-21', '2024-03-22']
  },
  {
    id: '2',
    name: 'Marcus Rivera',
    tagline: 'Fine Dining Connoisseur',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    price: 349,
    traits: ['Sophisticated', 'Charismatic', 'Wine Expert'],
    availability: ['2024-03-21', '2024-03-23', '2024-03-24']
  },
  {
    id: '3',
    name: 'Olivia Taylor',
    tagline: 'Art Enthusiast & Curator',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    price: 279,
    traits: ['Creative', 'Knowledgeable', 'Trendsetter'],
    availability: ['2024-03-22', '2024-03-23', '2024-03-25']
  },
  {
    id: '4',
    name: 'Ethan Wong',
    tagline: 'Tech Innovator & Gadget Guru',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    price: 399,
    traits: ['Tech-savvy', 'Innovative', 'Analytical'],
    availability: ['2024-03-20', '2024-03-22', '2024-03-24']
  }
];

export default function EntourageSelection() {
  const navigate = useNavigate();
  const { selectedMembers, addMember, removeMember } = useBooking();
  const [searchTerm, setSearchTerm] = useState('');

  const handleContinue = () => {
    if (selectedMembers.length > 0) {
      navigate('/booking/details');
    }
  };

  const filteredMembers = MOCK_MEMBERS.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.traits.some((trait: string) => trait.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Select Your Entourage</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Filter className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <ScrollArea className="h-full">
              <FilterPanel />
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <FilterPanel />
        </aside>

        <main className="flex-1 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search members..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <MemberCard
                key={member.id}
                member={member}
                isSelected={selectedMembers.some((m) => m.id === member.id)}
                onSelect={() => addMember(member)}
                onDeselect={() => removeMember(member.id)}
              />
            ))}
          </div>
        </main>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-sm">
            <span className="text-muted-foreground">
              {selectedMembers.length} members selected
            </span>
            <span className="mx-2 text-muted-foreground">•</span>
            <span className="text-foreground font-medium">
              ${selectedMembers.reduce((sum, m) => sum + m.price, 0)}
            </span>
          </div>
          <Button
            onClick={handleContinue}
            disabled={selectedMembers.length === 0}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

