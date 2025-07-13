import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section
          id="home"
          className="relative flex h-[calc(100vh-3.5rem)] w-full flex-col items-center justify-center text-center"
        >
          <div className="container">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Christopher Two
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
              Multiplatform Developer
            </p>
          </div>
          <Link href="#trabajos" className="absolute bottom-10 animate-bounce">
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
              <span className="sr-only">Scroll to next section</span>
          </Link>
        </section>

        <section id="trabajos" className="w-full py-20 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Trabajos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Aquí se mostrarán mis proyectos y trabajos destacados.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
               <div className="flex items-center justify-center h-64 rounded-lg bg-muted">
                 <p className="text-muted-foreground">Project 1</p>
               </div>
               <div className="flex items-center justify-center h-64 rounded-lg bg-muted">
                 <p className="text-muted-foreground">Project 2</p>
               </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="w-full py-20 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Sobre mi</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Un poco sobre mi trayectoria y habilidades.
                </p>
              </div>
               <div className="mx-auto max-w-3xl py-12 text-left space-y-4 text-muted-foreground">
                  <p>Content for Sobre mi will go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
                  <p>Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.</p>
               </div>
            </div>
          </div>
        </section>

        <section id="blog" className="w-full py-20 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Blog</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Pensamientos, artículos y tutoriales.
                </p>
              </div>
              <div className="mx-auto max-w-5xl py-12 text-center text-muted-foreground">
                <p>Blog posts will be displayed here soon.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="override" className="w-full py-20 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Override</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Información sobre el concepto 'Override'.
                </p>
              </div>
               <div className="mx-auto max-w-3xl py-12 text-center text-muted-foreground">
                <p>Content for Override section will be available soon.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
