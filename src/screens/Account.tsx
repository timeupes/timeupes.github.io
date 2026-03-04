import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function Account() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center p-6 pb-44 bg-[var(--app-bg)] text-[var(--app-text)] transition-colors duration-300 antialiased">
      <header className="w-full pt-4 mb-8 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--app-glass)] border border-[var(--app-glass-border)] active:scale-90 transition-transform">
          <span className="material-symbols-outlined text-xl">arrow_back_ios_new</span>
        </button>
        <h1 className="text-xl font-medium tracking-tight">Gestión de Cuenta Estándar</h1>
        <div className="w-10"></div>
      </header>
      <main className="w-full max-w-md space-y-8">
        <section>
          <div className="neomorphic-main-card rounded-[2.5rem] p-6 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-[var(--app-accent)] to-transparent">
                <img alt="Teresa" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX4NMzvzCLhBD1JB8bn7nAd29M3p06QS9nI2NZcFvjQr3-sDvGHBm3h_-Gpfly3Ppx-mBgYjDcWjPfLt1yIZv-3rZwZvruBCjXgy9pDup8YzO0tO6X4XiG5BMyKVfS4vCpTVhpCS6QUNJkxs7Xo6FhbpZNIGoQ8wtIaYTIzg44BKzZSOfDZJoiqqkD2KxIpdICLafhUtXBNyMtntzsGi3MLnKMDhU1JNXhFv74IW3qGHUkOOPPdaNQLd22imAMBmiVHB4wG1RiNLA"/>
              </div>
              <div className="absolute -bottom-1 -right-1 text-[var(--app-bg)] text-[10px] font-bold px-2 py-1 rounded-full border-2 border-[var(--app-bg)]" style={{ backgroundColor: 'var(--app-accent)' }}>
                LVL 42
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-1">Teresa</h2>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: 'var(--app-accent)' }}>Master of Focus</span>
          </div>
        </section>
        <section className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-[var(--app-text-muted)] font-bold px-4">Información Personal</h3>
          <div className="neomorphic-main-card rounded-3xl p-5 space-y-4">
            <div className="neomorphic-sunken rounded-2xl p-4 flex flex-col">
              <label className="text-[10px] text-[var(--app-text-muted)] uppercase font-bold mb-1">Nombre</label>
              <input className="bg-transparent border-none p-0 text-sm focus:ring-0 text-[var(--app-text)] w-full" type="text" defaultValue="Teresa Smith"/>
            </div>
            <div className="neomorphic-sunken rounded-2xl p-4 flex flex-col">
              <label className="text-[10px] text-[var(--app-text-muted)] uppercase font-bold mb-1">Email</label>
              <input className="bg-transparent border-none p-0 text-sm focus:ring-0 text-[var(--app-text)] w-full" type="email" defaultValue="teresa.focus@zenith.app"/>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-[var(--app-text-muted)] font-bold px-4">Almacenamiento de Datos</h3>
          <div className="space-y-3">
            <button className="neomorphic-sunken w-full rounded-2xl p-5 flex items-center justify-between group active:scale-[0.99] transition-transform">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[var(--app-text-muted)] group-hover:text-[var(--app-accent)] transition-colors">export_notes</span>
                <span className="text-sm font-medium">Exportar Historial de Enfoque</span>
              </div>
              <span className="material-symbols-outlined text-lg text-[var(--app-text-muted)]">download</span>
            </button>
            <button className="neomorphic-sunken w-full rounded-2xl p-5 flex items-center justify-between group active:scale-[0.99] transition-transform">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[var(--app-text-muted)] group-hover:text-[var(--app-accent)] transition-colors">cloud_sync</span>
                <span className="text-sm font-medium">Sincronización en la Nube</span>
              </div>
              <div className="w-10 h-5 rounded-full relative" style={{ backgroundColor: 'var(--app-accent)', opacity: 0.2 }}>
                <div className="absolute right-1 top-1 w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--app-accent)' }}></div>
              </div>
            </button>
          </div>
        </section>
        <section className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-[var(--app-text-muted)] font-bold px-4">Centro de Privacidad</h3>
          <div className="neomorphic-main-card rounded-3xl p-1 overflow-hidden">
            <div className="p-4 flex items-center justify-between border-b border-[var(--app-glass-border)]">
              <div>
                <p className="text-sm font-medium">Análisis de Uso</p>
                <p className="text-[10px] text-[var(--app-text-muted)]">Ayúdanos a mejorar Zenith</p>
              </div>
              <div className="w-10 h-5 bg-[var(--app-glass)] rounded-full relative border border-[var(--app-glass-border)]">
                <div className="absolute left-1 top-1 w-3 h-3 bg-[var(--app-text-muted)] rounded-full"></div>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Compartir Datos de Salud</p>
                <p className="text-[10px] text-[var(--app-text-muted)]">Integración con Apple Health</p>
              </div>
              <div className="w-10 h-5 rounded-full relative" style={{ backgroundColor: 'var(--app-accent)', opacity: 0.2 }}>
                <div className="absolute right-1 top-1 w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--app-accent)' }}></div>
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
