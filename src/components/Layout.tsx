import React from 'react';
import { Navigation } from './Navigation';
import { MouseParticles } from './MouseParticles';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen relative mode-transition">
      <MouseParticles />
      <Navigation />
      <main className="relative z-10 pt-20">
        {children}
      </main>
    </div>
  );
};
