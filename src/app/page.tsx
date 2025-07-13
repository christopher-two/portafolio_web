import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProjectCard } from '@/components/project-card';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section id="hero" className="w-full h-[60vh] flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-5xl font-glitch tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none">
                  Christopher Two
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-2xl">
                  Desarrollador Multiplataforma
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="trabajos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Trabajos</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Aquí se mostrarán mis proyectos y trabajos destacados.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-7xl items-stretch gap-8 lg:grid-cols-3 lg:gap-12">
              <ProjectCard 
                platform="Móvil"
                title="App Móvil"
                logo="smartphone"
                description="Una breve descripción del proyecto móvil. Lorem ipsum dolor sit amet."
                projectUrl="#"
              />
              <ProjectCard 
                platform="Web"
                title="Sitio Web"
                logo="globe"
                description="Una breve descripción del sitio web. Consectetur adipiscing elit."
                projectUrl="#"
              />
              <ProjectCard 
                platform="Escritorio"
                title="App de Escritorio"
                logo="monitor"
                description="Una breve descripción de la aplicación de escritorio. Sed do eiusmod tempor."
                projectUrl="#"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
