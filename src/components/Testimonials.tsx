import React from 'react';
import { TestimonialCard } from './ui/TestimonialCard';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Entourage brought our dining event to life. The curated crowd was perfect, and we saw a 30% increase in foot traffic!",
      author: "Chef Michel",
      role: "Executive Chef",
      restaurant: "XYZ Bistro",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=384&h=384&q=80"
    },
    {
      quote: "The platform made it incredibly easy to find the right personalities for our restaurant's atmosphere.",
      author: "Sarah Chen",
      role: "Restaurant Manager",
      restaurant: "The Golden Plate",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=384&h=384&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-center text-stone-900 mb-16">
          Loved by Top Restaurants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}