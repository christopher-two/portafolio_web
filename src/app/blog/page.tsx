import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-24 md:px-6">
        <section id="blog" className="w-full">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl">Blog</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Pensamientos, artículos y tutoriales.
              </p>
            </div>
            <div className="mx-auto max-w-5xl py-12 text-center text-muted-foreground">
              <p>Blog posts will be displayed here soon.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
