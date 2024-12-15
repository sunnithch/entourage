import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { useBooking, EntourageMember } from '../../stores/booking';
import { MemberCard } from '../ui/MemberCard';
import { FilterPanel } from '../ui/FilterPanel';

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
  }
];

export default function EntourageSelection() {
  const navigate = useNavigate();
  const { selectedMembers, addMember, removeMember } = useBooking();
  const [showFilters, setShowFilters] = React.useState(false);

  const handleContinue = () => {
    if (selectedMembers.length > 0) {
      navigate('/booking/details');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-light text-stone-900">
          Select Entourage Members
        </h2>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center px-4 py-2 text-stone-600 hover:text-stone-900"
        >
          <Filter className="w-5 h-5 mr-2" />
          Filters
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
        <input
          type="text"
          placeholder="Search by name, traits, or expertise..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-stone-300 focus:border-sage-500 focus:ring-sage-500"
        />
      </div>

      {showFilters && <FilterPanel />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_MEMBERS.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            isSelected={selectedMembers.some((m) => m.id === member.id)}
            onSelect={() => addMember(member)}
            onDeselect={() => removeMember(member.id)}
          />
        ))}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div>
            <span className="text-stone-600">
              {selectedMembers.length} members selected
            </span>
            <span className="mx-2">•</span>
            <span className="text-stone-900 font-medium">
              Total: ${selectedMembers.reduce((sum, m) => sum + m.price, 0)}
            </span>
          </div>
          <button
            onClick={handleContinue}
            disabled={selectedMembers.length === 0}
            className="px-6 py-2 bg-sage-600 text-white rounded-full hover:bg-sage-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue to Details
          </button>
        </div>
      </div>
    </div>
  );
}