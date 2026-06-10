'use client';
import { useEffect, useRef } from 'react';

const PROGRAMS = [
  {
    id:       '01',
    title:    'The Authority Gap',
    sub:      'Executive Presence for First-Time & Mid-Senior Managers',
    desc:     'Closes the distance between professional competence and perceived authority. Designed for newly promoted managers and mid-senior leaders who have the capability but not yet the room. Combines behavioural diagnostic, authority architecture workshops, and live simulation coaching.',
    duration: '6 weeks',
    format:   'Cohort · 3 Phases',
    audience: 'First-time managers, team leads',
    outcomes: ['44% faster manager ramp-up (Hexaware)', '92% presence score lift', 'Institutionalised in management pipeline'],
    accent:   '#C4A882',
  },
  {
    id:       '02',
    title:    'Leadership Communication Accelerator',
    sub:      'Strategic Communication & C-Suite Credibility',
    desc:     'For senior leaders who are technically exceptional but not yet landing in the room. Transitions communication from data-narration to insight-synthesis — the shift from expert to strategic advisor. Covers narrative construction, influence language, and executive storytelling.',
    duration: '8 weeks',
    format:   'Cohort · 3 Phases',
    audience: 'Associate Directors, Delivery Heads, Practice Leads',
    outcomes: ['87% credibility score uplift (Cognizant)', '18-pt client satisfaction lift', '3 participants promoted to Director in 6 months'],
    accent:   '#D4B896',
  },
  {
    id:       '03',
    title:    'Stakeholder Influence Architecture',
    sub:      'Boardroom Presence & Strategic Authority',
    desc:     'For Directors and VPs who hold authority by title but are not yet consistently translating it into stakeholder influence. Addresses boardroom conduct, strategic persuasion, trust sequencing, professional image as an influence instrument, and holding position under pressure.',
    duration: '10 weeks',
    format:   'Cohort + 1:1 Coaching · 3 Phases',
    audience: 'Senior Managers, Directors, VPs',
    outcomes: ['91% strategic authority improvement (Capgemini)', '4 expanded client mandates', '11 leaders identified as succession candidates'],
    accent:   '#E8D5C4',
  },
  {
    id:       '04',
    title:    'First Impression Architecture',
    sub:      'Professional Image & Client Trust for Client-Facing Teams',
    desc:     'Builds the professional presence architecture required to command client trust at first contact. Covers professional image as a trust instrument, the language of financial trust, non-verbal authority, and first-impression protocols. Includes individual image consultation for every participant.',
    duration: '4–6 weeks',
    format:   'Workshop + 1:1 Consultation',
    audience: 'Relationship Managers, Client-Facing Teams, New Leaders',
    outcomes: ['19% cross-sell conversion uplift (ICICI/HDFC)', '27-point NPS improvement', 'Programme scaled to 180+ additional professionals'],
    accent:   '#8B6350',
  },
];

export default function Programs() {
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
    <section id="programs" ref={ref} className="py-24 lg:py-32 bg-brand-pale">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="reveal flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-brand-deep" />
          <span className="section-label">Corporate Programs</span>
        </div>
        <div className="reveal grid lg:grid-cols-2 gap-8 mb-16">
          <h2
            className="section-heading text-4xl lg:text-5xl leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Four architectures.<br />
            <span className="italic font-normal text-brand-deep">One outcome.</span>
          </h2>
          <p className="body-text text-brand-brown text-base leading-loose self-end">
            Each programme is diagnostic-first, contextually designed, and outcome-measured.
            SKIA does not run workshops — it architects transformations.
          </p>
        </div>

        {/* Program Cards */}
        <div className="space-y-px">
          {PROGRAMS.map((p, idx) => (
            <div
              key={p.id}
              className={`reveal group bg-brand-cream border border-brand-deep/20 hover:border-brand-deep
                         transition-all duration-500 overflow-hidden`}
            >
              <div className="p-8 lg:p-10 grid lg:grid-cols-[1fr_auto] gap-8 items-start">

                {/* Content */}
                <div>
                  <div className="flex items-start gap-6 mb-6">
                    <span
                      className="text-5xl lg:text-6xl font-display font-light leading-none mt-1 opacity-30"
                      style={{ fontFamily: 'Cormorant Garamond, serif', color: p.accent }}
                    >
                      {p.id}
                    </span>
                    <div>
                      <h3
                        className="section-heading text-xl lg:text-2xl mb-1"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {p.title}
                      </h3>
                      <p className="text-brand-deep font-body text-xs tracking-wider font-medium uppercase">
                        {p.sub}
                      </p>
                    </div>
                  </div>

                  <p className="body-text text-brand-brown text-sm leading-loose mb-6 max-w-2xl">
                    {p.desc}
                  </p>

                  {/* Outcomes */}
                  <div className="space-y-2">
                    {p.outcomes.map(o => (
                      <div key={o} className="flex items-center gap-3">
                        <div className="w-1 h-1 rounded-full bg-brand-deep flex-shrink-0" />
                        <span className="body-text text-xs text-brand-brown">{o}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Meta panel */}
                <div className="flex lg:flex-col gap-4 lg:gap-3 lg:min-w-[200px] lg:border-l lg:border-brand-deep/20 lg:pl-8 pt-2">
                  <div>
                    <div className="section-label text-[10px] mb-1">Duration</div>
                    <div
                      className="text-brand-espresso font-display text-lg font-semibold"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {p.duration}
                    </div>
                  </div>
                  <div>
                    <div className="section-label text-[10px] mb-1">Format</div>
                    <div className="text-brand-brown font-body text-xs">{p.format}</div>
                  </div>
                  <div>
                    <div className="section-label text-[10px] mb-1">Best For</div>
                    <div className="text-brand-brown font-body text-xs">{p.audience}</div>
                  </div>
                </div>

              </div>

              {/* Bottom accent bar */}
              <div
                className="h-0.5 w-0 group-hover:w-full transition-all duration-700"
                style={{ backgroundColor: p.accent }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-12 text-center">
          <p
            className="text-brand-espresso font-display font-light text-lg mb-6 italic"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            All programmes are available for corporate cohorts, 1:1 executive consulting, and custom engagements.
          </p>
          <a href="mailto:swasti.khandale@gmail.com" className="btn-primary">
            Request Programme Details
          </a>
        </div>

      </div>
    </section>
  );
}
