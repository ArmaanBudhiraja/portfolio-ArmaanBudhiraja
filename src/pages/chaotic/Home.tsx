import { Button } from '@/components/ui/button';
import { Zap, Sparkles, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ChaoticHome = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="inline-block animate-pulse">
            <Zap className="w-16 h-16  glow-cyan" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            <span className="glow-cyan text-cyan">WELCOME</span>
            <br />
            <span className="glow-magenta text-magenta">TO CHAOS</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-mono">
            &gt; Breaking the rules, one pixel at a time_
          </p>

          <div className="flex items-center justify-center gap-4 pt-8">
            <Button 
              asChild 
              size="lg" 
              className="gap-2 glow-cyan border-2 border-white text-cyan hover:text-black hover:bg-white"
            >
              <Link to="/hobbies">
                <Sparkles className="w-4 h-4" />
                Explore Hobbies
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="gap-2 glow-magenta border-2 border-white hover:text-black hover:bg-white"
            >
              <Link to="/gallery">
                <Rocket className="w-4 h-4" />
                View Gallery
              </Link>
            </Button>
          </div>

          <div className="pt-12 font-mono text-sm text-foreground space-y-2">
            <p className="glow-green">$ system.status: OPERATIONAL</p>
            <p className="glow-cyan">$ creativity.level: MAXIMUM</p>
            <p className="glow-magenta">$ chaos.mode: ENABLED</p>
          </div>
        </div>

        <div className="mt-32 grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-2 p-6 rounded-lg bg-card border-2 border-primary shadow-[0_0_10px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all">
            <h3 className="text-4xl font-black glow-cyan text-cyan">∞</h3>
            <p className="text-muted-foreground font-mono">Ideas Generated</p>
          </div>
          <div className="text-center space-y-2 p-6 rounded-lg bg-card border-2 border-secondary shadow-[0_0_10px_rgba(255,0,255,0.3)] hover:shadow-[0_0_30px_rgba(255,0,255,0.3)] transition-all">
            <h3 className="text-4xl font-black glow-magenta text-magenta">404</h3>
            <p className="text-muted-foreground font-mono">Rules Broken</p>
          </div>
          <div className="text-center space-y-2 p-6 rounded-lg bg-card border-2 border-secondary shadow-[0_0_10px_rgba(0,255,0,0.3)] hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] transition-all">
            <h3 className="text-4xl font-black glow-green text-accent">100%</h3>
            <p className="text-muted-foreground font-mono">Chaos Level</p>
          </div>
        </div>
      </div>
    </div>
  );
};
