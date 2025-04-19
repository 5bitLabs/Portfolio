
// import { useEffect, useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, Code, Layers, Megaphone, Smartphone } from 'lucide-react';

// const HeroSection = () => {
//   const [scrollY, setScrollY] = useState(0);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
    
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <section id="home" className="relative min-h-screen hero-gradient flex items-center pt-16 overflow-hidden bg-grid-pattern">
//       {/* Background effects */}
//       <div 
//         className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] opacity-20"
//         style={{ transform: `translateY(${scrollY * 0.1}px)` }}
//       />
//       <div 
//         className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] opacity-20"
//         style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
//       />
      
//       <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="flex-1 text-center md:text-left mb-12 md:mb-0">
//             <div className="mb-6 inline-block">
//               <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary inline-flex items-center gap-2">
//                 <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
//                 Think Fast, Click Faster-The 5bit Way!
//               </div>
//             </div>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 neon-text tracking-tight">
//               Transforming Ideas into <br />
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 Digital Reality
//               </span>
//             </h1>
//             <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
//               We are 5BitLabs, a team of passionate developers crafting exceptional digital experiences through websites, games, and mobile applications.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//               <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 neon-border">
//                 Get Started 
//                 <ArrowRight size={18} />
//               </Button>
//               <Button variant="outline" size="lg" className="gap-2">
//                 Our Projects
//               </Button>
//             </div>
//           </div>
//           <div className="flex-1 relative">
//             {/* <div className="relative w-full h-[400px] md:h-[500px]"> */}
//             <div className="relative w-full mt-10">
//               <div className="absolute top-0 left-0 w-full h-full">
//                 <div className="relative w-full h-full">
//                   {/* Floating elements */}
//                   <div className="absolute top-10 right-10 glass-card p-6 rounded-xl shadow-lg animate-float" style={{animationDelay: '0s'}}>
//                     <Code size={40} className="text-primary animate-glow" />
//                     <h3 className="mt-3 font-bold">Web Development</h3>
//                   </div>
//                   <div className="absolute bottom-20 left-5 glass-card p-6 rounded-xl shadow-lg animate-float" style={{animationDelay: '1s'}}>
//                     <Smartphone size={40} className="text-accent animate-glow" />
//                     <h3 className="mt-3 font-bold">Mobile Apps</h3>
//                   </div>
//                   <div className="absolute top-1/2 right-1/4 glass-card p-6 rounded-xl shadow-lg animate-float" style={{animationDelay: '2s'}}>
//                     <Layers size={40} className="text-neon-pink animate-glow" />
//                     <h3 className="mt-3 font-bold">Game Dev</h3>
//                   </div>
//                   {/* <div className="absolute bottom-10 right-1/3 glass-card p-6 rounded-xl shadow-lg animate-float" style={{ animationDelay: '3s' }}>
//                     <Megaphone size={40} className="text-yellow-400 animate-glow" />
//                     <h3 className="mt-3 font-bold">Digital Marketing</h3>
//                   </div> */}
//                   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 glass-card p-6 rounded-xl shadow-lg animate-float" style={{ animationDelay: '3s' }}>
//                     <Megaphone size={40} className="text-yellow-400 animate-glow" />
//                     <h3 className="mt-3 font-bold">Digital Marketing</h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Bottom fade effect */}
//       <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
//     </section>
//   );
// };

// export default HeroSection;


import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Layers, Megaphone, Smartphone } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen hero-gradient flex items-center pt-16 overflow-hidden bg-grid-pattern">
      {/* Background effects */}
      <div 
        className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] opacity-20"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div 
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] opacity-20"
        style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
      />
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left mb-12 md:mb-0">
            <div className="mb-6 inline-block">
              <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary inline-flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Think Fast, Click Faster - The 5Bit Way!
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 neon-text tracking-tight">
              Transforming Ideas into <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
              We are 5BitLabs, a team of passionate developers crafting exceptional digital experiences through websites, games, and mobile applications.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 neon-border">
                Get Started 
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                Our Projects
              </Button>
            </div> */}
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full mt-10">
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
                <div className="glass-card p-6 rounded-xl shadow-lg animate-float hover:scale-105 transition-transform" style={{ animationDelay: '0s' }}>
                  <Code size={40} className="text-primary animate-glow" />
                  <h3 className="mt-3 font-bold text-center">Web Development</h3>
                </div>
                <div className="glass-card p-6 rounded-xl shadow-lg animate-float hover:scale-105 transition-transform" style={{ animationDelay: '1s' }}>
                  <Smartphone size={40} className="text-accent animate-glow" />
                  <h3 className="mt-3 font-bold text-center">Mobile Apps</h3>
                </div>
                <div className="glass-card p-6 rounded-xl shadow-lg animate-float hover:scale-105 transition-transform" style={{ animationDelay: '2s' }}>
                  <Layers size={40} className="text-neon-pink animate-glow" />
                  <h3 className="mt-3 font-bold text-center">Game Dev</h3>
                </div>
                <div className="glass-card p-6 rounded-xl shadow-lg animate-float hover:scale-105 transition-transform" style={{ animationDelay: '3s' }}>
                  <Megaphone size={40} className="text-yellow-400 animate-glow" />
                  <h3 className="mt-3 font-bold text-center">Digital Marketing</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
