import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-24 md:px-6">
        <section id="contacto" className="w-full flex items-center justify-center" style={{minHeight: 'calc(100vh - 200px)'}}>
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Contacto</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                ¿Interesado en colaborar o tienes alguna pregunta? ¡Contáctame!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
               <Button asChild variant="outline">
                <a href="mailto:christopher.two.ga@gmail.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>christopher.two.ga@gmail.com</span>
                </a>
              </Button>
               <Button asChild variant="outline">
                <a href="https://www.linkedin.com/in/christopher-two-galeana-alvarado-24b373238/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://github.com/christopher-two" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
