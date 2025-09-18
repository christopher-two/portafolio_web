import Link from 'next/link';
import { Linkedin, Github, Instagram, Youtube, Heart } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/christopher-alejandro-maldonado-chavez',
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/christopher-two',
    icon: <Github className="h-5 w-5" />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/christopher_two_',
    icon: <Instagram className="h-5 w-5" />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@ChristopherTwo',
    icon: <Youtube className="h-5 w-5" />,
  },
];

const navLinks = [
  {
    category: 'Navegación',
    links: [
      { name: 'Trabajos', href: '/' },
      { name: 'Sobre mí', href: '/sobre-mi' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contacto', href: '/contacto' },
    ],
  },
  {
    category: 'Proyectos',
    links: [
      { name: 'Quickness', href: 'https://christopher.com.mx/quickness' },
      { name: 'Lerna', href: 'https://christopher.com.mx/lerna' },
      { name: 'Lyra', href: 'https://christopher.com.mx/lyra' },
      { name: 'Lumi', href: 'https://christopher.com.mx/lumi' },
    ],
  },
  {
    category: 'Otros',
    links: [
      { name: 'Override', href: 'https://override.com.mx' },
    ],
  },
];


export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-8 md:py-12 mt-16 px-4">
      <div className="container mx-auto max-w-7xl rounded-2xl border border-border/80 bg-card/50 p-8 shadow-lg backdrop-blur-sm">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h2 className="text-2xl font-glitch">Christopher Two</h2>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          {navLinks.map((section) => (
            <div key={section.category}>
              <h3 className="font-headline text-md font-bold tracking-wider text-foreground/90">{section.category}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors" target={link.href.startsWith('http') ? '_self' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border/80 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} Christopher Two. Todos los derechos reservados.</p>
            <p className="flex items-center gap-1 mt-4 md:mt-0">
                Desarrollado con <Heart className="h-4 w-4 text-primary" /> por
                <Link href="https://override.com.mx" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">
                Override
                </Link>
            </p>
        </div>
      </div>
    </footer>
  );
}
