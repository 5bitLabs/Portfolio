
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const ServiceCard = ({ title, description, icon: Icon, features }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="h-14 w-14 flex items-center justify-center rounded-lg bg-primary/20 text-primary mb-5">
          <Icon size={28} className={`transition-transform duration-700 ${isHovered ? 'rotate-12' : ''}`} />
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        {/* <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">
          Learn More
        </Button> */}
      </div>
    </div>
  );
};

export default ServiceCard;
