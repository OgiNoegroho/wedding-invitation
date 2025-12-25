"use client";

import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.6;

    // Check if music should be playing from localStorage
    const shouldPlay = localStorage.getItem("wedding-music-playing") === "true";

    const play = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        localStorage.setItem("wedding-music-playing", "true");
      } catch (error) {
        // autoplay blocked, wait for user interaction
        const startOnInteraction = () => {
          audio.play().then(() => {
            setIsPlaying(true);
            localStorage.setItem("wedding-music-playing", "true");
          }).catch(() => {});
          document.removeEventListener("click", startOnInteraction);
          document.removeEventListener("touchstart", startOnInteraction);
        };

        document.addEventListener("click", startOnInteraction);
        document.addEventListener("touchstart", startOnInteraction);
      }
    };

    // Auto-play if music was previously playing or on first visit
    if (shouldPlay || localStorage.getItem("wedding-music-playing") === null) {
      play();
    }

    // Save state when audio plays/pauses
    const handlePlay = () => {
      setIsPlaying(true);
      localStorage.setItem("wedding-music-playing", "true");
    };

    const handlePause = () => {
      setIsPlaying(false);
      localStorage.setItem("wedding-music-playing", "false");
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
      />
      {/* Music control button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
          </svg>
        )}
      </button>
    </>
  );
}
