export type BlogPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 'new-album-2025',
    title: 'NEW ALBUM DROPS NEXT MONTH',
    date: 'February 25, 2025',
    excerpt: 'After months of late nights in the studio, I\'m excited to announce my new album "Digital Resurrection" will be available on all platforms March 30th.',
    content: `
      <p>After months of late nights in the studio, I'm excited to announce my new album "Digital Resurrection" will be available on all platforms March 30th.</p>
      
      <p>This 12-track journey represents my evolution as an artist and pushes the boundaries of electronic music even further than before. Special thanks to everyone who supported this creative process.</p>
      
      <h3>TRACK LIST:</h3>
      <ol>
        <li>Digital Awakening</li>
        <li>Neural Interface</li>
        <li>Beyond the Void</li>
        <li>Error Reading ROM</li>
        <li>Silent Scream Machine</li>
        <li>Corrupted Memory</li>
        <li>Ghost in the Code</li>
        <li>Bandwidth Overdrive</li>
        <li>Binary Decay</li>
        <li>System Failure</li>
        <li>Reanimation Protocol</li>
        <li>Digital Afterlife</li>
      </ol>
      
      <p>Pre-orders for limited edition vinyl and exclusive merchandise are available now on my website. The first 500 orders will receive a signed poster and access to exclusive behind-the-scenes content from the recording process.</p>
      
      <p>I'll be premiering several tracks during my upcoming European tour, so check the tour dates if you want to be among the first to experience the new material live.</p>
    `,
    imageUrl: '/album1.png',
  },
  {
    id: 'european-tour',
    title: 'EUROPEAN TOUR ANNOUNCED',
    date: 'February 15, 2025',
    excerpt: 'The Undead Reanimation Tour hits Europe this summer with 15 dates across major cities. Tickets on sale March 1st.',
    content: `
      <p>The Undead Reanimation Tour hits Europe this summer with 15 dates across major cities including Berlin, London, Paris, Amsterdam, and more.</p>
      
      <p>This will be my most ambitious live show yet, featuring new visuals and unreleased tracks from the upcoming album. Early access tickets available to fan club members February 25th, general sale March 1st.</p>
      
      <h3>TOUR DATES:</h3>
      <ul>
        <li><strong>JUNE 10</strong> - Berghain, Berlin, DE</li>
        <li><strong>JUNE 12</strong> - Fabric, London, UK</li>
        <li><strong>JUNE 14</strong> - Rex Club, Paris, FR</li>
        <li><strong>JUNE 16</strong> - Shelter, Amsterdam, NL</li>
        <li><strong>JUNE 18</strong> - Fuse, Brussels, BE</li>
        <li><strong>JUNE 20</strong> - Tresor, Berlin, DE</li>
        <li><strong>JUNE 22</strong> - Pacha, Ibiza, ES</li>
        <li><strong>JUNE 24</strong> - Goa Club, Rome, IT</li>
        <li><strong>JUNE 26</strong> - Nitsa, Barcelona, ES</li>
        <li><strong>JUNE 28</strong> - Flex, Vienna, AT</li>
        <li><strong>JUNE 30</strong> - Culture Box, Copenhagen, DK</li>
        <li><strong>JULY 2</strong> - Hive, Zurich, CH</li>
        <li><strong>JULY 4</strong> - The Warehouse Project, Manchester, UK</li>
        <li><strong>JULY 6</strong> - District 8, Dublin, IE</li>
        <li><strong>JULY 8</strong> - Printworks, London, UK</li>
      </ul>
      
      <p>VIP packages will be available for all shows, including meet & greet, exclusive merchandise, and prime viewing areas. Join the fan club before February 20th to secure your early access to tickets.</p>
      
      <p>This tour will feature a completely redesigned stage setup with custom visuals by renowned digital artist NEXUS-7 and an immersive sound system that will truly bring the digital resurrection concept to life. Don't miss this unique experience.</p>
    `,
    imageUrl: '/zombie-dj.png',
  },
  {
    id: 'remix-competition',
    title: 'REMIX COMPETITION: "DIGITAL DECAY"',
    date: 'January 30, 2025',
    excerpt: 'Want to put your own spin on my latest single? Submit your remix for a chance to be featured on the official remix EP.',
    content: `
      <p>I'm launching a remix competition for my track "Digital Decay." Download the stems from my website and submit your remix by April 15th.</p>
      
      <p>The winning tracks will be featured on the official remix EP releasing in May, plus the grand prize winner will receive studio gear and a chance to collaborate on a future project.</p>
      
      <h3>PRIZES:</h3>
      <ul>
        <li><strong>GRAND PRIZE:</strong> Feature on the official remix EP, custom DJ rig worth $5,000, and a collaboration opportunity on my next release</li>
        <li><strong>RUNNERS-UP (4):</strong> Feature on the official remix EP and limited edition merchandise package</li>
        <li><strong>HONORABLE MENTIONS (10):</strong> Digital release on my SoundCloud channel and social media promotion</li>
      </ul>
      
      <h3>HOW TO ENTER:</h3>
      <ol>
        <li>Download the stem pack from <a href="#">zombiedj.com/remix-competition</a></li>
        <li>Create your remix in any style or genre</li>
        <li>Upload to SoundCloud with the tag #ZOMBIEdigitaldecay</li>
        <li>Fill out the submission form on my website</li>
      </ol>
      
      <p>I'm especially looking for creative and unexpected interpretations of the track. Don't feel constrained by genre - I want to hear your unique vision. The original track blends techno, industrial, and ambient elements, but your remix can take it in any direction.</p>
      
      <p>A panel of judges including myself and guest producers from the electronic music scene will select the winners. Results will be announced on May 1st, with the EP release scheduled for May 15th.</p>
    `,
    imageUrl: '/album3.png',
  }
];

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}
