import React, { createContext, useContext, useState, useEffect } from 'react';

type Mode = 'professional' | 'chaotic';

interface ModeContextType {
  mode: Mode;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export const ModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<Mode>('professional');

  useEffect(() => {
    // Apply mode class to document
    if (mode === 'chaotic') {
      document.documentElement.classList.add('chaotic');
    } else {
      document.documentElement.classList.remove('chaotic');
    }
  }, [mode]);

  const toggleMode = () => {
    setMode(prev => prev === 'professional' ? 'chaotic' : 'professional');
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error('useMode must be used within ModeProvider');
  }
  return context;
};
