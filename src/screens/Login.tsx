import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const COLORS = ['#ffffff', '#10B981', '#EF4444', '#3B82F6', '#F59E0B', '#8B5CF6'];

export default function Login() {
  const navigate = useNavigate();
  const { login, glowIntensity } = useAppContext();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % COLORS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle login or signup here
    login();
    navigate('/');
  };

  return (
    <div className="font-display text-pale-silver min-h-screen flex flex-col items-center justify-center p-8 antialiased overflow-hidden relative">
      <div className="w-full max-w-sm flex flex-col items-center justify-between min-h-[85vh] z-10">
        <div className="flex flex-col items-center w-full">
          <div 
            className="ladrillito-master mb-12 transform-gpu w-[170px] h-[170px] rounded-[44px] relative flex items-center justify-center overflow-hidden"
            style={{ '--login-color': COLORS[colorIndex] } as React.CSSProperties}
          >
            <span className="debossed-time font-bold text-[2.75rem] tracking-[-1.5px] opacity-90">time</span>
            <div className="absolute inset-0 border border-white/5 rounded-[44px] pointer-events-none"></div>
          </div>
          <h1 className="text-xl font-bold tracking-[0.5em] uppercase silvery-glow text-center text-pale-silver/90 mb-16">
            ZENITH DEEP FOCUS
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="w-full space-y-10 flex flex-col items-center">
          <div className="w-full space-y-5">
            {!isLogin && (
              <div className="relative w-full">
                <input
                  className="w-full px-8 py-5 rounded-2xl neumorphic-field text-pale-silver placeholder:text-pale-silver/20 border-none focus:ring-2 focus:ring-sapphire/40 transition-all outline-none text-base"
                  placeholder="Nombre"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="relative w-full">
              <input
                className="w-full px-8 py-5 rounded-2xl neumorphic-field text-pale-silver placeholder:text-pale-silver/20 border-none focus:ring-2 focus:ring-sapphire/40 transition-all outline-none text-base"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative w-full">
              <input
                className="w-full px-8 py-5 rounded-2xl neumorphic-field text-pale-silver placeholder:text-pale-silver/20 border-none focus:ring-2 focus:ring-sapphire/40 transition-all outline-none text-base"
                placeholder="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="w-full space-y-6 flex flex-col items-center">
            <button
              type="submit"
              className="w-full py-5 rounded-2xl tactile-btn text-sm font-bold tracking-[0.25em] uppercase text-white transition-all duration-500"
              style={{ backgroundColor: COLORS[colorIndex], boxShadow: `0 14px 28px rgba(0, 0, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.4), inset 0 -4px 8px rgba(0, 0, 0, 0.4), 0 0 20px ${COLORS[colorIndex]}40` }}
            >
              {isLogin ? 'INICIAR SESIÓN' : 'REGISTRARSE'}
            </button>
            {isLogin && (
              <a
                className="text-[10px] uppercase tracking-[0.2em] text-pale-silver/40 hover:text-pale-silver/70 transition-colors text-center font-medium"
                href="#"
              >
                ¿Olvidaste tu contraseña?
              </a>
            )}
          </div>
        </form>
        <div className="mt-auto pt-16 text-center">
          <p className="text-xs text-pale-silver/50 tracking-wide">
            {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sapphire font-bold underline underline-offset-8 decoration-sapphire/40 hover:text-silvery-aqua transition-colors ml-1.5"
            >
              {isLogin ? 'Regístrate' : 'Inicia sesión'}
            </button>
          </p>
        </div>
      </div>
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/10 rounded-full"></div>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute top-[-10%] left-[-15%] w-[70%] h-[70%] blur-[160px] rounded-full transition-colors duration-1000"
          style={{ backgroundColor: COLORS[colorIndex], opacity: glowIntensity * 0.5 }}
        ></div>
        <div 
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] blur-[140px] rounded-full transition-colors duration-1000"
          style={{ backgroundColor: COLORS[colorIndex], opacity: glowIntensity * 0.25 }}
        ></div>
      </div>
    </div>
  );
}
