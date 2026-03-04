import React, { useState } from 'react';
import BottomNav from '../components/BottomNav';

export default function Calendar() {
  const [selectedDay, setSelectedDay] = useState(15);

  const days = [
    { day: 1, level: 'low' }, { day: 2, level: 'medium' }, { day: 3, level: 'low' },
    { day: 4, level: 'high' }, { day: 5, level: 'medium' }, { day: 6, level: 'low' },
    { day: 7, level: 'low' }, { day: 8, level: 'medium' }, { day: 9, level: 'low' },
    { day: 10, level: 'low' }, { day: 11, level: 'high' }, { day: 12, level: 'medium' },
    { day: 13, level: 'low' }, { day: 14, level: 'low' }, { day: 15, level: 'low' },
    { day: 16, level: 'medium' }, { day: 17, level: 'low' }, { day: 18, level: 'high' },
    { day: 19, level: 'medium' }, { day: 20, level: 'low' }, { day: 21, level: 'low' },
    { day: 22, level: 'low' }, { day: 23, level: 'medium' }, { day: 24, level: 'low' },
    { day: 25, level: 'high' }, { day: 26, level: 'medium' }
  ];

  const getDayClass = (level: string, day: number) => {
    let base = `aspect-square neumorphic-day rounded-xl flex items-center justify-center text-xs font-medium cursor-pointer transition-all duration-300`;
    if (level === 'low') base += ' day-low';
    if (level === 'medium') base += ' day-medium text-white';
    if (level === 'high') base += ' day-high text-white';
    if (day === selectedDay) base += ' selected-day font-bold text-white';
    return base;
  };

  const selectedData = {
    recovered: selectedDay % 2 === 0 ? '4h 15m' : '3h 42m',
    focuses: selectedDay % 3 === 0 ? '6' : '8',
    goal: selectedDay % 4 === 0 ? '92%' : '85%',
    goalWidth: selectedDay % 4 === 0 ? '92%' : '85%'
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center p-6 pb-36">
      <header className="w-full pt-8 pb-6 flex flex-col items-start px-2">
        <span className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-1">Tu Progreso</span>
        <h1 className="font-serif text-4xl italic soft-glow-text">Tu Actividad</h1>
      </header>
      <section className="w-full max-w-md">
        <div className="flex items-center justify-between mb-6 px-2">
          <h2 className="text-lg font-medium">Mayo 2024</h2>
          <div className="flex space-x-4">
            <span className="material-symbols-outlined opacity-40 hover:opacity-100 cursor-pointer">chevron_left</span>
            <span className="material-symbols-outlined opacity-40 hover:opacity-100 cursor-pointer">chevron_right</span>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-3 mb-4 text-center">
          <div className="text-[10px] font-bold opacity-30">LU</div>
          <div className="text-[10px] font-bold opacity-30">MA</div>
          <div className="text-[10px] font-bold opacity-30">MI</div>
          <div className="text-[10px] font-bold opacity-30">JU</div>
          <div className="text-[10px] font-bold opacity-30">VI</div>
          <div className="text-[10px] font-bold opacity-30">SA</div>
          <div className="text-[10px] font-bold opacity-30">DO</div>
        </div>
        <div className="grid grid-cols-7 gap-3">
          <div className="aspect-square opacity-10"></div>
          <div className="aspect-square opacity-10"></div>
          {days.map((d) => (
            <div 
              key={d.day} 
              onClick={() => setSelectedDay(d.day)}
              className={getDayClass(d.level, d.day)}
            >
              {d.day}
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center space-x-6 text-[10px] uppercase tracking-widest opacity-60">
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-[var(--color-usage-low)] mr-2"></div> Bajo
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-[var(--color-usage-medium)] mr-2"></div> Medio
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-[var(--color-usage-high)] mr-2"></div> Alto
          </div>
        </div>
      </section>
      <section className="w-full max-w-md mt-10">
        <div className="glass-card rounded-[2rem] p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-widest opacity-40">Día {selectedDay} Mayo</span>
              <h3 className="text-xl font-medium">Resumen del Día</h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-[var(--color-usage-low)]/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-[var(--color-usage-low)] text-xl">insights</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Tiempo Recuperado</p>
              <p className="text-2xl font-light text-[var(--color-usage-low)] soft-glow-text">{selectedData.recovered}</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Focos Completados</p>
              <p className="text-2xl font-light text-[var(--color-usage-medium)] soft-glow-text">{selectedData.focuses}</p>
            </div>
          </div>
          <div className="pt-2">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-medium opacity-60">Meta de Enfoque Diaria</span>
              <span className="text-xs text-[var(--color-usage-low)]">{selectedData.goal}</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-[var(--color-usage-low)] rounded-full shadow-[0_0_10px_rgba(93,63,211,0.5)] transition-all duration-500" style={{ width: selectedData.goalWidth }}></div>
            </div>
          </div>
        </div>
      </section>
      <BottomNav />
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/10 rounded-full"></div>
    </div>
  );
}
