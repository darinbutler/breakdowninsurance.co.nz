'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const heroImages = [
  { url: '/images/hero-1.jpg', alt: 'Modern car on open New Zealand highway at golden hour' },
  { url: '/images/hero-2.jpg', alt: 'Mechanic inspecting a vehicle engine in a professional NZ workshop' },
  { url: '/images/hero-3.jpg', alt: 'Family vehicle on New Zealand road with Mount Cook in the background' },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-slate-900">
      {heroImages.map((img, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: current === index ? 1 : 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img.url})` }}
            role="img"
            aria-label={img.alt}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/35" />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className={`max-w-3xl transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            New Zealand&apos;s Breakdown Insurance Specialists
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Protect Your Vehicle
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400"> from Unexpected</span>
            <br />Repair Bills
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            Mechanical Breakdown Insurance covers engine failure, electrical faults, drivetrain issues and more. Get independent advice and compare leading NZ MBI providers in minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#quote-form"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:-translate-y-0.5 text-lg"
            >
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/compare"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-white/20 text-lg"
            >
              Compare Providers
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
            {[
              { icon: '🔧', text: 'Engine & Transmission Cover' },
              { icon: '⚡', text: 'Electrical Systems Cover' },
              { icon: '🔋', text: 'EV Battery Protection' },
              { icon: '🚗', text: '24/7 Roadside Assistance' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${current === index ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/60'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
