import { Card } from '@/components/ui/card';
import { Code, Database, Layout, Server, Smartphone, Zap } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database & Cloud',
      skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD'],
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'Design & UX',
      skills: ['Figma', 'Adobe XD', 'Responsive Design', 'Accessibility', 'UI/UX'],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Progressive Web Apps'],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Tools & Methodologies',
      skills: ['Git', 'Agile', 'Scrum', 'Jest', 'Testing Library'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">Skills & Expertise</h1>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 space-y-4 hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="text-primary">{category.icon}</div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-primary/5 border-2 border-primary">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Always Learning</h2>
            <p className="text-lg text-muted-foreground">
              Technology evolves rapidly, and I'm committed to continuous learning and staying 
              up-to-date with the latest trends and best practices in web development.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
