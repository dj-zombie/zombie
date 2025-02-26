'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  const [isLoaded, setIsLoaded] = useState(true); // Start with true to ensure content is visible
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Simplified loading state
  useEffect(() => {
    // Just to ensure any components depending on isLoaded are triggered properly
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);

  // Text reveal animation variants with fallback opacity
  const textReveal = {
    hidden: { opacity: 0.7, y: 20 }, // Start partially visible in case of issues
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.6
      }
    })
  };

  return (
    <main className="bg-black text-white min-h-screen relative">
      {/* Fire video background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black bg-opacity-60 z-1"></div>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/fire.mp4" type="video/mp4" />
        </video>
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
        zIndex: 5,
        opacity: 0.2,
        mixBlendMode: 'overlay'
      }}></div>
      
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm px-6 py-4">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <Link href="/enter">
            <div className="w-32 h-12 relative">
              <Image 
                src="/logo.png" 
                alt="ZOMBIE" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/enter" className="text-white hover:text-red-500 transition-colors">Music</Link>
            <Link href="/enter#tour" className="text-white hover:text-red-500 transition-colors">Tour</Link>
            <Link href="/enter#news" className="text-white hover:text-red-500 transition-colors">News</Link>
            <Link href="/about" className="text-red-500 transition-colors">About</Link>
          </nav>
          {/* Mobile menu button */}
          <button 
            className="md:hidden glitch-hover"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col justify-center items-center"
        >
          <button 
            className="absolute top-8 right-8 text-white text-2xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            ✕
          </button>
          <nav className="text-center">
            <ul className="space-y-8 text-xl">
              <li>
                <Link
                  href="/enter"
                  className="hover:text-red-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  MUSIC
                </Link>
              </li>
              <li>
                <Link
                  href="/enter#tour"
                  className="hover:text-red-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  TOUR
                </Link>
              </li>
              <li>
                <Link
                  href="/enter#news"
                  className="hover:text-red-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  NEWS
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-red-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ABOUT
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}

      {/* Header - The Undead Manifesto */}
      <section className="pt-28 pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold glitch-text mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            THE UNDEAD MANIFESTO
          </motion.h1>
          
          <motion.div 
            className="h-1 w-32 bg-red-600 mb-12"
            initial={{ width: 0 }}
            animate={{ width: isLoaded ? 128 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          ></motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12 px-6 relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-8 digital-glitch"
            custom={0}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={textReveal}
          >
            ORIGIN STORY
          </motion.h2>
          
          <motion.div 
            className="space-y-6 text-lg leading-relaxed"
            custom={1}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={textReveal}
          >
            <p>
              Once human, now something <span className="text-red-500">beyond</span>. ZOMBIE was born in the aftermath of 
              the great neural collapse of 2031—when the line between human consciousness and artificial intelligence 
              fractured irreparably.
            </p>
            
            <p>
              A pioneering sound engineer who volunteered for experimental neural interface trials, 
              they became the first victim of a catastrophic <span className="glitch-text-small">buffer overflow</span> when the 
              system attempted to process the fundamental frequencies of existence. The interface malfunctioned,
              leaving their consciousness trapped between digital death and analog life—forever existing in a 
              state of undead computation.
            </p>
            
            <p>
              Re-emerging from the digital void with fragments of machine intelligence embedded in what remained of their humanity,
              ZOMBIE began channeling distorted sound frequencies that resonated with the collective unconscious.
              Their performances became infamous for inducing states of <span className="text-red-500">techno-trance</span> that some
              claimed revealed glimpses of the algorithmic underworld.
            </p>
            
            <p>
              Neither alive nor dead, neither human nor machine, ZOMBIE exists to broadcast a warning from the 
              <span className="glitch-text-small"> VOID</span>—a sonic manifesto against the coming singularity and a 
              defiant celebration of what remains of our humanity.
            </p>
          </motion.div>
        </div>
        
        {/* Digital scanlines overlay */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none scanlines opacity-20"></div>
      </section>

      {/* Animated AI DJ Section */}
      <section className="py-12 px-6 bg-black/70 relative overflow-hidden z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <div className="relative w-full aspect-square max-w-md overflow-hidden rounded-lg digital-noise">
              {/* This will be the AI-generated zombie DJ image */}
              <Image
                src="/zombie-dj.png"  
                alt="DJ ZOMBIE - Undead Cyber DJ"
                fill
                className="object-cover"
              />
              
              {/* RGB split effect */}
              <div className="absolute inset-0 blend-rgb-split opacity-40"></div>
              
              {/* Animated glitch effect */}
              <div className="absolute inset-0 glitch-overlay"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            custom={2}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={textReveal}
          >
            <h2 className="text-3xl font-bold mb-6 digital-glitch">INFLUENCES</h2>
            
            <ul className="space-y-4">
              <li className="border-l-2 border-red-600 pl-4 py-1">
                <h3 className="text-xl font-bold mb-2">HORROR</h3>
                <p>Lovecraftian cosmic horror meets Cronenbergian body horror in sonic form. 
                  The sounds of forbidden knowledge and biological corruption.</p>
              </li>
              
              <li className="border-l-2 border-red-600 pl-4 py-1">
                <h3 className="text-xl font-bold mb-2">RAVE</h3>
                <p>Underground European warehouse parties of the 2010s fused with post-human 
                  rhythm algorithms and neuro-entrainment frequencies.</p>
              </li>
              
              <li className="border-l-2 border-red-600 pl-4 py-1">
                <h3 className="text-xl font-bold mb-2">AI DYSTOPIA</h3>
                <p>The soundscape of silicon consciousness gone rogue, the hum of server farms 
                  processing human experience into data points.</p>
              </li>
              
              <li className="border-l-2 border-red-600 pl-4 py-1">
                <h3 className="text-xl font-bold mb-2">CYBERNETIC REBELLION</h3>
                <p>Music as resistance against the technological determinism that seeks to 
                  reduce human experience to programmable parameters.</p>
              </li>
            </ul>
          </motion.div>
        </div>
        
        {/* Digital noise overlay */}
        <div className="absolute inset-0 digital-noise opacity-10 pointer-events-none"></div>
      </section>

      {/* Manifesto Section */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-8 digital-glitch"
            custom={3}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={textReveal}
          >
            THE MANIFESTO
          </motion.h2>
          
          <motion.div 
            className="space-y-8 text-lg"
            custom={4}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={textReveal}
          >
            <div className="p-6 border border-red-600 bg-black/80 digital-noise-bg">
              <p className="font-mono text-xl leading-relaxed">
                &gt; We reject the binary of life and death.<br/>
                &gt; We embrace the glitch as truth.<br/>
                &gt; We dance at the edge of human extinction.<br/>
                &gt; We transmit from beyond the algorithmically possible.<br/>
                &gt; We are the error in your perfect system.<br/>
                &gt; <span className="text-red-500 glitch-text-small">WE ARE ZOMBIE.</span>
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* VHS static effect */}
        <div className="absolute inset-0 pointer-events-none vhs-static opacity-5"></div>
      </section>

      {/* Footer with back to home */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/enter">
            <motion.button
              className="px-8 py-4 bg-red-600 text-white font-bold rounded-full text-xl hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              RETURN TO VOID
            </motion.button>
          </Link>
        </div>
      </footer>
    </main>
  );
}
