import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  restaurant: string;
  image: string;
}

const TestimonialCard = ({ quote, author, role, restaurant, image }: TestimonialCardProps) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={image} alt={author} />
            <AvatarFallback>{author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{author}</CardTitle>
            <p className="text-sm text-muted-foreground">{role}, {restaurant}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="italic text-muted-foreground">"{quote}"</p>
      </CardContent>
    </Card>
  </motion.div>
)

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
  ]

  return (
    <section className="py-24 bg-secondary/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Loved by Top Restaurants
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

