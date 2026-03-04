import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function Security() {
  const navigate = useNavigate();
  const [faceId, setFaceId] = useState(true);
  const [pin, setPin] = useState(false);
  const [strictMode, setStrictMode] = useState(true);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center p-6 pb-48 bg-[var(--app-bg)] text-[var(--app-text)] transition-colors duration-300 antialiased">
      <header className="w-full pt-4 mb-8 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--app-glass)] border border-[var(--app-glass-border)] active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
        </button>
        <h1 className="text-xl font-medium tracking-tight">Seguridad de Sesión</h1>
        <div className="w-10 h-10 rounded-full bg-[var(--app-glass)] border border-[var(--app-glass-border)] flex items-center justify-center">
          <span className="material-symbols-outlined text-xl" style={{ color: 'var(--app-accent)' }}>verified_user</span>
        </div>
      </header>
      <main className="w-full max-w-md space-y-8">
        <section className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.25em] text-[var(--app-text-muted)] font-bold px-2">Biometría y Acceso</h3>
          <div className="neomorphic-main-card rounded-[2rem] p-2 space-y-1">
            <div className="flex items-center justify-between p-4 px-5">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[var(--app-text-muted)]">face</span>
                <span className="text-sm font-medium">FaceID / TouchID</span>
              </div>
              <button
                onClick={() => setFaceId(!faceId)}
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${faceId ? 'bg-[var(--app-accent)]' : 'bg-[var(--app-glass)] border border-[var(--app-glass-border)]'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${faceId ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>
            <div className="h-[1px] mx-5 bg-[var(--app-glass-border)]"></div>
            <div className="flex items-center justify-between p-4 px-5">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[var(--app-text-muted)]">dialpad</span>
                <span className="text-sm font-medium">PIN de Seguridad (4 dígitos)</span>
              </div>
              <button
                onClick={() => setPin(!pin)}
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${pin ? 'bg-[var(--app-accent)]' : 'bg-[var(--app-glass)] border border-[var(--app-glass-border)]'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${pin ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="neomorphic-main-card rounded-[2.5rem] p-6 relative overflow-hidden border-red-500/20">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-6xl text-red-500">gpp_maybe</span>
            </div>
            <div className="flex items-start justify-between mb-4 relative z-10">
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-red-500 uppercase tracking-widest">Modo Estricto (Strict)</h3>
                <p className="text-[10px] text-[var(--app-text-muted)]">Nivel de protección máximo</p>
              </div>
              <button
                onClick={() => setStrictMode(!strictMode)}
                className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out ${strictMode ? 'bg-red-500' : 'bg-[var(--app-glass)] border border-[var(--app-glass-border)]'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-300 ease-in-out ${strictMode ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>
            <p className="text-xs text-[var(--app-text-muted)] leading-relaxed mb-4 relative z-10">
              Al activar este modo, Zenith impedirá la desinstalación de la app y el acceso a ajustes críticos durante tus sesiones de enfoque.
            </p>
            <div className="neomorphic-sunken rounded-2xl p-3 flex items-center gap-3 border border-[var(--app-glass-border)] relative z-10">
              <span className="material-symbols-outlined text-red-500 text-sm">info</span>
              <span className="text-[10px] text-[var(--app-text-muted)] italic">Requiere permiso de administración de dispositivo</span>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-4">
          <div className="neomorphic-main-card rounded-3xl p-5 flex flex-col gap-4 active:scale-95 transition-transform cursor-pointer">
            <div className="w-10 h-10 rounded-2xl bg-[var(--app-glass)] flex items-center justify-center border border-[var(--app-glass-border)] shadow-inner">
              <span className="material-symbols-outlined text-[var(--app-text-muted)]">lock_person</span>
            </div>
            <div>
              <h4 className="text-xs font-semibold">Protección de Ajustes</h4>
              <p className="text-[9px] text-[var(--app-text-muted)] mt-1">Bloqueo biométrico</p>
            </div>
          </div>
          <div className="neomorphic-main-card rounded-3xl p-5 flex flex-col gap-4 active:scale-95 transition-transform cursor-pointer">
            <div className="w-10 h-10 rounded-2xl bg-[var(--app-glass)] flex items-center justify-center border border-[var(--app-glass-border)] shadow-inner">
              <span className="material-symbols-outlined text-[var(--app-text-muted)]">checklist</span>
            </div>
            <div>
              <h4 className="text-xs font-semibold">Lista Blanca</h4>
              <p className="text-[9px] text-[var(--app-text-muted)] mt-1">Apps permitidas</p>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.25em] text-[var(--app-text-muted)] font-bold px-2 text-center">Autenticación Avanzada</h3>
          <div className="neomorphic-sunken rounded-[2rem] p-6 flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--app-bg-alt)] flex items-center justify-center border border-[var(--app-glass-border)] shadow-lg">
                <span className="material-symbols-outlined" style={{ color: 'var(--app-accent)' }}>key</span>
              </div>
              <div>
                <p className="text-sm font-medium">Autenticación en Dos Pasos</p>
                <p className="text-[10px] text-[var(--app-text-muted)] italic">Protección extra de cuenta</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-lg text-[var(--app-text-muted)] group-hover:text-[var(--app-accent)] transition-colors">arrow_forward_ios</span>
          </div>
        </section>
      </main>
      <BottomNav />
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-[var(--app-glass-border)] rounded-full"></div>
    </div>
  );
}
