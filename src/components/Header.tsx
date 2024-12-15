import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 to-stone-800/70" />
      </div>
      
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-stone-50 mb-6">
            Elevate Your Ambiance.
            <span className="block font-normal mt-2">Create Unforgettable Experiences.</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-10 font-light">
            Entourage connects your restaurant with curated personalities who amplify your vibe and attract the perfect crowd.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/login')}
              className="px-8 py-4 bg-sage-600 text-white rounded-full hover:bg-sage-700 transition-colors text-lg"
            >
              Get Started for Free
            </button>
            <button className="px-8 py-4 border border-stone-300 text-stone-100 rounded-full hover:bg-stone-800/30 transition-colors text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}