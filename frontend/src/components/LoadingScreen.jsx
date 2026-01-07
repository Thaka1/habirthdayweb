import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const heartInterval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 100,
        animationDuration: 2 + Math.random() * 2,
        size: 20 + Math.random() * 20
      };
      setHearts(prev => [...prev.slice(-10), newHeart]);
    }, 300);

    return () => clearInterval(heartInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pink-50 via-pink-100 to-rose-100 flex items-center justify-center overflow-hidden z-50">
      {/* Floating Hearts Background */}
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-float-up opacity-60"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            fontSize: `${heart.size}px`
          }}
        >
          <Heart className="fill-pink-300 text-pink-300" />
        </div>
      ))}

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Sparkles */}
        <div className="flex justify-center mb-8 gap-4">
          <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" style={{ animationDelay: '0s' }} />
          <Sparkles className="w-12 h-12 text-rose-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
          <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
        </div>

        {/* Main Heart with Counter */}
        <div className="relative inline-block mb-8">
          <div className="w-32 h-32 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full flex items-center justify-center shadow-2xl animate-bounce-slow">
            <Heart className="w-16 h-16 fill-white text-white" />
          </div>
          
          {/* Counter */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg">
            <span className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              {progress}%
            </span>
          </div>
        </div>

        {/* Loading Text */}
        <div className="mt-12">
          <p className="text-2xl font-semibold text-rose-600 mb-2 animate-pulse">
            Preparing Something Special...
          </p>
          <p className="text-lg text-pink-500">
            {progress < 30 && 'Getting ready...'}
            {progress >= 30 && progress < 60 && 'Adding sparkles...'}
            {progress >= 60 && progress < 90 && 'Almost there...'}
            {progress >= 90 && 'Ready!'}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 h-2 bg-pink-200 rounded-full overflow-hidden mx-auto">
          <div 
            className="h-full bg-gradient-to-r from-pink-400 to-rose-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Confetti Effect */}
      {progress > 80 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                backgroundColor: ['#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493'][Math.floor(Math.random() * 4)],
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;