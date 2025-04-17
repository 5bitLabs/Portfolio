
import { Code, Globe, Smartphone, Gamepad,Megaphone,Database, Cloud } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesSection = () => {
  const services = [
    {
      title: 'Website Development',
      description: 'Modern, responsive websites built with the latest technologies for optimal performance and user experience.',
      icon: Globe,
      features: [
        'Responsive design for all devices',
        'SEO optimization',
        'Performance focused development',
        'CMS integration'
      ]
    },
    {
      title: 'Mobile App Development',
      description: 'Feature-rich mobile applications for iOS and Android platforms with intuitive user interfaces.',
      icon: Smartphone,
      features: [
        'Cross-platform development',
        'Native app development',
        'App Store optimization',
        'Regular maintenance & updates'
      ]
    },
    {
      title: 'Game Development',
      description: 'Immersive gaming experiences with cutting-edge graphics and engaging gameplay mechanics.',
      icon: Gamepad,
      features: [
        '2D and 3D game development',
        'Multiplayer functionality',
        'Cross-platform compatibility',
        'Game optimization'
      ]
    },
     {
      title: 'Digital Marketing',
      description: 'In a world where attention is currency, we help brands become unforgettable. From the spark of an idea to the moment it goes viral, we’re there crafting stories, building connections, and turning your brand into an experience people can’t stop talking about. This isn’t just digital marketing. It’s transformation.',
      icon:Megaphone,
      features: [
        'Visual content creation',
        'Social media content', 
        'Research and Trends analysis',
        'Influencer & Creator Collaboration',
        'Campaign Planning & Execution'
      ]
    }
    // {
    //   title: 'Cloud Services',
    //   description: 'Scalable cloud solutions to ensure your applications run smoothly and securely.',
    //   icon: Cloud,
    //   features: [
    //     'Cloud infrastructure setup',
    //     'Data migration services',
    //     'Serverless architecture',
    //     '24/7 monitoring & support'
    //   ]
    // },
    // {
    //   title: 'Custom Software',
    //   description: 'Bespoke software solutions tailored to your specific business requirements and challenges.',
    //   icon: Code,
    //   features: [
    //     'Requirements analysis',
    //     'Agile development',
    //     'Quality assurance',
    //     'Ongoing support'
    //   ]
    // },
    // {
    //   title: 'Database Management',
    //   description: 'Efficient database design, implementation, and optimization for reliable data management.',
    //   icon: Database,
    //   features: [
    //     'Database architecture design',
    //     'Performance optimization',
    //     'Data security implementation',
    //     'Backup & recovery solutions'
    //   ]
    // },
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-secondary/5 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">Our Services</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of digital services to help businesses and individuals 
            bring their digital visions to life with cutting-edge technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
