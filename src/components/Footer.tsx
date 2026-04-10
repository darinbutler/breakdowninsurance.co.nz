import Link from 'next/link';
import Logo from './Logo';

const coverageTypes = [
  { label: 'Comprehensive MBI', href: '/types/comprehensive' },
  { label: 'Drivetrain & Transmission', href: '/types/drivetrain' },
  { label: 'Electrical Systems', href: '/types/electrical' },
  { label: 'EV & Hybrid Battery', href: '/types/ev-hybrid' },
  { label: 'Roadside Assistance', href: '/types/roadside-assistance' },
  { label: 'Extended Warranty', href: '/types/extended-warranty' },
];

const mbiGuides = [
  { label: 'Cheap MBI NZ', href: '/breakdown-insurance/cheap-mechanical-breakdown-insurance-nz' },
  { label: 'Best MBI NZ', href: '/breakdown-insurance/best-mechanical-breakdown-insurance-nz' },
  { label: 'MBI for Used Cars', href: '/breakdown-insurance/mechanical-breakdown-insurance-used-cars-nz' },
  { label: 'EV Breakdown Insurance', href: '/breakdown-insurance/ev-mechanical-breakdown-insurance-nz' },
  { label: 'MBI vs Warranty', href: '/breakdown-insurance/mechanical-breakdown-insurance-vs-warranty-nz' },
  { label: 'Compare MBI NZ', href: '/breakdown-insurance/compare-mechanical-breakdown-insurance-nz' },
];

const regionalGuides = [
  { label: 'MBI Auckland', href: '/breakdown-insurance/mechanical-breakdown-insurance-auckland' },
  { label: 'MBI Christchurch', href: '/breakdown-insurance/mechanical-breakdown-insurance-christchurch' },
  { label: 'MBI Wellington', href: '/breakdown-insurance/mechanical-breakdown-insurance-wellington' },
  { label: 'Japanese Import MBI', href: '/breakdown-insurance/japanese-import-breakdown-insurance-nz' },
  { label: 'MBI for Older Vehicles', href: '/breakdown-insurance/mechanical-breakdown-insurance-older-vehicles-nz' },
  { label: 'Roadside Assistance NZ', href: '/breakdown-insurance/roadside-assistance-breakdown-insurance-nz' },
];

const moreGuides = [
  { label: 'MBI Cost NZ', href: '/breakdown-insurance/mechanical-breakdown-insurance-cost-nz' },
  { label: 'Transmission Cover NZ', href: '/breakdown-insurance/transmission-failure-cover-nz' },
  { label: 'Engine Breakdown Cover', href: '/breakdown-insurance/engine-breakdown-cover-nz' },
  { label: 'MBI Exclusions NZ', href: '/breakdown-insurance/mechanical-breakdown-insurance-exclusions-nz' },
  { label: 'MBI Benefits NZ', href: '/breakdown-insurance/mbi-benefits-nz' },
  { label: 'Dealer vs Independent MBI', href: '/breakdown-insurance/dealer-mbi-vs-independent-mbi-nz' },
];

const legal = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const regulatory = [
  { label: 'ICNZ', href: 'https://www.icnz.org.nz', external: true },
  { label: 'FMA NZ', href: 'https://www.fma.govt.nz', external: true },
  { label: 'RBNZ', href: 'https://www.rbnz.govt.nz', external: true },
  { label: 'Consumer NZ', href: 'https://www.consumer.org.nz', external: true },
  { label: 'MBIE', href: 'https://www.mbie.govt.nz', external: true },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8">

          {/* Brand & Contact */}
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              New Zealand&apos;s independent MBI information and comparison service. Free quotes from licensed brokers.
            </p>
            <div className="space-y-1.5 text-sm">
              <div className="flex items-center gap-2 text-slate-400">
                <span>📧</span>
                <a href="mailto:hello@cover4you.co.nz" className="hover:text-amber-400 transition-colors">hello@cover4you.co.nz</a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span>🇳🇿</span>
                <span>New Zealand</span>
              </div>
            </div>
          </div>

          {/* Coverage Types */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Coverage Types</h3>
            <ul className="space-y-2.5">
              {coverageTypes.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-amber-400 transition-colors text-sm leading-snug">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MBI Guides */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">MBI Guides</h3>
            <ul className="space-y-2.5">
              {mbiGuides.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-amber-400 transition-colors text-sm leading-snug">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Guides */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Regional & Specialist</h3>
            <ul className="space-y-2.5">
              {regionalGuides.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-amber-400 transition-colors text-sm leading-snug">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Guides */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">More Guides</h3>
            <ul className="space-y-2.5">
              {moreGuides.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-amber-400 transition-colors text-sm leading-snug">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Blog */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: 'Home', href: '/' },
                { label: 'Coverage', href: '/coverage' },
                { label: 'Compare Providers', href: '/compare' },
                { label: 'Blog', href: '/blog' },
                { label: 'FAQs', href: '/faqs' },
                { label: 'Get a Quote', href: '/#quote-form' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-amber-400 transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2.5">
              {legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-amber-400 transition-colors text-sm">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NZ Regulatory */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">NZ Regulatory</h3>
            <ul className="space-y-2.5">
              {regulatory.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-1">
                    {link.label}
                    <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-xs leading-relaxed max-w-none mb-2">
            <strong className="text-slate-400">Disclaimer:</strong> BreakdownInsurance.co.nz is operated by Cover4You Limited, an independent information and lead generation service. We are not an insurance company, underwriter, or licensed financial adviser. Information on this website is general in nature and does not constitute financial advice. When you submit a quote request, your details are forwarded to licensed New Zealand insurance brokers. Cover4You Limited may receive referral fees. All MBI policies are subject to the terms and conditions of the issuing insurer.
          </p>
          <p className="text-slate-500 text-xs leading-relaxed max-w-none">
            MBI products in New Zealand are regulated by the Reserve Bank of New Zealand (RBNZ) and the Financial Markets Authority (FMA). We recommend reviewing the <a href="https://www.icnz.org.nz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 underline">Insurance Council of New Zealand</a> guidelines. © {new Date().getFullYear()} Cover4You Limited. All rights reserved. BreakdownInsurance.co.nz
          </p>
        </div>
      </div>
    </footer>
  );
}
