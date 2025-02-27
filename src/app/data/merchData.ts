export interface MerchItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'hoodie' | 'shirt' | 'mask' | 'sticker' | 'accessory';
  images: string[];
  colors: {
    name: string;
    hex: string;
  }[];
  sizes?: string[];
  featured: boolean;
  new: boolean;
  soldOut: boolean;
}

export const merchItems: MerchItem[] = [
  {
    id: 'digital-resurrection-hoodie',
    name: 'DIGITAL RESURRECTION HOODIE',
    price: 65,
    description: 'Heavy-duty black hoodie with glow-in-the-dark print featuring the album artwork from "Digital Resurrection". Oversized fit with distressed details.',
    category: 'hoodie',
    images: [
      '/images/merch/hoodie-front.png',
      '/images/merch/hoodie-back.png',
      '/images/merch/hoodie-detail.png'
    ],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#242424' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
    new: true,
    soldOut: false
  },
  {
    id: 'zombie-skull-tee',
    name: 'ZOMBIE SKULL TEE',
    price: 35,
    description: 'Black cotton t-shirt with large skull print on front. Glitch effect details and "ZOMBIE" text on back. Standard fit.',
    category: 'shirt',
    images: [
      '/images/merch/tshirt-front.png',
      '/images/merch/tshirt-back.png'
    ],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Red', hex: '#7f0000' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: true,
    new: false,
    soldOut: false
  },
  {
    id: 'cyber-face-mask',
    name: 'CYBER FACE MASK',
    price: 25,
    description: 'LED-enhanced face mask with sound-reactive lighting pattern. USB rechargeable with 8-hour battery life. Perfect for raves.',
    category: 'mask',
    images: [
      '/images/merch/mask-front.png',
      '/images/merch/mask-side.png',
      '/images/merch/mask-detail.png'
    ],
    colors: [
      { name: 'Black', hex: '#000000' }
    ],
    sizes: ['One Size'],
    featured: true,
    new: true,
    soldOut: false
  },
  {
    id: 'digital-decay-vinyl',
    name: 'DIGITAL DECAY VINYL LP',
    price: 30,
    description: 'Limited edition 180g vinyl with holographic cover art. Includes download code and exclusive digital bonus tracks.',
    category: 'accessory',
    images: [
      '/images/merch/vinyl-front.png',
      '/images/merch/vinyl-back.png'
    ],
    colors: [
      { name: 'Standard', hex: '#000000' }
    ],
    featured: false,
    sizes: ['One Size'],
    new: true,
    soldOut: false
  },
  {
    id: 'glitch-sticker-pack',
    name: 'GLITCH STICKER PACK',
    price: 12,
    description: 'Set of 5 holographic stickers featuring zombie glitch designs. Water and weather resistant.',
    category: 'sticker',
    images: [
      '/images/merch/stickers-front.png'
    ],
    colors: [
      { name: 'Holographic', hex: '#c0c0c0' }
    ],
    featured: false,
    sizes: ['One Size'],
    new: false,
    soldOut: false
  },
  {
    id: 'circuit-beanie',
    name: 'CIRCUIT PATTERN BEANIE',
    price: 28,
    description: 'Black beanie with embroidered circuit pattern and small ZOMBIE logo. One size fits most.',
    category: 'accessory',
    images: [
      '/images/merch/beanie-front.png',
      '/images/merch/beanie-side.png'
    ],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Grey', hex: '#2b2b2b' }
    ],
    sizes: ['One Size'],
    featured: false,
    new: false,
    soldOut: false
  },
  {
    id: 'undead-cargo-pants',
    name: 'UNDEAD CARGO PANTS',
    price: 85,
    description: 'Black cargo pants with reflective zombie pattern details. Multiple pockets and adjustable hem.',
    category: 'accessory',
    images: [
      '/images/merch/pants-front.png',
      '/images/merch/pants-back.png',
      '/images/merch/pants-detail.png'
    ],
    colors: [
      { name: 'Black', hex: '#000000' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
    new: false,
    soldOut: false
  },
  {
    id: 'resurrection-tour-shirt',
    name: 'RESURRECTION TOUR SHIRT',
    price: 40,
    description: 'Tour shirt featuring all European tour dates on the back. Front features minimalist zombie logo design.',
    category: 'shirt',
    images: [
      '/images/merch/tour-shirt-front.png',
      '/images/merch/tour-shirt-back.png'
    ],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#f5f5f5' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    featured: false,
    new: true,
    soldOut: false
  }
];
