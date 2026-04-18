import React, { useState, useCallback, useEffect } from 'react';
import { Heart, ChevronLeft, ChevronRight, Home, Image as ImageIcon, Mail, Calendar, Music, Video, Gift } from 'lucide-react';
import WelcomeScene from './scenes/WelcomeScene';
import GalleryScene from './scenes/GalleryScene';
import LetterScene from './scenes/LetterScene';
import MomentsScene from './scenes/MomentsScene';
import MusicScene from './scenes/MusicScene';
import VideoScene from './scenes/VideoScene';
import FinaleScene from './scenes/FinaleScene';

const SCENES = [
  { id: 'welcome', label: 'Welcome', icon: Home, Component: WelcomeScene },
  { id: 'gallery', label: 'Moments', icon: ImageIcon, Component: GalleryScene },
  { id: 'moments', label: 'Journey', icon: Calendar, Component: MomentsScene },
  { id: 'letter', label: 'Letter', icon: Mail, Component: LetterScene },
  { id: 'music', label: 'Music', icon: Music, Component: MusicScene },
  { id: 'video', label: 'Messages', icon: Video, Component: VideoScene },
  { id: 'finale', label: 'Wish', icon: Gift, Component: FinaleScene },
];

const BirthdayExperience = () => {
  const [index, setIndex] = useState(0);
  const [transitionKey, setTransitionKey] = useState(0);

  const goTo = useCallback(
    (i) => {
      if (i < 0 || i >= SCENES.length || i === index) return;
      setIndex(i);
      setTransitionKey((k) => k + 1);
    },
    [index]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const Current = SCENES[index].Component;

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          'radial-gradient(1200px 800px at 10% -10%, #fecdd3 0%, transparent 55%), radial-gradient(1000px 700px at 110% 110%, #fbcfe8 0%, transparent 55%), linear-gradient(180deg, #fff5f7 0%, #ffe4e6 60%, #fecaca 100%)',
      }}
      data-testid="birthday-experience"
    >
      {/* Ambient floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${12 + Math.random() * 10}s`,
            }}
          >
            <Heart className="w-5 h-5 text-pink-200 fill-pink-200 opacity-40" />
          </div>
        ))}
      </div>

      {/* Top scene navigation */}
      <nav
        className="fixed top-5 left-1/2 -translate-x-1/2 z-30 max-w-[95vw]"
        data-testid="scene-nav"
      >
        <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-white/75 backdrop-blur-xl border border-rose-200 shadow-lg overflow-x-auto">
          {SCENES.map((s, i) => {
            const Icon = s.icon;
            const active = i === index;
            return (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                data-testid={`nav-${s.id}`}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full whitespace-nowrap text-xs font-medium tracking-wide transition-all ${
                  active
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md'
                    : 'text-rose-600 hover:bg-rose-50'
                }`}
                title={s.label}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Scene */}
      <div
        key={transitionKey}
        className="relative z-10 min-h-screen animate-scene-enter"
      >
        <Current onNext={next} onPrev={prev} goTo={goTo} SCENES={SCENES} index={index} />
      </div>

      {/* Prev / Next arrows */}
      {index > 0 && (
        <button
          onClick={prev}
          data-testid="prev-scene-btn"
          className="fixed left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/80 hover:bg-white backdrop-blur-md border border-rose-200 text-rose-500 shadow-lg flex items-center justify-center transition-all hover:scale-110"
          aria-label="Previous scene"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      {index < SCENES.length - 1 && (
        <button
          onClick={next}
          data-testid="next-scene-btn"
          className="fixed right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-xl flex items-center justify-center transition-all hover:scale-110 animate-glow"
          aria-label="Next scene"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Scene progress dots */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-rose-100 shadow">
        {SCENES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            data-testid={`dot-${s.id}`}
            aria-label={`Go to ${s.label}`}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === index ? 'bg-rose-500 w-6' : 'bg-rose-200 hover:bg-rose-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BirthdayExperience;
