import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppContextType {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  themeMode: 'claro' | 'oscuro' | 'automatico';
  setThemeMode: (mode: 'claro' | 'oscuro' | 'automatico') => void;
  accentColor: string;
  setAccentColor: (color: string) => void;
  fontFamily: 'Outfit' | 'Playfair';
  setFontFamily: (font: 'Outfit' | 'Playfair') => void;
  glowIntensity: number;
  setGlowIntensity: (intensity: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [themeMode, setThemeMode] = useState<'claro' | 'oscuro' | 'automatico'>('oscuro');
  const [accentColor, setAccentColor] = useState('#FF4D8D');
  const [fontFamily, setFontFamily] = useState<'Outfit' | 'Playfair'>('Outfit');
  const [glowIntensity, setGlowIntensity] = useState(0.2);

  useEffect(() => {
    const root = document.documentElement;
    
    const applyDark = themeMode === 'oscuro' || (themeMode === 'automatico' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (applyDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    root.style.setProperty('--app-accent', accentColor);
    root.style.setProperty('--app-glow-intensity', glowIntensity.toString());

    if (fontFamily === 'Outfit') {
      root.style.setProperty('--app-font', '"Outfit", sans-serif');
    } else {
      root.style.setProperty('--app-font', '"Playfair Display", serif');
    }
  }, [themeMode, accentColor, fontFamily, glowIntensity]);

  return (
    <AppContext.Provider value={{
      isAuthenticated, login: () => setIsAuthenticated(true), logout: () => setIsAuthenticated(false),
      themeMode, setThemeMode, accentColor, setAccentColor, fontFamily, setFontFamily,
      glowIntensity, setGlowIntensity
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
