import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PublishActivity() {
  const navigate = useNavigate();
  const [privacy, setPrivacy] = useState<'public' | 'friends' | 'private'>('public');

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center p-6 pb-36 bg-[var(--app-bg)] text-[var(--app-text)] transition-colors duration-300">
      <header className="w-full pt-4 mb-8 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--app-text-muted)]">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <div className="neomorphic-main-card rounded-3xl p-4 px-8 text-center">
          <h1 className="font-serif italic text-xl tracking-tight" style={{ color: 'var(--app-accent)', textShadow: '0 0 10px var(--app-accent)' }}>Weekly Retreat</h1>
          <p className="text-[8px] uppercase tracking-[0.3em] text-[var(--app-text-muted)] mt-1">Publish Activity</p>
        </div>
        <div className="w-10 h-10"></div>
      </header>
      <main className="w-full max-w-sm flex flex-col gap-8">
        <div className="w-full">
          <div className="neomorphic-sunken rounded-[2.5rem] aspect-square flex flex-col items-center justify-center p-8 group cursor-pointer active:scale-[0.98] transition-transform">
            <div className="w-20 h-20 rounded-full bg-[var(--app-glass)] flex items-center justify-center mb-4 group-hover:bg-[var(--app-glass-hover)] transition-colors border border-[var(--app-glass-border)]">
              <span className="material-symbols-outlined text-4xl text-[var(--app-text-muted)] group-hover:text-[var(--app-text)]">add_a_photo</span>
            </div>
            <span className="text-sm font-medium text-[var(--app-text-muted)]">Share your moment</span>
            <span className="text-[10px] uppercase tracking-widest text-[var(--app-text-muted)] opacity-70 mt-2">Reading • Nature • Hobbies</span>
          </div>
        </div>
        <div className="neomorphic-main-card rounded-[2.5rem] p-6">
          <label className="text-[10px] uppercase tracking-[0.2em] text-[var(--app-text-muted)] block mb-4 ml-2">Privacy Control</label>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setPrivacy('public')}
              className={`flex items-center justify-between px-5 py-4 rounded-2xl border transition-all ${privacy === 'public' ? 'bg-[var(--app-glass)] border-[var(--app-glass-border)]' : 'border-transparent hover:bg-[var(--app-glass-hover)]'}`}
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined" style={{ color: privacy === 'public' ? 'var(--app-accent)' : 'var(--app-text-muted)' }}>public</span>
                <div className="text-left">
                  <p className="text-sm font-medium">Public</p>
                  <p className="text-[10px] text-[var(--app-text-muted)]">Visible to Global Gallery</p>
                </div>
              </div>
              {privacy === 'public' && <div className="w-2 h-2 rounded-full shadow-[0_0_8px_var(--app-accent)]" style={{ backgroundColor: 'var(--app-accent)' }}></div>}
            </button>
            <button
              onClick={() => setPrivacy('friends')}
              className={`flex items-center justify-between px-5 py-4 rounded-2xl border transition-all ${privacy === 'friends' ? 'bg-[var(--app-glass)] border-[var(--app-glass-border)]' : 'border-transparent hover:bg-[var(--app-glass-hover)]'}`}
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined" style={{ color: privacy === 'friends' ? 'var(--app-accent)' : 'var(--app-text-muted)' }}>group</span>
                <div className="text-left">
                  <p className="text-sm font-medium">Friends</p>
                  <p className="text-[10px] text-[var(--app-text-muted)]">Selected connections only</p>
                </div>
              </div>
              {privacy === 'friends' && <div className="w-2 h-2 rounded-full shadow-[0_0_8px_var(--app-accent)]" style={{ backgroundColor: 'var(--app-accent)' }}></div>}
            </button>
            <button
              onClick={() => setPrivacy('private')}
              className={`flex items-center justify-between px-5 py-4 rounded-2xl border transition-all ${privacy === 'private' ? 'bg-[var(--app-glass)] border-[var(--app-glass-border)]' : 'border-transparent hover:bg-[var(--app-glass-hover)]'}`}
            >
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined" style={{ color: privacy === 'private' ? 'var(--app-accent)' : 'var(--app-text-muted)' }}>lock</span>
                <div className="text-left">
                  <p className="text-sm font-medium">Private</p>
                  <p className="text-[10px] text-[var(--app-text-muted)]">Only visible to you</p>
                </div>
              </div>
              {privacy === 'private' && <div className="w-2 h-2 rounded-full shadow-[0_0_8px_var(--app-accent)]" style={{ backgroundColor: 'var(--app-accent)' }}></div>}
            </button>
          </div>
        </div>
        <button
          onClick={() => navigate('/retreat')}
          className="w-full py-5 rounded-2xl font-bold text-lg tracking-wide active:scale-95 transition-transform text-white"
          style={{ backgroundColor: 'var(--app-accent)' }}
        >
          Post to Gallery
        </button>
      </main>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-[var(--app-glass-border)] rounded-full"></div>
    </div>
  );
}
