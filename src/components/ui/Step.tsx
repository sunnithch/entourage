import React from 'react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
}

export function Step({ icon, title, description, number }: StepProps) {
  return (
    <div className="relative">
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 mb-6">
            {icon}
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-sage-600 text-white flex items-center justify-center text-sm font-medium">
            {number}
          </div>
        </div>
        <h3 className="text-xl font-medium text-stone-900 mb-3">{title}</h3>
        <p className="text-stone-600">{description}</p>
      </div>
    </div>
  );
}