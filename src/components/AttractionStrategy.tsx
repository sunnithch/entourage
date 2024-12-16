import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageCircle, Instagram, Smile } from 'lucide-react'

interface StrategyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StrategyCard = ({ icon, title, description }: StrategyCardProps) => (
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

export default function AttractionStrategy() {
  const strategies = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Social Proof",
      description: "Create a bustling atmosphere that naturally attracts more customers."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      title: "Engaging Conversations",
      description: "Our team can initiate friendly discussions, enhancing the overall vibe."
    },
    {
      icon: <Instagram className="w-6 h-6 text-primary" />,
      title: "Social Media Buzz",
      description: "Entourage members can create organic social media content, increasing online visibility."
    },
    {
      icon: <Smile className="w-6 h-6 text-primary" />,
      title: "Positive Energy",
      description: "Our team brings enthusiasm and good vibes, making your venue more inviting."
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
          <h2 className="text-4xl font-bold mb-4">Our Attraction Strategy</h2>
          <p className="text-xl text-muted-foreground">
            How we help bring more customers to your venue
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strategies.map((strategy, index) => (
            <StrategyCard key={index} {...strategy} />
          ))}
        </div>
      </div>
    </section>
  )
}

