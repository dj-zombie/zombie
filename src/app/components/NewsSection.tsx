'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NewsSection() {
  return (
    <section className="py-20 px-6 bg-zinc-900/50" id="news">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glitch-text">LATEST NEWS_</h2>
            <p className="text-zinc-400 max-w-xl">Stay updated with the latest releases, tour information, and more.</p>
          </div>
          <Link href="/blog" className="mt-4 md:mt-0 inline-flex items-center text-red-500 hover:text-red-400 group">
            <span>VIEW ALL NEWS</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* News Item 1 */}
          <Link href="/blog/new-album-2025" className="group">
            <div className="relative aspect-video overflow-hidden mb-4 border border-zinc-800 group-hover:border-red-500 transition-colors">
              <Image 
                src="/album1.png" 
                alt="NEW ALBUM DROPS NEXT MONTH"
                fill
                className="object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>
            <div className="mb-2">
              <span className="text-red-500 text-sm">February 25, 2025</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">NEW ALBUM DROPS NEXT MONTH</h3>
            <p className="text-zinc-400 line-clamp-2">After months of late nights in the studio, I&apos;m excited to announce my new album &quot;Digital Resurrection&quot; will be available on all platforms March 30th.</p>
          </Link>

          {/* News Item 2 */}
          <Link href="/blog/european-tour" className="group">
            <div className="relative aspect-video overflow-hidden mb-4 border border-zinc-800 group-hover:border-red-500 transition-colors">
              <Image 
                src="/zombie-dj.png" 
                alt="EUROPEAN TOUR ANNOUNCED"
                fill
                className="object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>
            <div className="mb-2">
              <span className="text-red-500 text-sm">February 15, 2025</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">EUROPEAN TOUR ANNOUNCED</h3>
            <p className="text-zinc-400 line-clamp-2">The Undead Reanimation Tour hits Europe this summer with 15 dates across major cities. Tickets on sale March 1st.</p>
          </Link>

          {/* News Item 3 */}
          <Link href="/blog/remix-competition" className="group">
            <div className="relative aspect-video overflow-hidden mb-4 border border-zinc-800 group-hover:border-red-500 transition-colors">
              <Image 
                src="/album3.png" 
                alt="REMIX COMPETITION: &#39;DIGITAL DECAY&#39;"
                fill
                className="object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>
            <div className="mb-2">
              <span className="text-red-500 text-sm">January 30, 2025</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">REMIX COMPETITION: &quot;DIGITAL DECAY&quot;</h3>
            <p className="text-zinc-400 line-clamp-2">Want to put your own spin on my latest single? Submit your remix for a chance to be featured on the official remix EP.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
