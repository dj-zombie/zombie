'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Spinner from '../components/Spinner';

// Sample blog posts - these would typically come from a CMS or API
const blogPosts = [
  {
    id: 'new-album-2025',
    title: 'NEW ALBUM DROPS NEXT MONTH',
    date: 'February 25, 2025',
    excerpt: 'After months of late nights in the studio, I\'m excited to announce my new album "Digital Resurrection" will be available on all platforms March 30th.',
    content: 'After months of late nights in the studio, I\'m excited to announce my new album "Digital Resurrection" will be available on all platforms March 30th. This 12-track journey represents my evolution as an artist and pushes the boundaries of electronic music even further than before. Special thanks to everyone who supported this creative process. Pre-orders available now.',
    imageUrl: '/album-cover.jpg',
  },
  {
    id: 'european-tour',
    title: 'EUROPEAN TOUR ANNOUNCED',
    date: 'February 15, 2025',
    excerpt: 'The Undead Reanimation Tour hits Europe this summer with 15 dates across major cities. Tickets on sale March 1st.',
    content: 'The Undead Reanimation Tour hits Europe this summer with 15 dates across major cities including Berlin, London, Paris, Amsterdam, and more. This will be my most ambitious live show yet, featuring new visuals and unreleased tracks from the upcoming album. Early access tickets available to fan club members February 25th, general sale March 1st.',
    imageUrl: '/tour-image.jpg',
  },
  {
    id: 'remix-competition',
    title: 'REMIX COMPETITION: "DIGITAL DECAY"',
    date: 'January 30, 2025',
    excerpt: 'Want to put your own spin on my latest single? Submit your remix for a chance to be featured on the official remix EP.',
    content: 'I\'m launching a remix competition for my track "Digital Decay." Download the stems from my website and submit your remix by April 15th. The winning tracks will be featured on the official remix EP releasing in May, plus the grand prize winner will receive studio gear and a chance to collaborate on a future project. Full rules and submission details available on the competition page.',
    imageUrl: '/remix-comp.jpg',
  }
];

export default function Blog() {
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
    <main className="bg-black text-white min-h-screen relative">
      {/* Fire video background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black bg-opacity-70 z-1"></div>
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
      <Header />

      {/* Blog Header */}
      <section className="pt-28 pb-12 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold glitch-text mb-6">
            NEWS
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Latest announcements, releases, and tour updates. Stay connected with the undead.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-8 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {blogPosts.map(post => (
              <article key={post.id} className="border border-red-800/30 bg-black/60 backdrop-blur-sm p-6 hover:border-red-600/50 transition-all duration-300">
                <div className="mb-4">
                  <span className="text-red-500 text-sm">{post.date}</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 digital-glitch">{post.title}</h2>
                <div className="prose prose-invert max-w-none mb-6">
                  <p>{post.content}</p>
                </div>
                <div className="flex justify-end">
                  <Link href={`/blog/${post.id}`} className="text-red-500 hover:text-red-400 inline-flex items-center group">
                    <span>READ FULL ARTICLE</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-6 bg-zinc-900/60 backdrop-blur-sm relative z-10 mt-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 digital-glitch">JOIN THE UNDEAD</h2>
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to my newsletter for exclusive content, pre-sale tickets, and more.
          </p>
          <form className="max-w-lg">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="bg-black/70 border border-red-900/50 focus:border-red-500 text-white px-4 py-3 flex-grow focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-red-800 hover:bg-red-700 text-white px-6 py-3 transition-colors font-medium"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} ZOMBIE. All Rights Reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="#" className="text-zinc-500 hover:text-red-500">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.772 1.153 4.902 4.902 0 01-1.153 1.772c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.153-1.772 4.902 4.902 0 01-1.772-1.153c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-zinc-500 hover:text-red-500">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-zinc-500 hover:text-red-500">
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 011.772 1.153 2.504 2.504 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a2.505 2.505 0 0 1-1.768 1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
