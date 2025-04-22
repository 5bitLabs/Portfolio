
import { Facebook, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/20 pt-16 pb-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-40 left-0 w-full h-40 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold neon-text mb-4">5BitLabs</h3>
            <p className="text-muted-foreground mb-6">
              Transforming ideas into digital reality through innovative websites,
              games, and mobile applications.
            </p>
            <div className="flex space-x-4">
              { /*<a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                 <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>*/}
              <a href="https://www.instagram.com/5bitlabs/" className="text-muted-foreground hover:text-primary transition-colors"> 
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              {/* <a href="" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a> */}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Game Development
                </a>
              </li>
              {/* <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Cloud Services
                </a>
              </li> */}
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  AI/ML Services
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Custom Software
                </a>
              </li>
              {/* <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Blockchain and Web 3.0 solutions
                </a>
              </li> */}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              {/* <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Projects
                </a>
              </li> */}
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                  Ahmedabad, Gujarat, India<br />
              </li>
              <li>
                <a href="mailto:info@5bitlabs.com" className="text-muted-foreground hover:text-primary transition-colors">
                  fivebitlabs@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+12345678901" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 8460240025
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 5BitLabs™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
