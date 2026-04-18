import React, { useState } from 'react';
import { Play, X, Video as VideoIcon } from 'lucide-react';
import { mockData } from '../../mock';

const VideoScene = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen px-6 pt-28 pb-28">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-rose-500 mb-2">Scene 06</p>
          <h2 className="font-serif-romantic text-5xl md:text-6xl text-rose-900 italic">
            Things I want to say
          </h2>
          <p className="mt-3 text-rose-700/70 font-serif-romantic text-lg italic">
            Little videos — because some things are better said with moving pictures
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" data-testid="videos-grid">
          {mockData.videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setSelected(video)}
              data-testid={`video-${video.id}`}
              className="group overflow-hidden rounded-2xl shadow-lg bg-white border border-rose-100 text-left hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 via-rose-900/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-rose-500 ml-1" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-rose-900/70 text-white text-xs tabular-nums">
                  {video.duration}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif-romantic text-2xl italic text-rose-900">
                  {video.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-rose-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelected(null)}
          data-testid="video-modal"
        >
          <button
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div
            className="max-w-3xl w-full rounded-2xl bg-gradient-to-br from-rose-900/60 to-rose-800/60 backdrop-blur-md border border-rose-400/40 p-10 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <VideoIcon className="w-16 h-16 text-white/90 mx-auto mb-5" />
            <h3 className="font-serif-romantic italic text-3xl text-white mb-3">
              {selected.title}
            </h3>
            <p className="text-rose-200 mb-5 tracking-widest text-xs uppercase">
              Duration: {selected.duration}
            </p>
            <p className="text-white/80 text-sm max-w-md mx-auto italic">
              This is where the real video will play. Once uploads are wired up,
              I'll drop the actual clips in here for you ♡
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoScene;
