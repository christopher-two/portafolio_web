import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Christopher Two
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Multiplatform Developer
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="trabajos" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Trabajos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Aquí se mostrarán mis proyectos y trabajos destacados.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2 lg:gap-12">
               <Card>
                 <CardContent className="p-4">
                   <Image src="https://placehold.co/600x400.png" data-ai-hint="abstract tech" alt="Project 1" width={600} height={400} className="rounded-lg object-cover w-full aspect-video" />
                   <h3 className="text-lg font-bold mt-4">Project 1</h3>
                   <p className="text-muted-foreground text-sm mt-1">A brief description of the project.</p>
                 </CardContent>
               </Card>
               <Card>
                 <CardContent className="p-4">
                   <Image src="https://placehold.co/600x400.png" data-ai-hint="modern design" alt="Project 2" width={600} height={400} className="rounded-lg object-cover w-full aspect-video" />
                   <h3 className="text-lg font-bold mt-4">Project 2</h3>
                   <p className="text-muted-foreground text-sm mt-1">A brief description of the project.</p>
                 </CardContent>
               </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
