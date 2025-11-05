import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { styleText } from 'util';


export const ProfessionalHome = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight" style ={{color: 'grey', textAlign: 'left',marginLeft: '136px'}}>
            Hi, I'm <div><span className="text-primary">Armaan Budhiraja</span></div>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto" style={{ textAlign: 'left', marginLeft: '136px', color: 'grey' }}>
            A passionate developer crafting elegant solutions to complex problems
          </p>

          <div className="flex items-center justify-center gap-4 pt-8">
            <Button asChild size="lg" className="gap-2">
              <Link to="/projects">
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline2" size="lg">
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
          

          <div className="flex items-center justify-center gap-6 pt-12">
            <a
              href="https://github.com/ArmaanBudhiraja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/armaanbudhiraja/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:armaanbudhiraja88503@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://drive.google.com/file/d/1LJjNSnyL_a4nc7TLClHsXVzHWaIJmoob/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button variant="outline2">Resume</Button>
            </a>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
