import React from 'react'
import { motion } from 'framer-motion'
import { Users, TrendingUp, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Card className="h-full">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
)

export default function Features() {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Curated Personalities",
      description: "Hand-picked individuals who match your vibe and brand."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Boost Foot Traffic",
      description: "Fill seats, create buzz, and drive repeat business."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Seamless Process",
      description: "Effortlessly book the right people with just a few clicks."
    }
  ]

  return (
    <section className="py-24 bg-secondary/10">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Entourage?</h2>
          <p className="text-muted-foreground text-lg">
            Experience the difference with our curated service
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

