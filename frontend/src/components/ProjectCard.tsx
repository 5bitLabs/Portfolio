
import { useState } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  demoUrl,
  githubUrl
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="overflow-hidden rounded-xl glass-card hover-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        ></div>
        <div className="absolute top-4 left-4 z-20 flex gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-black/30 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>
        
        <div className="flex items-center gap-3">
          {demoUrl && (
            <Button 
              variant="default" 
              size="sm"
              className="gap-1 bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary"
              asChild
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                Visit <ExternalLink size={14} />
              </a>
            </Button>
          )}
          
          {githubUrl && (
            <Button 
              variant="outline"
              size="sm"
              className="gap-1"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                Code <Github size={14} />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
