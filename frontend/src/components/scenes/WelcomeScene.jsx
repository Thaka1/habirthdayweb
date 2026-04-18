import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import { mockData } from '../../mock';

const pad = (n) => String(n).padStart(2, '0');

const useCountdown = (iso) => {
  const target = new Date(iso).getTime();
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds, reached: diff === 0 };
};

const TimeCell = ({ value, label, testid }) => (
  <div className="flex flex-col items-center" data-testid={testid}>
    <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/75 backdrop-blur-md border border-rose-200 shadow-lg flex items-center justify-center">
      <span className="font-serif-romantic text-4xl md:text-5xl text-rose-700 tabular-nums">
        {pad(value)}
      </span>
    </div>
    <span className="mt-2 text-[10px] md:text-xs uppercase tracking-[0.25em] text-rose-500">
      {label}
    </span>
  </div>
);

const WelcomeScene = ({ onNext }) => {
  const cd = useCountdown(mockData.person.birthdayDate);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-28">
      <div className="text-center max-w-3xl w-full">
        <div className="flex justify-center gap-3 mb-5">
          <Sparkles className="w-5 h-5 text-rose-400" />
          <span className="text-[11px] uppercase tracking-[0.45em] text-rose-500">
            Happy Birthday
          </span>
          <Sparkles className="w-5 h-5 text-rose-400" />
        </div>

        <p className="font-script text-3xl md:text-4xl text-rose-500 mb-2">
          To my dearest
        </p>
        <h1 className="font-serif-romantic text-6xl md:text-8xl leading-[1] text-rose-900 mb-6">
          <span className="shimmer-text italic">
            {mockData.person.name}
          </span>
        </h1>

        <div className="flex justify-center mb-10">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center shadow-xl animate-heartbeat">
            <Heart className="w-10 h-10 fill-white text-white" />
          </div>
        </div>

        {/* Countdown */}
        {cd.reached ? (
          <div
            className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/75 backdrop-blur-md border border-rose-200 shadow-lg"
            data-testid="birthday-arrived"
          >
            <Heart className="w-6 h-6 fill-rose-500 text-rose-500 animate-heartbeat" />
            <span className="font-serif-romantic text-2xl md:text-3xl text-rose-700 italic">
              Chúc mừng sinh nhật em!
            </span>
          </div>
        ) : (
          <>
            <p className="text-xs uppercase tracking-[0.35em] text-rose-500 mb-4">
              Còn lại đến ngày của em
            </p>
            <div
              className="flex justify-center gap-3 md:gap-5 mb-8"
              data-testid="countdown"
            >
              <TimeCell value={cd.days} label="Ngày" testid="cd-days" />
              <TimeCell value={cd.hours} label="Giờ" testid="cd-hours" />
              <TimeCell value={cd.minutes} label="Phút" testid="cd-minutes" />
              <TimeCell value={cd.seconds} label="Giây" testid="cd-seconds" />
            </div>
          </>
        )}

        <p className="text-rose-700/80 font-serif-romantic italic text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          Anh đã chuẩn bị một chuyến đi nhỏ qua bảy khung cảnh —
          mỗi cảnh là một mảnh anh muốn gửi em. Theo mũi tên, hoặc chạm vào dấu chấm ở dưới nhé.
        </p>

        <button
          onClick={onNext}
          data-testid="welcome-begin-btn"
          className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium tracking-wide shadow-xl shadow-rose-500/30 transition-all hover:scale-105"
        >
          <Heart className="w-4 h-4 fill-white" />
          Bắt đầu hành trình
          <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
        </button>
      </div>
    </section>
  );
};

export default WelcomeScene;
