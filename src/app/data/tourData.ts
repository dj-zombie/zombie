export interface TourDate {
  id: string;
  city: string;
  country: string;
  venue: string;
  date: string;
  time: string;
  ticketLink: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  soldOut: boolean;
  highlights?: string[];
}

export const tourDates: TourDate[] = [
  {
    id: 'berlin-2025',
    city: 'Berlin',
    country: 'Germany',
    venue: 'Berghain',
    date: 'June 12, 2025',
    time: '11:00 PM',
    ticketLink: 'https://tickets.example.com/zombie-berlin',
    coordinates: {
      lat: 52.5200,
      lng: 13.4050
    },
    soldOut: false,
    highlights: ['Special guest: Techno Phantom', 'Extended 3-hour set']
  },
  {
    id: 'london-2025',
    city: 'London',
    country: 'UK',
    venue: 'Printworks',
    date: 'June 15, 2025',
    time: '10:00 PM',
    ticketLink: 'https://tickets.example.com/zombie-london',
    coordinates: {
      lat: 51.5074,
      lng: -0.1278
    },
    soldOut: false,
    highlights: ['Album showcase', 'Limited VIP meet & greet']
  },
  {
    id: 'amsterdam-2025',
    city: 'Amsterdam',
    country: 'Netherlands',
    venue: 'Shelter',
    date: 'June 18, 2025',
    time: '11:30 PM',
    ticketLink: 'https://tickets.example.com/zombie-amsterdam',
    coordinates: {
      lat: 52.3676,
      lng: 4.9041
    },
    soldOut: true,
    highlights: ['B2B with DeadCode', 'Exclusive merch']
  },
  {
    id: 'paris-2025',
    city: 'Paris',
    country: 'France',
    venue: 'Rex Club',
    date: 'June 20, 2025',
    time: '11:00 PM',
    ticketLink: 'https://tickets.example.com/zombie-paris',
    coordinates: {
      lat: 48.8566,
      lng: 2.3522
    },
    soldOut: false,
    highlights: ['Album release party', 'Visual art installation']
  },
  {
    id: 'barcelona-2025',
    city: 'Barcelona',
    country: 'Spain',
    venue: 'Razzmatazz',
    date: 'June 22, 2025',
    time: '10:30 PM',
    ticketLink: 'https://tickets.example.com/zombie-barcelona',
    coordinates: {
      lat: 41.3851,
      lng: 2.1734
    },
    soldOut: false,
    highlights: ['Festival pre-party', 'Custom light show']
  },
  {
    id: 'zurich-2025',
    city: 'Zurich',
    country: 'Switzerland',
    venue: 'Hive Club',
    date: 'June 25, 2025',
    time: '11:00 PM',
    ticketLink: 'https://tickets.example.com/zombie-zurich',
    coordinates: {
      lat: 47.3769,
      lng: 8.5417
    },
    soldOut: false,
    highlights: ['Intimate venue', 'Underground after-party']
  },
  {
    id: 'prague-2025',
    city: 'Prague',
    country: 'Czech Republic',
    venue: 'Ankali',
    date: 'June 27, 2025',
    time: '11:30 PM',
    ticketLink: 'https://tickets.example.com/zombie-prague',
    coordinates: {
      lat: 50.0755,
      lng: 14.4378
    },
    soldOut: false,
    highlights: ['Warehouse setting', 'All night long set']
  },
  {
    id: 'vienna-2025',
    city: 'Vienna',
    country: 'Austria',
    venue: 'Grelle Forelle',
    date: 'June 29, 2025',
    time: '11:00 PM',
    ticketLink: 'https://tickets.example.com/zombie-vienna',
    coordinates: {
      lat: 48.2082,
      lng: 16.3738
    },
    soldOut: false,
    highlights: ['Tour finale', 'Full album playthrough']
  }
];
