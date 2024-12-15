import React from 'react';
import { Check, X } from 'lucide-react';
import { EntourageMember } from '../../stores/booking';
import { Button } from './button';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from './card';
import { Badge } from './badge';

interface MemberCardProps {
  member: EntourageMember;
  isSelected: boolean;
  onSelect: () => void;
  onDeselect: () => void;
}

export function MemberCard({ member, isSelected, onSelect, onDeselect }: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className={`overflow-hidden transition-shadow hover:shadow-lg ${isSelected ? 'ring-2 ring-primary' : ''}`}>
        <div className="relative aspect-square">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
          {isSelected && (
            <div className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-1">
              <Check className="h-4 w-4" />
            </div>
          )}
        </div>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold truncate">{member.name}</h3>
          <p className="text-sm text-muted-foreground mt-1 h-10 overflow-hidden">{member.tagline}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {member.traits.map((trait) => (
              <Badge key={trait} variant="secondary" className="text-xs">{trait}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 flex items-center justify-between bg-muted/50">
          <span className="text-lg font-semibold">${member.price}</span>
          <Button
            variant={isSelected ? "secondary" : "default"}
            onClick={isSelected ? onDeselect : onSelect}
            className="w-24"
          >
            {isSelected ? 'Remove' : 'Select'}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

