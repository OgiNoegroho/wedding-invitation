"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.6;

    const play = async () => {
      try {
        await audio.play();
      } catch {
        // autoplay blocked (normal di browser)
      }
    };

    play();
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music.mp3"
      loop
      preload="auto"
    />
  );
}
