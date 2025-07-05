
import { CircleCheck, Code, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-secondary/5 relative overflow-hidden, relative min-h-screen hero-gradient flex items-center pt-16 overflow-hidden bg-grid-pattern">
      {/* Background Effects */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">About 5BitLabs</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 rounded-2xl hover-card">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              At 5BitLabs, our mission is to bridge the gap between innovative ideas and cutting-edge technology. 
              We believe in pushing the boundaries of what's possible in the digital realm, creating solutions 
              that are not just functional but truly transformative.
            </p>
            <p className="text-muted-foreground">
              Founded by a team of tech enthusiasts with diverse expertise, we combine technical excellence 
              with creative thinking to deliver digital products that stand out in today's competitive landscape.
            </p>
          </div>
          
          <div className="space-y-8">
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Innovative Approach</h4>
                <p className="text-muted-foreground">
                  We constantly explore emerging technologies and methodologies to bring fresh perspectives
                  and innovative solutions to every project.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-neon-pink/10 text-neon-pink">
                <Users size={24} />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Client-Focused</h4>
                <p className="text-muted-foreground">
                  We prioritize open communication and collaboration with our clients,
                  ensuring that the final product aligns perfectly with their vision and goals.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Code size={24} />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Technical Excellence</h4>
                <p className="text-muted-foreground">
                  Our team consists of skilled developers proficient in the latest technologies and frameworks,
                  ensuring we deliver high-performance, scalable solutions.
                </p>
              </div>
            </div>
            
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default AboutSection;