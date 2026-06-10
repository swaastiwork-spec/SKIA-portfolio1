'use client';
import { useEffect, useRef } from 'react';

const ENGAGEMENTS = [
  'Executive Presence Programs for mid-senior cohorts',
  'Leadership Communication Workshops for high-potential employees',
  'Individual Consulting for C-suite & Senior Directors',
  'Onboarding Presence Frameworks for new managers & campus hires',
  'Pre-promotion Readiness Consulting for identified talent',
];

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 bg-brand-cream relative overflow-hidden">
      {/* Background monogram */}
      <div
        className="absolute -left-20 bottom-0 text-brand-deep/[0.03] select-none pointer-events-none"
        style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(200px, 30vw, 500px)',
          fontWeight: 300,
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        SK
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <div>
            <div className="reveal flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-brand-deep" />
              <span className="section-label">Work With SKIA Global</span>
            </div>

            <h2
              className="reveal section-heading text-4xl lg:text-5xl leading-tight mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              If your leaders are technically strong,
              <span className="block italic font-normal text-brand-deep mt-1">
                but not landing in rooms —
              </span>
              let&apos;s talk.
            </h2>

            <p className="reveal body-text text-brand-brown text-base leading-loose mb-10">
              SKIA Global works with HR, L&amp;D, and Talent Development leaders to design and deliver
              bespoke executive presence and professional image programmes. Every engagement begins
              with a diagnostic — not a brochure.
            </p>

            {/* Engagement types */}
            <div className="reveal">
              <div className="section-label mb-4">Available Engagements</div>
              <div className="space-y-3">
                {ENGAGEMENTS.map(e => (
                  <div key={e} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-brand-deep flex-shrink-0 mt-2" />
                    <span className="body-text text-sm text-brand-brown">{e}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact card */}
          <div className="reveal">
            <div className="border border-brand-deep bg-brand-pale p-8 lg:p-10">

              {/* Brand mark */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-brand-deep/20">
                <div
                  className="w-14 h-14 flex items-center justify-center bg-brand-espresso text-brand-cream font-display font-bold"
                  style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.1em', fontSize: '1.1rem' }}
                >
                  SK
                </div>
                <div>
                  <div
                    className="text-brand-espresso font-display font-semibold text-lg"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    Swaasti Khandale
                  </div>
                  <div className="text-brand-slate font-body text-xs tracking-widest uppercase">
                    Image Architect · Executive Presence Strategist
                  </div>
                </div>
              </div>

              {/* Contact details */}
              <div className="space-y-5 mb-8">
                <div>
                  <div className="section-label text-[10px] mb-1">Email</div>
                  <a
                    href="mailto:swasti.khandale@gmail.com"
                    className="text-brand-espresso font-body text-sm hover:text-brand-deep transition-colors"
                  >
                    swasti.khandale@gmail.com
                  </a>
                </div>
                <div>
                  <div className="section-label text-[10px] mb-1">Phone</div>
                  <a
                    href="tel:+918265000236"
                    className="text-brand-espresso font-body text-sm hover:text-brand-deep transition-colors"
                  >
                    +91 826-500-0236
                  </a>
                </div>
                <div>
                  <div className="section-label text-[10px] mb-1">Location</div>
                  <div className="text-brand-espresso font-body text-sm">Pune, Maharashtra, India</div>
                </div>
                <div>
                  <div className="section-label text-[10px] mb-1">LinkedIn</div>
                  <a
                    href="https://www.linkedin.com/in/skia-executive-presence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-espresso font-body text-sm hover:text-brand-deep transition-colors"
                  >
                    linkedin.com/in/skia-executive-presence
                  </a>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <a
                  href="mailto:swasti.khandale@gmail.com?subject=Corporate%20Programme%20Enquiry%20–%20SKIA%20Global"
                  className="btn-primary w-full text-center block"
                >
                  Request Corporate Capability Deck
                </a>
                <a
                  href="https://www.linkedin.com/in/skia-executive-presence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full text-center block"
                >
                  Connect on LinkedIn
                </a>
              </div>

              {/* Tagline */}
              <p
                className="text-brand-slate font-accent italic text-xs text-center mt-6"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                &ldquo;The way you show up is the first thing they remember.&rdquo;
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
