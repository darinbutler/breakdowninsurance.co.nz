import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'About Us | BreakdownInsurance.co.nz | Independent MBI Advice NZ',
  description: 'About BreakdownInsurance.co.nz — New Zealand\'s independent mechanical breakdown insurance comparison and advice service operated by Cover4You Limited.',
  alternates: { canonical: 'https://breakdowninsurance.co.nz/about' },
};

export default function AboutPage() {
  return (
    <>
      <div className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: 'url(/images/hero-5.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">About BreakdownInsurance.co.nz</h1>
          <p className="text-xl text-slate-300">New Zealand&apos;s independent Mechanical Breakdown Insurance information and comparison service.</p>
        </div>
      </div>

      <div className="py-8 px-4 sm:px-6 lg:px-8 bg-amber-50 border-b border-amber-100">
        <div className="max-w-3xl mx-auto">
          <QuoteForm mode="compact" />
        </div>
      </div>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-slate-600 leading-relaxed mb-6">BreakdownInsurance.co.nz is operated by Cover4You Limited, a New Zealand company focused on helping Kiwi vehicle owners understand, compare, and access Mechanical Breakdown Insurance (MBI) products. We are an independent information and lead generation service — not an insurer or underwriter.</p>
            <p className="text-slate-600 leading-relaxed mb-8">Our team has deep experience in the New Zealand insurance market and is passionate about helping everyday Kiwis make informed decisions about protecting their vehicles. We believe the MBI market lacks transparency and that independent, jargon-free information is genuinely valuable for New Zealand vehicle owners.</p>

            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">What We Do</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                { icon: '📚', title: 'Independent Information', text: 'We publish detailed, unbiased guides about MBI products, providers, and coverage options to help you make informed decisions.' },
                { icon: '🔍', title: 'Provider Comparison', text: 'We compare NZ\'s leading MBI providers across coverage breadth, claims service, pricing, and additional benefits.' },
                { icon: '📋', title: 'Free Quote Matching', text: 'When you submit a quote request, we connect you with licensed NZ insurance brokers who provide personalised quotes within 24 hours.' },
                { icon: '🎓', title: 'Consumer Education', text: 'We explain MBI in plain English — no jargon, no misleading claims — so you understand exactly what you\'re buying.' },
              ].map((item) => (
                <div key={item.title} className="bg-slate-50 rounded-2xl p-6">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Our Commitment</h2>
            <p className="text-slate-600 leading-relaxed mb-4">We are committed to providing accurate, up-to-date information about MBI in New Zealand. We do not accept advertising from specific providers in exchange for favourable coverage, and our editorial content reflects our genuine assessment of the NZ MBI market.</p>
            <p className="text-slate-600 leading-relaxed mb-8">Cover4You Limited may receive referral fees from partner brokers when we connect customers with their services. This is disclosed clearly in our disclaimer. Our referral partnerships do not influence the information or comparisons we publish — we present all providers fairly.</p>

            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Regulatory Framework</h2>
            <p className="text-slate-600 leading-relaxed mb-4">The MBI products we reference on this site are insurance products regulated by the <a href="https://www.rbnz.govt.nz" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline">Reserve Bank of New Zealand (RBNZ)</a> and the <a href="https://www.fma.govt.nz" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline">Financial Markets Authority (FMA)</a>. The <a href="https://www.icnz.org.nz" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline">Insurance Council of New Zealand (ICNZ)</a> provides industry guidelines and standards that reputable MBI providers adhere to.</p>
          </div>

          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to Get Protected?</h3>
            <p className="text-slate-600 mb-6">Get a free, personalised MBI quote from our licensed NZ broker partners.</p>
            <Link href="/#quote-form" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
