import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Music, Radio, SlidersHorizontal, Mic } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const sections = [
    { id: "tutorials", label: "Guitar Tutorials", icon: Music },
    { id: "pedals", label: "Pedal Tutorials", icon: Radio },
    { id: "tuning", label: "Guitar Tuning", icon: SlidersHorizontal },
    { id: "tuner", label: "Guitar Tuner", icon: Mic },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 md:relative md:bottom-auto md:border-t-0 md:border-b md:mb-8">
      <div className="flex justify-around md:justify-center md:gap-4 max-w-md mx-auto">
        {sections.map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            variant={activeSection === id ? "hero" : "ghost"}
            size="sm"
            onClick={() => onSectionChange(id)}
            className="flex flex-col gap-1 h-auto py-2 px-3 md:flex-row md:gap-2 md:py-2 md:px-4"
          >
            <Icon className="w-5 h-5" />
            <span className="text-xs md:text-sm">{label}</span>
          </Button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;