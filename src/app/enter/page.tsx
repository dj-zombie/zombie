'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import InstagramFeed from '../components/InstagramFeed';

export default function Home() {
  const [currentTrack, setCurrentTrack] = useState<null | {title: string, url: string}>(null);
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
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between p-5 ${
                  index !== tourDates.length - 1 ? "border-b border-zinc-800" : ""
                } hover:bg-zinc-800 transition-colors`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-8 mb-4 sm:mb-0">
                  <div className="text-xl font-mono font-bold w-24 mb-2 sm:mb-0">{event.date}</div>
                  <div>
                    <div className="font-bold text-lg">{event.venue}</div>
                    <div className="text-zinc-400">{event.location}</div>
                  </div>
                </div>
                <div className="mt-3 sm:mt-0">
                  <button className="w-full sm:w-auto border border-white hover:bg-white hover:text-black transition-colors py-2 px-6 rounded-full">
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
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-black border border-zinc-700 sm:rounded-l-full rounded-t-full sm:rounded-r-none py-3 px-6 w-full focus:outline-none focus:border-red-600 text-center sm:text-left"
            />
            <button className="bg-red-600 hover:bg-red-700 sm:rounded-r-full rounded-b-full sm:rounded-l-none py-3 px-6 transition-colors whitespace-nowrap mt-2 sm:mt-0">
              SUBSCRIBE
            </button>
          </div>
        </section>
        
        {/* Social Media Links */}
        <section className="flex justify-center space-x-6 mb-16">
          <a 
            href="https://open.spotify.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 hover:bg-zinc-800 p-4 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"/>
            </svg>
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 hover:bg-zinc-800 p-4 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
            </svg>
          </a>
          <a 
            href="https://music.apple.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 hover:bg-zinc-800 p-4 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white" viewBox="0 0 16 16">
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
            </svg>
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 hover:bg-zinc-800 p-4 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-1.415-1.42c-.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 hover:bg-zinc-800 p-4 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
          </a>
          <a 
            href="https://soundcloud.com/dj-zombie-az" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 hover:bg-zinc-800 p-4 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white" viewBox="0 0 16 16">
              <path d="M6.825 12.374v-5.7c.108-.05.216-.092.316-.166-.024.127-.043.25-.043.374v5.492H6.825zM7.399 6.302c.108-.089.2-.189.316-.282-.216.084-.399.242-.483.466.043.017.141-.043.167-.184zM8.116 5.7c.158-.2.25-.391.249-.5-.258.109-.358.342-.358.483.025.042.05.042.109.017zM9.25 11.059v-4.2c.141-.016.282-.016.425-.016.183 0 .358 0 .541.016v4.2h-.966zM9.467 6.092c.067-.341.158-.675.2-1.007-.283.075-.483.283-.65.5.192.15.334.325.45.507zM11.5 11.060v-4.2c.95-.017 1.9.016 2.85-.017v4.108c0 .358-.2.483-.541.525-.242 0-.483.017-.733.017-.5 0-.967-.025-1.459-.025a.344.344 0 0 1-.117-.408z"/>
              <path d="M0 10.625c0 .75.367 1.417.967 1.75.6.334 1.267.334 1.892 0 .616-.334.958-1 .958-1.75 0-.75-.35-1.417-.958-1.75-.625-.334-1.292-.334-1.892 0-.6.333-.967 1-.967 1.75zm2.875.534a.45.45 0 1 1 0-.9.45.45 0 0 1 0 .9zm1.833.683a.37.37 0 0 1-.366-.375v-1.684a.37.37 0 0 1 .366-.375.37.37 0 0 1 .367.375v1.684a.37.37 0 0 1-.367.375zm.734-1.334a.37.37 0 0 1-.367-.375c0-.4.175-.733.459-.975.275-.25.658-.4 1.058-.4s.784.15 1.059.4c.283.242.458.575.458.975a.37.37 0 0 1-.367.375.37.37 0 0 1-.366-.375c0-.2-.092-.383-.242-.5a.967.967 0 0 0-.542-.2.967.967 0 0 0-.542.2c-.15.117-.241.3-.241.5a.37.37 0 0 1-.367.375zm3.25.65a.37.37 0 0 1-.366-.374v-1.684c0-.199.166-.374.366-.374a.37.37 0 0 1 .367.374v1.684a.37.37 0 0 1-.367.374z"/>
            </svg>
          </a>
        </section>
        
        {/* Instagram Feed */}
        <section className="my-20 relative z-10">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 glitch-text">INSTAGRAM</h2>
            <div className="mb-8">
              <InstagramFeed username="deejayzombie" limit={6} />
            </div>
            <div className="text-center mt-8">
              <Link 
                href="/gallery" 
                className="inline-block px-6 py-2 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition duration-300 rounded-sm text-sm uppercase tracking-wider"
              >
                View Gallery
              </Link>
            </div>
          </div>
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
