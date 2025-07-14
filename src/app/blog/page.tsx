import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Construction } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-24 md:px-6">
        <section id="blog" className="w-full h-[60vh] flex items-center justify-center">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Construction className="h-16 w-16 text-muted-foreground" />
            <h1 className="text-2xl font-bold font-headline tracking-tighter sm:text-4xl">EN PROGRESO...</h1>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
