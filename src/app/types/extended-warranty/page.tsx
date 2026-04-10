import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Extended Warranty for Used Cars | Vehicle Protection Cover | BreakdownInsurance.co.nz',
  description: 'Compare extended warranty cover for used vehicles. Understand what\'s covered, how it differs from MBI, typical costs, and how to get the best policy for your car.',
  alternates: { canonical: 'https://breakdowninsurance.co.nz/types/extended-warranty' },
  openGraph: {
    title: 'Extended Warranty for Used Cars | BreakdownInsurance.co.nz',
    description: 'Compare extended warranty cover for used vehicles — what\'s covered, costs, and how to choose the right policy.',
    url: 'https://breakdowninsurance.co.nz/types/extended-warranty',
    type: 'website',
  },
};

const faqs = [
  {
    q: 'What is an extended warranty for a used car?',
    a: 'An extended warranty (also called a used car warranty or vehicle protection plan) is a contract that covers the cost of repairing specified mechanical and electrical components after the manufacturer\'s original warranty has expired. It pays for parts and labour when a covered component fails unexpectedly, protecting you from large repair bills.',
  },
  {
    q: 'What\'s the difference between an extended warranty and MBI?',
    a: 'An extended warranty is typically a service contract sold through car dealers, structured similarly to a manufacturer warranty. MBI (Mechanical Breakdown Insurance) is a regulated insurance product. MBI can be purchased independently at any time, offers broader flexibility, and is governed by insurance law. Extended warranties are usually tied to the point of sale and processed through the dealer\'s service network.',
  },
  {
    q: 'How much does an extended warranty cost?',
    a: 'Costs vary based on vehicle age, make, model, mileage, and cover level. Entry-level powertrain cover for a 5–8 year old vehicle typically starts around $400–$800 per year. Comprehensive cover for a newer used vehicle can range from $800–$2,000 annually. Multi-year prepaid policies often work out cheaper on a per-year basis.',
  },
  {
    q: 'Can I get an extended warranty on a Japanese import?',
    a: 'Yes, most extended warranty providers cover Japanese import vehicles, though some apply additional conditions regarding odometer verification and parts availability. It\'s important to disclose the vehicle\'s import status and provide the correct New Zealand-equivalent mileage. Some specialist providers have specific products designed for popular Japanese import models.',
  },
  {
    q: 'Do I have to use a specific workshop for repairs?',
    a: 'This depends on the policy. Dealer-arranged warranties typically require repairs at the selling dealer\'s workshop or an approved service centre. Independent MBI-style extended warranty products often allow any licensed mechanic or approved repair facility. Always check the policy\'s workshop requirements before purchasing.',
  },
  {
    q: 'What does an extended warranty NOT cover?',
    a: 'Standard exclusions include routine maintenance items (oil, filters, spark plugs, brake pads), tyres, pre-existing conditions, accident or collision damage, cosmetic damage, and failures caused by neglect or modification. Many policies also exclude gradual wear and tear — cover is for sudden, unexpected failure rather than deterioration over time.',
  },
  {
    q: 'Can an extended warranty be transferred if I sell the car?',
    a: 'Many extended warranties are transferable to a new owner if the vehicle is sold during the policy period. A transferable warranty can add genuine resale value to a vehicle. Always check whether a transfer fee applies and what documentation is required. MBI policies from some providers are also transferable.',
  },
  {
    q: 'Is a dealer warranty the same as an extended warranty?',
    a: 'Not always. A "dealer warranty" is a term used loosely and can mean different things: it may refer to a statutory guarantee under the Consumer Guarantees Act (which applies automatically to dealer sales), or to a paid extended warranty product sold at point of purchase. Always clarify in writing what is included, for how long, and what the claims process involves.',
  },
  {
    q: 'How do I make a claim on my extended warranty?',
    a: 'The standard process is: (1) Contact your warranty provider\'s claims line before authorising any repairs. (2) Obtain a claim number. (3) Take the vehicle to an approved repairer. (4) The repairer diagnoses the fault. (5) The warranty provider assesses and authorises repair. (6) Approved parts and labour costs are paid to the repairer. You pay only the applicable excess.',
  },
  {
    q: 'Should I buy an extended warranty from the dealer or independently?',
    a: 'Dealer-arranged warranties are convenient at point of sale but often carry a dealer markup of 30–50%. Sourcing independently through a broker gives you access to multiple providers, allows you to compare cover and pricing, and removes the sales pressure of a vehicle purchase. Independent brokers can often provide equivalent or better cover at lower cost.',
  },
];

