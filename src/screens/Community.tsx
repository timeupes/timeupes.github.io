import React, { useState } from 'react';
import BottomNav from '../components/BottomNav';

export default function Community() {
  const [tab, setTab] = useState<'global' | 'team'>('global');

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pb-32 bg-[var(--app-bg)] text-[var(--app-text)] transition-colors duration-300">
      <header className="w-full pt-12 px-6 flex flex-col items-center space-y-6">
        <h1 className="font-serif text-3xl italic tracking-wide text-[var(--app-accent)] opacity-90">Comunidad Zenith</h1>
        <div className="flex space-x-12 text-sm font-medium tracking-widest uppercase opacity-60">
          <button
            onClick={() => setTab('global')}
            className={tab === 'global' ? 'opacity-100 border-b-2 border-[var(--app-accent)] pb-1' : 'hover:text-[var(--app-text)] transition-colors pb-1'}
          >
            Global
          </button>
          <button
            onClick={() => setTab('team')}
            className={tab === 'team' ? 'opacity-100 border-b-2 border-[var(--app-accent)] pb-1' : 'hover:text-[var(--app-text)] transition-colors pb-1'}
          >
            Equipo
          </button>
        </div>
      </header>

      {tab === 'global' ? (
        <>
          <div className="w-full px-6 mt-8 flex justify-between items-center max-w-md">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--app-text-muted)]">World Rankings</div>
            <button className="flex items-center space-x-2 bg-[var(--app-glass)] hover:bg-[var(--app-glass-hover)] px-4 py-2 rounded-full border border-[var(--app-glass-border)] transition-all">
              <span className="material-symbols-outlined text-sm">person_add</span>
              <span className="text-xs font-medium uppercase tracking-wider">Invite</span>
            </button>
          </div>
          <main className="w-full px-6 mt-6 space-y-4 max-w-md">
            <div className="glass-card rounded-[2rem] p-5 flex items-center justify-between group cursor-pointer hover:scale-[1.02] transition-transform bg-[var(--app-glass)] border border-[var(--app-glass-border)]">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-900 flex items-center justify-center border border-white/20 overflow-hidden text-white">
                    <span className="text-lg font-bold">M</span>
                  </div>
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center border-2 border-[var(--app-bg)]">
                    <span className="material-symbols-outlined text-[14px] text-white fill-1">workspace_premium</span>
                  </div>
                </div>
                <div>
                  <div className="font-medium text-base">Marcus Aurelius</div>
                  <div className="text-[10px] uppercase tracking-widest text-[var(--app-text-muted)]">Rome, Italy</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold" style={{ color: 'var(--app-accent)' }}>0h 12m</div>
                <div className="text-[9px] uppercase tracking-tighter opacity-50">Screen Time</div>
              </div>
            </div>
            <div className="glass-card rounded-[2rem] p-5 flex items-center justify-between group cursor-pointer hover:scale-[1.02] transition-transform bg-[var(--app-glass)] border border-[var(--app-glass-border)]">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-900 to-indigo-950 flex items-center justify-center border border-white/20 overflow-hidden text-white">
                  <span className="text-lg font-bold">S</span>
                </div>
                <div>
                  <div className="font-medium text-base">Sofia Chen</div>
                  <div className="text-[10px] uppercase tracking-widest text-[var(--app-text-muted)]">Singapore</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold" style={{ color: 'var(--app-accent)' }}>0h 45m</div>
                <div className="text-[9px] uppercase tracking-tighter opacity-50">Screen Time</div>
              </div>
            </div>
            <div className="py-4 border-y border-[var(--app-glass-border)] my-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--app-text-muted)] mb-4 px-2">Recent Activity</div>
              <div className="flex items-center space-x-3 px-2">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                <p className="text-sm font-light leading-relaxed">
                  <span className="font-medium" style={{ color: 'var(--app-accent)' }}>Teresa</span> just completed <span className="italic">2h of Reading</span>
                </p>
              </div>
            </div>
            <div className="glass-card rounded-[2rem] p-5 flex items-center justify-between group cursor-pointer hover:scale-[1.02] transition-transform opacity-80 bg-[var(--app-glass)] border border-[var(--app-glass-border)]">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-900 to-teal-950 flex items-center justify-center border border-white/10 overflow-hidden text-white">
                  <span className="text-lg font-bold">L</span>
                </div>
                <div>
                  <div className="font-medium text-base">Lucas Baum</div>
                  <div className="text-[10px] uppercase tracking-widest text-[var(--app-text-muted)]">Berlin, DE</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold" style={{ color: 'var(--app-accent)' }}>1h 05m</div>
                <div className="text-[9px] uppercase tracking-tighter opacity-50">Screen Time</div>
              </div>
            </div>
          </main>
        </>
      ) : (
        <>
          <div className="w-full px-6 mt-8 max-w-md">
            <div className="glass-card rounded-[2.5rem] p-6 relative overflow-hidden bg-[var(--app-glass)] border border-[var(--app-glass-border)]">
              <div className="absolute top-0 right-0 w-32 h-32 blur-[60px] rounded-full" style={{ backgroundColor: 'var(--app-accent)', opacity: 0.1 }}></div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--app-text-muted)] mb-4 flex items-center">
                <span className="material-symbols-outlined text-xs mr-2">group</span>
                Team Stats: Zenith Elite
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-3xl font-light tracking-tight" style={{ color: 'var(--app-accent)', textShadow: '0 0 20px var(--app-accent)' }}>142h 15m</div>
                  <div className="text-[9px] uppercase tracking-widest opacity-50 mt-1">Total Hours Recovered</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-medium" style={{ color: 'var(--app-accent)' }}>#4</div>
                  <div className="text-[9px] uppercase tracking-widest opacity-50 mt-1">Global Tier</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-6 mt-8 flex justify-between items-center max-w-md">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--app-text-muted)]">Squad Ranking</div>
            <button className="flex items-center space-x-2 bg-[var(--app-glass)] hover:bg-[var(--app-glass-hover)] px-4 py-2 rounded-full border border-[var(--app-glass-border)] transition-all">
              <span className="material-symbols-outlined text-sm">share</span>
              <span className="text-xs font-medium uppercase tracking-wider">Invite</span>
            </button>
          </div>
          <main className="w-full px-6 mt-6 space-y-4 max-w-md">
            <div className="flex flex-col space-y-2">
              <div className="glass-card rounded-[2rem] p-5 flex items-center justify-between group bg-[var(--app-glass)] border border-[var(--app-glass-border)]">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-900 flex items-center justify-center border border-white/20 shadow-lg text-white">
                      <span className="text-lg font-bold">M</span>
                    </div>
                    <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center border-2 border-[var(--app-bg)] shadow-xl">
                      <span className="material-symbols-outlined text-[14px] text-white fill-1">workspace_premium</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium text-base">Marcus Aurelius</div>
                    <div className="flex items-center space-x-1.5">
                      <span className="material-symbols-outlined text-[12px] text-orange-400 fill-1">local_fire_department</span>
                      <span className="text-[10px] uppercase tracking-widest text-[var(--app-text-muted)]">12 Day Streak</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold" style={{ color: 'var(--app-accent)' }}>0h 12m</div>
                  <div className="text-[9px] uppercase tracking-tighter opacity-50">Today</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 px-6">
                <div className="w-1 h-1 rounded-full shadow-[0_0_8px_var(--app-accent)]" style={{ backgroundColor: 'var(--app-accent)' }}></div>
                <span className="text-[11px] font-light text-[var(--app-text-muted)] italic"><span className="font-medium not-italic" style={{ color: 'var(--app-accent)' }}>Marcus:</span> 4h of Deep Writing</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="glass-card rounded-[2rem] p-5 flex items-center justify-between group opacity-90 bg-[var(--app-glass)] border border-[var(--app-glass-border)]">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-900 to-indigo-950 flex items-center justify-center border border-white/10 overflow-hidden text-white">
                    <span className="text-lg font-bold">T</span>
                  </div>
                  <div>
                    <div className="font-medium text-base">Teresa Avila</div>
                    <div className="flex items-center space-x-1.5">
                      <span className="material-symbols-outlined text-[12px] text-orange-400 fill-1">local_fire_department</span>
                      <span className="text-[10px] uppercase tracking-widest text-[var(--app-text-muted)]">8 Day Streak</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold opacity-80" style={{ color: 'var(--app-accent)' }}>0h 45m</div>
                  <div className="text-[9px] uppercase tracking-tighter opacity-50">Today</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 px-6">
                <div className="w-1 h-1 rounded-full shadow-[0_0_8px_var(--app-accent)]" style={{ backgroundColor: 'var(--app-accent)' }}></div>
                <span className="text-[11px] font-light text-[var(--app-text-muted)] italic"><span className="font-medium not-italic" style={{ color: 'var(--app-accent)' }}>Teresa:</span> 2h of Meditation</span>
              </div>
            </div>
          </main>
        </>
      )}
      <BottomNav />
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-[var(--app-glass-border)] rounded-full"></div>
    </div>
  );
}
