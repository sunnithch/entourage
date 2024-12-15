import React from 'react'
import { motion } from 'framer-motion'
import { PricingCard } from './ui/PricingCard'

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
        "Personality matching",
        "Up to 5 entourage members"
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
        "Unlimited entourage members",
        "Exclusive discounts",
        "VIP event access"
      ],
      highlighted: true
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Flexible Pricing to Fit Your Needs</h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that works best for your restaurant
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}

