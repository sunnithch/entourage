import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

const TeamMemberCard = ({ name, role, description, image }: TeamMemberCardProps) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Card className="h-full">
      <CardHeader>
        <Avatar className="w-20 h-20 mx-auto mb-4">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl text-center">{name}</CardTitle>
        <p className="text-center text-muted-foreground">{role}</p>
      </CardHeader>
      <CardContent>
        <p className="text-center text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
)

export default function TeamMembers() {
  const members = [
    {
      name: "Alex Johnson",
      role: "Social Influencer",
      description: "Expert at creating buzz and engaging with guests.",
      image: "https://i.pravatar.cc/150?img=1"
    },
    {
      name: "Samantha Lee",
      role: "Professional Actor",
      description: "Skilled at playing various personas to match venue vibes.",
      image: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "Marcus Chen",
      role: "University Student",
      description: "Brings youthful energy and contemporary trends to events.",
      image: "https://i.pravatar.cc/150?img=3"
    },
    {
      name: "Olivia Taylor",
      role: "Fashion Model",
      description: "Adds style and glamour to upscale venues.",
      image: "https://i.pravatar.cc/150?img=9"
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
          <h2 className="text-4xl font-bold mb-4">Meet Our Entourage</h2>
          <p className="text-xl text-muted-foreground">
            Diverse personalities to match your venue's unique atmosphere
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

