import React from 'react';
import { Users, TrendingUp, Clock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Curated Personalities",
      description: "Hand-picked individuals who match your vibe and brand."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Boost Foot Traffic",
      description: "Fill seats, create buzz, and drive repeat business."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Seamless Process",
      description: "Effortlessly book the right people with just a few clicks."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-center text-stone-900 mb-16">
          Why Choose Entourage?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-100 text-sage-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-stone-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}