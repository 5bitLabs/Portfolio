import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import GamesSlideshow from '@/components/GamesSlidshow';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    document.title = '5BitLabs - Innovate, Code, Create';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <GamesSlideshow />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        {/* <ProjectsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

// import Navbar from '@/components/Navbar';
// import HeroSection from '@/components/HeroSection';
// import AboutSection from '@/components/AboutSection';
// import ServicesSection from '@/components/ServicesSection';
// import ProjectsSection from '@/components/ProjectsSection';
// import ContactSection from '@/components/ContactSection';
// import Footer from '@/components/Footer';
// import { useEffect } from 'react';

// const Index = () => {
//   useEffect(() => {
//     document.title = '5BitLabs - Innovate, Code, Create';
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main>
//         <HeroSection />
//         <AboutSection />
//         <ServicesSection />
//         {/* <ProjectsSection /> */}
//         <ContactSection />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Index;
