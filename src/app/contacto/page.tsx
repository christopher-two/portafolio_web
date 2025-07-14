import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Mail, Linkedin, Github, Instagram, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const contactMethods = [
  {
    icon: <Mail className="h-12 w-12 text-primary" />,
    label: 'Email',
    value: 'christopher.two.ga@gmail.com',
    href: 'mailto:christopher.two.ga@gmail.com',
  },
  {
    icon: <Linkedin className="h-12 w-12 text-primary" />,
    label: 'LinkedIn',
    value: 'Christopher Two',
    href: 'https://www.linkedin.com/in/christopher-two-galeana-alvarado-24b373238/',
  },
  {
    icon: <Github className="h-12 w-12 text-primary" />,
    label: 'GitHub',
    value: 'christopher-two',
    href: 'https://github.com/christopher-two',
  },
  {
    icon: <Instagram className="h-12 w-12 text-primary" />,
    label: 'Instagram',
    value: '@christopher.two',
    href: 'https://www.instagram.com/christopher.two/',
  },
  {
    icon: <Globe className="h-12 w-12 text-primary" />,
    label: 'Override',
    value: 'override.com.mx',
    href: 'https://override.com.mx',
  },
];

export default function ContactoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-24 md:px-6">
        <section id="contacto" className="w-full flex items-center justify-center" style={{minHeight: 'calc(100vh - 200px)'}}>
          <div className="grid w-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
            {contactMethods.map((method) => (
              <Link key={method.label} href={method.href} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="h-full transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl bg-card/50 backdrop-blur-sm">
                  <CardContent className="flex flex-col items-center justify-center p-8 space-y-4 text-center">
                    {method.icon}
                    <div className="space-y-1">
                      <p className="text-xl font-bold font-headline">{method.label}</p>
                      <p className="text-muted-foreground">{method.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}