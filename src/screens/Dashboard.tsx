import React, { useState, useEffect } from 'react';
import BottomNav from '../components/BottomNav';
import { useAppContext } from '../context/AppContext';

export default function Dashboard() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const { glowIntensity } = useAppContext();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const formatCurrentTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center p-6 pb-32">
      <header className="w-full pt-8 flex flex-col items-center text-center space-y-1">
        <h1 className="font-serif text-3xl italic silvery-glow">Your Sanctuary</h1>
        <div className="text-xs tracking-[0.3em] font-light opacity-60 text-[var(--color-zenith-lavender)]">{formatCurrentTime(currentTime)}</div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-sm">
        <div className="relative group">
          <div className="absolute inset-0 blur-[100px] rounded-full transform scale-125 transition-colors duration-500" style={{ backgroundColor: 'var(--app-accent)', opacity: glowIntensity }}></div>
          <div onClick={toggleTimer} className="organic-shape ladrillito-surface w-60 h-60 flex items-center justify-center active:scale-95 transition-transform duration-500 cursor-pointer">
            <span className="debossed-text text-5xl select-none font-medium">{isActive ? 'pause' : 'time'}</span>
          </div>
        </div>
        <div className="mt-16 text-center">
          <div className="text-7xl font-light tracking-tighter silvery-glow mb-2">{formatTime(timeLeft)}</div>
          <div className="text-[10px] uppercase tracking-[0.4em] opacity-40 text-[var(--color-zenith-lavender)]">{isActive ? 'Focusing...' : 'Deep Focus Mode'}</div>
        </div>
      </main>
      <div className="w-full max-w-sm grid grid-cols-2 gap-4 mt-8">
        <div className="neomorphic-inset rounded-3xl p-5 flex flex-col items-start space-y-2 border border-white/5">
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-zenith-lavender)] opacity-50">Efficiency</span>
          <span className="text-xl font-medium silvery-glow">94%</span>
        </div>
        <div className="neomorphic-inset rounded-3xl p-5 flex flex-col items-start space-y-2 border border-white/5">
          <span className="text-[10px] uppercase tracking-widest text-[var(--color-zenith-lavender)] opacity-50">Deep Work</span>
          <span className="text-xl font-medium silvery-glow">4.2h</span>
        </div>
      </div>
      <BottomNav />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/10 rounded-full"></div>
    </div>
  );
}
