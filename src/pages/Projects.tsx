import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      image: './Sneaker_shop.png',
      github: 'https://github.com/ArmaanBudhiraja/full-stack-awesome-sneakers',
    },
    {
      title: 'V-Graph',
      description: 'Visual automation tool inspired by n8n. Drag-and-drop workflow editor with dynamic node execution and data flow visualization.',
      tags: ['NextJs', 'LangGraph', 'Kafka', 'GenAI'],
      image: './vgraph.jpg',
      github: 'https://github.com/ArmaanBudhiraja/v-graphs',
    },
    {
      title: 'Fx-Anomoly-Detection',
      description: 'A real-time streaming pipeline for detecting anomalies in foreign exchange (FX) trade data using Apache Spark and Kafka.',
      tags: ['Python', 'HTML', 'Apache Spark', 'Kafka'],
      image: './fx.webp',
      github: 'https://github.com',
    },
    {
      title: 'Weather Forecast App',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
      tags: ['Python', 'OpenWeatherMap API', 'Tkinter'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop',
      github: 'https://github.com/ArmaanBudhiraja/Weather-app',
    },
    {
      title: 'Frostbound-Runner',
      description: 'Frostbound Run is a Python-based 2D platformer developed using Pygame. The project demonstrates game physics, sprite animation, enemy state management, projectile combat, level loading via JSON, and cross-platform deployment using PyInstaller.',
      tags: ['Pygame', 'Python', '2D Platformer'],
      image: './frostband.png',
      github: 'https://github.com/ArmaanBudhiraja/Frostbound-run',
    },
    {
      title: 'ThinkPDF',
      description: 'ThinkPDF is a document processing tool that leverages machine learning to extract and analyze data from PDF files. The project showcases advanced text recognition, data extraction, and user-friendly interfaces.',
      tags: ['Python', 'Machine Learning', 'PDF Processing', 'NextJs'],
      image: './ThinkPDF.png',
      github: 'https://github.com/ArmaanBudhiraja/smart-doc-assistant',
    },
    {
      title: 'A-UI',
      description: 'A-UI is a user interface library that simplifies the process of building responsive and accessible web applications. The project emphasizes modular design, theming, and developer experience.',
      tags: ['React', 'NextJs', 'TypeScript', 'UI Library', 'Design Systems'],
      image: './A-UI.png',
      github: 'https://github.com/ArmaanBudhiraja/UI-Components',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">My Projects</h1>
          <p className="text-xl text-muted-foreground">
            Showcasing my best work and side projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-4">
                  <Button variant="outline2" size="sm" className="gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button variant="outline2" size="sm" className="gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
