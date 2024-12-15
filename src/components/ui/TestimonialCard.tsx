import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  restaurant: string;
  image: string;
}

export function TestimonialCard({ quote, author, role, restaurant, image }: TestimonialCardProps) {
  return (
    <div className="bg-stone-50 p-8 rounded-2xl">
      <Quote className="w-10 h-10 text-sage-600 mb-4" />
      <p className="text-lg text-stone-700 mb-6">{quote}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={author}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-medium text-stone-900">{author}</p>
          <p className="text-sm text-stone-600">{role} • {restaurant}</p>
        </div>
      </div>
    </div>
  );
}