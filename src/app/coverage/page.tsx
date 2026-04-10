import type { Metadata } from 'next';
import Link from 'next/link';
import { coverageTypes } from '@/data/coverage-types';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'MBI Coverage Types NZ | Mechanical Breakdown Insurance Cover Options',
  description: 'Explore all mechanical breakdown insurance coverage types available in New Zealand — from comprehensive MBI to EV battery cover and roadside assistance.',
  alternates: { canonical: 'https://breakdowninsurance.co.nz/coverage' },
};

export default function CoveragePage() {
  return (
    <>
      <div className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: 'url(/images/hero-4.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">MBI Coverage Types</h1>
          <p className="text-xl text-slate-300 mb-8">From comprehensive engine and transmission cover to EV battery protection — understand all your MBI options.</p>
          <Link href="/#quote-form" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl">
            Get a Free Quote
          </Link>
        </div>
      </div>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">All MBI Coverage Options</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Choose the mechanical breakdown cover that best matches your vehicle type, age, and budget.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coverageTypes.map((type) => (
              <div key={type.slug} className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-md hover:border-amber-200 transition-all duration-300">
                <div className="flex items-start gap-5 mb-5">
                  <div className="text-4xl w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center flex-shrink-0">{type.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                    <p className="text-amber-700 font-medium text-sm">{type.description}</p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">{type.details.substring(0, 300)}...</p>
                <div className="flex gap-3">
                  <Link href={`/types/${type.slug}`} className="flex-1 text-center bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold py-2.5 rounded-xl transition-all duration-200 text-sm">
                    Learn More
                  </Link>
                  <Link href="/#quote-form" className="flex-1 text-center border border-amber-300 text-amber-700 hover:bg-amber-50 font-semibold py-2.5 rounded-xl transition-all duration-200 text-sm">
                    Get a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Not Sure Which Cover You Need?</h2>
          <p className="text-slate-600 mb-6">Our licensed NZ brokers will assess your vehicle and recommend the right level of MBI for your situation — free of charge.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg">
            Talk to a Broker
          </Link>
        </div>
      </section>

      <QuoteForm mode="full" />
    </>
  );
}
