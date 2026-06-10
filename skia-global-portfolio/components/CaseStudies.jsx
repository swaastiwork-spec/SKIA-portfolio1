'use client';
import { useState, useEffect, useRef } from 'react';

const CASES = [
  {
    client:   'Hexaware Technologies',
    industry: 'IT Services & Digital Transformation',
    program:  'The Authority Gap',
    audience: '38 First-Time Managers',
    problem:  'Newly promoted managers lacked executive presence at the client interface and in internal leadership forums — creating an "authority vacuum" that impacted team engagement and client satisfaction.',
    outcome:  'Presence transformed. Manager ramp-up cut nearly in half. Programme permanently embedded in Hexaware\'s management pipeline.',
    metrics: [
      { n: '92%',  l: 'Presence Score Lift'       },
      { n: '44%',  l: 'Faster Manager Ramp-Up'    },
      { n: '+14pt', l: 'Client Satisfaction Lift' },
      { n: '+21pt', l: 'Internal NPS Increase'    },
    ],
    quote: 'Competence gets you the promotion. Presence determines whether you keep the room.',
    tags: ['Executive Presence', 'First-Time Managers', 'Communication Authority'],
  },
  {
    client:   'Cognizant Technology Solutions',
    industry: 'IT Services & Consulting (BFSI Vertical)',
    program:  'Leadership Communication Accelerator',
    audience: '52 Associate Directors, Delivery Heads & Practice Leads',
    problem:  'Senior delivery professionals were being outpaced in client rooms by counterparts with inferior domain knowledge but superior strategic communication — a culture of "competence without conviction."',
    outcome:  'Communication architecture transformed from data-narration to insight-synthesis. Client relationships deepened. Three directors promoted within six months.',
    metrics: [
      { n: '87%',  l: 'Credibility Score Uplift'      },
      { n: '+18pt', l: 'Client Satisfaction'           },
      { n: '3',    l: 'Director Promotions in 6 Months' },
      { n: '2×',   l: 'Verticals Commissioned'         },
    ],
    quote: 'Your clients don\'t just want your answer. They want to trust the person giving it.',
    tags: ['Strategic Communication', 'C-Suite Credibility', 'Stakeholder Influence'],
  },
  {
    client:   'Capgemini SE',
    industry: 'Consulting & Technology Services',
    program:  'Stakeholder Influence Architecture',
    audience: '44 Senior Managers, Directors & Vice Presidents',
    problem:  'Senior leaders were technically formidable but not consistently translating title-level authority into boardroom influence — C-suite clients were bypassing them strategically.',
    outcome:  'Pre-meeting gravity transformed. Four expanded client mandates secured. Succession pipeline tripled. CPO cited SKIA as direct contributing factor.',
    metrics: [
      { n: '91%',   l: 'Strategic Authority Improvement'  },
      { n: '4',     l: 'Expanded Client Mandates'         },
      { n: '11',    l: 'Succession Candidates Identified' },
      { n: '3×',    l: 'Coaching Sessions Per Participant' },
    ],
    quote: 'Influence isn\'t something you assert. It\'s something the room grants you — when your presence earns it.',
    tags: ['Boardroom Presence', 'Stakeholder Influence', 'Professional Image'],
  },
  {
    client:   'ICICI Bank / HDFC Bank',
    industry: 'Banking & Financial Services',
    program:  'First Impression Architecture',
    audience: '82 Relationship Managers, Branch Managers & Wealth Professionals',
    problem:  'Client-facing professionals were losing trust conversations before they began. Inconsistent presence standards across branches were creating a perception gap that contradicted the institutions\' premium brand positioning.',
    outcome:  'Branch presence transformed from the first day post-programme. Cross-sell rates climbed. NPS surged. SKIA\'s Branch Presence Benchmark adopted as the institutional hiring standard.',
    metrics: [
      { n: '+19%',  l: 'Cross-Sell Conversion Uplift' },
      { n: '+27pt', l: 'NPS Score Improvement'        },
      { n: '180+',  l: 'Additional Professionals Scaled To' },
      { n: '12',    l: 'Branches Audited'              },
    ],
    quote: 'In banking, your appearance is your first financial statement. It tells the client whether you can be trusted with theirs.',
    tags: ['Professional Presence', 'Client Trust', 'First Impression Architecture'],
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);
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

  const c = CASES[active];

  return (
    <section id="results" ref={ref} className="py-24 lg:py-32 bg-brand-espresso overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-brand-caramel" />
          <span className="font-body text-xs tracking-widest2 uppercase text-brand-caramel font-semibold">
            Client Transformation Results
          </span>
        </div>
        <div className="reveal grid lg:grid-cols-2 gap-8 mb-14">
          <h2
            className="text-brand-cream font-semibold text-4xl lg:text-5xl leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Not workshops.
            <span className="block italic font-normal text-brand-caramel mt-1">
              Architectures.
            </span>
          </h2>
          <p className="text-brand-blush/80 font-body text-base leading-loose self-end">
            Every SKIA engagement begins with a diagnostic, is delivered in structured phases,
            and is measured against outcomes — not attendance.
          </p>
        </div>

        {/* Case selector tabs */}
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-px bg-brand-deep/20 mb-0">
          {CASES.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left p-5 transition-all duration-300 border-b-2 ${
                active === i
                  ? 'bg-brand-deep/20 border-brand-caramel'
                  : 'bg-brand-espresso/50 border-transparent hover:bg-brand-deep/10 hover:border-brand-deep'
              }`}
            >
              <div className="text-brand-caramel font-body text-[10px] tracking-wider uppercase font-semibold mb-1">
                {c.industry.split('(')[0].trim().split(' ')[0]}
              </div>
              <div
                className={`text-base font-semibold leading-snug ${
                  active === i ? 'text-brand-cream' : 'text-brand-cream/60'
                }`}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {c.client}
              </div>
            </button>
          ))}
        </div>

        {/* Case detail panel */}
        <div
          key={active}
          className="bg-brand-pale/10 border border-brand-deep/30 p-8 lg:p-12 animate-fade-in"
        >
          <div className="grid lg:grid-cols-[1fr_340px] gap-12">

            {/* Left content */}
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {c.tags.map(t => (
                  <span
                    key={t}
                    className="inline-block text-[10px] font-body font-semibold tracking-widest uppercase
                               px-3 py-1 bg-brand-caramel/20 text-brand-caramel border border-brand-caramel/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="grid sm:grid-cols-3 gap-4 text-xs font-body mb-8">
                <div>
                  <div className="text-brand-caramel/60 tracking-wider uppercase mb-1">Programme</div>
                  <div className="text-brand-cream/90 font-medium">{c.program}</div>
                </div>
                <div>
                  <div className="text-brand-caramel/60 tracking-wider uppercase mb-1">Audience</div>
                  <div className="text-brand-cream/90 font-medium">{c.audience}</div>
                </div>
                <div>
                  <div className="text-brand-caramel/60 tracking-wider uppercase mb-1">Industry</div>
                  <div className="text-brand-cream/90 font-medium">{c.industry}</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-brand-caramel font-body text-[10px] tracking-widest uppercase font-semibold mb-2">
                  The Problem
                </div>
                <p className="text-brand-cream/80 font-body text-sm leading-loose">{c.problem}</p>
              </div>

              <div className="mb-8">
                <div className="text-brand-caramel font-body text-[10px] tracking-widest uppercase font-semibold mb-2">
                  The Outcome
                </div>
                <p className="text-brand-cream/80 font-body text-sm leading-loose">{c.outcome}</p>
              </div>

              {/* Pull quote */}
              <blockquote className="border-l-2 border-brand-caramel pl-6">
                <p
                  className="text-brand-caramel font-accent italic text-base lg:text-lg leading-loose"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  &ldquo;{c.quote}&rdquo;
                </p>
                <footer className="text-brand-cream/40 font-body text-[10px] tracking-widest uppercase mt-2">
                  — SKIA Global · {c.client}
                </footer>
              </blockquote>
            </div>

            {/* Right — Metrics */}
            <div className="grid grid-cols-2 gap-px bg-brand-deep/30 self-start">
              {c.metrics.map(({ n, l }) => (
                <div key={l} className="bg-brand-espresso p-6 text-center hover:bg-brand-deep/20 transition-colors">
                  <div
                    className="text-brand-caramel font-display font-light mb-2"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', lineHeight: 1 }}
                  >
                    {n}
                  </div>
                  <div className="text-brand-cream/60 font-body text-[10px] tracking-wider uppercase leading-tight">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setActive(i => (i - 1 + CASES.length) % CASES.length)}
            className="flex items-center gap-2 text-brand-cream/50 hover:text-brand-caramel font-body text-xs tracking-wider uppercase transition-colors"
          >
            ← Previous
          </button>
          <div className="flex gap-2">
            {CASES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  active === i ? 'bg-brand-caramel w-6' : 'bg-brand-cream/20 hover:bg-brand-cream/40'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setActive(i => (i + 1) % CASES.length)}
            className="flex items-center gap-2 text-brand-cream/50 hover:text-brand-caramel font-body text-xs tracking-wider uppercase transition-colors"
          >
            Next →
          </button>
        </div>

      </div>
    </section>
  );
}
