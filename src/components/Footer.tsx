import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-medium text-white mb-4">About Entourage</h3>
            <p className="text-stone-400 mb-6">
              Entourage helps restaurants thrive by connecting them with the perfect crowd. 
              We're on a mission to transform dining experiences and create unforgettable moments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-4">Contact</h3>
            <p className="text-stone-400 mb-2">support@entourageapp.com</p>
            <button className="px-6 py-2 bg-sage-600 text-white rounded-full hover:bg-sage-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-stone-800 text-center text-stone-400">
          <p>&copy; {new Date().getFullYear()} Entourage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}