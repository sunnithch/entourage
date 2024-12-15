import React from 'react';
import { Check, X } from 'lucide-react';
import { EntourageMember } from '../../stores/booking';

interface MemberCardProps {
  member: EntourageMember;
  isSelected: boolean;
  onSelect: () => void;
  onDeselect: () => void;
}

export function MemberCard({ member, isSelected, onSelect, onDeselect }: MemberCardProps) {
  return (
    <div className={`
      relative rounded-2xl overflow-hidden bg-white shadow-md transition-shadow
      ${isSelected ? 'ring-2 ring-sage-600' : 'hover:shadow-lg'}
    `}>
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-48 object-cover"
      />
      
      {isSelected && (
        <div className="absolute top-2 right-2">
          <button
            onClick={onDeselect}
            className="p-1 rounded-full bg-white shadow-md hover:bg-stone-50"
          >
            <X className="w-5 h-5 text-stone-600" />
          </button>
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-medium text-stone-900 mb-1">
          {member.name}
        </h3>
        <p className="text-stone-600 mb-4">{member.tagline}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {member.traits.map((trait) => (
            <span
              key={trait}
              className="px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-sm"
            >
              {trait}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-stone-900">
            ${member.price}
          </span>
          <button
            onClick={isSelected ? onDeselect : onSelect}
            className={`
              px-4 py-2 rounded-full flex items-center
              ${isSelected
                ? 'bg-sage-100 text-sage-600'
                : 'bg-sage-600 text-white hover:bg-sage-700'
              }
            `}
          >
            {isSelected && <Check className="w-4 h-4 mr-2" />}
            {isSelected ? 'Selected' : 'Select'}
          </button>
        </div>
      </div>
    </div>
  );
}