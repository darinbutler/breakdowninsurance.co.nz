import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { insurancePages } from '@/data/insurance-pages';
import QuoteForm from '@/components/QuoteForm';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const dynamicParams = false;

const heroImages = [
  '/images/hero-1.jpg', '/images/hero-2.jpg', '/images/hero-3.jpg', '/images/hero-4.jpg',
  '/images/hero-5.jpg', '/images/hero-6.jpg', '/images/hero-7.jpg', '/images/hero-8.jpg',
];

export async function generateStaticParams() {
  return insurancePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = insurancePages.find((p) => p.slug === slug);
  if (!page) return { title: 'Not Found' };
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `https://breakdowninsurance.co.nz/breakdown-insurance/${slug}` },
  };
}

export default async function InsurancePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = insurancePages.find((p) => p.slug === slug);
  if (!page) notFound();

  const pageIndex = insurancePages.findIndex((p) => p.slug === slug);
  const heroImage = heroImages[pageIndex % heroImages.length];

  const relatedPages = insurancePages.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://breakdowninsurance.co.nz' },
        { name: page.title, url: `https://breakdowninsurance.co.nz/breakdown-insurance/${slug}` },
      ]} />

      <div className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/30" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{page.heroHeading}</h1>
          <p className="text-xl text-slate-300 mb-8">{page.heroSubtitle}</p>
          <Link href="/#quote-form" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl">
            Get a Free Quote
          </Link>
        </div>
      </div>

      <div className="py-8 px-4 sm:px-6 lg:px-8 bg-amber-50 border-b border-amber-100">
        <div className="max-w-3xl mx-auto">
          <QuoteForm mode="compact" />
        </div>
      </div>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg text-slate-600 leading-relaxed mb-8">{page.intro}</p>

              <div className="space-y-8">
                {page.sections.map((section, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6">
                    <h2 className="text-xl font-bold text-slate-900 mb-3">{section.heading}</h2>
                    <p className="text-slate-600 leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-3">Ready for a Free Quote?</h3>
                <p className="text-amber-100 mb-6">Our licensed NZ brokers compare MBI policies from leading providers. Get a personalised recommendation within 24 hours.</p>
                <Link href="/#quote-form" className="inline-flex items-center gap-2 bg-white text-amber-700 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-amber-50 transition-colors">
                  Get My Free Quote
                </Link>
              </div>
            </div>

            <aside className="lg:col-span-1 space-y-6">
              <QuoteForm mode="compact" />

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Related MBI Guides</h3>
                <div className="space-y-3">
                  {relatedPages.map((related) => (
                    <Link key={related.slug} href={`/breakdown-insurance/${related.slug}`} className="block p-3 rounded-xl hover:bg-amber-50 border border-transparent hover:border-amber-200 transition-all">
                      <p className="text-sm font-medium text-slate-700 hover:text-amber-700 leading-snug">{related.title}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Coverage Types</h3>
                <div className="space-y-2 text-sm">
                  {[
                    { label: 'Comprehensive MBI', href: '/types/comprehensive' },
                    { label: 'Drivetrain Cover', href: '/types/drivetrain' },
                    { label: 'Electrical Systems', href: '/types/electrical' },
                    { label: 'EV & Hybrid Battery', href: '/types/ev-hybrid' },
                    { label: 'Roadside Assistance', href: '/types/roadside-assistance' },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="flex items-center gap-2 text-amber-700 hover:text-amber-800 font-medium">
                      <span className="text-xs">→</span>{link.label}
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
