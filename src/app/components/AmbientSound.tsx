'use client';

import { useState, useEffect, useRef } from 'react';

interface AmbientSoundProps {
  initialVolume?: number; // 0.0 to 1.0
  autoPlay?: boolean;
}

export default function AmbientSound({ 
  initialVolume = 0.3, 
  autoPlay = true 
}: AmbientSoundProps) {
  const [isMuted, setIsMuted] = useState(!autoPlay);
  const [volume, setVolume] = useState(initialVolume);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const glitchAudioRef = useRef<HTMLAudioElement | null>(null);
  const glitchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Play random glitch sound at random intervals
  const playRandomGlitch = () => {
    if (glitchAudioRef.current && !isMuted) {
      // Reset audio to beginning if it's already playing
      glitchAudioRef.current.currentTime = 0;
      
      // Randomize volume for more variation (between 50-100% of set volume)
      const randomVolume = volume * (0.5 + Math.random() * 0.5);
      glitchAudioRef.current.volume = randomVolume;
      
      glitchAudioRef.current.play();
    }
    
    // Schedule next glitch (between 5-15 seconds)
    const nextInterval = 5000 + Math.random() * 10000;
    glitchTimeoutRef.current = setTimeout(playRandomGlitch, nextInterval);
  };

  // Initialize audio elements and start playback
  useEffect(() => {
    // Create ambient hum audio
    audioRef.current = new Audio('/sounds/ambient-hum.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    
    // Create glitch sound audio
    glitchAudioRef.current = new Audio('/sounds/glitch-sound.mp3');
    glitchAudioRef.current.volume = volume;
    
    // Start ambient loop if autoPlay
    if (autoPlay && audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio autoplay was prevented:', e));
    }
    
    // Start glitch sounds
    playRandomGlitch();
    
    // Cleanup function
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      
      if (glitchAudioRef.current) {
        glitchAudioRef.current.pause();
        glitchAudioRef.current = null;
      }
      
      if (glitchTimeoutRef.current) {
        clearTimeout(glitchTimeoutRef.current);
      }
    };
  }, [autoPlay, playRandomGlitch, volume]);

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Toggle mute function
  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(e => console.log('Audio play was prevented:', e));
        audioRef.current.volume = volume;
      } else {
        audioRef.current.volume = 0;
      }
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center bg-black/80 backdrop-blur-sm px-3 py-2 rounded-full border border-zinc-800">
      <button
        onClick={toggleMute}
        className="text-zinc-400 hover:text-red-500 transition-colors"
        aria-label={isMuted ? "Unmute ambient sound" : "Mute ambient sound"}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </button>
      
      {!isMuted && (
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="ml-2 w-16 h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
          aria-label="Volume control"
        />
      )}
    </div>
  );
}
