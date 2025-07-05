
import ProjectCard from './ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Styra - E-commerce Website',
      description: 'A full-featured Shopify store with product catalog, cart functionality, payment processing, and admin dashboard.',
      tags: ['Shopify', 'Customized'],
      imageUrl: 'https://styra.shop/cdn/shop/files/Asset_5_3x_3826475d-9903-4caf-b226-0f8c6b22085a.png?v=1750446469',
      demoUrl: 'https://styra.shop/',
      // githubUrl: '#'
    },
    // {
    //   title: 'Health & Fitness App',
    //   description: 'Mobile application for tracking workouts, nutrition, and personal health metrics with social features.',
    //   tags: ['React Native', 'Firebase'],
    //   imageUrl: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    //   demoUrl: '#'
    // },
    // {
    //   title: 'Crypto Dashboard',
    //   description: 'Real-time cryptocurrency monitoring platform with advanced charting, alerts, and portfolio management.',
    //   tags: ['Vue.js', 'Express', 'WebSockets'],
    //   imageUrl: 'https://images.unsplash.com/photo-1621501103258-3e0f30a51e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    //   demoUrl: '#',
    //   githubUrl: '#'
    // },
    // {
    //   title: '2D Platform Game',
    //   description: 'Side-scrolling adventure game with complex physics, interactive environments, and engaging storyline.',
    //   tags: ['Unity', 'C#', 'Game Design'],
    //   imageUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    //   demoUrl: '#'
    // },
    // {
    //   title: 'AI Content Generator',
    //   description: 'Tool that leverages machine learning to help users create articles, social media posts, and marketing copy.',
    //   tags: ['Python', 'TensorFlow', 'NLP'],
    //   imageUrl: 'https://images.unsplash.com/photo-1677442135076-1c07bc36ced8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    //   demoUrl: '#',
    //   githubUrl: '#'
    // },
    // {
    //   title: 'Smart Home Dashboard',
    //   description: 'Centralized control system for connected home devices with automation routines and energy monitoring.',
    //   tags: ['IoT', 'React', 'Node.js'],
    //   imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    //   demoUrl: '#'
    // },
    // {
    //   title: '2D Platform Game',
    //   description: 'Side-scrolling adventure game with complex physics, interactive environments, and engaging storyline.',
    //   tags: ['Unity', 'C#', 'Game Design'],
    //   imageUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    //   demoUrl: '#'
    // },
    // {
    //   title: 'AI Content Generator',
    //   description: 'Tool that leverages machine learning to help users create articles, social media posts, and marketing copy.',
    //   tags: ['Python', 'TensorFlow', 'NLP'],
    //   imageUrl: 'https://images.unsplash.com/photo-1677442135076-1c07bc36ced8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    //   demoUrl: '#',
    //   githubUrl: '#'
    // },
    // {
    //   title: 'Smart Home Dashboard',
    //   description: 'Centralized control system for connected home devices with automation routines and energy monitoring.',
    //   tags: ['IoT', 'React', 'Node.js'],
    //   imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    //   demoUrl: '#'
    // }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-secondary/5 relative overflow-hidden, relative min-h-screen hero-gradient flex items-center pt-16 overflow-hidden bg-grid-pattern">
      {/* Background Elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">Our Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse portfolio of innovative digital solutions across digital marketing, web and game development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          {/* <Button variant="outline" size="lg" className="gap-2">
            View All Projects
            <ArrowRight size={18} />
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;