import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function TrabajosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-24 md:px-6">
        <section id="trabajos" className="w-full">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Trabajos</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Aquí se mostrarán mis proyectos y trabajos destacados.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-2 lg:gap-12">
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
