import { useState } from "react";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import GuitarTutorials from "@/components/sections/GuitarTutorials";
import PedalTutorials from "@/components/sections/PedalTutorials";
import GuitarTuning from "@/components/sections/GuitarTuning";
import GuitarTuner from "@/components/sections/GuitarTuner";

const Index = () => {
  const [activeSection, setActiveSection] = useState("tutorials");
  const [showHero, setShowHero] = useState(true);

  const handleStartLearning = () => {
    setShowHero(false);
    setActiveSection("tutorials");
  };

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    setShowHero(false);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case "tutorials":
        return <GuitarTutorials />;
      case "pedals":
        return <PedalTutorials />;
      case "tuning":
        return <GuitarTuning />;
      case "tuner":
        return <GuitarTuner />;
      default:
        return <GuitarTutorials />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {showHero && <Hero onStartLearning={handleStartLearning} />}
      
      <div className="container mx-auto px-4 pb-20 md:pb-8">
        <Navigation 
          activeSection={activeSection} 
          onSectionChange={handleSectionChange}
        />
        
        <main className="mt-8">
          {renderActiveSection()}
        </main>
      </div>
    </div>
  );
};

export default Index;