'use client';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'About',       href: '#about'      },
  { label: 'Programs',    href: '#programs'   },
  { label: 'Results',     href: '#results'    },
  { label: 'Experience',  href: '#experience' },
  { label: 'Contact',     href: '#contact'    },
];

export default function Navigation() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive('#' + sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-cream/95 backdrop-blur-sm border-b border-brand-deep/20 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo / Monogram */}
        <a href="#" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 flex items-center justify-center border border-brand-deep/50
                       bg-brand-espresso text-brand-cream text-sm font-display font-bold
                       tracking-widest group-hover:bg-brand-deep transition-colors duration-300"
            style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.1em' }}
          >
            SK
          </div>
          <div className="hidden sm:block">
            <div
              className="text-brand-espresso font-display font-semibold text-base leading-none"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Swaasti Khandale
            </div>
            <div className="text-brand-slate text-[10px] tracking-widest uppercase font-body font-medium mt-0.5">
              Image Architect
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link font-body text-xs font-medium tracking-widest uppercase text-brand-espresso hover:text-brand-deep transition-colors duration-200 ${
                active === link.href ? 'active text-brand-deep' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:swasti.khandale@gmail.com"
            className="btn-primary text-[11px] py-3 px-6 ml-4"
          >
            Enquire
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-px bg-brand-espresso transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-px bg-brand-espresso transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-px bg-brand-espresso transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          menuOpen ? 'max-h-96 border-t border-brand-deep/20' : 'max-h-0'
        } bg-brand-cream/98 backdrop-blur-sm`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-xs font-medium tracking-widest uppercase text-brand-espresso hover:text-brand-deep transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:swasti.khandale@gmail.com"
            className="btn-primary text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Enquire
          </a>
        </div>
      </div>
    </header>
  );
}
