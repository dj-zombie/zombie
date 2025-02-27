import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

export default function MusicPlayer() {
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
    <div className="relative">
      {/* Neon grid visualizer */}
      <div className="absolute inset-0 bg-neon-grid z-0"></div>

      {/* Embedded Spotify/SoundCloud player */}
      <div className="relative z-10 bg-black border-4 border-neon p-4">
        {/* Example embedded player */}
        <iframe
          src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
          width="100%"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
          className="w-full h-64"
        ></iframe>
      </div>

      {/* Audio spectrum visualizer */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-audio-spectrum z-10"></div>
    </div>
  );
}
