'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'; 
import { merchItems } from '../data/merchData';
import Product3DViewer from '../components/Product3DViewer';
import Header from '../components/Header';

export default function MerchPage() {
  const [activeProduct, setActiveProduct] = useState(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const scrollContainerRef = useRef(null);
  
  // Handle horizontal scrolling
  const handleWheel = (e) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += e.deltaY;
      // Prevent vertical scrolling when scrolling horizontally
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
      }
    }
  };
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    }
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);
  
  const openViewer = (product) => {
    setActiveProduct(product);
    setIsViewerOpen(true);
  };
  
  const closeViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <main className="bg-black text-white min-h-screen relative overflow-x-hidden">
      {/* Ambient visual effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-scanlines opacity-30"></div>
        <div className="absolute inset-0 bg-noise opacity-5"></div>
      </div>
      
      <Header />
      
      {/* Main content container */}
      <div className="pt-32 pb-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-extrabold glitch-text mb-4">WEAR_THE_INFECTION</h1>
            <p className="text-xl text-red-500">LIMITED EDITION UNDEAD APPAREL</p>
          </div>
          
          {/* Horizontal scrollable product container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex-none w-1/4 md:w-1/6 pr-8">
              <div className="h-full flex items-center">
                <div className="text-4xl font-bold text-red-500 transform -rotate-90 origin-center whitespace-nowrap">
                  SCROLL &rarr;
                </div>
              </div>
            </div>
            
            {/* Product grid */}
            {(merchItems || []).map((product) => (
              <div 
                key={product.id}
                className="flex-none w-4/5 md:w-2/5 lg:w-1/4 px-4 snap-start"
              >
                <div 
                  className="bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 hover:border-red-500 group transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col"
                  onClick={() => openViewer(product)}
                >
                  {/* Product image */}
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* View in 3D badge */}
                    <div className="absolute bottom-4 right-4 bg-red-500 px-3 py-1 text-xs font-semibold">
                      VIEW IN 3D
                    </div>
                    
                    {/* Overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Product details */}
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-red-500 mb-1">{product.name}</h3>
                    <p className="text-sm text-zinc-400 mb-4 flex-grow">{product.description}</p>
                    <div className="flex justify-between items-end">
                      <div className="text-green-500 font-bold text-xl">${product.price}</div>
                      {product.soldOut ? (
                        <span className="text-zinc-500">SOLD OUT</span>
                      ) : (
                        <span className="text-zinc-400 text-sm">{product.inStock} LEFT</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* End spacer */}
            <div className="flex-none w-1/6 md:w-1/12"></div>
          </div>
        </div>
      </div>
      
      {/* 3D Product Viewer Modal */}
      {isViewerOpen && activeProduct && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="w-full max-w-4xl bg-zinc-900/90 border border-red-500 shadow-neon p-4 md:p-8 relative">
            <button 
              onClick={closeViewer}
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-square">
                <Product3DViewer product={activeProduct} />
              </div>
              
              <div className="py-4">
                <h2 className="text-3xl font-bold text-red-500 mb-2">{activeProduct.name}</h2>
                <div className="text-2xl text-green-500 font-bold mb-4">${activeProduct.price}</div>
                <p className="text-zinc-300 mb-6">{activeProduct.description}</p>
                
                {activeProduct.features && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">Features:</h3>
                    <ul className="list-disc pl-5 text-zinc-400 space-y-1">
                      {activeProduct.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Available Sizes:</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeProduct.sizes.map((size) => (
                      <div 
                        key={size} 
                        className={`
                          px-4 py-2 border 
                          ${size === 'M' || size === 'L' ? 'border-red-500 text-red-500' : 'border-zinc-700 text-zinc-400'} 
                          hover:border-red-500 hover:text-red-500 transition-colors cursor-pointer
                        `}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  {activeProduct.soldOut ? (
                    <button 
                      disabled
                      className="w-full py-3 bg-zinc-800 text-zinc-500 font-bold cursor-not-allowed"
                    >
                      SOLD OUT
                    </button>
                  ) : (
                    <button 
                      className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold transition-colors"
                    >
                      ADD TO CART
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
