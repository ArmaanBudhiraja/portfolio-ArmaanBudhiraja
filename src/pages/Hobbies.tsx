import { Card } from '@/components/ui/card';
import { Gamepad2, Music, Camera, Coffee, Book, Dumbbell } from 'lucide-react';

export const Hobbies = () => {
  const hobbies = [
    {
      icon: <Gamepad2 className="w-12 h-12" />,
      title: 'Gaming',
      description: 'Exploring virtual worlds and competitive gaming. RPGs and strategy games are my favorites.',
      color: 'glow-cyan',
    },
    {
      icon: <Music className="w-12 h-12" />,
      title: 'Music Production',
      description: 'Creating electronic beats and experimenting with synthesizers in my home studio.',
      color: 'glow-magenta',
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'Photography',
      description: 'Capturing moments through urban and landscape photography. Always chasing the perfect shot.',
      color: 'glow-green',
    },
    {
      icon: <Coffee className="w-12 h-12" />,
      title: 'Coffee Brewing',
      description: 'Mastering different brewing methods and exploring specialty coffee beans from around the world.',
      color: 'glow-cyan',
    },
    {
      icon: <Book className="w-12 h-12" />,
      title: 'Reading Sci-Fi',
      description: 'Diving into futuristic worlds and mind-bending concepts through science fiction novels.',
      color: 'glow-magenta',
    },
    {
      icon: <Dumbbell className="w-12 h-12" />,
      title: 'Fitness',
      description: 'Staying active with weightlifting, running, and exploring new workout routines.',
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
              <div className={`text-primary ${hobby.color}`}>{hobby.icon}</div>
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
