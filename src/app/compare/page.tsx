import type { Metadata } from 'next';
import Link from 'next/link';
import { providers } from '@/data/providers';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Compare MBI Providers NZ | Mechanical Breakdown Insurance Comparison',
  description: 'Compare New Zealand\'s top mechanical breakdown insurance providers side by side. Find the best MBI policy for your vehicle, budget, and needs.',
  alternates: { canonical: 'https://breakdowninsurance.co.nz/compare' },
};

export default function ComparePage() {
  return (
    <>
      <section className="py-10 pt-14 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Compare NZ MBI Providers</h1>
          <p className="text-xl text-slate-300 mb-8">Side-by-side comparison of New Zealand&apos;s leading mechanical breakdown insurance providers.</p>
          <Link href="/#quote-form" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl">
            Get a Personalised Quote
          </Link>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-10 text-center">NZ MBI Provider Comparison</h2>

          {/* Mobile cards */}
          <div className="lg:hidden space-y-6 mb-10">
            {providers.map((p) => (
              <div key={p.name} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{p.logo}</span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{p.name}</h3>
                    <div className="flex items-center gap-1">
                      <span className="text-amber-500 text-sm">{'★'.repeat(Math.floor(p.rating))}</span>
                      <span className="text-sm text-slate-500">{p.rating}/5</span>
                      <span className="text-slate-400 mx-1">·</span>
                      <span className="font-bold text-slate-600">{p.price}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.features.map((f) => <span key={f} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full">{f}</span>)}
                </div>
                <p className="text-sm text-green-700 mb-1"><strong>✓</strong> {p.pros}</p>
                <p className="text-sm text-slate-500 mb-2"><strong>△</strong> {p.cons}</p>
                <p className="text-xs text-amber-700 bg-amber-50 px-3 py-1.5 rounded-lg">Best for: {p.bestFor}</p>
              </div>
            ))}
          </div>

          {/* Desktop table */}
          <div className="hidden lg:block overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-10">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-900">
                  <th className="text-left px-6 py-4 text-white font-semibold text-sm">Provider</th>
                  <th className="text-left px-6 py-4 text-white font-semibold text-sm">Rating</th>
                  <th className="text-left px-6 py-4 text-white font-semibold text-sm">Price Range</th>
                  <th className="text-left px-6 py-4 text-white font-semibold text-sm">Key Features</th>
                  <th className="text-left px-6 py-4 text-white font-semibold text-sm">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {providers.map((p, i) => (
                  <tr key={p.name} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{p.logo}</span>
                        <span className="font-bold text-slate-900">{p.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1">
                        <span className="text-amber-500 text-sm">{'★'.repeat(Math.floor(p.rating))}</span>
                        <span className="text-sm text-slate-600 font-medium">{p.rating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="font-bold text-slate-700 text-lg">{p.price}</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-wrap gap-1">
                        {p.features.slice(0, 3).map((f) => (
                          <span key={f} className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full">{f}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm text-slate-600 max-w-xs">{p.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
            <p className="text-slate-700 mb-4">Provider information is for guidance only and subject to change. For the most accurate and personalised comparison, request a free quote from our licensed NZ brokers.</p>
            <Link href="/#quote-form" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-8 py-3 rounded-xl">
              Get Your Personalised Comparison
            </Link>
          </div>
        </div>
      </section>

      <QuoteForm mode="full" />
    </>
  );
}
