import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"

const Header: React.FC = () => {
  const navigate = useNavigate()

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          alt="Busy upscale restaurant interior with many diners"
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Entourage</h2>
        </motion.div>
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-extralight text-white mb-8 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Elevate Your Ambiance
          <span className="block font-normal mt-4 text-4xl sm:text-5xl md:text-6xl">Create Unforgettable Experiences</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-200 mb-12 font-light max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Entourage connects your restaurant with curated personalities who amplify your vibe and attract the perfect crowd.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            onClick={() => navigate('/login')}
            size="lg"
            className="text-lg font-medium"
          >
            Get Started
          </Button>
          <Button
            onClick={() => navigate('/learn-more')}
            variant="outline"
            size="lg"
            className="text-lg font-medium"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </header>
  )
}

export default Header
