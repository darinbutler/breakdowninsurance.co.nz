
const steps = [
  {
    step: '01',
    title: 'Know What You Need',
    description: 'Browse our plain-English coverage guides — comprehensive, drivetrain, electrical, EV battery, roadside, and more. Understand what each policy actually covers before you decide.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    cta: 'Explore coverage types',
    href: '/coverage',
  },
  {
    step: '02',
    title: 'Compare Providers Side by Side',
    description: 'See all six leading providers in one place. We compare claim limits, EV cover, policy tiers, ratings and key inclusions — independently, with no provider paying for placement.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    cta: 'Compare all providers',
    href: '/compare',
  },
  {
    step: '03',
    title: 'Go Straight to Your Provider',
    description: "Found the right fit? Click through directly to the provider's own website to get an accurate quote for your specific vehicle. No middlemen, no delays.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    ),
    cta: 'View providers',
    href: '/compare',
  },
  {
    step: '04',
    title: 'Drive Without the Worry',
    description: 'With the right breakdown cover in place, unexpected mechanical bills stop being a financial crisis. Any vehicle, any driver, any corner of the country.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    cta: null,
    href: null,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-slate-900">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/25 text-amber-300 px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
            Simple. Transparent. Fast.
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">How It Works</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We&apos;ve done the research. You make the call. Here&apos;s how to go from confused to covered in four simple steps.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[2.85rem] left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-gradient-to-r from-amber-500/0 via-amber-500/40 to-amber-500/0 z-0" />

          {steps.map((step, index) => (
            <div key={step.step} className="relative flex flex-col items-center text-center lg:px-5">
              {/* Step circle */}
              <div className="relative z-10 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                {/* Step number badge */}
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center">
                  <span className="text-amber-400 text-xs font-black leading-none">{index + 1}</span>
                </div>
              </div>

              {/* Step label */}
              <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">Step {step.step}</div>

              {/* Title */}
              <h3 className="text-lg font-extrabold text-white mb-3 leading-tight">{step.title}</h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{step.description}</p>

              {/* Optional link */}
              {step.cta && step.href && (
                <a href={step.href} className="mt-4 inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 text-xs font-semibold transition-colors group">
                  {step.cta}
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/compare"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-amber-500/25 hover:shadow-2xl hover:-translate-y-0.5"
          >
            Start Comparing Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <div className="flex items-center gap-6 text-slate-400 text-sm">
            <span className="flex items-center gap-1.5"><span className="text-amber-400">✓</span> Independent &amp; unbiased</span>
            <span className="flex items-center gap-1.5"><span className="text-amber-400">✓</span> No registration required</span>
            <span className="flex items-center gap-1.5"><span className="text-amber-400">✓</span> 6 providers compared</span>
          </div>
        </div>
      </div>
    </section>
  );
}
