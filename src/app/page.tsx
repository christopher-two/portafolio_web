
"use client";

import { useState, useMemo } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProjectCard } from '@/components/project-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const allProjects = [
  {
    title: 'Quickness',
    description: 'Sistema innovador para modernizar y centralizar la gestión de todo tipo de accesos, unificando el control bajo una misma plataforma segura y eficiente.',
    platform: 'Multiplatform',
    logo: 'https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/logos//LogoQuicknessQC.svg',
    technologies: ['Compose Multiplatform', 'Room', 'Datastore', 'Koin', 'Ktor', 'Firebase', 'Gemini Api', 'Biometric', 'Moko Permissions', 'Coil', 'MVVM', 'Clean Architecture', 'Multimodularity', 'Layered Model', 'Repository Pattern', 'DeepLinks'],
    projectUrl: 'https://christopher.com.mx/quickness',
  },
  {
    title: 'Lerna',
    description: 'Plataforma que ofrece diversas herramientas digitales para mejorar la productividad y eficiencia de los profesores en la enseñanza.',
    platform: 'Multiplatform',
    logo: 'L',
    technologies: ['Compose Multiplatform (Desktop & Wasm)', 'Koin', 'Ktor', 'Coil', 'Firebase', 'Classroom API', 'Backend (Ktor)', 'Docker', 'Google Cloud Functions', 'Gemini API', 'MVVM', 'Clean Architecture', 'Multimodularity', 'Layered Model', 'Repository Pattern'],
    projectUrl: 'https://christopher.com.mx/lerna',
  },
  {
    title: 'Lyra',
    description: 'Un ecosistema integral diseñado para mejorar y optimizar la práctica de los profesionales de la nutrición.',
    platform: 'Mobile App',
    logo: 'https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/logos//Logo%20Gaia%20SB.svg',
    technologies: ['Jetpack Compose', 'Room', 'Datastore', 'Koin', 'Ktor', 'Coil', 'Firebase', 'Backend (Ktor)', 'Docker', 'Google Cloud Functions', 'Gemini API', 'MVVM', 'DeepLinks', 'Clean Architecture', 'Multimodularity', 'Layered Model', 'Repository Pattern'],
    projectUrl: 'https://christopher.com.mx/lyra',
  },
  {
    title: 'Calabozos y compuertas',
    description: 'Aplicación móvil que combina la emoción de los juegos de calabozos con la lógica de las compuertas lógicas, ofreciendo una rica interacción y contenido educativo.',
    platform: 'Multiplatform',
    logo: 'https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/logos//calabozoscompuertas_logo_neon.svg',
    technologies: ['Compose Multiplatform', 'Koin', 'Ktor', 'Coil', 'MVVM', 'Clean Architecture', 'Multimodularity', 'Layered Model', 'Repository Pattern'],
    projectUrl: 'https://christopher.com.mx/calabozoscompuertas',
  },
  {
    title: 'Portafolio Daniela Navarro Galeana',
    description: 'Página web que presenta el perfil de una estudiante de Comercio Internacional y Aduanas, cubriendo su experiencia, formación y habilidades.',
    platform: 'Web',
    logo: 'globe',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Next.js', 'Firebase Hosting'],
    projectUrl: 'https://daniela-navarro-galeana.web.app',
  },
  {
    title: 'Eikocolors',
    description: 'Web para una empresa de diseño gráfico, exponiendo sus trabajos y servicios de manera profesional.',
    platform: 'Web',
    logo: 'globe',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Next.js', 'Firebase Hosting'],
    projectUrl: 'https://eikocolors.web.app',
  },
  {
    title: 'Fuente',
    description: 'Web hecha para un kinder para mostrar los videos del día del padre hechos por sus hijos.',
    platform: 'Web',
    logo: 'globe',
    technologies: ['React', 'Vite', 'CSS'],
    projectUrl: 'https://fuente-saber.web.app',
  },
  {
    title: 'Lumi',
    description: 'Herramienta inteligente que democratiza la creación y el escaneo de códigos QR, transformando ideas en códigos QR visualmente impactantes.',
    platform: 'Mobile App',
    logo: 'smartphone',
    technologies: ['Jetpack Compose', 'Gemini API', 'QR-Rose', 'MVVM', 'Clean Architecture', 'Repository Pattern'],
    projectUrl: 'https://christopher.com.mx/lumi',
  },
  {
    title: 'Danonino',
    description: 'Web hecha para mi novia bonita.',
    platform: 'Web',
    logo: 'globe',
    technologies: ['React', 'CSS', 'Vite'],
    projectUrl: 'https://christopher.com.mx/danonino',
  },
  {
    title: 'Eva',
    description: 'Librería multiplataforma para experimentar con funcionalidades de IA, principalmente para crear componentes para otros proyectos.',
    platform: 'Multiplatform',
    logo: 'monitor',
    technologies: ['Compose Multiplatform (Android, iOS, Wasm, Desktop)', 'Gemini API'],
    projectUrl: 'https://eva.override.com.mx',
  },
  {
    title: 'Squidgame',
    description: 'Sistema embebido interactivo que simula el juego del "Puente de Cristal" de la serie "El Juego del Calamar".',
    platform: 'Multiplatform',
    logo: 'monitor',
    technologies: ['Compose Multiplatform', 'JVM', 'Wasm', 'Firebase Realtime', 'Firebase Firestore'],
    projectUrl: 'https://christopher.com.mx/squidgame',
  },
  {
    title: 'Color',
    description: 'Juego de escritorio para adivinar colores RGB. Entrena la percepción visual del color con diferentes niveles de dificultad.',
    platform: 'Multiplatform',
    logo: 'monitor',
    technologies: ['Compose Multiplatform JVM'],
    projectUrl: 'https://christopher.com.mx/adivina-color-rgb',
  },
  {
    title: 'DragonMatches',
    description: 'Una app inspirada en Dragonball con una temática de Tinder, explorando el uso de swipe y conectando con la API de Dragonball.',
    platform: 'Mobile App',
    logo: 'smartphone',
    technologies: ['Koin', 'Ktor', 'Coil', 'Jetpack Compose'],
    projectUrl: 'https://christopher.com.mx/dragon-matches',
  },
  {
    title: 'Asian',
    description: 'Línea de tiempo interactiva del crecimiento económico asiático, con visualización de datos históricos y proyecciones futuras.',
    platform: 'Web',
    logo: 'globe',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'Next.js', 'Firebase Hosting'],
    projectUrl: 'https://asian-growth-timeline.web.app',
  },
];

