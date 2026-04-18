'use client';

import { Music, Disc } from 'lucide-react';
import { mockData } from '@/lib/mock';

const MusicScene: React.FC = () => {
  return (
    <section className="min-h-screen px-6 pt-28 pb-28">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-rose-500 mb-2">Scene 05</p>
          <h2 className="font-serif-romantic text-5xl md:text-6xl text-rose-900 italic">
            A playlist for you
          </h2>
          <p className="mt-3 text-rose-700/70 font-serif-romantic text-lg italic">
            Songs I want to listen to with you
          </p>
        </header>

        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="w-44 h-44 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-rose-500 via-pink-500 to-rose-600 flex items-center justify-center shadow-2xl animate-glow">
              <Disc className="w-20 h-20 md:w-24 md:h-24 text-white/90 animate-[spin_6s_linear_infinite]" />
            </div>
          </div>
        </div>

        <div className="space-y-3" data-testid="song-list">
          {mockData.songs.map((song, i) => (
            <div
              key={song.id}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-rose-100 shadow-sm hover:shadow-md hover:bg-white/90 transition-all"
              data-testid={`song-${song.id}`}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 text-white flex items-center justify-center text-sm font-medium tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-serif-romantic text-xl text-rose-900 italic truncate">
                  {song.title}
                </p>
                <p className="text-rose-600/80 text-sm truncate">{song.artist}</p>
              </div>
              <Music className="w-5 h-5 text-rose-400" />
              <span className="text-sm text-rose-500 tabular-nums w-12 text-right">
                {song.duration}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-rose-500/70 mt-8 italic">
          * Music is playing in the background — use the button at the bottom right to pause or
          resume.
        </p>
      </div>
    </section>
  );
};

export default MusicScene;
