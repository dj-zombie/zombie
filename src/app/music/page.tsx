'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MusicPlayer from '../components/MusicPlayer';
import Header from '../components/Header';
import { fadeInUp, staggerChildren, glitchText } from '../components/AnimatedLayout';
import Spinner from '../components/Spinner';

export default function MusicPage() {
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
    <main className="bg-black text-white min-h-screen">
      <Header />
      <motion.div 
        className="max-w-6xl mx-auto py-24 px-6"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h1 
          className="text-5xl font-extrabold mb-12 glitch-text"
          variants={glitchText}
        >
          THE VIRUS VAULT
        </motion.h1>
        <motion.div variants={fadeInUp}>
          <MusicPlayer />
        </motion.div>
      </motion.div>
    </main>
  );
}
