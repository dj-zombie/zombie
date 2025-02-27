'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { tourDates } from '../data/tourData';
import Header from '../components/Header';

export default function TourPage() {
  const [activeLocation, setActiveLocation] = useState('');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  // Videos for the rotating slideshow
  const performanceVideos = [
    '/videos/performance-1.mp4',
    '/videos/performance-2.mp4',
    '/videos/performance-3.mp4',
  ];
  
  // Rotate through videos every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => 
        prevIndex === performanceVideos.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    
    return () => clearInterval(interval);
  }, [performanceVideos.length]);
  
  // Simulated flickering effect for the pins
  useEffect(() => {
    const flickerInterval = setInterval(() => {
      const randomCity = tourDates[Math.floor(Math.random() * tourDates.length)].id;
      setActiveLocation(randomCity);
      
      // Reset after a short delay to create a blinking effect
      setTimeout(() => {
        setActiveLocation('');
      }, 200);
    }, 2000);
    
    return () => clearInterval(flickerInterval);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Flickering screen effect */}
      <div className="fixed inset-0 pointer-events-none opacity-25">
        <div className="absolute inset-0 bg-scanlines"></div>
        <div className="absolute inset-0 bg-flicker"></div>
      </div>
      
      {/* Navigation */}
      <Header />

      {/* Main content container */}
      <div className="pt-28 pb-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 glitch-text">LIVE_EXORCISMS</h1>
          <h2 className="text-xl md:text-2xl text-red-500 mb-16">UNDEAD REANIMATION TOUR 2025</h2>
          
          {/* Video overlay - rotating slideshow */}
          <div className="mb-16 relative aspect-video w-full overflow-hidden border border-red-500 shadow-neon">
            <div className="absolute inset-0 w-full h-full flex items-center justify-center text-center p-8 bg-black/50 backdrop-blur-sm z-10">
              <div>
                <h3 className="text-3xl font-bold mb-4">THE INFECTION SPREADS</h3>
                <p className="text-xl text-red-400">JOIN THE UNDEAD ARMY ON TOUR THIS SUMMER</p>
              </div>
            </div>
            <video 
              key={currentVideoIndex}
              autoPlay 
              muted 
              loop
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={performanceVideos[currentVideoIndex]} type="video/mp4" />
            </video>
          </div>
          
          {/* Tour map with glowing pins */}
          <div className="mb-16 relative aspect-video w-full bg-zinc-900 border border-zinc-800 shadow-inner">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/world-map-dark.png"
                alt="Tour Map"
                fill
                className="object-cover opacity-40"
              />
            </div>
            
            {/* Map pins */}
            {tourDates.map((tour) => (
              <div 
                key={tour.id}
                style={{
                  position: 'absolute',
                  left: `${(tour.coordinates.lng + 180) / 360 * 100}%`,
                  top: `${(90 - tour.coordinates.lat) / 180 * 100}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                className={`w-3 h-3 rounded-full ${tour.soldOut ? 'bg-zinc-500' : activeLocation === tour.id ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}
              >
                <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap ${tour.soldOut ? 'text-zinc-500' : 'text-red-500'}`}>
                  {tour.city}
                </span>
                <span className={`absolute w-6 h-6 rounded-full -inset-1.5 ${tour.soldOut ? '' : activeLocation === tour.id ? 'bg-green-500/30 animate-ping' : 'bg-red-500/30'}`}></span>
              </div>
            ))}
          </div>
          
          {/* Tour dates with glitch hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tourDates.map((tour) => (
              <div 
                key={tour.id}
                className={`group relative bg-zinc-900/60 backdrop-blur-sm border ${tour.soldOut ? 'border-zinc-700' : 'border-red-500'} hover:border-neon transition-colors overflow-hidden`}
              >
                {/* Date card content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-red-500 transition-colors">{tour.city}</h3>
                      <p className="text-zinc-400">{tour.country}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-red-500">{tour.date}</p>
                      <p className="text-zinc-400">{tour.time}</p>
                    </div>
                  </div>
                  
                  <p className="mb-2 text-zinc-300">{tour.venue}</p>
                  
                  {tour.highlights && (
                    <ul className="mb-4 text-sm text-zinc-400">
                      {tour.highlights.map((highlight, index) => (
                        <li key={index} className="mb-1">• {highlight}</li>
                      ))}
                    </ul>
                  )}
                  
                  {tour.soldOut ? (
                    <div className="mt-4 text-center">
                      <span className="inline-block px-4 py-2 border border-zinc-700 text-zinc-500 font-bold">SOLD OUT</span>
                    </div>
                  ) : (
                    <div className="mt-4 text-center">
                      <a 
                        href={tour.ticketLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold transition-colors"
                      >
                        GET TICKETS
                      </a>
                    </div>
                  )}
                </div>
                
                {/* Glitch overlay that appears on hover */}
                <div className="absolute inset-0 bg-glitch opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
