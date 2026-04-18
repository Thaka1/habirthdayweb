import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import PasswordGate from './components/PasswordGate';
import LoadingScreen from './components/LoadingScreen';
import BirthdayExperience from './components/BirthdayExperience';
import MusicPlayer from './components/MusicPlayer';
import { mockData } from './mock';

/**
 * Phases:
 *  - 'gate'   -> PasswordGate (user interaction unlocks autoplay)
 *  - 'loading' -> LoadingScreen animation
 *  - 'experience' -> Scene-based birthday experience
 */
function App() {
  const [phase, setPhase] = useState('gate');
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  const handleUnlock = () => {
    // User has interacted: we can legally autoplay audio.
    setMusicOn(true);
    setPhase('loading');
  };

  // Attempt to play audio as soon as musicOn flips true
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

  return (
    <div className="App" data-testid="app-root">
      {/* Global background audio element */}
      <audio
        ref={audioRef}
        src={mockData.music.url}
        loop
        preload="auto"
        data-testid="bg-audio"
      />

      {phase === 'gate' && (
        <PasswordGate onUnlock={handleUnlock} />
      )}

      {phase === 'loading' && (
        <LoadingScreen onComplete={() => setPhase('experience')} />
      )}

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

export default App;