const coveredComponents = [
  { category: 'Engine', items: ['Internal components (pistons, crankshaft, bearings)', 'Head gasket and valve seals', 'Timing chain/belt assembly', 'Turbocharger and supercharger', 'Fuel injection system', 'Engine management unit (ECU)'] },
  { category: 'Transmission', items: ['Automatic gearbox (all internal parts)', 'Manual gearbox synchromesh', 'Torque converter', 'Transfer case', 'Differential (front and rear)', 'CV joints and driveshafts'] },
  { category: 'Electrical', items: ['Alternator and starter motor', 'ABS control module', 'Central locking system', 'Electric window motors', 'Power steering module', 'Infotainment and navigation unit'] },
  { category: 'Cooling & Fuel', items: ['Water pump', 'Thermostat housing', 'Radiator', 'Fuel pump', 'Intercooler', 'Oil pump'] },
];

export default function ExtendedWarrantyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://breakdowninsurance.co.nz' },
        { name: 'Coverage Types', url: 'https://breakdowninsurance.co.nz/coverage' },
        { name: 'Extended Warranty', url: 'https://breakdowninsurance.co.nz/types/extended-warranty' },
      ]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[480px] flex items-center"
        style={{ backgroundImage: 'url(/images/hero-6.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <Link href="/coverage" className="text-amber-300 hover:text-amber-200 text-sm font-medium mb-6 block">← Coverage Types</Link>
          <div className="text-5xl mb-4">📋</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">Extended Warranty<br className="hidden sm:block" /> for Used Vehicles</h1>
          <p className="text-xl text-slate-300 max-w-2xl mb-8">Manufacturer-style protection beyond the standard warranty period. Independent advice on the best extended warranty cover for your used car, ute, or SUV.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="#quote-form" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl shadow-xl transition-all">
              Get a Free Quote →
            </Link>
            <Link href="#compare" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all">
              Compare Options
            </Link>
          </div>
        </div>
      </div>

      {/* Breadcrumb + intro band */}
      <div className="bg-amber-50 border-b border-amber-100 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
          <span>📋 Used car warranty cover</span>
          <span>✅ Independent comparison service</span>
          <span>⏱️ Quote response within 24 hours</span>
          <span>🔒 No obligation, completely free</span>
        </div>
      </div>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">

              {/* What Is an Extended Warranty */}
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">What Is an Extended Warranty?</h2>
                <p className="text-slate-600 leading-relaxed mb-4">An extended warranty — also marketed as a <strong>used car warranty</strong>, <strong>vehicle protection plan</strong>, or <strong>mechanical breakdown warranty</strong> — is a contract that pays for the repair or replacement of specified mechanical and electrical components after a vehicle's manufacturer warranty has expired.</p>
                <p className="text-slate-600 leading-relaxed mb-4">Unlike comprehensive car insurance, which covers accidents and third-party liability, an extended warranty specifically covers <strong>unexpected mechanical and electrical failures</strong>. If your gearbox fails, your engine develops an internal fault, or your ECU stops working, an extended warranty pays for the diagnosis, parts, and labour at an approved repairer — minus any applicable excess.</p>
                <p className="text-slate-600 leading-relaxed">Extended warranties are particularly valuable for used vehicle buyers, where the risk of mechanical failure is higher than for new vehicles and where the original manufacturer warranty has typically expired or has very limited remaining term. A single major repair — engine, transmission, or electrical system — can cost more than the annual premium several times over.</p>
              </div>

              {/* What's Covered */}
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">What Does an Extended Warranty Cover?</h2>
                <p className="text-slate-600 leading-relaxed mb-6">Coverage varies between providers and policy tiers, but most comprehensive extended warranty policies include the following components:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {coveredComponents.map((cat) => (
                    <div key={cat.category} className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                      <h3 className="font-bold text-slate-900 mb-3 text-base">{cat.category}</h3>
                      <ul className="space-y-1.5">
                        {cat.items.map((item) => (
                          <li key={item} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-amber-500 mt-0.5 flex-shrink-0">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed text-sm bg-amber-50 border border-amber-200 rounded-xl p-4">Most policies also include <strong>roadside assistance</strong>, towing costs to an approved repairer, a courtesy vehicle during repairs, and accommodation cover if you break down far from home.</p>
              </div>

              {/* What's Not Covered */}
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">What an Extended Warranty Does NOT Cover</h2>
                <p className="text-slate-600 leading-relaxed mb-4">Understanding exclusions is just as important as knowing what is covered. Standard exclusions across most extended warranty products include:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    ['Routine maintenance items', 'Oil, filters, spark plugs, coolant — these are your ongoing servicing costs'],
                    ['Wear items', 'Brake pads, discs, clutch friction plate, tyres, wiper blades'],
                    ['Pre-existing conditions', 'Faults that existed or were reasonably detectable before cover started'],
                    ['Accident damage', 'Covered by your comprehensive car insurance, not your warranty'],
                    ['Neglect or misuse', 'Failures resulting from missed servicing or operation outside specifications'],
                    ['Undisclosed modifications', 'Non-standard performance or cosmetic modifications not declared at inception'],
                    ['Cosmetic damage', 'Paint, trim, upholstery, and glass generally excluded'],
                    ['Gradual deterioration', 'Wear-related failures over time rather than sudden unexpected failure'],
                  ].map(([title, desc]) => (
                    <div key={title} className="flex items-start gap-3 p-3 bg-red-50 border border-red-100 rounded-xl">
                      <span className="text-red-400 mt-0.5 flex-shrink-0 font-bold text-lg">✕</span>
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">{title}</div>
                        <div className="text-slate-500 text-xs leading-relaxed mt-0.5">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Types of Cover */}
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Types of Extended Warranty Cover</h2>
                <p className="text-slate-600 leading-relaxed mb-6">Extended warranty products typically come in tiers. Choosing the right tier depends on your vehicle's age, value, and your risk tolerance:</p>
                <div className="space-y-4">
                  {[
                    {
                      tier: 'Powertrain Only',
                      badge: 'Entry Level',
                      color: 'border-slate-200',
                      badgeColor: 'bg-slate-100 text-slate-600',
                      desc: 'Covers the engine and transmission — the two most expensive repair items. Suitable for older vehicles where comprehensive cover may be cost-prohibitive.',
                      price: 'From ~$400–$700/year',
                    },
                    {
                      tier: 'Mechanical & Electrical',
                      badge: 'Mid-Range',
                      color: 'border-amber-200',
                      badgeColor: 'bg-amber-100 text-amber-700',
                      desc: 'Adds electrical system cover to powertrain protection. Covers ECU, sensors, alternators, and central locking. Good balance of price and breadth.',
                      price: 'From ~$700–$1,200/year',
                    },
                    {
                      tier: 'Comprehensive',
                      badge: 'Best Cover',
                      color: 'border-green-200',
                      badgeColor: 'bg-green-100 text-green-700',
                      desc: 'Broadest cover available — includes cooling system, fuel injection, steering, braking, air conditioning, and more. Closest to manufacturer warranty protection.',
                      price: 'From ~$1,000–$2,000/year',
                    },
                  ].map((item) => (
                    <div key={item.tier} className={`bg-white border-2 ${item.color} rounded-2xl p-6 flex flex-col sm:flex-row sm:items-start gap-4`}>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-slate-900 text-lg">{item.tier}</h3>
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.badgeColor}`}>{item.badge}</span>
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                      <div className="text-sm font-semibold text-amber-700 bg-amber-50 px-4 py-2 rounded-xl whitespace-nowrap">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extended Warranty vs MBI Comparison */}
              <div id="compare">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Extended Warranty vs MBI — Key Differences</h2>
                <p className="text-slate-600 leading-relaxed mb-6">Both extended warranties and Mechanical Breakdown Insurance (MBI) protect against unexpected mechanical failures. But they work differently and suit different situations:</p>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="text-left px-5 py-4 font-semibold">Feature</th>
                        <th className="text-left px-5 py-4 font-semibold">Extended Warranty</th>
                        <th className="text-left px-5 py-4 font-semibold">MBI</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        ['When you can buy it', 'Usually at point of vehicle sale', 'Any time — even years after purchase'],
                        ['Who sells it', 'Car dealers (with markup) or direct', 'Independent brokers and insurers'],
                        ['Regulated as', 'Service contract', 'Licensed insurance product'],
                        ['Workshop choice', 'Often restricted to approved network', 'Many policies allow any licensed mechanic'],
                        ['Dispute resolution', 'Consumer law / Fair Trading Act', 'Insurance law, dispute resolution scheme'],
                        ['Transferable on sale', 'Often yes, with transfer fee', 'Some policies transferable'],
                        ['Available independently', 'Yes, through brokers', 'Yes, through brokers'],
                        ['Price transparency', 'Variable — dealer markup common', 'More standardised premium structure'],
                      ].map(([feature, warranty, mbi], i) => (
                        <tr key={feature} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="px-5 py-3.5 font-medium text-slate-800">{feature}</td>
                          <td className="px-5 py-3.5 text-slate-600">{warranty}</td>
                          <td className="px-5 py-3.5 text-slate-600">{mbi}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-slate-500 text-sm mt-4 bg-slate-50 rounded-xl p-4">For many used car buyers, <strong>independent MBI</strong> sourced through a broker provides better value than a dealer-arranged warranty — wider cover, no dealer markup, and the ability to compare multiple providers. Our brokers can advise on both options for your specific vehicle.</p>
              </div>

              {/* How to Choose */}
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">How to Choose the Right Extended Warranty</h2>
                <p className="text-slate-600 leading-relaxed mb-6">Not all extended warranties are equal. Before committing, check these five things:</p>
                <div className="space-y-4">
                  {[
                    { num: '01', title: 'Component coverage list', desc: 'A policy that uses vague language like "all mechanical and electrical components" may have more exclusions than one that lists every covered part specifically. Request the full policy document before purchasing.' },
                    { num: '02', title: 'Per-claim and annual limits', desc: 'If the maximum payout per repair is $2,000 but a transmission replacement costs $8,000, you\'re underinsured. Verify limits are high enough to cover the actual cost of likely repairs for your vehicle.' },
                    { num: '03', title: 'Excess amount', desc: 'A lower excess means you pay less when you claim, but premiums are higher. Matching the excess to your personal risk tolerance and financial position is important.' },
                    { num: '04', title: 'Workshop requirements', desc: 'If you have an established relationship with a trusted mechanic, confirm that repairs can be carried out there. Policies requiring use of specific networks may not suit all buyers.' },
                    { num: '05', title: 'Claims process and speed', desc: 'Some providers authorise repairs same-day; others can take several days. Ask specifically about claims turnaround time — the time your car is off the road while awaiting claim approval has a real cost.' },
                  ].map((item) => (
                    <div key={item.num} className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-2xl hover:border-amber-200 transition-all">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{item.num}</div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cost Guide */}
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Extended Warranty Cost Guide</h2>
                <p className="text-slate-600 leading-relaxed mb-6">Extended warranty premiums vary widely. The main factors that determine your cost are:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { factor: 'Vehicle age', impact: 'Older vehicles cost more to cover — failure probability is higher' },
                    { factor: 'Odometer reading', impact: 'High mileage increases risk; most providers have maximum mileage thresholds' },
                    { factor: 'Make and model', impact: 'German luxury vehicles and less common models command higher premiums' },
                    { factor: 'Cover level', impact: 'Comprehensive costs more than powertrain-only' },
                    { factor: 'Excess chosen', impact: 'Higher excess = lower premium' },
                    { factor: 'Policy term', impact: 'Multi-year prepaid policies often save 10–20% vs annual renewals' },
                  ].map((item) => (
                    <div key={item.factor} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <div className="font-semibold text-slate-900 text-sm mb-1">{item.factor}</div>
                      <div className="text-slate-500 text-xs leading-relaxed">{item.impact}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Typical Annual Premium Ranges</h3>
                  <div className="space-y-3">
                    {[
                      { level: 'Powertrain only (5–10yr vehicle)', range: '$400 – $700 / year' },
                      { level: 'Mechanical & electrical (5–10yr vehicle)', range: '$700 – $1,200 / year' },
                      { level: 'Comprehensive (5–10yr vehicle)', range: '$1,000 – $2,000 / year' },
                      { level: 'Comprehensive (10–15yr vehicle)', range: '$1,200 – $2,500 / year' },
                      { level: '3-year prepaid comprehensive', range: '$2,500 – $5,000 total' },
                    ].map((row) => (
                      <div key={row.level} className="flex justify-between items-center py-2 border-b border-amber-100 last:border-0">
                        <span className="text-slate-700 text-sm">{row.level}</span>
                        <span className="font-bold text-amber-700 text-sm">{row.range}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mt-3">Indicative ranges only. Your actual premium depends on the specific vehicle and provider. Request a free quote for accurate pricing.</p>
                </div>
              </div>

              {/* Dealer vs Independent */}
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Dealer Warranty vs Independent Extended Warranty</h2>
                <p className="text-slate-600 leading-relaxed mb-4">When you purchase a used vehicle, the dealer will often present a warranty product at or near the time of sale. While convenient, this is typically the most expensive way to obtain extended warranty cover.</p>
                <p className="text-slate-600 leading-relaxed mb-6">Car dealers earn commission on warranty products sold — often 30–50% above cost. Purchasing through an independent broker gives you access to multiple providers, allows you to compare policy terms side by side, and removes the time pressure of a vehicle purchase.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-3">Dealer Warranty</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex gap-2"><span className="text-green-500">✓</span> Convenient — arranged at time of purchase</li>
                      <li className="flex gap-2"><span className="text-green-500">✓</span> Often bundled with finance/GAP insurance</li>
                      <li className="flex gap-2"><span className="text-green-500">✓</span> Dealer manages initial repair relationship</li>
                      <li className="flex gap-2"><span className="text-red-400">✕</span> Typically 30–50% more expensive</li>
                      <li className="flex gap-2"><span className="text-red-400">✕</span> No ability to compare providers</li>
                      <li className="flex gap-2"><span className="text-red-400">✕</span> Sales pressure at time of purchase</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200">
                    <h3 className="font-semibold text-slate-900 mb-3">Independent Broker</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex gap-2"><span className="text-green-500">✓</span> Access to multiple provider quotes</li>
                      <li className="flex gap-2"><span className="text-green-500">✓</span> Compare policies on equivalent terms</li>
                      <li className="flex gap-2"><span className="text-green-500">✓</span> No dealer markup — more competitive pricing</li>
                      <li className="flex gap-2"><span className="text-green-500">✓</span> Can be arranged any time after purchase</li>
                      <li className="flex gap-2"><span className="text-green-500">✓</span> Independent advice on best fit for your vehicle</li>
                      <li className="flex gap-2"><span className="text-red-400">✕</span> Requires a separate process from vehicle purchase</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Extended Warranty — Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {faqs.map((faq) => (
                    <details key={faq.q} className="group bg-white border border-slate-200 rounded-2xl overflow-hidden">
                      <summary className="cursor-pointer px-6 py-4 flex items-center justify-between gap-4 hover:bg-amber-50 transition-colors">
                        <h3 className="font-semibold text-slate-900 text-sm sm:text-base pr-4">{faq.q}</h3>
                        <svg className="w-5 h-5 text-amber-500 flex-shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-5 pt-1">
                        <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Internal Links */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Related Guides & Coverage Types</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    { label: 'MBI vs Extended Warranty', href: '/breakdown-insurance/mechanical-breakdown-insurance-vs-warranty-nz' },
                    { label: 'Comprehensive MBI', href: '/types/comprehensive' },
                    { label: 'Drivetrain & Transmission Cover', href: '/types/drivetrain' },
                    { label: 'Electrical Systems Cover', href: '/types/electrical' },
                    { label: 'EV & Hybrid Battery Cover', href: '/types/ev-hybrid' },
                    { label: 'Best MBI 2025', href: '/breakdown-insurance/best-mechanical-breakdown-insurance-nz' },
                    { label: 'MBI for Used Cars', href: '/breakdown-insurance/mechanical-breakdown-insurance-used-cars-nz' },
                    { label: 'Dealer MBI vs Independent', href: '/breakdown-insurance/dealer-mbi-vs-independent-mbi-nz' },
                    { label: 'Compare MBI Providers', href: '/compare' },
                    { label: 'All Coverage Types', href: '/coverage' },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="text-amber-700 hover:text-amber-800 text-sm font-medium flex items-center gap-2 p-2 rounded-lg hover:bg-amber-50 transition-all">
                      <span className="text-amber-400">→</span> {link.label}
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">
              <div id="quote-form">
                <QuoteForm mode="compact" />
              </div>

              {/* Quick stats */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4">Extended Warranty Key Facts</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Cover term', value: '1–4 years' },
                    { label: 'Typical excess', value: '$100–$500' },
                    { label: 'Quote turnaround', value: 'Within 24 hours' },
                    { label: 'Max vehicle age', value: 'Typically up to 15 years' },
                    { label: 'Workshop requirement', value: 'Varies by policy' },
                    { label: 'Transferable', value: 'Often yes' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center py-2 border-b border-amber-100 last:border-0">
                      <span className="text-slate-600 text-sm">{stat.label}</span>
                      <span className="font-semibold text-slate-900 text-sm">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">Not Sure Which Cover Is Right?</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">Our licensed brokers compare extended warranties and MBI policies from multiple providers to find the best fit for your vehicle, age, and budget — completely free of charge.</p>
                <Link href="/#quote-form" className="block text-center bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-6 py-3 rounded-xl transition-all">
                  Get My Free Quote
                </Link>
              </div>

              {/* Other types */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Other Coverage Types</h3>
                <div className="space-y-2">
                  {[
                    { slug: 'comprehensive', title: 'Comprehensive MBI', icon: '🛡️' },
                    { slug: 'drivetrain', title: 'Drivetrain & Transmission', icon: '⚙️' },
                    { slug: 'electrical', title: 'Electrical Systems Cover', icon: '⚡' },
                    { slug: 'ev-hybrid', title: 'EV & Hybrid Battery Cover', icon: '🔋' },
                    { slug: 'roadside-assistance', title: 'Roadside Assistance', icon: '🚗' },
                  ].map((type) => (
                    <Link key={type.slug} href={`/types/${type.slug}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-amber-50 hover:border-amber-200 border border-transparent transition-all group">
                      <span className="text-xl">{type.icon}</span>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-amber-700 transition-colors">{type.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Get Your Extended Warranty Quote Today</h2>
          <p className="text-slate-300 text-lg mb-8">Free, independent comparison from our licensed broker network. Response within 24 hours — no obligation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#quote-form" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-10 py-4 rounded-xl shadow-xl transition-all text-lg">
              Get a Free Quote →
            </Link>
            <Link href="/compare" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all">
              Compare Providers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
