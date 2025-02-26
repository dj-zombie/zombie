'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MusicPlayer from '../components/MusicPlayer';
import Header from '../components/Header';
import { fadeInUp, staggerChildren, glitchText } from '../components/AnimatedLayout';

export default function MusicPage() {
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
