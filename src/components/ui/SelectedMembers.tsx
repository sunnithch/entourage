import React from 'react';
import { EntourageMember } from '../../stores/booking';

interface SelectedMembersProps {
  members: EntourageMember[];
}

export function SelectedMembers({ members }: SelectedMembersProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-medium text-stone-900 mb-4">
        Selected Members
      </h3>

      <div className="space-y-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex items-center space-x-4 p-3 rounded-lg bg-stone-50"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4 className="font-medium text-stone-900">{member.name}</h4>
              <p className="text-sm text-stone-600">{member.tagline}</p>
            </div>
            <span className="font-medium text-stone-900">
              ${member.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}