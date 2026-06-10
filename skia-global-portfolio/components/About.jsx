'use client';
import { useEffect, useRef } from 'react';

const PILLARS = [
  {
    word: 'TRANSFORM',
    desc: 'Shift how leaders perceive themselves and how the room perceives them — from the inside out.',
    icon: '◈',
  },
  {
    word: 'ELEVATE',
    desc: 'Refine presence, professional image, and communication to match the authority they already hold.',
    icon: '◆',
  },
  {
    word: 'LEAD',
    desc: 'Position them to be seen, remembered, and chosen — in every room, at every level.',
    icon: '▲',
  },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — Story */}
          <div>
            <div className="reveal flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-brand-deep" />
              <span className="section-label">About SKIA Global</span>
            </div>

            <h2
              className="reveal section-heading text-4xl lg:text-5xl leading-tight mb-8"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              The gap between capability
              <span className="block italic font-normal text-brand-deep mt-1">
                and perceived authority.
              </span>
            </h2>

            <div className="reveal quote-rule mb-8">
              <p
                className="text-brand-espresso font-accent italic text-base lg:text-lg leading-loose"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                After nearly a decade leading enterprise L&amp;D at Gartner — building capability frameworks
                that reached 60,000+ professionals globally — I identified the gap that structured
                training consistently fails to close: the authority gap.
              </p>
            </div>

            <p className="reveal body-text text-brand-brown text-base leading-loose mb-6">
              The distance between how capable a professional is, and how capable the room perceives
              them to be. That gap became the foundation of SKIA&apos;s methodology — and the reason
              I founded this practice in 2021.
            </p>

            <p className="reveal body-text text-brand-brown text-base leading-loose mb-10">
              SKIA Global partners with HR, L&amp;D, and Talent Development leaders across Banking,
              Consulting, Technology, FMCG, and Professional Services to build leaders who are not
              only competent — but credible, commanding, and commercially influential.
            </p>

            {/* Key clients */}
            <div className="reveal">
              <div className="section-label mb-4">Trusted by teams at</div>
              <div className="flex flex-wrap gap-3">
                {['Gartner', 'Hexaware', 'Cognizant', 'Capgemini', 'ICICI Bank', 'HDFC Bank', 'J&J', 'Volkswagen'].map(c => (
                  <span key={c} className="tag-pill">{c}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Mission + Pillars */}
          <div>
            {/* Mission box */}
            <div className="reveal border border-brand-deep bg-brand-pale p-8 lg:p-10 mb-8">
              <div className="section-label mb-4">Brand Mission</div>
              <p
                className="text-brand-espresso text-xl lg:text-2xl leading-snug font-light"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                To architect the professional identities of individuals who are ready to be seen,
                remembered, and chosen.
              </p>
            </div>

            {/* Pillars */}
            <div className="space-y-px">
              {PILLARS.map(({ word, desc, icon }) => (
                <div
                  key={word}
                  className="reveal group flex gap-6 items-start p-6 bg-brand-cream border border-brand-deep/20
                             hover:bg-brand-pale hover:border-brand-deep transition-all duration-300"
                >
                  <div
                    className="text-brand-deep text-2xl mt-1 group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  >
                    {icon}
                  </div>
                  <div>
                    <div className="section-label text-brand-espresso mb-2">{word}</div>
                    <p className="body-text text-sm text-brand-brown leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom — SKIA Programs overview strip */}
        <div className="reveal mt-20 pt-10 border-t border-brand-deep/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brand-deep/20">
            {[
              { title: 'The Authority Gap',              sub: 'First-time manager executive presence'     },
              { title: 'Stage-Ready',                    sub: 'High-stakes platform & communication'      },
              { title: 'First Impression Architecture',  sub: 'Professional image for client-facing roles' },
              { title: 'Leadership Comm. Accelerator',   sub: 'Strategic communication for senior leaders' },
            ].map(({ title, sub }) => (
              <div key={title} className="bg-brand-cream p-6 hover:bg-brand-pale transition-colors duration-300">
                <div
                  className="text-brand-espresso text-base font-semibold leading-snug mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {title}
                </div>
                <div className="text-brand-slate text-xs font-body">{sub}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
