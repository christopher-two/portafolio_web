import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';

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
                <div className="mb-8 flex justify-center">
                    <Image
                      src="https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/imagenes//FotoPerfil.JPG"
                      alt="Foto de Christopher"
                      width={256}
                      height={256}
                      className="rounded-full object-cover shadow-lg"
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
      </main>
      <Footer />
    </div>
  );
}
