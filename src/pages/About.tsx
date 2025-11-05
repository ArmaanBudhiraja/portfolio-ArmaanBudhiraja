import { useMode } from '@/contexts/ModeContext';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {Calendar, Database, Lightbulb, Cpu, Globe, Code} from 'lucide-react';

export const About = () => {
  const { mode } = useMode();
  const subjects = [
    {
      title: "Data Structures & Algorithms",
      description:
        "Arrays, linked lists, trees, graphs, recursion, dynamic programming, and greedy algorithms.",
      icon: <Database className="w-6 h-6" />,
      cgpa: 10,
    },
    {
      title: "Design and Analysis of Algorithms",
      description:
        "Time complexity analysis, advanced sorting techniques, graph algorithms, and optimization strategies.",
      icon: <Lightbulb className="w-6 h-6" />,
      cgpa: 9,
    },
    {
      title: "Operating Systems",
      description:
        "Process management, memory management, file systems, concurrency, and synchronization techniques.",
      icon: <Cpu className="w-6 h-6" />,
      cgpa: 8,
    },
    {
      title: "Database Management Systems",
      description:
        "Relational databases, SQL, indexing, transactions, and normalization.",
      icon: <Database className="w-6 h-6" />,
      cgpa: 9,
    },
    {
      title: "Object-Oriented Methodologies",
      description:
        "OOP principles: encapsulation, inheritance, polymorphism, and design patterns in C++ and Java.",
      icon: <Code className="w-6 h-6" />,
      cgpa: 10,
    },
    {
      title: "Computer Networks",
      description:
        "Network layers, TCP/IP, routing algorithms, security protocols, and networking applications.",
      icon: <Globe className="w-6 h-6" />,
      cgpa: 9,
    },
  ];

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

        <div className="grid md:grid-cols-1 gap-8">
          <Card className="p-8 space-y-6">
            <h3 className={`text-2xl font-semibold ${mode === 'chaotic' ? 'glow-magenta' : 'text-primary'}`}>
              Education
            </h3>
            <div className="space-y-4 grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold">B.Tech in Computer Science and Engineering</h4>
                <p className="text-sm text-muted-foreground">Vellore Institute of Technology, Vellore</p>
              </div>
              <div style={{textAlign: 'right', paddingTop: '0px', marginTop: '0px'}}>
                <p className='text-sm' style={{display: 'inline-flex'}}><Calendar className='w-4 h-4'/><span><span style={{color:'white'}}>_</span>2023 - 2027 </span></p>
                <h5 className="text-sm text-muted-foreground">CGPA: <span style={{border: '1px solid #D3D3D3', borderRadius: '8px', padding: '1px 7px'}}>9.01/10</span></h5>
              </div>
            </div>
          </Card>
          <Card className='p-8 space-y-6'>
            <h3 className={`text-2xl font-semibold ${mode === 'chaotic' ? 'glow-magenta' : 'text-primary'}`}>
              Key Sybjects Studied
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  {/* Header */}
                  <div className="space-y-1.5 p-6 pb-2 flex flex-row items-start gap-2">
                    <div
                      className="p-2 rounded-md"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(79, 70, 229, 0.125), rgba(124, 58, 237, 0.125))",
                        color: "rgb(79, 70, 229)",
                      }}
                    >
                      {subject.icon}
                    </div>
                    <div>
                      <div className="tracking-tight text-lg font-semibold">
                        {subject.title}
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 pt-0">
                    <p className="text-sm text-muted-foreground mb-2">
                      {subject.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
