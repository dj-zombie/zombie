'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Spinner from './Spinner';

interface Product3DViewerProps {
  images: string[];
  productName: string;
  onClose: () => void;
}

export default function Product3DViewer({ images = [], productName, onClose }: Product3DViewerProps) {
  // State hooks grouped first
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [loading, setLoading] = useState(true);

  // Ref declaration
  const viewerRef = useRef<HTMLDivElement>(null);

  // Effect hooks grouped after
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isRotating || !images || images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 500);
    return () => clearInterval(interval);
  }, [isRotating, images]);

  // Handle mouse/touch interactions
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsRotating(false);
    setIsDragging(true);
    setStartX(e.clientX);
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsRotating(false);
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    if (Math.abs(deltaX) > 30) {
      const direction = deltaX > 0 ? -1 : 1;
      setCurrentIndex(prev => {
        if (!images || images.length === 0) return prev;
        const newIndex = prev + direction;
        if (newIndex < 0) return images.length - 1;
        if (newIndex >= images.length) return 0;
        return newIndex;
      });
      setStartX(e.clientX);
    }
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.touches[0].clientX - startX;
    if (Math.abs(deltaX) > 30) {
      const direction = deltaX > 0 ? -1 : 1;
      setCurrentIndex(prev => {
        if (!images || images.length === 0) return prev;
        const newIndex = prev + direction;
        if (newIndex < 0) return images.length - 1;
        if (newIndex >= images.length) return 0;
        return newIndex;
      });
      setStartX(e.touches[0].clientX);
    }
  };
  
  const handleDragEnd = () => {
    setIsDragging(false);
  };
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (viewerRef.current && !viewerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex(prev => (prev + 1) % images.length);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, images]);
  
  if (loading) {
    return <Spinner />;
  }

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-full p-8">
        <p className="text-white">No images available.</p>
      </div>
    );
  }
  
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div 
        ref={viewerRef}
        className="relative bg-zinc-900 p-4 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-zinc-400 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h3 className="text-xl font-bold mb-4 text-center">{productName}</h3>
        
        <div className="relative aspect-square w-full overflow-hidden mb-4">
          <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>
            {(images || []).map((img, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-300 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image
                  src={img}
                  alt={`${productName} view ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center space-x-2">
          <button 
            onClick={() => setIsRotating(!isRotating)} 
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded transition-colors"
          >
            {isRotating ? 'Pause Rotation' : 'Auto Rotate'}
          </button>
        </div>
        
        <div className="flex justify-center mt-4">
          {(images || []).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsRotating(false);
              }}
              className={`w-2 h-2 mx-1 rounded-full transition-colors ${
                index === currentIndex ? 'bg-red-500' : 'bg-zinc-600'
              }`}
              aria-label={`View ${index + 1}`}
            />
          ))}
        </div>
        
        <p className="text-center text-zinc-400 mt-4 text-sm">
          Drag to rotate or use arrow keys
        </p>
      </div>
    </div>
  );
}
