'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [textTriggers, setTextTriggers] = useState({
    emerging: false,
    fromThe: false,
    depthOf: false,
    hell: false,
    finalReveal: false
  });
  
  // Handle scroll position for revealing content
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Updated to trigger text and button much earlier
      setTextTriggers({
        emerging: scrollY > viewportHeight * 0.05, // Just 5% scroll
        fromThe: scrollY > viewportHeight * 0.15, // 15% scroll
        depthOf: scrollY > viewportHeight * 0.25, // 25% scroll
        hell: scrollY > viewportHeight * 0.35,    // 35% scroll
        finalReveal: scrollY > viewportHeight * 0.55 // 55% scroll for logo
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-black text-white">
      {/* Long container to allow scrolling */}
      <div className="h-[200vh] relative overflow-hidden">
        {/* Background container */}
        <div className="relative w-full">
          <div className="w-full">
            <Image 
              src="/background-tall.png"
              alt="ZOMBIE Main Background"
              className="w-full h-auto"
              width={1920}
              height={1080}
            />
          </div>
          <div className="w-full">
            <Image 
              src="/hell.png"
              alt="ZOMBIE Hell Background"
              className="w-full h-auto"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
      
      {/* Smoke video overlay */}
      <div 
        className="fixed bottom-0 left-0 w-full pointer-events-none"
        style={{ 
          height: '30vh', 
          zIndex: 5,
          opacity: textTriggers.hell ? 1 : 0,
          transition: 'opacity 0.8s ease-in-out'
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ mixBlendMode: "screen" }}
        >
          <source src="/smoke.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Scroll-triggered text elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-10">
        <motion.div 
          className="absolute w-full text-center text-white text-5xl md:text-7xl font-bold"
          style={{ top: "30%" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: textTriggers.finalReveal ? 0 : (textTriggers.emerging ? 1 : 0), 
            y: textTriggers.emerging ? 0 : 20 
          }}
          transition={{ duration: 0.6 }}
        >
          emerging
        </motion.div>
        
        <motion.div 
          className="absolute w-full text-center text-white text-5xl md:text-7xl font-bold"
          style={{ top: "40%" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: textTriggers.finalReveal ? 0 : (textTriggers.fromThe ? 1 : 0), 
            y: textTriggers.fromThe ? 0 : 20 
          }}
          transition={{ duration: 0.6 }}
        >
          from the
        </motion.div>
        
        <motion.div 
          className="absolute w-full text-center text-white text-5xl md:text-7xl font-bold"
          style={{ top: "50%" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: textTriggers.finalReveal ? 0 : (textTriggers.depthOf ? 1 : 0), 
            y: textTriggers.depthOf ? 0 : 20 
          }}
          transition={{ duration: 0.6 }}
        >
          depth of
        </motion.div>
        
        <motion.div 
          className="absolute w-full text-center text-red-600 text-7xl md:text-9xl font-extrabold"
          style={{ top: "60%" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: textTriggers.finalReveal ? 0 : (textTriggers.hell ? 1 : 0), 
            scale: textTriggers.hell ? 1.2 : 0.8,
            textShadow: textTriggers.hell ? "0 0 20px rgba(255,0,0,0.8)" : "none"
          }}
          transition={{ duration: 0.8 }}
        >
          HELL
        </motion.div>
      </div>
      
      {/* Logo and button layer */}
      <div className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: textTriggers.finalReveal ? 1 : 0, y: textTriggers.finalReveal ? 0 : -20 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <div className="mix-blend-screen">
            <Image
              src="/logo.png"
              alt="ZOMBIE Logo"
              width={400}
              height={200}
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: textTriggers.finalReveal ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <Link href="/enter">
            <motion.button
              className="px-8 py-4 bg-white text-black font-bold rounded-full text-xl hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enter
            </motion.button>
          </Link>
        </motion.div>
      </div>
      
      {/* Scanlines overlay */}
      <div 
        className="fixed top-0 left-0 w-full h-screen pointer-events-none z-30 opacity-20"
        style={{
          backgroundImage: 'url(/scanlines.png)',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'overlay'
        }}
      ></div>
    </main>
  );
}
