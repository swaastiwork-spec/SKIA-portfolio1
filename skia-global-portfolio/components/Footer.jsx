export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-espresso text-brand-cream/60 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 flex items-center justify-center border border-brand-caramel/40 text-brand-caramel font-display font-bold text-xs"
              style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.1em' }}
            >
              SK
            </div>
            <div>
              <div
                className="text-brand-cream font-display font-light text-sm"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Swaasti Khandale · Image Architect
              </div>
              <div className="text-brand-cream/30 font-body text-[10px] tracking-widest uppercase">
                SKIA Global
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div
            className="text-brand-caramel/60 font-accent italic text-xs"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Transform. Elevate. Lead.
          </div>

          {/* Copyright */}
          <div className="font-body text-[11px] tracking-wider">
            © {year} SKIA Global · Pune, India
          </div>
        </div>
      </div>
    </footer>
  );
}
