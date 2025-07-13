import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectCardProps {
  platform: string;
  title: string;
  imageUrl: string;
  imageHint: string;
  imageClassName?: string;
}

const WindowBar = () => (
    <div className="flex items-center px-4 h-10 bg-primary/90 rounded-t-lg">
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-muted/50 rounded-full"></div>
        <div className="w-3 h-3 bg-muted/50 rounded-full"></div>
        <div className="w-3 h-3 bg-muted/50 rounded-full"></div>
      </div>
    </div>
);


export function ProjectCard({ platform, title, imageUrl, imageHint, imageClassName }: ProjectCardProps) {
  return (
    <Card className="bg-secondary/50 border-0 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
      <CardContent className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{platform}</span>
            <h3 className="text-xl font-bold font-headline">{title}</h3>
        </div>
        <div className="flex-1 flex flex-col rounded-lg bg-background shadow-inner overflow-hidden">
            <WindowBar />
            <div className="flex-1 p-4 flex justify-center items-center">
                 <Image
                    src={imageUrl}
                    width={800}
                    height={600}
                    alt={title}
                    data-ai-hint={imageHint}
                    className={cn("object-contain object-bottom", imageClassName)}
                />
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
