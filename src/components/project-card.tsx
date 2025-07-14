
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Globe, Monitor } from 'lucide-react';

interface ProjectCardProps {
  platform: string;
  title: string;
  logo: string; // Can be icon name, URL or a character
  description: string;
  technologies: string[];
  projectUrl: string;
}

const iconMap = {
  smartphone: Smartphone,
  globe: Globe,
  monitor: Monitor,
};

export function ProjectCard({ platform, title, logo, description, technologies, projectUrl }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const isUrl = logo.startsWith('http');
  const IconComponent = iconMap[logo as keyof typeof iconMap];

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.stopPropagation();
  };

  const renderLogo = () => {
    if (isUrl) {
      return <Image src={logo} alt={`${title} logo`} width={64} height={64} className="w-16 h-16" />;
    }
    if (IconComponent) {
      return <IconComponent className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />;
    }
    return <span className="text-5xl font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-300">{logo}</span>;
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
          <Card className="bg-card/50 hover:bg-card/90 transition-all duration-300 ease-in-out group rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border">
            <CardContent className="p-6 flex flex-col flex-1 items-center justify-center text-center">
              <div className="w-24 h-24 mb-6 bg-muted/50 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                {renderLogo()}
              </div>
              <h3 className="text-xl font-bold font-headline">{title}</h3>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1">{platform}</span>
            </CardContent>
          </Card>
        </div>

        {/* Back of the card */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-card text-card-foreground [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Card className="flex flex-col h-full rounded-2xl shadow-lg border overflow-hidden">
            <CardContent className="p-6 flex flex-col flex-1 items-start justify-start text-left overflow-y-auto">
              <h3 className="text-lg font-bold font-headline mb-2">{title}</h3>
              <p className="text-xs text-muted-foreground mb-3">{description}</p>
              
              <h4 className="text-sm font-bold font-headline mb-1">Tecnologías:</h4>
              <div className="flex flex-wrap gap-1 mb-4">
                {technologies.map((tech) => (
                  <span key={tech} className="bg-secondary text-secondary-foreground text-[10px] px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto w-full text-center">
                <Button asChild onClick={handleButtonClick} size="sm">
                  <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                    Ver más
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
