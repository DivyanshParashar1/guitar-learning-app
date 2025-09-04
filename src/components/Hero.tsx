import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import guitarHero from "@/assets/guitar-hero.jpg";

interface HeroProps {
  onStartLearning: () => void;
}

const Hero = ({ onStartLearning }: HeroProps) => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${guitarHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
          Master Your Guitar Journey
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Learn guitar techniques, explore pedal effects, and perfect your tuning with our comprehensive learning platform designed for guitarists of all levels.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={onStartLearning}
            className="text-base px-8 py-3"
          >
            <Play className="w-5 h-5" />
            Start Learning
          </Button>
          <Button 
            variant="wood" 
            size="lg"
            className="text-base px-8 py-3"
          >
            Explore Tutorials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;