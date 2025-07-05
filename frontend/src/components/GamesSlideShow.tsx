import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad, ChevronLeft, ChevronRight } from "lucide-react";

const GamesSlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const games = [
    {
      title: "Dynamic tic-tac-toe",
      description: "Challenge your mind with intricate puzzles and brain teasers in this strategic game.",
      imageUrl: "/assets/DyTTT_final.png",
      category: "Puzzle",
      playUrl: "https://dynamic-tic-tac-toe.5bitlabs.com/"
    },
    {
      title: "Space Math Adventure",
      description: "Let's get your brain horses running with this Space Math Adventure..!!",
      imageUrl: "/assets/Space_Math_Adventure.png",
      category: "Educational",
      playUrl: "https://space-math-adventure.5bitlabs.com/"
    },
    {
      title: "Idle Sort",
      description: "Let's sort the things out..!!",
      imageUrl: "https://play-lh.googleusercontent.com/4T-i9DaRme6jtgShcUnJ71YtyfTJRvD3hb7G0-YPDzNQ5ID_oaqF5dSqNcmmWffRDA=w480-h960-rw",
      category: "Sorting",
      playUrl: "https://play.google.com/store/apps/details?id=com.BucketofGames.IdleSort&pcampaignid=web_share"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [games.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
  };

  const getSlidePosition = (index: number) => {
    const diff = index - currentIndex;
    if (diff === 0) return 'translate-x-0 scale-100 z-20 opacity-100';
    if (diff === 1 || (diff === -(games.length - 1))) return 'translate-x-[85%] scale-90 z-10 opacity-60';
    if (diff === -1 || (diff === games.length - 1)) return 'translate-x-[-85%] scale-90 z-10 opacity-60';
    return 'translate-x-full scale-75 z-0 opacity-0';
  };

  return (
    <section id="games" className="section-padding bg-gradient-to-b from-secondary/10 via-background to-background relative overflow-hidden, relative min-h-screen hero-gradient flex items-center pt-16 overflow-hidden bg-grid-pattern">
      {/* Background Elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Games</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience our collection of exciting games..!!
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Slideshow Container */}
          <div className="relative h-[400px] flex items-center justify-center">
            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 z-30 p-2 rounded-full bg-background/80 backdrop-blur-sm border hover:bg-background transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-0 z-30 p-2 rounded-full bg-background/80 backdrop-blur-sm border hover:bg-background transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slides */}
            <div className="w-full max-w-md mx-auto relative h-full">
              {games.map((game, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${getSlidePosition(index)}`}
                >
                  <Card className="h-full hover-card overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={game.imageUrl} 
                        alt={game.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                        {game.category}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{game.title}</CardTitle>
                      <CardDescription>{game.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button className="w-full gap-2" asChild>
                        <a href={game.playUrl} target="_blank" rel="noopener noreferrer">
                          <Gamepad size={18} />
                          Play Now
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {games.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-6' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSlideShow;