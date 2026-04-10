import Link from 'next/link';

const steps = [
  {
    step: '01',
    title: 'Tell Us About Your Vehicle',
    description: 'Fill out our quick 2-minute form with your vehicle details — make, model, age and type. No obligation, no hard sell.',
    icon: '🚗',
  },
  {
    step: '02',
    title: 'We Match You With MBI Providers',
    description: 'Our licensed brokers compare policies from leading NZ mechanical breakdown insurers to find the best fit for your vehicle and budget.',
    icon: '🔍',
  },
  {
    step: '03',
    title: 'Receive Your Tailored Quote',
    description: 'Get a clear, plain-English quote within 24 hours. No jargon, no hidden fees — just the right cover at the right price.',
    icon: '📋',
  },
  {
    step: '04',
    title: 'Drive with Confidence',
    description: 'Once covered, you have peace of mind knowing unexpected mechanical bills are handled. Drive without financial anxiety.',
    icon: '✅',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">How It Works</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Getting mechanical breakdown cover in New Zealand is straightforward. Here&apos;s how we help you find the right policy.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-300 to-orange-200 -translate-y-1/2 z-0" style={{ width: 'calc(100% - 2.5rem)', left: 'calc(50% + 2.5rem)' }} />
              )}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-amber-200 transition-all duration-300 relative z-10 h-full flex flex-col">
                <div className="text-3xl mb-3">{step.icon}</div>
                <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2">Step {step.step}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
