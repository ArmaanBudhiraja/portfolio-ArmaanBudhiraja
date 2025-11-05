import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useMode } from '@/contexts/ModeContext';
import { Button } from './ui/button';
import { Sparkles, Briefcase } from 'lucide-react';
import path from 'path';

export const Navigation = () => {
  const { mode, toggleMode } = useMode();
  const location = useLocation();
  const navigate = useNavigate();

  const professionalLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/responsibilities', label: 'Responsibility' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const chaoticLinks = [
    { path: '/', label: 'Home' },
    { path: '/hobbies', label: 'Hobbies' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const links = mode === 'professional' ? professionalLinks : chaoticLinks;

  const handleToggle = () => {
    toggleMode();
    navigate('/'); 
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border mode-transition">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-2xl font-bold mode-transition">
              {mode === 'professional' ? (
                <span className="text-primary">Portfolio</span>
              ) : (
                <span className="glow-cyan text-cyan">CH∆OS</span>
              )}
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-all hover:text-primary ${
                    location.pathname === link.path
                      ? 'text-primary font-semibold '
                      : 'text-foreground/80 hover:text-gray-400'
                  } ${mode === 'chaotic' && location.pathname === link.path ? ' glow-cyan text-white hover:text-gray-400' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Button
            onClick={handleToggle}
            variant="outline2"
            size="sm"
            className={`gap-2 mode-transition ${
              mode === 'chaotic' ? 'border-white glow-cyan text-white hover:bg-white hover:text-black' : ''
            }`}
          >
            {mode === 'professional' ? (
              <>
                <Sparkles className="w-4 h-4" />
                Chaotic
              </>
            ) : (
              <>
                <Briefcase className="w-4 h-4" />
                Professional
              </>
            )}
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center gap-4 mt-4 overflow-x-auto pb-2">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium whitespace-nowrap transition-all hover:text-primary ${
                location.pathname === link.path
                  ? 'text-primary font-semibold'
                  : 'text-foreground/80 hover:text-gray-400'
              } ${mode === 'chaotic' && location.pathname === link.path ? 'glow-cyan text-white hover:text-gray-400' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
