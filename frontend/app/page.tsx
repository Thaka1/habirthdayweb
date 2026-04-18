'use client';

import { useEffect, useRef, useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import BirthdayExperience from '@/components/BirthdayExperience';
import MusicPlayer from '@/components/MusicPlayer';
import { mockData } from '@/lib/mock';

type Phase = 'loading' | 'experience';

export default function HomePage() {
  const [phase, setPhase] = useState<Phase>('loading');
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    if (musicOn) {
      el.volume = 0.5;
      const p = el.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    } else {
      el.pause();
    }
  }, [musicOn]);

  const handleLoadingComplete = () => {
    setMusicOn(true);
    setPhase('experience');
  };

  return (
    <div data-testid="app-root">
      <audio
        ref={audioRef}
        src={mockData.music.url}
        loop
        preload="auto"
        data-testid="bg-audio"
      />

      {phase === 'loading' && <LoadingScreen onComplete={handleLoadingComplete} />}

      {phase === 'experience' && (
        <>
          <BirthdayExperience />
          <MusicPlayer
            audioRef={audioRef}
            musicOn={musicOn}
            setMusicOn={setMusicOn}
          />
        </>
      )}
    </div>
  );
}
