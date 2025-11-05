import { Card } from '@/components/ui/card';
import { Gamepad2, Music, Camera, Coffee, Book, Dumbbell, Mic2, Drama, Pencil, LucideShirt } from 'lucide-react';

export const Hobbies = () => {
  const hobbies = [
    {
      icon: <Pencil className="w-12 h-12" />,
      title: 'Sketching',
      description: 'Some feelings are hard to put into words, so I express them through my sketches.',
      color: 'glow-cyan',
    },
    {
      icon: <LucideShirt className="w-12 h-12" />,
      title: 'Fashion',
      description: 'Exploring the art of self-expression and confidence through fashion and styling.',
      color: 'glow-cyan',
    },
    {
      icon: <Music className="w-12 h-12" />,
      title: 'Music',
      description: 'Listening to a diverse range of music, from energetic Desi beats to soothing French melodies.',
      color: 'glow-magenta',
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Photography',
      description: 'Capturing moments through urban and landscape photography. Always chasing the perfect shot.',
      color: 'glow-green',
    },
    {
      icon: <Mic2 className="w-12 h-12" />,
      title: 'Anchoring',
      description: 'Bringing stories to life and connecting with audiences through the art of anchoring.',
      color: 'glow-magenta',
    },
    {
      icon: <Drama className="w-12 h-12" />,
      title: 'Dramatics',
      description: 'Expressing emotions and exploring characters through the captivating world of theatre',
      color: 'glow-green',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-black glow-cyan">HOBBIES & INTERESTS</h1>
          <p className="text-xl text-muted-foreground font-mono">
            &gt; Life beyond the code_
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <Card
              key={index}
              className="p-8 space-y-4 border-2 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all hover:scale-105"
            >
              <div className={`text-gray ${hobby.color}`}>{hobby.icon}</div>
              <h3 className="text-2xl font-bold">{hobby.title}</h3>
              <p className="text-muted-foreground">{hobby.description}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-card border-2 border-primary">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-black glow-magenta">
              ALWAYS EXPLORING
            </h2>
            <p className="text-lg text-muted-foreground font-mono">
              $ life.balance = work + passion + adventure
            </p>
            <p className="text-muted-foreground">
              I believe in maintaining a healthy work-life balance and constantly exploring 
              new interests that fuel creativity and personal growth.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
