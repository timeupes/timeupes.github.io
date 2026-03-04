import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { useAppContext } from '../context/AppContext';

export default function Customization() {
  const navigate = useNavigate();
  const { themeMode, setThemeMode, accentColor, setAccentColor, fontFamily, setFontFamily, glowIntensity, setGlowIntensity } = useAppContext();

  const handlePresetColor = (color: string) => {
    setAccentColor(color);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center p-6 pb-44 bg-[var(--app-bg-alt)] font-display text-[var(--app-text)] selection:bg-[var(--app-accent)] selection:text-white antialiased transition-colors duration-300">
      <header className="w-full pt-4 mb-6 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--app-text-muted)]">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-semibold tracking-tight">Personalización</h1>
        <div className="w-10 h-10"></div>
      </header>
      <main className="w-full max-w-md space-y-8">
        <section className="flex flex-col items-center justify-center py-6">
          <div className="relative w-32 h-32 flex items-center justify-center group">
            <div className="absolute inset-0 blur-[60px] rounded-full transform scale-125 transition-colors duration-500" style={{ backgroundColor: 'var(--app-accent)', opacity: glowIntensity }}></div>
            <div className="organic-shape ladrillito-surface w-28 h-28 flex items-center justify-center transition-transform duration-500">
              <span className="debossed-text text-2xl select-none font-medium">time</span>
            </div>
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-[var(--app-text-muted)] font-bold">Vista Previa Real</p>
        </section>
        <section className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-[var(--app-text-muted)] font-bold px-2">Paleta de Colores</h3>
          <div className="neomorphic-container rounded-3xl p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Color de Acento</p>
                <p className="text-[10px] text-[var(--app-text-muted)]">Botones y estados activos</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-[var(--app-text-muted)] uppercase">{accentColor}</span>
                <div className="relative w-8 h-8 rounded-full border-2 border-white/10 p-0.5 overflow-hidden">
                  <input 
                    type="color" 
                    value={accentColor} 
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="absolute inset-[-10px] w-12 h-12 cursor-pointer opacity-0"
                  />
                  <div className="w-full h-full rounded-full" style={{ backgroundColor: accentColor }}></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center px-2">
              <button onClick={() => handlePresetColor('#ffffff')} className="w-8 h-8 rounded-full bg-[#ffffff] border-2 border-[var(--app-glass-border)] hover:scale-110 transition-transform"></button>
              <button onClick={() => handlePresetColor('#FF4D8D')} className="w-8 h-8 rounded-full bg-[#FF4D8D] border-2 border-[var(--app-glass-border)] hover:scale-110 transition-transform"></button>
              <button onClick={() => handlePresetColor('#5D3FD3')} className="w-8 h-8 rounded-full bg-[#5D3FD3] border-2 border-[var(--app-glass-border)] hover:scale-110 transition-transform"></button>
              <button onClick={() => handlePresetColor('#38BDF8')} className="w-8 h-8 rounded-full bg-[#38BDF8] border-2 border-[var(--app-glass-border)] hover:scale-110 transition-transform"></button>
              <button onClick={() => handlePresetColor('#10B981')} className="w-8 h-8 rounded-full bg-[#10B981] border-2 border-[var(--app-glass-border)] hover:scale-110 transition-transform"></button>
            </div>
            <div className="pt-4 border-t border-[var(--app-glass-border)]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-medium">Intensidad del Resplandor</p>
                  <p className="text-[10px] text-[var(--app-text-muted)]">Ajusta el brillo de fondo</p>
                </div>
                <span className="text-[10px] font-mono text-[var(--app-text-muted)]">{Math.round(glowIntensity * 100)}%</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="0.8" 
                step="0.05" 
                value={glowIntensity} 
                onChange={(e) => setGlowIntensity(parseFloat(e.target.value))}
                className="w-full h-2 bg-[var(--app-glass)] rounded-lg appearance-none cursor-pointer accent-[var(--app-accent)]"
              />
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-[var(--app-text-muted)] font-bold px-2">Modo de Luz</h3>
          <div className="neomorphic-sunken rounded-[2rem] p-2 flex gap-1">
            <button
              onClick={() => setThemeMode('claro')}
              className={`flex-1 py-3 rounded-2xl text-[11px] font-semibold tracking-wider neomorphic-toggle-btn ${themeMode === 'claro' ? 'active' : 'text-[var(--app-text-muted)]'}`}
            >
              CLARO
            </button>
            <button
              onClick={() => setThemeMode('oscuro')}
              className={`flex-1 py-3 rounded-2xl text-[11px] font-semibold tracking-wider neomorphic-toggle-btn ${themeMode === 'oscuro' ? 'active' : 'text-[var(--app-text-muted)]'}`}
            >
              OSCURO
            </button>
            <button
              onClick={() => setThemeMode('automatico')}
              className={`flex-1 py-3 rounded-2xl text-[11px] font-semibold tracking-wider neomorphic-toggle-btn ${themeMode === 'automatico' ? 'active' : 'text-[var(--app-text-muted)]'}`}
            >
              AUTO
            </button>
          </div>
        </section>
        <section className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-[var(--app-text-muted)] font-bold px-2">Tipografía</h3>
          <div className="neomorphic-container rounded-3xl p-6 space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium">Familia de Fuente</p>
              <div className="neomorphic-sunken rounded-2xl p-1 flex">
                <button 
                  onClick={() => setFontFamily('Outfit')}
                  className={`flex-1 py-2 rounded-xl text-xs font-medium transition-colors ${fontFamily === 'Outfit' ? 'bg-[var(--app-glass)] text-[var(--app-text)] shadow-sm' : 'text-[var(--app-text-muted)]'}`}
                >
                  Outfit
                </button>
                <button 
                  onClick={() => setFontFamily('Playfair')}
                  className={`flex-1 py-2 rounded-xl text-xs font-medium italic font-serif transition-colors ${fontFamily === 'Playfair' ? 'bg-[var(--app-glass)] text-[var(--app-text)] shadow-sm' : 'text-[var(--app-text-muted)]'}`}
                >
                  Playfair
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BottomNav />
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-[var(--app-glass-border)] rounded-full"></div>
    </div>
  );
}
