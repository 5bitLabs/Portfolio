
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setIsSubmitting(true);

//   try {
//     const response = await fetch('http://localhost:5000/api/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(formData)
//     });

//     const result = await response.json();

//     if (response.ok) {
//       toast({
//         title: 'Message Sent!',
//         description: 'Thanks for reaching out. We\'ll get back to you soon.',
//       });
//       setFormData({ name: '', email: '', message: '' });
//     } else {
//       toast({
//         title: 'Error',
//         description: result.message || 'Something went wrong. Please try again.',
//         variant: 'destructive',
//       });
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     toast({
//       title: 'Network Error',
//       description: 'Could not connect to the server.',
//       variant: 'destructive',
//     });
//   } finally {
//     setIsSubmitting(false);
//   }
// };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const apiUrl = process.env.NODE_ENV === 'production'
    ? '/api/contact' // Vercel automatically handles the serverless function route
    : 'http://localhost:5000/api/contact'; // Local development server

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (response.ok) {
      toast({
        title: 'Message Sent!',
        description: 'Thanks for reaching out. We\'ll get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast({
        title: 'Error',
        description: result.message || 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    }
  } catch (error) {
    console.error('Error:', error);
    toast({
      title: 'Network Error',
      description: 'Could not connect to the server.',
      variant: 'destructive',
    });
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-secondary/5 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 neon-text">Contact Us</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to learn more about our services? 
            Get in touch with our team and let's start building your digital solution today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass-card p-8 rounded-xl hover-card">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-secondary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-secondary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-secondary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 neon-border"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>
                <p className="text-muted-foreground mb-8">
                  Have questions or want to discuss your project requirements?
                  Our team is ready to help you bring your vision to life with 
                  innovative solutions tailored to your specific needs.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email Us</h4>
                    <a href="mailto:fivebitlabs@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      fivebitlabs@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Call Us</h4>
                    <a href="tel:+12345678901" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 8460240025
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Visit Us</h4>
                    <p className="text-muted-foreground">
                        Ahemdabad,Gujarat,India<br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
