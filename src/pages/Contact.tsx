import { useMode } from '@/contexts/ModeContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';


export const Contact = () => {
  const { mode } = useMode();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
  };

  emailjs
    .send(
      'service_0o48ypc',
      'template_9jaasye',
      templateParams,
      'R9ISRcTkJ-NzmTxvA'
    )
    .then(
      (response) => {
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        console.error('FAILED...', error);
        toast.error('Something went wrong. Please try again.');
      }
    );
};


  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className={`text-5xl font-bold ${mode === 'chaotic' ? 'glow-cyan' : ''}`}>
            {mode === 'professional' ? 'Get In Touch' : 'CONNECT WITH ME'}
          </h1>
          <p className="text-xl text-muted-foreground">
            {mode === 'professional'
              ? "Let's discuss your next project"
              : '> Initiating communication protocol_'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className={`p-8 space-y-6 ${mode === 'chaotic' ? 'border-2' : ''}`}>
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-primary/10 ${mode === 'chaotic' ? 'glow-cyan' : ''}`}>
                  <Mail className="w-5 h-5 text" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">armaanbudhiraja88503@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-primary/10 ${mode === 'chaotic' ? 'glow-magenta' : ''}`}>
                  <Phone className="w-5 h-5 text" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 9518449833</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-primary/10 ${mode === 'chaotic' ? 'glow-green' : ''}`}>
                  <MapPin className="w-5 h-5 text" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Ambala, Haryana, IN</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className={`p-8 ${mode === 'chaotic' ? 'border-2' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  required
                />
              </div>
              <Button
                type="submit"
                className={`w-full gap-2 ${mode === 'chaotic' ? 'glow-cyan text-cyan' : ''}`}
              >
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

//service_0o48ypc
//template_9jaasye
//R9ISRcTkJ-NzmTxvA