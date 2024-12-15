import React from 'react';
import { ClipboardCheck, Search, Calendar, Star } from 'lucide-react';
import { Step } from './ui/Step';

export default function HowItWorks() {
  const steps = [
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Sign Up Your Restaurant",
      description: "Create your profile and define your ideal vibe."
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Discover Entourage Members",
      description: "Browse profiles, view availability, and select the perfect fit."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Book and Customize",
      description: "Schedule a booking, add special requests, and confirm payment."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Host and Elevate",
      description: "Watch your event or dining experience transform with Entourage."
    }
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-center text-stone-900 mb-16">
          How Does Entourage Work?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              number={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}