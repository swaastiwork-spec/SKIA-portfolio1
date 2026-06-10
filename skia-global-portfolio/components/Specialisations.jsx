'use client';
import { useEffect, useRef } from 'react';

const SKILLS = [
  {
    category: 'Communication & Professional Presence',
    items: ['Voice & Accent (US Neutralization)', 'Business Communication — Verbal, Non-verbal & Written', 'Email & Telephone Etiquette', 'Presentation Skills & Platform Performance', 'Interview Coaching', 'Conflict Management'],
  },
  {
    category: 'Executive Presence & Image Architecture',
    items: ['Professional Image Strategy', 'First Impression Architecture', 'Boardroom Conduct & Presence', 'Non-Verbal Authority Signals', 'Spatial Ownership & Physical Leadership', 'Wardrobe as Influence Instrument'],
  },
  {
    category: 'Behavioural & Leadership Skills',
    items: ['Emotional Intelligence', 'DISC Profiling & TA101', 'Team Dynamics & Stakeholder Influence', 'Leadership Development', 'Empathic Communication', 'Time Management & Productivity'],
  },
  {
    category: 'Learning Design & Facilitation',
    items: ['Instructional Design', 'Microlearning & Gamification', 'Blended Learning Architecture', 'Design Thinking (MIT Sloan)', 'Strategic Thinking Facilitation', 'Six Sigma Coaching (Master Black Belt)'],
  },
];

const INDUSTRIES = [
  'Banking & Financial Services',
  'IT Services & Consulting',
  'FMCG & Consumer Products',
  'Automotive',
  'Healthcare & Pharma',
  'Luxury & Lifestyle',
  'Professional Services',
  'B2B Technology',
];

export default function Specialisations() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
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
    <section id="specialisations" ref={ref} className="py-24 lg:py-32 bg-brand-pale">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="reveal flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-brand-deep" />
          <span className="section-label">Specialisations</span>
        </div>
        <h2
          className="reveal section-heading text-4xl lg:text-5xl leading-tight mb-14"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          The complete architecture
          <span className="block italic font-normal text-brand-deep mt-1">of professional authority.</span>
        </h2>

        {/* Skills grid */}
        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-deep/20 mb-14">
          {SKILLS.map(({ category, items }) => (
            <div key={category} className="bg-brand-cream p-6 hover:bg-brand-pale/80 transition-colors duration-300">
              <div
                className="text-brand-espresso font-semibold text-sm mb-5 leading-snug"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {category}
              </div>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-brand-deep flex-shrink-0 mt-1.5" />
                    <span className="text-brand-brown font-body text-xs leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="reveal">
          <div className="section-label mb-5">Industries Served</div>
          <div className="flex flex-wrap gap-3">
            {INDUSTRIES.map(i => (
              <span key={i} className="tag-pill">{i}</span>
            ))}
          </div>
        </div>

        {/* Methodology note */}
        <div className="reveal mt-14 border-t border-brand-deep/20 pt-10">
          <div className="grid lg:grid-cols-3 gap-10">
            {[
              {
                step: '01',
                title: 'Diagnostic First',
                desc: 'Every engagement begins with SKIA\'s proprietary assessment — surfacing the specific presence and communication deficits before any programme is designed.',
              },
              {
                step: '02',
                title: 'Architecture, Not Training',
                desc: 'SKIA builds behavioural frameworks for how leaders are perceived. Not generic skill-building — targeted authority construction.',
              },
              {
                step: '03',
                title: 'Measured Outcomes',
                desc: 'Post-programme evaluations, 360 assessments, and business metrics confirm the ROI. Results are reported in the language of business — not training satisfaction scores.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="group">
                <div
                  className="text-brand-deep/30 font-display font-light mb-3"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '4rem', lineHeight: 1 }}
                >
                  {step}
                </div>
                <h4
                  className="text-brand-espresso font-semibold text-lg mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {title}
                </h4>
                <p className="text-brand-brown font-body text-sm leading-loose">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
