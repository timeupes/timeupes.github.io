import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-sm h-20 rounded-[2rem] bg-[var(--app-glass)] border border-[var(--app-glass-border)] backdrop-blur-xl flex items-center justify-between px-8 z-50 shadow-2xl">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `w-10 h-10 flex items-center justify-center transition-opacity ${
            isActive ? 'opacity-100' : 'opacity-40 hover:opacity-100'
          }`
        }
        style={({ isActive }) => ({ color: isActive ? 'var(--app-accent)' : 'var(--app-text)' })}
      >
        <span className="material-symbols-outlined">home</span>
      </NavLink>
      <NavLink
        to="/calendar"
        className={({ isActive }) =>
          `w-10 h-10 flex items-center justify-center transition-opacity ${
            isActive ? 'opacity-100' : 'opacity-40 hover:opacity-100'
          }`
        }
        style={({ isActive }) => ({ color: isActive ? 'var(--app-accent)' : 'var(--app-text)' })}
      >
        <span className="material-symbols-outlined">calendar_today</span>
      </NavLink>
      <NavLink
        to="/retreat"
        className="w-14 h-14 rounded-full flex items-center justify-center border border-[var(--app-glass-border)] active:scale-90 transition-transform -translate-y-1"
        style={{ backgroundColor: 'var(--app-accent)', boxShadow: '0 0 25px var(--app-accent)' }}
      >
        <span className="material-symbols-outlined text-white text-3xl font-bold">spa</span>
      </NavLink>
      <NavLink
        to="/community"
        className={({ isActive }) =>
          `w-10 h-10 flex items-center justify-center transition-opacity ${
            isActive ? 'opacity-100' : 'opacity-40 hover:opacity-100'
          }`
        }
        style={({ isActive }) => ({ color: isActive ? 'var(--app-accent)' : 'var(--app-text)' })}
      >
        <span className="material-symbols-outlined">bar_chart</span>
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `w-10 h-10 flex items-center justify-center transition-opacity ${
            isActive ? 'opacity-100' : 'opacity-40 hover:opacity-100'
          }`
        }
        style={({ isActive }) => ({ color: isActive ? 'var(--app-accent)' : 'var(--app-text)' })}
      >
        <span className="material-symbols-outlined text-2xl">settings</span>
      </NavLink>
    </nav>
  );
}
