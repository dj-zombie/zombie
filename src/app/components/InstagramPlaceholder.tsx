'use client';

import React from 'react';
import Image from 'next/image';

interface InstagramPlaceholderProps {
  index: number;
}

// This component generates colored placeholder images for the Instagram feed
// since we don't have real Instagram images
export default function InstagramPlaceholder({ index }: InstagramPlaceholderProps) {
  // Create a list of dark, moody colors for our DJ theme
  const colors = [
    '#1a1a1a', // Almost black
    '#330000', // Very dark red
    '#000033', // Very dark blue
    '#220022', // Very dark purple
    '#002200', // Very dark green
    '#332200', // Very dark amber
  ];
  
  // Use modulo to cycle through colors
  const bgColor = colors[index % colors.length];
  
  return (
    <div 
      className="w-full h-full flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="text-center">
        <Image 
          src="/logo.png" 
          alt="DJ Zombie Logo" 
          width={80} 
          height={30}
          className="opacity-30 mx-auto mb-2"
        />
        <p className="text-white text-xs opacity-50">ZOMBIE</p>
      </div>
    </div>
  );
}
