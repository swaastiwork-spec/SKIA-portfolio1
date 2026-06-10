'use client';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F7F1EB 0%, #EDE0D4 50%, #E8D5C4 100%)' }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large monogram watermark */}
        <div
          className="absolute -right-20 top-1/2 -translate-y-1/2 text-brand-deep/5 select-none"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(300px, 40vw, 600px)',
            fontWeight: 300,
            lineHeight: 1,
          }}
        >
          SK
        </div>
        {/* Top caramel rule */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-deep via-brand-caramel to-transparent opacity-60" />
        {/* Subtle grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(to right, #5C3D2E 1px, transparent 1px), linear-gradient(to bottom, #5C3D2E 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text Content */}
          <div
            className={`transition-all duration-1000 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-brand-deep" />
              <span className="section-label">SKIA Global · Executive Presence</span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-brand-espresso font-light leading-[1.1] mb-6"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              }}
            >
              Where
              <span className="block italic font-normal text-brand-deep">Competence</span>
              Meets Command.
            </h1>

            {/* Subheadline */}
            <p
              className="text-brand-slate font-accent italic text-lg lg:text-xl leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              &ldquo;Image is not vanity. It is the language you speak before you open your mouth.&rdquo;
            </p>

            {/* Body */}
            <p className="body-text text-base text-brand-brown max-w-xl mb-12 leading-loose">
              SKIA Global partners with organisations to build leaders who are not only
              competent — but credible, commanding, and commercially influential.
              Executive presence consulting for those ready to be seen, remembered, and chosen.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#programs" className="btn-primary">
                Explore Programs
              </a>
              <a href="#results" className="btn-outline">
                View Client Results
              </a>
            </div>

            {/* Social proof strip */}
            <div className="mt-14 pt-8 border-t border-brand-deep/20 flex flex-wrap gap-8">
              {[
                { n: '500+',    l: 'Leaders Transformed' },
                { n: '60K+',    l: 'Professionals Reached' },
                { n: '8',       l: 'Enterprise Clients' },
                { n: '12+',     l: 'Years Experience' },
              ].map(({ n, l }) => (
                <div key={l}>
                  <div
                    className="text-brand-espresso font-display font-semibold"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem' }}
                  >
                    {n}
                  </div>
                  <div className="text-brand-slate font-body text-[11px] tracking-wider uppercase font-medium mt-0.5">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Portrait & Credentials Card */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Portrait frame */}
            <div className="relative max-w-sm mx-auto lg:mx-0 lg:ml-auto">
              {/* Decorative offset frame */}
              <div
                className="absolute -top-4 -left-4 w-full h-full border border-brand-deep/30"
                aria-hidden="true"
              />
              <div className="relative bg-brand-espresso overflow-hidden" style={{ aspectRatio: '4/5' }}>
                {/* Placeholder gradient (replace with actual <img> tag if photo asset exists) */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, #5C3D2E 0%, #8B6350 40%, #C4A882 100%)',
                  }}
                />
                {/* SK Monogram overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div
                    className="text-brand-cream/20 select-none"
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '12rem',
                      fontWeight: 300,
                      lineHeight: 1,
                    }}
                  >
                    SK
                  </div>
                  <div className="text-brand-cream/70 font-body text-xs tracking-widest uppercase mt-2">
                    Image Architect
                  </div>
                </div>
                {/* Bottom tag */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-brand-espresso/90 to-transparent">
                  <div
                    className="text-brand-cream font-display text-xl font-light"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    Swaasti Khandale
                  </div>
                  <div className="text-brand-caramel font-body text-[10px] tracking-widest uppercase mt-1">
                    Executive Presence Strategist
                  </div>
                </div>
              </div>

              {/* Floating credential card */}
              <div
                className="absolute -bottom-8 -right-6 bg-brand-cream border border-brand-deep/30 p-5 shadow-lg max-w-[180px]"
              >
                <div className="text-brand-deep font-body text-[10px] tracking-widest uppercase font-semibold mb-2">
                  Sr. Director L&amp;D
                </div>
                <div
                  className="text-brand-espresso font-display font-semibold text-base"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  Gartner Inc.
                </div>
                <div className="text-brand-slate font-body text-[10px] mt-1">
                  8.5 years · Global L&amp;D Lead
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="font-body text-[10px] tracking-widest uppercase text-brand-slate">Scroll</span>
          <div className="w-px h-8 bg-brand-deep animate-pulse" />
        </div>
      </div>
    </section>
  );
}
