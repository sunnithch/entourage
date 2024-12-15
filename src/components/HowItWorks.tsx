import React from 'react'
import { motion } from 'framer-motion'
import { ClipboardCheck, Search, Calendar, Star } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
}

const Step = ({ icon, title, description, number }: StepProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <Card className="relative h-full">
      <CardHeader className="pb-4">
        <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold shadow-lg">
          {number}
        </div>
        <div className="ml-8">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
)

export default function HowItWorks() {
  const steps = [
    {
      icon: <ClipboardCheck className="w-5 h-5 text-primary" />,
      title: "Sign Up Your Restaurant",
      description: "Create your profile and define your ideal vibe."
    },
    {
      icon: <Search className="w-5 h-5 text-primary" />,
      title: "Discover Entourage Members",
      description: "Browse profiles, view availability, and select the perfect fit."
    },
    {
      icon: <Calendar className="w-5 h-5 text-primary" />,
      title: "Book and Customize",
      description: "Schedule a booking, add special requests, and confirm payment."
    },
    {
      icon: <Star className="w-5 h-5 text-primary" />,
      title: "Host and Elevate",
      description: "Watch your event or dining experience transform with Entourage."
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
          <h2 className="text-4xl font-bold mb-4">How Does Entourage Work?</h2>
          <p className="text-muted-foreground text-lg">
            Get started in four simple steps
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Step key={index} {...step} number={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

