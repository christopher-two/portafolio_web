import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { Code, Atom, TabletSmartphone, Smartphone } from 'lucide-react';

const skills = [
  {
    icon: (
      <Image
        src="https://icon.icepanel.io/Technology/svg/Kotlin.svg"
        alt="Kotlin logo"
        width={32}
        height={32}
        className="h-8 w-8"
      />
    ),
    title: 'Desarrollo Multiplataforma',
    technologies: 'Compose Multiplataforma, Kotlin Multiplataforma',
    description: 'Cuento con una sólida experiencia en la creación de aplicaciones nativas para Android, iOS, Desktop y Web, todo ello gestionado desde una única base de código. Este enfoque me permite no solo optimizar los tiempos de desarrollo, sino también asegurar una experiencia de usuario consistente y fluida en todas las plataformas, manteniendo la calidad y el rendimiento esperados en cada entorno.',
  },
  {
    icon: (
      <Image
        src="https://developer.android.com/static/images/spot-icons/jetpack-compose.svg"
        alt="Jetpack Compose logo"
        width={32}
        height={32}
        className="h-8 w-8"
      />
    ),
    title: 'Desarrollo Móvil',
    technologies: 'Jetpack Compose, SwiftUI, Swift',
    description: 'Desde mis inicios en el desarrollo, he estado creando aplicaciones utilizando Jetpack Compose. En este ámbito, me considero un profesional con un nivel mid-senior, aportando una sólida y amplia experiencia en el desarrollo con esta tecnología.',
  },
  {
    icon: <Atom className="h-8 w-8 text-primary" />,
    title: 'Desarrollo Web',
    technologies: 'React, Next.js, Tailwind CSS',
    description: 'Apasionado por la creación de interfaces de usuario modernas y responsivas. Experiencia en el desarrollo de aplicaciones web con las últimas tecnologías del ecosistema de React.',
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Backend y Cloud',
    technologies: 'Ktor, Firebase, Google Cloud',
    description: 'Habilidad para construir servicios backend robustos y escalables, así como para desplegar y administrar aplicaciones en la nube utilizando Docker y servicios de Firebase.',
  },
];

export default function SobreMiPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-24 md:px-6">
        <section id="sobre-mi" className="w-full">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold font-montserrat tracking-tighter sm:text-4xl md:text-5xl">Yo soy Christopher</h1>
            </div>
             <div className="mx-auto max-w-3xl py-12 text-center text-muted-foreground">
                <div className="relative mb-8 h-96 w-full">
                    <Image
                      src="https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/imagenes//FotoPerfil.JPG"
                      alt="Foto de Christopher"
                      fill
                      objectFit="cover"
                      className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white_60%,transparent_100%)]"
                      data-ai-hint="profile picture"
                    />
                </div>
                <div className="space-y-4 text-left max-w-2xl mx-auto">
                    <p className="text-lg/relaxed">
                      Soy un Desarrollador Multiplataforma con experiencia en la creación de software. Estoy en el proceso de lanzar mi propia empresa, Override, con el objetivo de desarrollar productos digitales.
                    </p>
                    <p>He trabajado en varios proyectos de software, desde colaboraciones en productos multiplataforma como Quickness, hasta el desarrollo de mis propias aplicaciones como Lumi.  Actualmente, me estoy centrando en la tecnología de Jetpack Compose y Compose Multiplataforma. Esto me permite construir productos que funcionan en diferentes sistemas, llegando a más usuarios con una experiencia consistente. Mi compromiso es seguir innovando y mejorando la forma en que la tecnología se conecta con las personas.</p>
                </div>
             </div>
          </div>
        </section>

        <section id="habilidades" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Mis Habilidades</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estas son algunas de las tecnologías y áreas en las que tengo experiencia.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-2 lg:gap-12">
              {skills.map((skill) => (
                <div key={skill.title} className="flex flex-col items-start space-y-4 rounded-lg border bg-card p-6 text-left shadow-sm transition-all hover:scale-105 hover:shadow-lg">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                    {skill.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-headline">{skill.title}</h3>
                    <p className="font-semibold text-primary">{skill.technologies}</p>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
