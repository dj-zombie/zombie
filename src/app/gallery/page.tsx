'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import InstagramFeed from '../components/InstagramFeed';

export default function Gallery() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden relative">
      {/* Background effects */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black bg-opacity-80 z-1"></div>
        <div 
          className="w-full h-full opacity-20"
          style={{ 
            backgroundImage: 'url(/noise.png)',
            backgroundRepeat: 'repeat',
          }}
        ></div>
      </div>
      
      {/* Glitch effects */}
      <div style={{ 
        backgroundImage: 'url(/scanlines.png)',
        backgroundRepeat: 'repeat',
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.15,
        zIndex: 2
      }}></div>
      
      <div className="relative z-10">
        <Header />
        
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-center glitch-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            GALLERY
          </motion.h1>
          
          <motion.div
            className="w-full max-w-6xl mx-auto mt-12 md:mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <InstagramFeed username="deejayzombie" limit={12} />
          </motion.div>
          
          <motion.p 
            className="text-center text-zinc-400 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Follow <a 
              href="https://www.instagram.com/deejayzombie/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-400 transition"
            >@deejayzombie</a> on Instagram for the latest updates
          </motion.p>
        </div>
      </div>
    </main>
  );
}
