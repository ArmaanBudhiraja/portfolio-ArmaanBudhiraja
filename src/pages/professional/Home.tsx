import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProfessionalHome = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Your Name</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            A passionate developer crafting elegant solutions to complex problems
          </p>

          <div className="flex items-center justify-center gap-4 pt-8">
            <Button asChild size="lg" className="gap-2">
              <Link to="/projects">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:your@email.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-32 grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-2 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
            <h3 className="text-4xl font-bold text-primary">5+</h3>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="text-center space-y-2 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
            <h3 className="text-4xl font-bold text-primary">50+</h3>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="text-center space-y-2 p-6 rounded-lg bg-card border border-border hover:shadow-lg transition-shadow">
            <h3 className="text-4xl font-bold text-primary">20+</h3>
            <p className="text-muted-foreground">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};
