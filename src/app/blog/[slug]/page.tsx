'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPostById, type BlogPost } from '../blogData';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Get the blog post data based on the slug
    const blogPost = getBlogPostById(params.slug);
    
    if (blogPost) {
      setPost(blogPost);
    }
    
    setLoading(false);
  }, [params.slug]);
  
  // If post not found after loading, show 404
  if (!loading && !post) {
    notFound();
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
            <Link href="/blog" className="text-red-500 transition-colors">News</Link>
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
        <div className="fixed inset-0 bg-black z-50 flex flex-col">
          <div className="flex justify-between items-center px-6 py-4">
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
            <button onClick={() => setMobileMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center">
            <ul className="space-y-8 text-2xl">
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
                  href="/blog"
                  className="hover:text-red-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  NEWS
                </Link>
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

      {/* Blog Post Content */}
      {loading ? (
        <div className="pt-28 py-16 px-6 flex justify-center items-center min-h-screen">
          <div className="animate-pulse text-2xl">Loading...</div>
        </div>
      ) : post && (
        <article className="pt-28 pb-16 px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link href="/blog" className="inline-flex items-center text-zinc-400 hover:text-white mb-6 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>BACK TO ALL NEWS</span>
            </Link>
            
            {/* Post date */}
            <div className="mb-4">
              <span className="text-red-500 text-sm">{post.date}</span>
            </div>
            
            {/* Post title */}
            <h1 className="text-4xl md:text-6xl font-extrabold glitch-text mb-8">{post.title}</h1>
            
            {/* Post image */}
            <div className="mb-8 relative aspect-video w-full overflow-hidden">
              <Image 
                src={post.imageUrl} 
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Post content */}
            <div 
              className="prose prose-invert prose-red max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>

            {/* Share buttons */}
            <div className="mt-12 pt-6 border-t border-zinc-800">
              <h3 className="text-xl mb-4">Share this post</h3>
              <div className="flex space-x-4">
                <button className="bg-zinc-900 hover:bg-zinc-800 p-3 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button>
                <button className="bg-zinc-900 hover:bg-zinc-800 p-3 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </button>
                <button className="bg-zinc-900 hover:bg-zinc-800 p-3 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.443 5.3413C8.082 5.3413 8.673 5.1633 9.203 4.8333C9.711 4.4813 10.153 4.0053 10.511 3.4253C10.887 2.8453 11.182 2.1883 11.396 1.4783C11.588 0.7683 11.694 0.0363 11.694 -0.6937H7.055V5.3413H7.443ZM0 7.5003V22.9433H17.816V7.5003H0ZM15.452 20.8723H2.366V9.5703H15.452V20.8723ZM24 7.5003H18.178V22.9433H24V7.5003Z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Related posts teaser */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6 border-l-4 border-red-600 pl-4">MORE NEWS</h3>
              <Link href="/blog" className="inline-flex items-center text-red-500 hover:text-red-400 group">
                <span>VIEW ALL NEWS</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </article>
      )}
      
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
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
