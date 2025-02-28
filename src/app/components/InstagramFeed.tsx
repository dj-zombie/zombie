'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Spinner from './Spinner';

// Define interface for Instagram posts
interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  timestamp: string;
  permalink: string;
}

// Enhanced Instagram data mock
// Since Instagram API requires authentication, we'll use this enhanced mock data
const zombieInstagramPosts: InstagramPost[] = [
  {
    id: '1',
    caption: 'Dropping beats at Techno Inferno #DJZombie #LiveSet',
    media_url: '/images/instagram/post_1.jpg',
    timestamp: '2025-02-20T20:00:00Z',
    permalink: 'https://www.instagram.com/deejayzombie/'
  },
  {
    id: '2',
    caption: 'New merch just arrived! Get it while it\'s hot #ZombieCrew',
    media_url: '/images/instagram/post_2.jpg',
    timestamp: '2025-02-15T18:30:00Z',
    permalink: 'https://www.instagram.com/deejayzombie/'
  },
  {
    id: '3',
    caption: 'Studio session with @producer_x. New tracks coming soon! #NewMusic',
    media_url: '/images/instagram/post_3.jpg',
    timestamp: '2025-02-10T14:20:00Z',
    permalink: 'https://www.instagram.com/deejayzombie/'
  },
  {
    id: '4',
    caption: 'Sold out show last night! Thanks to everyone who came out #TourLife',
    media_url: '/images/instagram/post_4.jpg', 
    timestamp: '2025-02-05T09:15:00Z',
    permalink: 'https://www.instagram.com/deejayzombie/'
  },
  {
    id: '5',
    caption: 'Behind the scenes at the video shoot #ComingSoon',
    media_url: '/images/instagram/post_5.jpg',
    timestamp: '2025-01-30T12:40:00Z',
    permalink: 'https://www.instagram.com/deejayzombie/'
  },
  {
    id: '6',
    caption: 'Vinyl release day. Limited edition available now! #Vinyl #Underground',
    media_url: '/images/instagram/post_6.jpg',
    timestamp: '2025-01-25T16:20:00Z',
    permalink: 'https://www.instagram.com/deejayzombie/'
  },
  {
    id: '7',
    caption: 'Just closed my set at Electric Forest. What a night! #ElectricForest',
    media_url: '/images/instagram/post_1.jpg',
    timestamp: '2025-01-20T22:15:00Z',
    permalink: 'https://www.instagram.com/deejayzombie/'
  },
  {
    id: '8',
    caption: 'New collaboration with @bass_master dropping next week #Collab',
    media_url: '/images/instagram/post_2.jpg',
    timestamp: '2025-01-15T17:45:00Z',
    permalink: 'https://www.instagram.com/deejayzombie/'
  },
  {
    id: '9',
    caption: 'Just announced! I\'ll be headlining Undead Festival this summer! #Festival',
    media_url: '/images/instagram/post_3.jpg',
    timestamp: '2025-01-10T14:30:00Z',
    permalink: 'https://www.instagram.com/deejayzombie/'
  },
  {
    id: '10',
    caption: 'DJ booth view from last night #DJLife',
    media_url: '/images/instagram/post_4.jpg',
    timestamp: '2025-01-05T11:20:00Z',
    permalink: 'https://www.instagram.com/deejayzombie/'
  },
  {
    id: '11',
    caption: 'Working on something special in the studio today... #StudioLife',
    media_url: '/images/instagram/post_5.jpg',
    timestamp: '2024-12-30T16:10:00Z',
    permalink: 'https://www.instagram.com/deejayzombie/'
  },
  {
    id: '12',
    caption: 'Holiday gift from the fans. Thank you for all your support! #ZombieCrew',
    media_url: '/images/instagram/post_6.jpg',
    timestamp: '2024-12-25T13:05:00Z',
    permalink: 'https://www.instagram.com/deejayzombie/'
  }
];

interface InstagramFeedProps {
  username: string;
  limit?: number;
}

export default function InstagramFeed({ username, limit = 6 }: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        setLoading(true);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // In a real implementation with proper authentication, 
        // you would connect to Instagram Graph API here.
        // For now, use our enhanced mock data
        setPosts(zombieInstagramPosts.slice(0, limit));
        setLoading(false);
      } catch (err) {
        console.error('Error loading Instagram feed:', err);
        setError('Failed to load Instagram feed');
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, [username, limit]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 border border-red-500 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 relative mr-4 rounded-full overflow-hidden border-2 border-red-500">
          <Image 
            src="/logo.png" 
            alt={username}
            width={48}
            height={48} 
            className="object-cover"
          />
        </div>
        <div>
          <Link 
            href={`https://www.instagram.com/${username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold hover:text-red-500 transition"
          >
            @{username}
          </Link>
          <p className="text-zinc-400 text-sm">Official Instagram</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <motion.div 
            key={post.id}
            className="relative aspect-square overflow-hidden rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              href={post.permalink} 
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10"
            >
              <span className="sr-only">View Instagram post</span>
            </Link>
            <div className="w-full h-full relative">
              <Image 
                src={post.media_url} 
                alt={post.caption}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover w-full h-full"
                priority={index < 6}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition duration-300 flex flex-col justify-end p-3">
              <p className="text-sm text-white line-clamp-3">
                {post.caption}
              </p>
              <p className="text-xs text-zinc-300 mt-1">
                {new Date(post.timestamp).toLocaleDateString()}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
