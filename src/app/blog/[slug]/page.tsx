import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const dynamicParams = false;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const BASE_URL = 'https://www.breakdowninsurance.co.nz';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Not Found' };
  const absoluteImage = `${BASE_URL}${post.image}`;
  return {
    title: `${post.title} | BreakdownInsurance.co.nz`,
    description: post.excerpt,
    authors: [{ name: post.author, url: BASE_URL }],
    alternates: { canonical: `${BASE_URL}/blog/${slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `${BASE_URL}/blog/${slug}`,
      siteName: 'BreakdownInsurance.co.nz',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: absoluteImage, width: 1200, height: 800, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [absoluteImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const pageUrl = `${BASE_URL}/blog/${slug}`;
  const absoluteImage = `${BASE_URL}${post.image}`;

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: pageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'BreakdownInsurance.co.nz Editorial Team',
      url: `${BASE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BreakdownInsurance.co.nz',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/android-chrome-512x512.png` },
    },
    image: { '@type': 'ImageObject', url: absoluteImage },
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    articleSection: post.category,
    keywords: ['mechanical breakdown insurance', 'MBI', 'breakdown cover NZ', post.category.toLowerCase()],
    inLanguage: 'en-NZ',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />

      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://www.breakdowninsurance.co.nz' },
        { name: 'Blog', url: 'https://www.breakdowninsurance.co.nz/blog' },
        { name: post.title, url: `https://www.breakdowninsurance.co.nz/blog/${slug}` },
      ]} />

      <div className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: `url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-slate-900/30" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/blog" className="text-amber-300 hover:text-amber-200 text-sm font-medium">← Blog</Link>
          </div>
          <span className="inline-block text-xs font-semibold text-amber-300 bg-amber-900/40 border border-amber-600/30 px-3 py-1 rounded-full mb-4">{post.category}</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-3 text-slate-300 text-sm">
            <span>{post.author}</span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <div
                className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-amber-700 prose-strong:text-slate-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <div className="mt-10 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
                <h3 className="font-bold text-slate-900 mb-2">Disclaimer</h3>
                <p className="text-sm text-slate-600 leading-relaxed">This article is for general informational purposes only and does not constitute financial advice. breakdown insurance products vary by provider — always read your policy schedule carefully. BreakdownInsurance.co.nz is operated by Cover4You, an independent information service. We are not a licensed financial adviser.</p>
              </div>
            </article>

            <aside className="lg:col-span-1 space-y-6">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-2">Compare Providers</h3>
                <p className="text-amber-100 text-sm mb-5">See all 8 breakdown insurance providers side by side — cover, claim limits, EV options, and more.</p>
                <Link href="/compare" className="block w-full text-center bg-white text-amber-700 font-bold py-3 rounded-xl hover:bg-amber-50 transition-colors">
                  See Full Comparison →
                </Link>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Related Breakdown Insurance Guides</h3>
                <div className="space-y-3">
                  {relatedPosts.map((related) => (
                    <Link key={related.slug} href={`/blog/${related.slug}`} className="flex gap-3 group">
                      <div className="w-16 h-16 rounded-lg bg-cover bg-center flex-shrink-0 overflow-hidden" style={{ backgroundImage: `url(${related.image})` }} />
                      <div>
                        <p className="text-sm font-semibold text-slate-800 group-hover:text-amber-700 transition-colors leading-snug">{related.title}</p>
                        <p className="text-xs text-slate-400 mt-1">{related.readTime}</p>
                      </div>
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
