import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  highlighted: boolean;
}

export function PricingCard({ name, description, price, period, features, highlighted }: PricingCardProps) {
  return (
    <div className={`rounded-2xl p-8 ${
      highlighted 
        ? 'bg-sage-600 text-white ring-2 ring-sage-600 ring-offset-2' 
        : 'bg-white text-stone-900'
    }`}>
      <h3 className="text-2xl font-medium mb-2">{name}</h3>
      <p className={highlighted ? 'text-sage-100' : 'text-stone-600'}>{description}</p>
      
      <div className="my-8">
        <span className="text-4xl font-medium">${price}</span>
        <span className={highlighted ? 'text-sage-100' : 'text-stone-600'}>
          /{period}
        </span>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className={`w-5 h-5 mr-3 ${
              highlighted ? 'text-sage-200' : 'text-sage-600'
            }`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-3 px-6 rounded-full transition-colors ${
        highlighted
          ? 'bg-white text-sage-600 hover:bg-sage-50'
          : 'bg-sage-600 text-white hover:bg-sage-700'
      }`}>
        Get Started
      </button>
    </div>
  );
}