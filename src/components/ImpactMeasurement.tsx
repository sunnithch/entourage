import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Users, DollarSign, Star } from 'lucide-react'

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MetricCard = ({ icon, title, description }: MetricCardProps) => (
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

export default function ImpactMeasurement() {
  const metrics = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Foot Traffic",
      description: "We measure the increase in visitors before and after our Entourage visits."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "Revenue Growth",
      description: "Track the boost in sales during and after Entourage bookings."
    },
    {
      icon: <Star className="w-6 h-6 text-primary" />,
      title: "Customer Feedback",
      description: "Analyze reviews and ratings to gauge improvement in atmosphere and experience."
    },
    {
      icon: <BarChart className="w-6 h-6 text-primary" />,
      title: "Detailed Analytics",
      description: "Provide comprehensive reports on various performance metrics."
    }
  ]

  return (
    <section className="py-24 bg-secondary/10">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Measuring Our Impact</h2>
          <p className="text-xl text-muted-foreground">
            How we quantify the success of Entourage for your business
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  )
}

