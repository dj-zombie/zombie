'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import { blogPosts } from './blogData';

export default function Blog() {
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

      {/* Blog Content */}
      <div className="pt-28 pb-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-12 glitch-text">NEWS_ARCHIVE</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group">
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="relative aspect-video overflow-hidden mb-4 border border-zinc-800 group-hover:border-red-500 transition-colors">
                    <Image 
                      src={post.imageUrl} 
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  </div>
                  <div className="mb-2">
                    <span className="text-red-500 text-sm">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">{post.title}</h2>
                  <p className="text-zinc-400 line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 inline-flex items-center text-red-500 group-hover:translate-x-2 transition-transform">
                    <span>READ MORE</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          
          {/* Subscription Form */}
          <div className="mt-20 bg-zinc-900/70 backdrop-blur-sm p-8 rounded-lg border border-zinc-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-2">STAY CONNECTED</h3>
                <p className="text-zinc-400">Subscribe to get the latest news, tour dates, and releases directly to your inbox.</p>
              </div>
              <form className="md:w-1/2 w-full">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 flex-grow"
                    required
                  />
                  <button 
                    type="submit" 
                    className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
                  >
                    SUBSCRIBE
                  </button>
                </div>
                <p className="text-zinc-500 text-sm mt-3">No spam. Unsubscribe anytime.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} ZOMBIE. All Rights Reserved.
          </p>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="#" className="text-zinc-500 hover:text-red-500">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
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
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
