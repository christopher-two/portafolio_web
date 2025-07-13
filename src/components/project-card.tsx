"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Globe, Monitor } from 'lucide-react';

interface ProjectCardProps {
  platform: string;
  title: string;
  logo: 'smartphone' | 'globe' | 'monitor';
  description: string;
  projectUrl: string;
}

const iconMap = {
  smartphone: Smartphone,
  globe: Globe,
  monitor: Monitor,
};

export function ProjectCard({ platform, title, logo, description, projectUrl }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const LogoComponent = iconMap[logo];

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="group h-[350px] w-full [perspective:1000px] cursor-pointer"
      onClick={handleCardClick}
    >
      <div
        className={cn(
          "relative h-full w-full rounded-2xl shadow-lg transition-all duration-500 [transform-style:preserve-3d]",
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        )}
      >
        {/* Front of the card */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Card className="bg-card/50 hover:bg-card/90 transition-all duration-300 ease-in-out group rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border-0">
            <CardContent className="p-6 flex flex-col flex-1 items-center justify-center text-center">
              <div className="w-24 h-24 mb-6 bg-muted/50 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <LogoComponent className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-headline">{title}</h3>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1">{platform}</span>
            </CardContent>
          </Card>
        </div>

        {/* Back of the card */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-card text-card-foreground [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Card className="flex flex-col h-full rounded-2xl shadow-lg border-0">
            <CardContent className="p-6 flex flex-col flex-1 items-center justify-center text-center">
              <h3 className="text-xl font-bold font-headline mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{description}</p>
              <Button asChild onClick={handleButtonClick}>
                <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                  Ver más
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
