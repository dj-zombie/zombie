'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from '../components/Header';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<null | {title: string, url: string}>(null);
  
  // Mock data for the page
  const latestReleases = [
    { 
      id: 1, 
      title: "Abyssal Depths", 
      image: "/album1.png", 
      type: "EP",
      soundcloudUrl: "https://soundcloud.com/dj-zombie-az/error-reading-rom"
    },
    { 
      id: 2, 
      title: "Eternal Night", 
      image: "/album2.png", 
      type: "Album",
      soundcloudUrl: "https://soundcloud.com/dj-zombie-az/silent-scream-machine"
    },
    { 
      id: 3, 
      title: "Reanimated", 
      image: "/album3.png", 
      type: "Single",
      soundcloudUrl: "https://soundcloud.com/dj-zombie-az/silent-scream-machine" 
    },
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

  const featuredTrack = {
    title: "SILENT SCREAM MACHINE",
    url: "https://soundcloud.com/dj-zombie-az/silent-scream-machine"
  };

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
        <Header />
        
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
          
          {/* SoundCloud Featured Track */}
          <div className="mb-10 bg-zinc-900 rounded-lg overflow-hidden p-4">
            <h3 className="text-xl font-bold mb-4 text-red-500">FEATURED TRACK</h3>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="w-full md:w-1/3 aspect-square relative">
                <Image 
                  src="/zombie-dj.png" 
                  alt="Featured Track" 
                  fill
                  className="object-cover" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <button 
                    onClick={() => setCurrentTrack(featuredTrack)}
                    className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h4 className="text-2xl font-bold">{featuredTrack.title}</h4>
                <p className="text-gray-400 mt-2">
                  Hard Techno Mix featuring tracks from various artists. Experience the digital decay of sound through layered beats and distorted synthesizers.
                </p>
                <button 
                  onClick={() => setCurrentTrack(featuredTrack)}
                  className="mt-4 bg-red-600 hover:bg-red-700 py-2 px-6 text-white transition-colors"
                >
                  PLAY NOW
                </button>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestReleases.map((release) => (
              <div 
                key={release.id}
                className="bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 transition-colors"
              >
                <div className="aspect-square relative">
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity z-10">
                    <button 
                      onClick={() => setCurrentTrack({title: release.title, url: release.soundcloudUrl})}
                      className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition-colors"
                    >
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
                  <button 
                    onClick={() => setCurrentTrack({title: release.title, url: release.soundcloudUrl})}
                    className="mt-3 text-sm text-zinc-400 hover:text-white inline-block"
                  >
                    LISTEN NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Inline SoundCloud Player for selected track */}
        {currentTrack && (
          <div className="mt-8 mb-8 bg-zinc-900 rounded-lg overflow-hidden p-4 animate-fadeIn fixed bottom-0 left-0 right-0 z-40 md:relative md:bottom-auto md:left-auto md:right-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-red-500 truncate pr-2">NOW PLAYING: {currentTrack.title}</h3>
              <button 
                onClick={() => setCurrentTrack(null)} 
                className="text-zinc-400 hover:text-white flex-shrink-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative w-full aspect-video md:aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                scrolling="no" 
                frameBorder="no" 
                allow="autoplay" 
                src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(currentTrack.url)}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`}
              ></iframe>
            </div>
          </div>
        )}
        
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
