import React from 'react';
import { PricingCard } from './ui/PricingCard';

export default function Pricing() {
  const plans = [
    {
      name: "Pay-As-You-Go",
      description: "Perfect for one-time events",
      price: "49",
      period: "per booking",
      features: [
        "Single event booking",
        "Basic analytics",
        "24/7 support",
        "Personality matching"
      ],
      highlighted: false
    },
    {
      name: "Subscription",
      description: "Best for regular bookings",
      price: "199",
      period: "per month",
      features: [
        "Unlimited bookings",
        "Advanced analytics",
        "Priority support",
        "Custom personality matching",
        "Exclusive discounts"
      ],
      highlighted: true
    }
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-center text-stone-900 mb-4">
          Flexible Pricing to Fit Your Needs
        </h2>
        <p className="text-xl text-center text-stone-600 mb-16">
          Choose the plan that works best for your restaurant
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}