const platforms = ['Todos', 'Multiplatform', 'Mobile App', 'Web'];

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('Todos');

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesSearchTerm = project.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPlatform = selectedPlatform === 'Todos' || project.platform === selectedPlatform;
      return matchesSearchTerm && matchesPlatform;
    });
  }, [searchTerm, selectedPlatform]);

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
          <div className="w-full px-4 md:px-6">

            <div className="mb-8 flex flex-col items-center gap-4">
               <div className="flex items-center justify-center bg-card/50 backdrop-blur-sm rounded-full p-1 border border-border/80 w-full max-w-sm md:max-w-md">
                 {platforms.map((platform) => (
                    <Button
                      key={platform}
                      variant="ghost"
                      onClick={() => setSelectedPlatform(platform)}
                      className={cn(
                        "w-full rounded-full text-xs md:text-sm h-8",
                        selectedPlatform === platform ? 'bg-secondary/80 text-foreground' : 'text-muted-foreground'
                      )}
                    >
                      {platform}
                    </Button>
                  ))}
              </div>
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-card/50 backdrop-blur-sm rounded-full border border-border/80"></div>
                <div className="relative flex items-center p-2">
                  <Search className="h-5 w-5 mx-3 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Buscar proyectos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base placeholder:text-muted-foreground"
                  />
                </div>
              </div>
            </div>


            <div className="grid auto-rows-[350px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              {filteredProjects.map((project, index) => {
                let colSpan = '';
                if (index === 0 || index === 3) {
                  colSpan = 'lg:col-span-2';
                }
                return (
                  <div key={project.title} className={colSpan}>
                    <ProjectCard
                      platform={project.platform}
                      title={project.title}
                      logo={project.logo}
                      description={project.description}
                      technologies={project.technologies}
                      projectUrl={project.projectUrl}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
