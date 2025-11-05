import { Card } from '@/components/ui/card';
import { useState } from 'react';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
      title: 'Abstract Art',
      category: 'Digital',
    },
    {
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      title: 'Mountain Vista',
      category: 'Photography',
    },
    {
      url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=600&fit=crop',
      title: 'Gradient Dreams',
      category: 'Digital',
    },
    {
      url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop',
      title: 'Ocean Waves',
      category: 'Photography',
    },
    {
      url: 'https://images.unsplash.com/photo-1557264337-e8a93017fe92?w=800&h=600&fit=crop',
      title: 'Neon Nights',
      category: 'Urban',
    },
    {
      url: 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=800&h=600&fit=crop',
      title: 'Cosmic Journey',
      category: 'Digital',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-7xl mx-auto space-y-12 animate-fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-black glow-cyan">VISUAL GALLERY</h1>
          <p className="text-xl text-muted-foreground font-mono">
            &gt; A collection of captured moments and digital experiments_
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden cursor-pointer border-2 hover:border-primary transition-all"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold glow-cyan">{image.title}</h3>
                    <p className="text-sm text-gray-300">{image.category}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};
