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
            <div className="mx-auto grid max-w-7xl auto-rows-[350px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-2">
                <ProjectCard
                  platform="Web"
                  title="Plataforma E-commerce"
                  logo="globe"
                  description="Desarrollo de una plataforma de comercio electrónico completa con pasarelas de pago, gestión de inventario y un panel de administración personalizado. El proyecto se centró en la escalabilidad y una experiencia de usuario fluida."
                  projectUrl="#"
                />
              </div>
              <ProjectCard
                platform="Móvil"
                title="App de Fitness"
                logo="smartphone"
                description="Una aplicación móvil para seguimiento de entrenamientos y nutrición."
                projectUrl="#"
              />
              <ProjectCard
                platform="Escritorio"
                title="Herramienta de Productividad"
                logo="monitor"
                description="Aplicación de escritorio para la gestión de tareas y proyectos personales."
                projectUrl="#"
              />
              <div className="lg:col-span-2">
                <ProjectCard
                  platform="Web"
                  title="Blog Personal"
                  logo="globe"
                  description="Creación de un blog dinámico y moderno utilizando un CMS headless para la gestión de contenido y Next.js para el frontend, optimizado para SEO y rendimiento."
                  projectUrl="#"
                />
              </div>
               <ProjectCard
                platform="Móvil"
                title="App de Red Social"
                logo="smartphone"
                description="Prototipo de red social enfocada en compartir proyectos creativos."
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
