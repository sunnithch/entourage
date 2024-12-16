import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PricingCardProps {
  name: string
  description: string
  price: string
  period: string
  features: string[]
  highlighted: boolean
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  description,
  price,
  period,
  features,
  highlighted
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="h-full"
  >
    <Card className={`h-full flex flex-col ${highlighted ? 'border-primary shadow-lg' : ''}`}>
      <CardHeader className="flex-grow">
        {highlighted && (
          <Badge className="w-fit mb-2" variant="secondary">Most Popular</Badge>
        )}
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline mb-6">
          <span className="text-4xl font-bold">${price}</span>
          <span className="ml-2 text-muted-foreground">{period}</span>
        </div>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full" variant={highlighted ? "default" : "outline"}>
          Choose Plan
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
)

