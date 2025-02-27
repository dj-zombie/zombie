'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Spinner from './Spinner';

const merchandiseItems = [
  { id: 1, title: 'Tour Shirt (Front)', image: '/images/merch/tour-shirt-front.png', link: '/purchase/tour-shirt-front' },
  { id: 2, title: 'Tour Shirt (Back)', image: '/images/merch/tour-shirt-back.png', link: '/purchase/tour-shirt-back' },
  { id: 3, title: 'Hoodie', image: '/images/merch/hoodie.png', link: '/purchase/hoodie' },
  { id: 4, title: 'Cap', image: '/images/merch/cap.png', link: '/purchase/cap' }
];

const MerchCarousel = () => {
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
    <div className="w-full overflow-x-auto py-8 scroll-smooth snap-x snap-mandatory">
      <div className="flex space-x-6 px-4">
        {merchandiseItems.map((item) => (
          <motion.div
            key={item.id}
            className="relative min-w-[250px] snap-center bg-gray-800 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <Image 
              src={item.image}
              alt={item.title}
              width={250}
              height={250}
              className="object-cover"
            />
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-white text-lg font-bold mb-2">{item.title}</h2>
              <Link href={item.link}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Buy Now
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MerchCarousel;
