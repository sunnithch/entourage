import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BusinessModelCardProps {
  title: string;
  description: string;
  badge: string;
}

const BusinessModelCard = ({ title, description, badge }: BusinessModelCardProps) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Card className="h-full">
      <CardHeader>
        <Badge variant="secondary" className="mb-2">{badge}</Badge>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
)

export default function BusinessModel() {
  const models = [
    {
      title: "Hourly Rate",
      description: "Straightforward pricing based on duration and group size.",
      badge: "Simple"
    },
    {
      title: "Subscription Model",
      description: "Guaranteed monthly visits for a flat fee.",
      badge: "Recurring"
    },
    {
      title: "Tiered Packages",
      description: "Different levels of engagement to suit your needs.",
      badge: "Flexible"
    },
    {
      title: "Results-Based Pricing",
      description: "Pay more when certain metrics increase during bookings.",
      badge: "Performance"
    },
    {
      title: "Premium Celebrity Package",
      description: "Include high-profile individuals for extra buzz.",
      badge: "Exclusive"
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Flexible Business Models</h2>
          <p className="text-xl text-muted-foreground">
            Choose the pricing structure that works best for your business
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <BusinessModelCard key={index} {...model} />
          ))}
        </div>
      </div>
    </section>
  )
}

