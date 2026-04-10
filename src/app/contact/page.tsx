import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Contact Us | BreakdownInsurance.co.nz | Get a Free MBI Quote',
  description: 'Contact our licensed NZ MBI brokers for a free mechanical breakdown insurance quote. Response within 24 hours.',
  alternates: { canonical: 'https://breakdowninsurance.co.nz/contact' },
};

export default function ContactPage() {
  return (
    <>
      <div className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: 'url(/images/hero-2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/30" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-slate-300">Request a free MBI quote or ask our licensed brokers any question about mechanical breakdown insurance.</p>
        </div>
      </div>

      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Help</h2>
                <p className="text-slate-600 leading-relaxed">When you submit a quote request, our licensed NZ insurance brokers will review your vehicle details and prepare tailored MBI options from multiple providers — completely free of charge.</p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: '📧', label: 'Email', value: 'hello@cover4you.co.nz', href: 'mailto:hello@cover4you.co.nz' },
                  { icon: '⏱️', label: 'Response Time', value: 'Within 24 hours', href: null },
                  { icon: '🇳🇿', label: 'Coverage Area', value: 'All New Zealand', href: null },
                  { icon: '🔒', label: 'Privacy', value: 'Your details are secure', href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-amber-600 hover:text-amber-700 text-sm">{item.value}</a>
                      ) : (
                        <div className="text-slate-600 text-sm">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-sm text-slate-600 leading-relaxed">
                  BreakdownInsurance.co.nz is operated by Cover4You Limited, an independent information and referral service. We connect you with licensed NZ insurance brokers who will provide your quote directly.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <QuoteForm mode="full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
