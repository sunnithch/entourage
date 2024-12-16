import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, Users, DollarSign, ChefHat } from 'lucide-react'

interface Reservation {
  restaurant: string
  date: string
  time: string
  seats: number
  price: number
  cuisine: string
  image: string
}

const ReservationCard: React.FC<Reservation> = ({ restaurant, date, time, seats, price, cuisine, image }) => (
  <motion.div 
    whileHover={{ y: -5 }} 
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Card className="h-full overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={restaurant} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Badge variant="secondary" className="absolute top-2 right-2">
          {cuisine}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl line-clamp-1">{restaurant}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="mr-2 h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-2 h-4 w-4" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="mr-2 h-4 w-4" />
          <span>Table for {seats}</span>
        </div>
        <div className="flex items-center text-lg font-semibold">
          <DollarSign className="mr-2 h-5 w-5" />
          <span>{price}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Book Now</Button>
      </CardFooter>
    </Card>
  </motion.div>
)

export default function ReservationsForSale() {
  const reservations: Reservation[] = [
    { 
      restaurant: "La Bella Italia", 
      date: "Dec 20, 2024", 
      time: "7:00 PM", 
      seats: 2, 
      price: 150, 
      cuisine: "Italian",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    { 
      restaurant: "Sushi Sensation", 
      date: "Dec 21, 2024", 
      time: "8:30 PM", 
      seats: 4, 
      price: 280, 
      cuisine: "Japanese",
      image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    { 
      restaurant: "Le Petit Bistro", 
      date: "Dec 22, 2024", 
      time: "6:45 PM", 
      seats: 2, 
      price: 180, 
      cuisine: "French",
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    { 
      restaurant: "Spice Route", 
      date: "Dec 23, 2024", 
      time: "7:30 PM", 
      seats: 6, 
      price: 320, 
      cuisine: "Indian",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
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
          <h2 className="text-4xl font-bold mb-4">Exclusive Reservations</h2>
          <p className="text-xl text-muted-foreground">
            Secure your spot at the hottest restaurants in town
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reservations.map((reservation, index) => (
            <ReservationCard key={index} {...reservation} />
          ))}
        </div>
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" size="lg">
            View All Reservations
          </Button>
        </motion.div>
      </div>
    </section>
  )
}