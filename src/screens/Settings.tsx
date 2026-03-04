import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { useAppContext } from '../context/AppContext';

export default function Settings() {
  const navigate = useNavigate();
  const { logout } = useAppContext();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center p-6 pb-40 bg-[var(--app-bg)] text-[var(--app-text)] transition-colors duration-300">
      <header className="w-full pt-4 mb-10 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Ajustes</h1>
        <div className="w-10 h-10 rounded-full bg-[var(--app-glass)] flex items-center justify-center border border-[var(--app-glass-border)]">
          <span className="material-symbols-outlined text-xl">person_outline</span>
        </div>
      </header>
      <main className="w-full max-w-md space-y-10">
        <section className="space-y-4">
          <div className="neomorphic-main-card rounded-[2.5rem] p-8 flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 relative">
              <div className="absolute inset-0 blur-2xl rounded-full" style={{ backgroundColor: 'var(--app-accent)', opacity: 0.2 }}></div>
              <div className="relative w-full h-full bg-[var(--app-bg-alt)] rounded-2xl border border-[var(--app-glass-border)] flex items-center justify-center shadow-2xl">
                <span className="material-symbols-outlined text-4xl" style={{ color: 'var(--app-accent)' }}>palette</span>
              </div>
            </div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--app-text-muted)] font-bold mb-2">Personalización</h2>
            <p className="text-sm text-[var(--app-text-muted)] mb-8 max-w-[200px]">Define la estética de tu enfoque profundo</p>
            <button
              onClick={() => navigate('/settings/customization')}
              className="w-full py-4 rounded-2xl flex items-center justify-center gap-3 group text-white font-bold transition-transform active:scale-95"
              style={{ backgroundColor: 'var(--app-accent)' }}
            >
              <span className="text-sm font-semibold tracking-wide">Configurar Interfaz</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
            </button>
          </div>
        </section>
        <section className="space-y-4">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-[var(--app-text-muted)] font-bold px-4">Configuración General</h3>
          <div className="space-y-4">
            <button
              onClick={() => navigate('/settings/account')}
              className="w-full neomorphic-sunken rounded-3xl p-5 flex items-center justify-between group active:scale-[0.99] transition-transform"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--app-glass)] flex items-center justify-center border border-[var(--app-glass-border)]">
                  <span className="material-symbols-outlined text-[var(--app-text-muted)] group-hover:text-[var(--app-text)]">account_circle</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">Cuenta</p>
                  <p className="text-[10px] text-[var(--app-text-muted)]">Perfil, suscripción y datos</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-lg text-[var(--app-text-muted)]">chevron_right</span>
            </button>
            <button
              onClick={() => navigate('/settings/security')}
              className="w-full neomorphic-sunken rounded-3xl p-5 flex items-center justify-between group active:scale-[0.99] transition-transform"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--app-glass)] flex items-center justify-center border border-[var(--app-glass-border)]">
                  <span className="material-symbols-outlined text-[var(--app-text-muted)] group-hover:text-[var(--app-text)]">security</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">Seguridad de Sesión</p>
                  <p className="text-[10px] text-[var(--app-text-muted)]">FaceID, PIN y privacidad</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-lg text-[var(--app-text-muted)]">chevron_right</span>
            </button>
            <button
              onClick={() => navigate('/settings/help')}
              className="w-full neomorphic-sunken rounded-3xl p-5 flex items-center justify-between group active:scale-[0.99] transition-transform"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--app-glass)] flex items-center justify-center border border-[var(--app-glass-border)]">
                  <span className="material-symbols-outlined text-[var(--app-text-muted)] group-hover:text-[var(--app-text)]">auto_awesome</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">Ayuda & Soporte</p>
                  <p className="text-[10px] text-[var(--app-text-muted)]">Guías y centro de asistencia</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-lg text-[var(--app-text-muted)]">chevron_right</span>
            </button>
            <button
              onClick={handleLogout}
              className="w-full neomorphic-sunken rounded-3xl p-5 flex items-center justify-between group active:scale-[0.99] transition-transform mt-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                  <span className="material-symbols-outlined text-red-500">logout</span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-red-500">Cerrar Sesión</p>
                </div>
              </div>
            </button>
          </div>
        </section>
      </main>
      <BottomNav />
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-[var(--app-glass-border)] rounded-full"></div>
    </div>
  );
}
