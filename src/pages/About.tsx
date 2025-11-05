import { useMode } from '@/contexts/ModeContext';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export const About = () => {
  const { mode } = useMode();

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <Avatar className="w-40 h-40 mx-auto border-4 border-border mb-6">
            <AvatarImage src="/placeholder.jpg" alt="Your Name" />
            <AvatarFallback>YN</AvatarFallback>
          </Avatar>
          <h1 className={`text-5xl font-bold ${mode === 'chaotic' ? 'glow-cyan' : ''}`}>
            About Me
          </h1>
          <p className="text-xl text-muted-foreground">
            {mode === 'professional' 
              ? 'Learn more about my journey and expertise'
              : 'Diving into the depths of creativity'}
          </p>
        </div>

        <Card className="p-8 space-y-6">
          <h2 className="text-3xl font-semibold">My Story</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I have a passion for creating modern, user-friendly web apps and skilled in creating clean digital experiences. I have a strong interest in software development, UI/UX design, and creative problem solving. I love to turn ideas into meaningful projects.
            <br></br><br></br>
            Aside from technical know-how, my communication and presentation experience from anchoring and public speaking allow me to work well within teams.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey in tech started with curiosity and evolved into a professional career where I've 
            had the opportunity to work on diverse projects.
          </p>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 space-y-4">
            <h3 className={`text-2xl font-semibold ${mode === 'chaotic' ? 'glow-magenta' : 'text-primary'}`}>
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">B.Tech in Computer Science and Engineering</h4>
                <p className="text-sm text-muted-foreground">Vellore Institute of Technology | 2023-2027</p>
              </div>
              <div>
                <h4 className="font-semibold">XII (Non Medical)</h4>
                <p className="text-sm text-muted-foreground">Khemo Devi Public School | 2021-2023</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 space-y-4">
            <h3 className={`text-2xl font-semibold ${mode === 'chaotic' ? 'glow-green' : 'text-primary'}`}>
              Experience
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Senior Developer</h4>
                <p className="text-sm text-muted-foreground">Tech Company | 2021-Present</p>
              </div>
              <div>
                <h4 className="font-semibold">Full Stack Developer</h4>
                <p className="text-sm text-muted-foreground">Startup Inc | 2019-2021</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
