import React, { useEffect, useRef } from 'react';
import { useMode } from '@/contexts/ModeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export const MouseParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { mode } = useMode();
  const particles = useRef<Particle[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Create new particles
      for (let i = 0; i < 3; i++) {
        particles.current.push({
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
          maxLife: 60 + Math.random() * 60,
          size: 2 + Math.random() * 3,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.current = particles.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        const alpha = 1 - (particle.life / particle.maxLife);
        
        if (mode === 'chaotic') {
          // Vibrant colors for chaotic mode
          const hue = (particle.x + particle.y) % 360;
          ctx.fillStyle = `hsla(${hue}, 100%, 50%, ${alpha})`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = `hsla(${hue}, 100%, 50%, ${alpha})`;
        } else {
          // Subtle blue for professional mode
          ctx.fillStyle = `hsla(210, 100%, 45%, ${alpha * 0.6})`;
          ctx.shadowBlur = 5;
          ctx.shadowColor = `hsla(210, 100%, 45%, ${alpha * 0.3})`;
        }

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        return particle.life < particle.maxLife;
      });

      // Keep particle count manageable
      if (particles.current.length > 200) {
        particles.current = particles.current.slice(-200);
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: mode === 'chaotic' ? 'screen' : 'normal' }}
    />
  );
};

