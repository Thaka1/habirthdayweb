import React from 'react';
import { mockData } from '../../mock';

const MomentsScene = () => {
  return (
    <section className="min-h-screen px-6 pt-28 pb-28">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-rose-500 mb-2">Scene 03</p>
          <h2 className="font-serif-romantic text-5xl md:text-6xl text-rose-900 italic">
            Our journey together
          </h2>
          <p className="mt-3 text-rose-700/70 font-serif-romantic text-lg italic">
            Little milestones that wrote our story
          </p>
        </header>

        <div className="relative" data-testid="timeline">
          {/* central line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-200 via-rose-400 to-rose-200 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {mockData.moments.map((m, i) => {
              const right = i % 2 === 1;
              return (
                <div
                  key={m.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 ${
                    right ? 'md:flex-row-reverse' : ''
                  }`}
                  data-testid={`moment-${m.id}`}
                >
                  {/* dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg ring-4 ring-white" />

                  {/* image */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <div className="overflow-hidden rounded-2xl shadow-lg border border-rose-100">
                      <img
                        src={m.image}
                        alt={m.title}
                        className="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* text */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <div className="bg-white/75 backdrop-blur-sm rounded-2xl border border-rose-100 shadow-md p-6">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-rose-500 mb-2">
                        {m.date}
                      </p>
                      <h3 className="font-serif-romantic text-3xl text-rose-900 italic mb-2">
                        {m.title}
                      </h3>
                      <p className="text-rose-700/80 leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentsScene;
