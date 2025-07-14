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
             <div className="mx-auto max-w-5xl py-12">
                <div className="flex flex-col items-center gap-8 text-left md:flex-row md:items-start md:gap-12">
                  <div className="w-48 flex-shrink-0 md:w-64">
                    <Image
                      src="https://vluoppbaehfmhkebyygv.supabase.co/storage/v1/object/public/imagenes//FotoPerfil.JPG"
                      alt="Foto de Christopher"
                      width={256}
                      height={256}
                      className="rounded-full object-cover shadow-lg"
                      data-ai-hint="profile picture"
                    />
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Content for Sobre mi will go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
                    <p>Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.</p>
                  </div>
                </div>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
