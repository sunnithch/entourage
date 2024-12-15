import React from 'react'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16 ">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Entourage</h3>
            <p className="text-muted-foreground mb-6">
              Entourage helps restaurants thrive by connecting them with the perfect crowd. 
              We're on a mission to transform dining experiences and create unforgettable moments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground mb-2">support@entourageapp.com</p>
            <Button>Contact Us</Button>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Entourage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

