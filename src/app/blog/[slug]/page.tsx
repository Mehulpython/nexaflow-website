import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Clock, Tag, BookOpen, Calendar, User, ArrowLeft, CheckCircle } from 'lucide-react';
import { blogPosts, getBlogPostBySlug, getRelatedPosts, getCategoryColor } from '@/data/blog-posts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | NexaFlow AI Blog`,
    description: post.excerpt,
    keywords: post.targetKeyword,
    alternates: {
      canonical: `https://nexaflow360.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://nexaflow360.com/blog/${post.slug}`,
      siteName: 'NexaFlow AI',
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.dateModified,
      authors: ['NexaFlow AI Team'],
      tags: [post.category, post.targetKeyword],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

function extractHeadings(html: string): { id: string; text: string }[] {
  const matches = html.matchAll(/<h2 id="([^"]+)">([^<]+)/g);
  return Array.from(matches).map(([, id, text]) => ({ id, text }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post.slug, post.category);
  const headings = extractHeadings(post.content);

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: 'NexaFlow AI Team',
      url: 'https://nexaflow360.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'NexaFlow AI',
      url: 'https://nexaflow360.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nexaflow360.com/logo.png',
      },
    },
    datePublished: post.date,
    dateModified: post.dateModified,
    image: 'https://nexaflow360.com/logo.png',
    mainEntityOfPage: `https://nexaflow360.com/blog/${post.slug}`,
    keywords: post.targetKeyword,
    articleSection: post.category,
    wordCount: post.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <span className="text-2xl font-bold gradient-text">NexaFlow AI</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/industries" className="text-slate-600 hover:text-primary-600 transition">Industries</Link>
            <Link href="/blog" className="text-primary-600 font-medium transition">Blog</Link>
            <a href="/#services" className="text-slate-600 hover:text-primary-600 transition">Services</a>
            <a href="/services/ai-studio" className="text-slate-600 hover:text-primary-600 transition">AI Studio</a>
            <a href="/services/connect" className="text-slate-600 hover:text-primary-600 transition">Connect</a>
            <a href="/#pricing" className="text-slate-600 hover:text-primary-600 transition">Pricing</a>
            <a href="/#contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition font-medium">Get Started</a>
          </div>
          <Link href="/blog" className="md:hidden text-slate-600 hover:text-primary-600 text-sm">← Blog</Link>
        </div>
      </nav>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Article Header */}
      <header className="hero-gradient pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-1 text-primary-200 hover:text-white transition mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${getCategoryColor(post.category)}`}>
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-300 text-sm">
            <span className="inline-flex items-center gap-1"><User className="w-4 h-4" /> NexaFlow AI Team</span>
            <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readingTime} min read</span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto flex gap-12">
          {/* Table of Contents (sidebar) */}
          {headings.length > 0 && (
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-white rounded-2xl shadow-md border border-slate-100 p-6">
                <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary-600" />
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className="block text-sm text-slate-600 hover:text-primary-600 transition leading-snug"
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          {/* Main Content */}
          <article className="flex-1 max-w-3xl">
            <div
              className="prose prose-lg prose-slate max-w-none
                prose-headings:scroll-mt-24
                prose-h2:text-2xl prose-h2:font-bold prose-h2:text-slate-800 prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl prose-h3:font-semibold prose-h3:text-slate-700 prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-4
                prose-strong:text-slate-800
                prose-ul:text-slate-600 prose-ul:space-y-1 prose-ul:mb-6
                prose-li:text-slate-600
                prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Mobile TOC */}
            {headings.length > 0 && (
              <div className="lg:hidden mt-12 bg-white rounded-2xl shadow-md border border-slate-100 p-6">
                <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary-600" />
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className="block text-sm text-slate-600 hover:text-primary-600 transition leading-snug"
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </article>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-12">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to Put AI to Work for Your Business?</h2>
            <p className="text-lg text-slate-600 mb-6">
              Get a free 15-minute consultation with NexaFlow AI. We&apos;ll show you exactly how AI can save you time and grow your revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition inline-flex items-center justify-center gap-2">
                Get Free Consultation <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+13239171129" className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 transition">
                Call (323) 917-1129
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="bg-white rounded-2xl shadow-lg card-hover border border-slate-100 p-6 group"
                >
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${getCategoryColor(rp.category)}`}>
                    <Tag className="w-3 h-3" />
                    {rp.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary-600 transition leading-snug">
                    {rp.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">{rp.excerpt}</p>
                  <span className="text-primary-600 font-medium text-sm inline-flex items-center gap-1">
                    Read more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <span className="text-2xl font-bold text-white">NexaFlow AI</span>
            </Link>
            <p className="text-slate-400 text-sm text-center">Next-Gen AI. Seamless Flow. | © 2026 NexaFlow AI Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
