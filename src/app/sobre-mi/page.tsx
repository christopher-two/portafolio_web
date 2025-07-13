import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function SobreMiPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-24 md:px-6">
        <section id="sobre-mi" className="w-full">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Sobre mi</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Un poco sobre mi trayectoria y habilidades.
              </p>
            </div>
             <div className="mx-auto max-w-3xl py-12 text-left space-y-4 text-muted-foreground">
                <p>Content for Sobre mi will go here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
                <p>Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.</p>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
