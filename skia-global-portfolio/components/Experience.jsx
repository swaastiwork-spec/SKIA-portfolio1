'use client';
import { useEffect, useRef } from 'react';

const TIMELINE = [
  {
    period:   '2021 – Present',
    role:     'Founder & Executive Presence Consultant',
    org:      'SKIA Global',
    location: 'Pune, India',
    type:     'current',
    highlights: [
      'Founded specialist Executive Presence & Professional Image Consultancy serving HR, L&D, and Talent Development leaders across Banking, Consulting, Technology, and FMCG.',
      'Delivered four corporate programmes — The Authority Gap, Leadership Communication Accelerator, Stakeholder Influence Architecture, and First Impression Architecture — across enterprise clients including Hexaware, Cognizant, Capgemini, ICICI Bank, and HDFC Bank.',
      'Built and deployed proprietary Executive Presence Diagnostic, Communication Credibility Audit, and Branch Presence Benchmark frameworks now used as institutional standards.',
      'Transformed 500+ leaders across mid-senior and C-suite cohorts, with measurable outcomes in manager ramp-up, client satisfaction, NPS, and promotion rates.',
    ],
  },
  {
    period:   '2014 – 2023',
    role:     'Sr. Director, Learning & Development',
    org:      'Gartner Inc.',
    location: 'India / Global',
    type:     'past',
    highlights: [
      'Led enterprise-wide capability strategy across functions and geographies for one of the world\'s leading research and advisory organisations.',
      'Built and scaled learning architecture reaching 60,000+ professionals across Gartner\'s global workforce.',
      'Designed leadership communication frameworks adopted across senior management cohorts in India and APAC.',
      'Originated the Image Architecture methodology — a behavioural model that became the foundation of SKIA\'s consulting practice.',
      'Progressed from Sr. Manager (2014) → Director (2016) → Sr. Director (2017) over 8.5 years.',
    ],
  },
  {
    period:   '2019 – 2021',
    role:     'Director, L&D Consulting + L&D Manager',
    org:      'UnboundB2B',
    location: 'Pune, India',
    type:     'past',
    highlights: [
      'Designed and led L&D consulting engagements for B2B organisations, building capability frameworks focused on leadership communication, management effectiveness, and professional credibility.',
      'Developed management development programmes for mid-level leaders, with key focus on leadership behaviour, communication strategy, and team performance.',
    ],
  },
  {
    period:   '2021 – Present',
    role:     'Voice, Accent & Cross-Cultural Trainer',
    org:      'Consulting & Freelance Practice',
    location: 'Global & India-based Clients',
    type:     'parallel',
    highlights: [
      'Designed and delivered voice & accent training modules with a focus on U.S. accent neutralization, phonetics, and speech modulation for customer-facing and global delivery roles.',
      'Conducted cross-cultural sensitization sessions resulting in 25–30% improvement in clarity and cultural confidence across virtual, global, and hybrid teams.',
      'Key clients: Johnson Controls, Mphasis, XDBS Corp., Aspiring Careers.',
    ],
  },
];

const EDUCATION = [
  { degree: 'Executive MBA, Learning & Development',        school: 'MIT Sloan School of Management',              year: '2016–2018' },
  { degree: 'MBA – Image Management',                       school: 'Conselle Institute of Image Management, London', year: '2018–2020' },
  { degree: 'Image Management',                             school: 'London Image Institute',                       year: '2017–2018' },
  { degree: 'MBA, International Business',                  school: 'MIT Sloan School of Management',              year: '2014–2016' },
  { degree: 'BA, Personality Psychology',                   school: 'Fergusson College, Pune',                     year: '2019–2022' },
  { degree: 'Bachelor of Engineering, Computer Technology', school: 'College of Engineering Pune (COEP)',          year: '2011–2014' },
];

