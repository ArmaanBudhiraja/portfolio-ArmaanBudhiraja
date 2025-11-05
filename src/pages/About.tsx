import { useMode } from '@/contexts/ModeContext';
import { Card } from '@/components/ui/card';

export const About = () => {
  const { mode } = useMode();

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
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
            I'm a passionate developer with a love for creating beautiful and functional web experiences. 
            With years of experience in modern web technologies, I specialize in building responsive, 
            user-friendly applications that solve real-world problems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey in tech started with curiosity and evolved into a professional career where I've 
            had the opportunity to work on diverse projects ranging from small startups to large enterprise applications.
          </p>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 space-y-4">
            <h3 className={`text-2xl font-semibold ${mode === 'chaotic' ? 'glow-magenta' : 'text-primary'}`}>
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Bachelor's in Computer Science</h4>
                <p className="text-sm text-muted-foreground">University Name | 2015-2019</p>
              </div>
              <div>
                <h4 className="font-semibold">Certifications</h4>
                <p className="text-sm text-muted-foreground">AWS Certified, Google Cloud Professional</p>
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
