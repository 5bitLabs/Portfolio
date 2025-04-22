
import { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import spaceGameImage from '@/assets/space_game_image.jpeg';

const Games = () => {
  useEffect(() => {
    document.title = '5BitLabs - Games';
  }, []);

  const games = [
    // {
    //   title: "Dynamic tic-tac-toe",
    //   description: "Challenge your mind with intricate puzzles and brain teasers in this strategic game.",
    //   imageUrl: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    //   category: "Puzzle",
    //   playUrl: "https://dynamic-tic-tac-toe.5bitlabs.com/"
    // },
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
    }
    // {
    //   title: "Puzzle Masters",
    //   description: "Challenge your mind with intricate puzzles and brain teasers in this strategic game.",
    //   imageUrl: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    //   category: "Puzzle",
    //   playUrl: "#play-puzzle-masters"
    // },
    // {
    //   title: "Fantasy Quest",
    //   description: "Embark on an epic journey through magical realms and battle mythical creatures.",
    //   imageUrl: "https://images.unsplash.com/photo-1642516303080-431f6681f864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    //   category: "RPG",
    //   playUrl: "#play-fantasy-quest"
    // },
    // {
    //   title: "Speed Racer",
    //   description: "Race against time and opponents in high-octane tracks around the world.",
    //   imageUrl: "https://images.unsplash.com/photo-1511882150382-421056c89033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    //   category: "Racing",
    //   playUrl: "#play-speed-racer"
    // },
    // {
    //   title: "City Builder",
    //   description: "Create and manage your own metropolis, balance resources and keep citizens happy.",
    //   imageUrl: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
    //   category: "Simulation",
    //   playUrl: "#play-city-builder"
    // },
    // {
    //   title: "Word Wizard",
    //   description: "Test your vocabulary skills in this fast-paced word building challenge.",
    //   imageUrl: "https://images.unsplash.com/photo-1632243313919-ebe3b8184571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    //   category: "Educational",
    //   playUrl: "#play-word-wizard"
    // }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="section-padding bg-gradient-to-b from-background via-background to-secondary/10 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 neon-text">Play Our Games</h1>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our collection of exciting games across various genres. Challenge yourself, have fun, and experience immersive gameplay.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {games.map((game, index) => (
                <Card key={index} className={`hover-card overflow-hidden ${game.featured ? 'border-primary/50' : ''}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={game.imageUrl} 
                      alt={game.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
                      {game.category}
                    </div>
                    {game.featured && (
                      <div className="absolute top-2 left-2 bg-primary/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-primary-foreground">
                        Featured
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle>{game.title}</CardTitle>
                    <CardDescription>{game.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button className="w-full gap-2" asChild>
                      <a href={game.playUrl} target="_blank">
                        <Gamepad size={18} />
                        Play Now
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Games;