const CERTS = [
  'International Certificate of Image Consulting – Scottish Qualifications Authority',
  'Design Thinking – EMERITUS / MIT Sloan',
  'Soft Skill Trainer Certification – NABET',
  'Certified Master Black Belt, Six Sigma – ISEL Global',
  'Lead Auditor – ISO 9001 & ISO 27001',
  'Certified Information Systems Auditor (CISA)',
  'Neuro-Linguistic Programming (NLP)',
  'Train the Trainer Certification',
  'Advanced Business Analytics – IIM Ahmedabad',
  'Certified TPM Facilitator – CII',
  'TQM Facilitator (trained by Dr. Noriaki Kano)',
  'LIFE ACADEMY Game-Oriented Active Learning Facilitator',
];

export default function Experience() {
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
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-24 lg:py-32 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="reveal flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-brand-deep" />
          <span className="section-label">Experience & Credentials</span>
        </div>
        <h2
          className="reveal section-heading text-4xl lg:text-5xl leading-tight mb-16"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          A decade building<br />
          <span className="italic font-normal text-brand-deep">capability at scale.</span>
        </h2>

        <div className="grid lg:grid-cols-[1fr_380px] gap-16">

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-brand-deep/20" />

            <div className="space-y-10">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="reveal relative pl-10">
                  {/* Dot */}
                  <div
                    className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      item.type === 'current'
                        ? 'bg-brand-deep border-brand-deep'
                        : item.type === 'parallel'
                        ? 'bg-brand-blush border-brand-deep/50'
                        : 'bg-brand-cream border-brand-deep/40'
                    }`}
                  >
                    {item.type === 'current' && (
                      <div className="w-2 h-2 rounded-full bg-brand-cream" />
                    )}
                  </div>

                  <div className="border border-brand-deep/15 bg-brand-pale/30 hover:bg-brand-pale/60 p-6 transition-all duration-300 group">
                    {/* Period + type */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="section-label text-[10px]">{item.period}</span>
                      {item.type === 'current' && (
                        <span className="tag-pill text-[10px] bg-brand-deep/10 border-brand-deep/30">Current</span>
                      )}
                      {item.type === 'parallel' && (
                        <span className="tag-pill text-[10px]">Parallel Practice</span>
                      )}
                    </div>

                    <h3
                      className="text-brand-espresso font-semibold text-lg mb-0.5"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className="text-brand-deep font-display font-semibold text-base"
                        style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem' }}
                      >
                        {item.org}
                      </span>
                      <span className="text-brand-slate/60">·</span>
                      <span className="text-brand-slate font-body text-xs">{item.location}</span>
                    </div>

                    <ul className="space-y-2">
                      {item.highlights.map((h, j) => (
                        <li key={j} className="flex gap-3 text-sm text-brand-brown font-body leading-relaxed">
                          <span className="text-brand-deep mt-1.5 flex-shrink-0 text-xs">—</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — Education + Certs */}
          <div className="space-y-10">

            {/* Education */}
            <div className="reveal">
              <div className="section-label mb-6">Education</div>
              <div className="space-y-px">
                {EDUCATION.map(({ degree, school, year }) => (
                  <div
                    key={degree}
                    className="p-5 bg-brand-pale/50 border border-brand-deep/15 hover:border-brand-deep/40 hover:bg-brand-pale transition-all duration-200"
                  >
                    <div
                      className="text-brand-espresso font-semibold text-sm leading-snug mb-1"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {degree}
                    </div>
                    <div className="text-brand-brown font-body text-xs">{school}</div>
                    <div className="text-brand-slate font-body text-[10px] tracking-wider mt-0.5">{year}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="reveal">
              <div className="section-label mb-6">Certifications & Training</div>
              <div className="space-y-2">
                {CERTS.map(cert => (
                  <div
                    key={cert}
                    className="flex items-start gap-3 p-3 hover:bg-brand-pale/50 transition-colors duration-200 rounded-sm"
                  >
                    <div className="w-1 h-1 rounded-full bg-brand-deep flex-shrink-0 mt-2" />
                    <span className="text-brand-brown font-body text-xs leading-relaxed">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="reveal border border-brand-deep/20 p-6">
              <div className="section-label mb-4">Languages</div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-brand-espresso font-body text-sm">English</span>
                  <span className="text-brand-deep font-body text-xs tracking-wider uppercase">Full Professional</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-brand-espresso font-body text-sm">French</span>
                  <span className="text-brand-slate font-body text-xs tracking-wider uppercase">Elementary</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
