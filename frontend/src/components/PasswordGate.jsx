import React, { useState, useMemo } from 'react';
import { Heart, Lock, Sparkles, KeyRound } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { mockData } from '../mock';

const normalize = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/\s+/g, '')
    .trim();

const PasswordGate = ({ onUnlock }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const expected = useMemo(() => normalize(mockData.gate.password), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (normalize(value) === expected) {
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{
        background:
          'radial-gradient(1200px 600px at 20% 10%, #fecdd3 0%, transparent 60%), radial-gradient(1000px 500px at 90% 90%, #fbcfe8 0%, transparent 55%), linear-gradient(180deg, #fff1f2 0%, #ffe4e6 100%)',
      }}
      data-testid="password-gate"
    >
      {/* Falling petals */}
      {[...Array(18)].map((_, i) => {
        const left = Math.random() * 100;
        const drift = (Math.random() - 0.5) * 160;
        const duration = 8 + Math.random() * 8;
        const delay = Math.random() * 6;
        const size = 10 + Math.random() * 14;
        return (
          <div
            key={i}
            className="absolute animate-petal-fall pointer-events-none"
            style={{
              left: `${left}%`,
              top: '-10vh',
              width: size,
              height: size,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              '--drift': `${drift}px`,
            }}
          >
            <Heart className="w-full h-full fill-rose-300 text-rose-300 opacity-70" />
          </div>
        );
      })}

      {/* Centered card */}
      <div
        className={`relative z-10 w-[min(92vw,480px)] animate-scene-enter ${
          shake ? 'animate-[shake_0.4s_ease]' : ''
        }`}
        style={shake ? { animation: 'shake 0.4s ease' } : {}}
      >
        <div className="relative rounded-[28px] bg-white/70 backdrop-blur-xl border border-rose-200/60 shadow-[0_30px_80px_-20px_rgba(190,24,93,0.3)] p-10">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-lg animate-glow">
            <Lock className="w-6 h-6 text-white" />
          </div>

          <div className="text-center mt-4 mb-7">
            <div className="flex justify-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-rose-400" />
              <span className="text-xs uppercase tracking-[0.35em] text-rose-500 font-medium">
                Dành riêng cho em
              </span>
              <Sparkles className="w-4 h-4 text-rose-400" />
            </div>

            <h1 className="font-serif-romantic text-5xl md:text-[56px] leading-[1.05] text-rose-900">
              Hey, <span className="shimmer-text italic">{mockData.person.nickname}</span>
            </h1>
            <p className="mt-4 text-rose-700/80 text-[15px] leading-relaxed">
              {mockData.gate.welcome}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-rose-400" />
              <Input
                data-testid="password-input"
                type="password"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  if (error) setError(false);
                }}
                placeholder="mật khẩu bí mật..."
                className="pl-11 h-12 rounded-full bg-white/80 border-rose-200 focus-visible:ring-rose-400 text-rose-900 placeholder:text-rose-300"
                autoFocus
              />
            </div>

            <p className="text-xs text-center text-rose-500/80 italic">
              Gợi ý: {mockData.gate.hint}
            </p>

            {error && (
              <p
                className="text-center text-sm text-rose-600 font-medium"
                data-testid="password-error"
              >
                Sai rồi... thử lại nhé em ♡
              </p>
            )}

            <Button
              type="submit"
              data-testid="unlock-btn"
              className="w-full h-12 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium tracking-wide shadow-lg shadow-rose-500/30 transition-all hover:scale-[1.02]"
            >
              <Heart className="w-4 h-4 mr-2 fill-white" />
              Mở điều bất ngờ
            </Button>
          </form>

          <p className="mt-6 text-center text-[11px] text-rose-400/70 tracking-widest uppercase">
            Một món quà nhỏ • With love
          </p>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
      `}</style>
    </div>
  );
};

export default PasswordGate;
