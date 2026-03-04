import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function Help() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center pb-40 bg-[var(--app-bg)] text-[var(--app-text)] transition-colors duration-300 antialiased">
      <header className="w-full pt-8 px-6 mb-8 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-[var(--app-glass)] border border-[var(--app-glass-border)] flex items-center justify-center active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-xl text-[var(--app-text-muted)]">chevron_left</span>
        </button>
        <h1 className="text-xl font-semibold tracking-tight">Centro de Ayuda</h1>
      </header>
      <main className="w-full space-y-10 max-w-md">
        <section className="px-6">
          <div className="neomorphic-sunken rounded-2xl flex items-center px-4 py-3 gap-3">
            <span className="material-symbols-outlined text-[var(--app-text-muted)]">search</span>
            <input className="bg-transparent border-none p-0 text-sm focus:ring-0 text-[var(--app-text)] placeholder:text-[var(--app-text-muted)] w-full" placeholder="¿Cómo podemos ayudarte?" type="text"/>
          </div>
        </section>
        <section className="space-y-4">
          <h2 className="px-6 text-[10px] uppercase tracking-[0.2em] text-[var(--app-text-muted)] font-bold">Guías Rápidas</h2>
          <div className="px-6">
            <div className="neomorphic-main-card w-full p-5 rounded-[2rem] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'var(--app-accent)', opacity: 0.2 }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--app-accent)' }}>rocket_launch</span>
              </div>
              <div>
                <p className="text-sm font-medium">Cómo empezar</p>
                <p className="text-[10px] text-[var(--app-text-muted)] mt-1">Configura tu primer bloque de enfoque en 2 min.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 space-y-4">
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-[var(--app-text-muted)] font-bold">Soporte Técnico</h2>
          <div className="grid grid-cols-1 gap-4">
            <button className="neomorphic-main-card p-5 rounded-3xl flex items-center justify-between group active:scale-[0.99] transition-transform">
              <div className="flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-[var(--app-glass)] border border-[var(--app-glass-border)] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[var(--app-text-muted)]">confirmation_number</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Enviar Ticket</p>
                  <p className="text-[10px] text-[var(--app-text-muted)]">Respuesta en menos de 12h</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-[var(--app-text-muted)]">mail</span>
            </button>
          </div>
        </section>
        <section className="px-6 space-y-4">
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-[var(--app-text-muted)] font-bold">Comunidad y FAQ</h2>
          <div className="neomorphic-sunken rounded-3xl overflow-hidden">
            <div className="p-5 border-b border-[var(--app-glass-border)] flex items-center justify-between active:bg-[var(--app-glass-hover)] transition-colors cursor-pointer">
              <p className="text-sm">¿Cómo recupero mi racha de enfoque?</p>
              <span className="material-symbols-outlined text-lg text-[var(--app-text-muted)]">expand_more</span>
            </div>
            <div className="p-5 border-b border-[var(--app-glass-border)] flex items-center justify-between active:bg-[var(--app-glass-hover)] transition-colors cursor-pointer">
              <p className="text-sm">Privacidad de mis datos de uso</p>
              <span className="material-symbols-outlined text-lg text-[var(--app-text-muted)]">expand_more</span>
            </div>
            <div className="p-5 flex items-center justify-between active:bg-[var(--app-glass-hover)] transition-colors cursor-pointer">
              <p className="text-sm">Foro de la Comunidad Zenith</p>
              <span className="material-symbols-outlined text-lg text-[var(--app-text-muted)]">open_in_new</span>
            </div>
          </div>
        </section>
        <section className="px-6 space-y-4">
          <h2 className="text-[10px] uppercase tracking-[0.2em] text-[var(--app-text-muted)] font-bold">Diagnóstico del Sistema</h2>
          <div className="neomorphic-main-card rounded-3xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
                <p className="text-xs">Sensor NFC</p>
              </div>
              <p className="text-[10px] text-green-400 font-bold uppercase">Listo</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
                <p className="text-xs">Permisos de Notificación</p>
              </div>
              <p className="text-[10px] text-green-400 font-bold uppercase">Activo</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-amber-400 text-lg">info</span>
                <p className="text-xs">Acceso a Pantalla</p>
              </div>
              <p className="text-[10px] text-amber-400 font-bold uppercase">Configurar</p>
            </div>
          </div>
        </section>
        <section className="px-6 pt-4 pb-8 space-y-6 text-center">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.1em] text-[var(--app-text-muted)] font-bold">Zenith v2.4.12 (Gold Edition)</p>
            <div className="flex justify-center gap-4">
              <a className="text-[10px] font-medium hover:underline" style={{ color: 'var(--app-accent)' }} href="#">Términos de Servicio</a>
              <span className="text-[var(--app-text-muted)]">•</span>
              <a className="text-[10px] font-medium hover:underline" style={{ color: 'var(--app-accent)' }} href="#">Privacidad</a>
            </div>
          </div>
        </section>
      </main>
      <BottomNav />
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-[var(--app-glass-border)] rounded-full"></div>
    </div>
  );
}
