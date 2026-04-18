import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import BirthdayExperience from './components/BirthdayExperience';
import MusicPlayer from './components/MusicPlayer';
import { mockData } from './mock';

/**
 * Phases:
 *  - 'loading'    -> LoadingScreen animation (first paint, user-gesture via click-to-enter)
 *  - 'experience' -> Scene-based birthday experience
 */
function App() {
  const [phase, setPhase] = useState('loading');
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  // Attempt to play audio whenever musicOn flips true
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
    // LoadingScreen triggers its "Enter" button on a user click,
    // which is a valid gesture for audio autoplay.
    setMusicOn(true);
    setPhase('experience');
  };

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

      {phase === 'loading' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
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
