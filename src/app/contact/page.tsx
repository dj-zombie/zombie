'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Header from '../components/Header';
import { fadeInUp, staggerChildren, glitchText, hoverScale } from '../components/AnimatedLayout';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    isBooking: false,
    venueSize: '',
    eventDate: '',
    budget: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [typingGlitch, setTypingGlitch] = useState(false);
  const messageRef = useRef(null);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Trigger glitch effect when typing
    if (name === 'message') {
      setTypingGlitch(true);
      setTimeout(() => setTypingGlitch(false), 300);
    }
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Show Easter egg if it's a booking request
      if (formData.isBooking) {
        setTimeout(() => {
          setShowEasterEgg(true);
        }, 2000);
      }
    }, 3000);
  };
  
  // Reset the form
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      isBooking: false,
      venueSize: '',
      eventDate: '',
      budget: '',
    });
    setIsSubmitted(false);
    setShowEasterEgg(false);
  };

  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Glitch background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-scanlines opacity-30"></div>
        <div className="absolute inset-0 bg-noise opacity-5"></div>
        
        {/* Animated code matrix in background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="code-rain"></div>
        </div>
      </div>
      
      <Header />
      
      <motion.div 
        className="pt-32 pb-20 px-6 relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="max-w-3xl mx-auto">
          {/* Page header */}
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold glitch-text mb-4"
              variants={glitchText}
            >
              SUMMON_THE_DEAD
            </motion.h1>
            <motion.p 
              className="text-xl text-red-500"
              variants={fadeInUp}
            >
              SEND YOUR MESSAGE TO THE DIGITAL AFTERLIFE
            </motion.p>
          </motion.div>
          
          <AnimatePresence mode="wait">
            {/* Submission success message */}
            {isSubmitted && !showEasterEgg ? (
              <motion.div 
                className="text-center my-20 glitch-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
              >
                <motion.h2 
                  className="text-3xl font-bold mb-6 glitch-text"
                  variants={glitchText}
                >
                  TRANSMISSION RECEIVED
                </motion.h2>
                <motion.p 
                  className="text-xl mb-8"
                  variants={fadeInUp}
                >
                  Your message has been transmitted to the digital void. Expect a response from beyond.
                </motion.p>
                <motion.button 
                  onClick={handleReset}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold transition-colors border-neon"
                  variants={hoverScale}
                  whileHover="whileHover"
                  whileTap="whileTap"
                >
                  SEND ANOTHER MESSAGE
                </motion.button>
              </motion.div>
            ) : showEasterEgg ? (
              <motion.div 
                className="text-center my-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
              >
                <div className="glitch-container mb-8">
                  <motion.h2 
                    className="text-3xl font-bold mb-6 glitch-text"
                    variants={glitchText}
                  >
                    BOOKING REQUEST ACCEPTED
                  </motion.h2>
                  <motion.div 
                    className="h-64 w-full relative mb-8 easter-egg-container"
                    variants={fadeInUp}
                  >
                    <Image 
                      src="/zombie-face.jpg"
                      alt="Zombie Face"
                      fill
                      className="object-contain glitch-image"
                    />
                  </motion.div>
                  <motion.p 
                    className="text-xl mb-4"
                    variants={fadeInUp}
                  >
                    Access granted to exclusive content.
                  </motion.p>
                  <motion.div 
                    className="bg-zinc-900 border border-red-500 p-4 mb-8 mx-auto max-w-md"
                    variants={fadeInUp}
                  >
                    <p className="text-green-500 font-mono mb-2">Download code activated:</p>
                    <p className="text-xl font-bold text-red-500 tracking-widest">UNDEADBEATS2025</p>
                  </motion.div>
                  <motion.p 
                    className="text-sm text-zinc-400 mb-8"
                    variants={fadeInUp}
                  >
                    Use this code on the downloads page to access the unreleased track "Digital Necromancy"
                  </motion.p>
                  <motion.button 
                    onClick={handleReset}
                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold transition-colors border-neon"
                    variants={hoverScale}
                    whileHover="whileHover"
                    whileTap="whileTap"
                  >
                    RETURN TO FORM
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.form 
                onSubmit={handleSubmit} 
                className="glitch-container"
                variants={staggerChildren}
              >
                <motion.div 
                  className="mb-6"
                  variants={fadeInUp}
                >
                  <label htmlFor="name" className="block text-red-500 mb-2 glitch-hover">YOUR NAME</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-red-500 focus:border-green-500 shadow-neon px-4 py-3 text-white transition-colors"
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  variants={fadeInUp}
                >
                  <label htmlFor="email" className="block text-red-500 mb-2 glitch-hover">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-red-500 focus:border-green-500 shadow-neon px-4 py-3 text-white transition-colors"
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  variants={fadeInUp}
                >
                  <label htmlFor="subject" className="block text-red-500 mb-2 glitch-hover">SUBJECT</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-red-500 focus:border-green-500 shadow-neon px-4 py-3 text-white transition-colors"
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-8"
                  variants={fadeInUp}
                >
                  <label htmlFor="message" className="block text-red-500 mb-2 glitch-hover">YOUR MESSAGE</label>
                  <textarea
                    id="message"
                    name="message"
                    ref={messageRef}
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-transparent border border-red-500 focus:border-green-500 shadow-neon px-4 py-3 text-white transition-colors ${typingGlitch ? 'glitch-text' : ''}`}
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-8"
                  variants={fadeInUp}
                >
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      name="isBooking"
                      checked={formData.isBooking}
                      onChange={handleChange}
                      className="form-checkbox h-5 w-5 text-red-500 border border-red-500 bg-transparent"
                    />
                    <span className="ml-3 text-white group-hover:text-red-500 transition-colors">
                      This is a booking inquiry
                    </span>
                  </label>
                </motion.div>
                
                <AnimatePresence>
                  {formData.isBooking && (
                    <motion.div 
                      className="booking-details bg-zinc-900/70 backdrop-blur-sm p-6 mb-8 border border-red-500"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.h3 
                        className="text-xl font-bold mb-4 text-red-500"
                        variants={glitchText}
                      >
                        BOOKING DETAILS
                      </motion.h3>
                      
                      <motion.div 
                        className="mb-4"
                        variants={fadeInUp}
                      >
                        <label htmlFor="eventDate" className="block text-white mb-2">EVENT DATE</label>
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full bg-transparent border border-zinc-700 focus:border-red-500 px-4 py-2 text-white transition-colors"
                        />
                      </motion.div>
                      
                      <motion.div 
                        className="mb-4"
                        variants={fadeInUp}
                      >
                        <label htmlFor="venueSize" className="block text-white mb-2">VENUE SIZE</label>
                        <select
                          id="venueSize"
                          name="venueSize"
                          value={formData.venueSize}
                          onChange={handleChange}
                          className="w-full bg-black border border-zinc-700 focus:border-red-500 px-4 py-2 text-white transition-colors"
                        >
                          <option value="">Select venue size</option>
                          <option value="small">Small (Up to 200 people)</option>
                          <option value="medium">Medium (200-500 people)</option>
                          <option value="large">Large (500-1000 people)</option>
                          <option value="xl">Extra Large (1000+ people)</option>
                          <option value="festival">Festival</option>
                        </select>
                      </motion.div>
                      
                      <motion.div 
                        className="mb-4"
                        variants={fadeInUp}
                      >
                        <label htmlFor="budget" className="block text-white mb-2">BUDGET RANGE</label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-black border border-zinc-700 focus:border-red-500 px-4 py-2 text-white transition-colors"
                        >
                          <option value="">Select budget range</option>
                          <option value="low">$1,000 - $5,000</option>
                          <option value="medium">$5,000 - $10,000</option>
                          <option value="high">$10,000 - $20,000</option>
                          <option value="premium">$20,000+</option>
                        </select>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <motion.div 
                  className="text-center"
                  variants={fadeInUp}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`relative px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xl transition-all overflow-hidden
                      ${isSubmitting ? 'animate-glitch' : ''}`}
                    variants={hoverScale}
                    whileHover="whileHover"
                    whileTap="whileTap"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="glitch-text">SUMMONING...</span>
                        <span className="absolute inset-0 bg-glitch opacity-20"></span>
                      </>
                    ) : 'SUMMON THE DEAD'}
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </main>
  );
}
