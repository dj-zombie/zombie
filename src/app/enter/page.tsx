'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Mock data for the page
  const latestReleases = [
    { id: 1, title: "Abyssal Depths", image: "/album1.png", type: "EP" },
    { id: 2, title: "Eternal Night", image: "/album2.png", type: "Album" },
    { id: 3, title: "Reanimated", image: "/album3.png", type: "Single" },
  ];

  const tourDates = [
    { id: 1, date: "MAR 15", venue: "Underworld Club", location: "London, UK" },
    { id: 2, date: "APR 02", venue: "The Catacombs", location: "Paris, FR" },
    { id: 3, date: "APR 18", venue: "Death Valley Arena", location: "Los Angeles, US" },
    { id: 4, date: "MAY 10", venue: "Hades Hall", location: "Berlin, DE" },
  ];

  const newsItems = [
    { 
      id: 1, 
      title: "New Album Announcement", 
      excerpt: "ZOMBIE announces the upcoming album 'Digital Decay' dropping this fall...",
      date: "FEB 20, 2025"
    },
    { 
      id: 2, 
      title: "World Tour Kickoff", 
      excerpt: "The Resurrection Tour begins next month with first stop in London...",
      date: "FEB 10, 2025"
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden relative">
      {/* Fire video background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-1"></div>
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
      <div className="digital-distortion"></div>
      
      {/* Page container */}
      <div className="container mx-auto px-4 py-8 relative z-20">
        {/* Header / Hero Section */}
        <header className="py-6 mb-12">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <h1 className="text-4xl md:text-5xl font-extrabold glitch-text tracking-tighter">
                  ZOMBIE
                </h1>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#music" className="text-white hover:text-red-500 transition-colors">Music</a>
              <a href="#tour" className="text-white hover:text-red-500 transition-colors">Tour</a>
              <a href="#news" className="text-white hover:text-red-500 transition-colors">News</a>
              <Link href="/about" className="text-white hover:text-red-500 transition-colors">About</Link>
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
          <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col justify-center items-center">
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
                    href="/" 
                    className="hover:text-red-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <a 
                    href="#music" 
                    className="hover:text-red-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    MUSIC
                  </a>
                </li>
                <li>
                  <a 
                    href="#tour" 
                    className="hover:text-red-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    TOUR
                  </a>
                </li>
                <li>
                  <a 
                    href="#news" 
                    className="hover:text-red-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    NEWS
                  </a>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-red-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ABOUT
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
        
        {/* Hero Section */}
        <section className="relative h-[60vh] sm:h-[70vh] mb-16 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/performance.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute bottom-0 left-0 p-8 z-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow glitch" data-text="ZOMBIE">ZOMBIE</h1>
            <p className="text-xl md:text-2xl max-w-2xl mb-6 text-shadow text-glitch">
              The boundary between life and death blurs in electronic soundscapes
            </p>
            <button className="bg-red-600 hover:bg-red-700 py-3 px-8 rounded-full text-lg transition-colors">
              LATEST RELEASE
            </button>
          </div>
        </section>
        
        {/* Music Section */}
        <section id="music" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-red-600 pl-4 text-glitch">LATEST RELEASES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestReleases.map((release) => (
              <div 
                key={release.id}
                className="bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 transition-colors"
              >
                <div className="aspect-square relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity z-10">
                    <button className="bg-red-600 rounded-full p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                  <Image 
                    src={release.image} 
                    alt={release.title} 
                    fill
                    className="object-cover" 
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-red-500 mb-1">{release.type}</div>
                  <h3 className="text-xl font-bold">{release.title}</h3>
                  <button className="mt-3 text-sm text-zinc-400 hover:text-white">
                    LISTEN NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Tour Section */}
        <section id="tour" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-red-600 pl-4 text-glitch">TOUR DATES</h2>
          
          <div className="bg-zinc-900 rounded-lg p-1">
            {tourDates.map((event, index) => (
              <div 
                key={event.id}
                className={`flex items-center justify-between p-5 ${
                  index !== tourDates.length - 1 ? "border-b border-zinc-800" : ""
                } hover:bg-zinc-800 transition-colors`}
              >
                <div className="flex items-center space-x-8">
                  <div className="text-xl font-mono font-bold w-24">{event.date}</div>
                  <div>
                    <div className="font-bold text-lg">{event.venue}</div>
                    <div className="text-zinc-400">{event.location}</div>
                  </div>
                </div>
                <div>
                  <button className="border border-white hover:bg-white hover:text-black transition-colors py-2 px-6 rounded-full">
                    TICKETS
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors py-3 px-8 rounded-full">
              VIEW ALL TOUR DATES
            </button>
          </div>
        </section>
        
        {/* News Section */}
        <section id="news" className="mb-16">
          <h2 className="text-3xl font-bold mb-6 border-l-4 border-red-600 pl-4 text-glitch">LATEST NEWS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.map((item) => (
              <div 
                key={item.id}
                className="bg-zinc-900 p-6 rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <div className="text-zinc-500 text-sm mb-2">{item.date}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-300 mb-4">{item.excerpt}</p>
                <button className="text-red-500 hover:text-red-400 font-medium">
                  READ MORE →
                </button>
              </div>
            ))}
          </div>
        </section>
        
        {/* Mailing List Section */}
        <section className="bg-zinc-900 rounded-lg p-8 text-center mb-16">
          <h2 className="text-2xl font-bold mb-3 text-glitch">JOIN THE UNDEAD</h2>
          <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
            Subscribe to the mailing list for exclusive content, early access to tickets, and the latest news from ZOMBIE.
          </p>
          
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-black border border-zinc-700 rounded-l-full py-3 px-6 w-full focus:outline-none focus:border-red-600"
            />
            <button className="bg-red-600 hover:bg-red-700 rounded-r-full py-3 px-6 transition-colors whitespace-nowrap">
              SUBSCRIBE
            </button>
          </div>
        </section>
        
        {/* Social Media Links */}
        <section className="flex justify-center space-x-6 mb-16">
          {['spotify', 'youtube', 'apple', 'instagram', 'twitter'].map((platform) => (
            <a 
              key={platform}
              href={`#${platform}`} 
              className="bg-zinc-900 hover:bg-zinc-800 p-4 rounded-full transition-colors"
            >
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </a>
          ))}
        </section>
        
        {/* Footer */}
        <footer className="text-center text-zinc-500 text-sm py-8 border-t border-zinc-900">
          <div className="mb-4">
            <ul className="flex justify-center space-x-6">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            &copy; {new Date().getFullYear()} ZOMBIE. All Rights Reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}
