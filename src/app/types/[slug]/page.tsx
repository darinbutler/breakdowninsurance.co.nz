import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { coverageTypes } from '@/data/coverage-types';
import QuoteForm from '@/components/QuoteForm';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const dynamicParams = false;

const heroImages: Record<string, string> = {
  comprehensive: '/images/hero-1.jpg',
  drivetrain: '/images/hero-2.jpg',
  electrical: '/images/hero-3.jpg',
  'ev-hybrid': '/images/hero-7.jpg',
  'roadside-assistance': '/images/hero-4.jpg',
  'extended-warranty': '/images/hero-6.jpg',
};

export async function generateStaticParams() {
  return coverageTypes.map((type) => ({ slug: type.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const type = coverageTypes.find((t) => t.slug === slug);
  if (!type) return { title: 'Not Found' };
  return {
    title: `${type.title} NZ | Mechanical Breakdown Insurance | BreakdownInsurance.co.nz`,
    description: type.description + ' Compare NZ MBI policies and get a free quote from licensed brokers.',
    alternates: { canonical: `https://breakdowninsurance.co.nz/types/${slug}` },
  };
}

export default async function CoverageTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const type = coverageTypes.find((t) => t.slug === slug);
  if (!type) notFound();

  const imageUrl = heroImages[slug] || '/images/hero-1.jpg';
  const otherTypes = coverageTypes.filter((t) => t.slug !== slug);

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://breakdowninsurance.co.nz' },
        { name: 'Coverage Types', url: 'https://breakdowninsurance.co.nz/coverage' },
        { name: type.title, url: `https://breakdowninsurance.co.nz/types/${slug}` },
      ]} />

      <div className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/30" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Link href="/coverage" className="text-amber-300 hover:text-amber-200 text-sm font-medium mb-4 block">← Coverage Types</Link>
          <div className="text-5xl mb-4">{type.icon}</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{type.title}</h1>
          <p className="text-xl text-slate-300">{type.description}</p>
        </div>
      </div>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed">
                <h2>About {type.title}</h2>
                <p>{type.details}</p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '✅', label: 'Typically Covered', items: ['Sudden & unexpected component failure', 'Parts and labour at approved workshops', 'Towing costs to repairer', 'Rental car during repairs', 'Accommodation if stranded'] },
                  { icon: '❌', label: 'Typically Excluded', items: ['Wear and tear items', 'Scheduled maintenance', 'Pre-existing conditions', 'Accident damage', 'Undisclosed modifications'] },
                ].map((section) => (
                  <div key={section.label} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">{section.icon} {section.label}</h3>
                    <ul className="space-y-2">
                      {section.items.map((item) => <li key={item} className="text-sm text-slate-600 flex items-start gap-2"><span className="text-slate-400 mt-0.5">•</span>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Getting {type.title} Cover</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">Our licensed NZ brokers compare {type.title.toLowerCase()} policies from multiple providers to find the best fit for your vehicle and budget. Submit a free quote request for a personalised comparison within 24 hours.</p>
                <Link href="/#quote-form" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold px-6 py-3 rounded-xl">
                  Get a Free Quote
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-1 space-y-6">
              <QuoteForm mode="compact" />
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Other Coverage Types</h3>
                <div className="space-y-2">
                  {otherTypes.map((ot) => (
                    <Link key={ot.slug} href={`/types/${ot.slug}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-amber-50 hover:border-amber-200 border border-transparent transition-all group">
                      <span className="text-xl">{ot.icon}</span>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-amber-700 transition-colors">{ot.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
