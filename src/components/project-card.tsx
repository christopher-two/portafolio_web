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

export function ProjectCard({ platform, title, imageUrl, imageHint, imageClassName }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full bg-card/50 backdrop-blur-sm border-border/60 shadow-lg rounded-2xl overflow-hidden">
      <CardContent className="flex flex-col flex-1 p-6 justify-between">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{platform}</span>
        </div>
        <div className="mt-auto flex justify-center items-end h-full">
          <Image
            src={imageUrl}
            width={800}
            height={600}
            alt={title}
            data-ai-hint={imageHint}
            className={cn("object-contain object-bottom rounded-t-lg", imageClassName)}
          />
        </div>
      </CardContent>
    </Card>
  );
}
