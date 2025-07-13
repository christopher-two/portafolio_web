import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectCardProps {
  platform: string;
  title: string;
  LogoComponent: React.ElementType;
}

export function ProjectCard({ platform, title, LogoComponent }: ProjectCardProps) {
  return (
    <Card className="bg-card/50 hover:bg-card/90 transition-all duration-300 ease-in-out group rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border-0">
      <CardContent className="p-6 flex flex-col flex-1 items-center justify-center text-center">
        <div className="w-24 h-24 mb-6 bg-muted/50 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <LogoComponent className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold font-headline">{title}</h3>
        <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1">{platform}</span>
      </CardContent>
    </Card>
  );
}
