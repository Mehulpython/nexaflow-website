import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts, getCategoryColor } from '@/data/blog-posts';
import { ArrowRight, Clock, Tag, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | NexaFlow AI - AI Tips & Guides for Small Businesses',
  description: 'Expert guides on AI chatbots, automation, customer service, and OpenClaw AI setup for small businesses. Practical tips to save time and grow your business.',
  alternates: {
    canonical: 'https://nexaflow360.com/blog',
  },
  openGraph: {
    title: 'Blog | NexaFlow AI - AI Tips & Guides for Small Businesses',
    description: 'Expert guides on AI chatbots, automation, customer service, and OpenClaw AI setup for small businesses.',
    url: 'https://nexaflow360.com/blog',
    siteName: 'NexaFlow AI',
    type: 'website',
  },
};

export default function BlogPage() {
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
            <a href="/#pricing" className="text-slate-600 hover:text-primary-600 transition">Pricing</a>
            <a href="/#contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition font-medium">Get Started</a>
          </div>
          <Link href="/" className="md:hidden text-slate-600 hover:text-primary-600 text-sm">← Home</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-white/80" />
            <span className="text-white/90 text-sm">NexaFlow AI Blog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Guides for Small Businesses</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Practical tips, guides, and strategies to help you save time, grow revenue, and compete with AI — even if you're not tech-savvy.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl shadow-lg card-hover border border-slate-100 overflow-hidden group"
              >
                {/* Category Badge & Date */}
                <div className="p-6 pb-0 flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <span className="text-sm text-slate-400">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="inline-flex items-center gap-1 text-slate-400">
                      <Clock className="w-4 h-4" />
                      {post.readingTime} min read
                    </span>
                    <span className="text-primary-600 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to Transform Your Business With AI?</h2>
          <p className="text-lg text-slate-600 mb-8">Schedule a free 15-minute consultation and see how NexaFlow AI can save you 5-10 hours every week.</p>
          <a href="/#contact" className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition inline-flex items-center gap-2">
            Get Free Consultation <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

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
