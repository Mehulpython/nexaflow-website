import type { Metadata } from 'next'
import { Zap, ArrowLeft, CheckCircle, Phone, ArrowRight, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { industries } from '@/data/industries'

// Generate static params for all industries
export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.id,
  }))
}

// Dynamic metadata per industry
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const industry = industries.find(i => i.id === params.slug)
  if (!industry) return { title: 'Industry Not Found' }

  return {
    title: `${industry.name} AI Solutions | NexaFlow AI`,
    description: industry.shortDescription,
    alternates: {
      canonical: `https://nexaflow360.com/industries/${industry.id}`,
    },
    openGraph: {
      title: `${industry.name} AI Solutions | NexaFlow AI`,
      description: industry.shortDescription,
      url: `https://nexaflow360.com/industries/${industry.id}`,
      type: 'website',
    },
  }
}

// Server component for the industry page
export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries.find(i => i.id === params.slug)

  if (!industry) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Industry Not Found</h1>
          <Link href="/industries" className="text-primary-600 hover:underline">
            ← Back to Industries
          </Link>
        </div>
      </div>
    )
  }

  // Get related industries
  const relatedIndustries = industries
    .filter(i => i.category === industry.category && i.id !== industry.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* JSON-LD: Breadcrumb + Service Schema */}
      {industry && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nexaflow360.com" },
                  { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://nexaflow360.com/industries" },
                  { "@type": "ListItem", "position": 3, "name": industry.name, "item": `https://nexaflow360.com/industries/${industry.id}` }
                ]
              })
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": `AI Solutions for ${industry.name}`,
                "description": industry.shortDescription,
                "provider": { "@type": "Organization", "name": "NexaFlow AI", "url": "https://nexaflow360.com" },
                "offers": { "@type": "Offer", "price": String(industry.startingPrice), "priceCurrency": "USD" },
                "areaServed": { "@type": "Country", "name": "United States" }
              })
            }}
          />
        </>
      )}
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">NexaFlow AI</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/#services" className="text-slate-600 hover:text-primary-600 transition">Services</a>
            <a href="/services/ai-studio" className="text-slate-600 hover:text-primary-600 transition">AI Studio</a>
            <Link href="/industries" className="text-primary-600 font-medium">Industries</Link>
            <a href="/#features" className="text-slate-600 hover:text-primary-600 transition">Features</a>
            <a href="/#pricing" className="text-slate-600 hover:text-primary-600 transition">Pricing</a>
            <a href="/#contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition font-medium">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/industries" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Industries
          </Link>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{industry.icon}</span>
            <div>
              <p className="text-primary-300 text-sm font-medium">{industry.category}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{industry.name}</h1>
            </div>
          </div>
          
          <p className="text-xl text-slate-300 max-w-3xl">
            {industry.shortDescription}
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="/#contact" className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition flex items-center justify-center gap-2">
              Get Started - From ${industry.startingPrice} <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:+13239171129" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> (323) 917-1129
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points & Solutions */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Pain Points */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-xl">😤</span>
                Common Challenges
              </h2>
              <ul className="space-y-4">
                {industry.painPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <span className="text-slate-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">✨</span>
                Our Solutions
              </h2>
              <ul className="space-y-4">
                {industry.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Real-World Example</h2>
            </div>
            <p className="text-xl text-white/90 leading-relaxed">
              &ldquo;{industry.useCase}&rdquo;
            </p>
            <div className="mt-8">
              <a 
                href="/#contact" 
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-full font-semibold hover:bg-slate-100 transition"
              >
                See how this works for your business <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Features for {industry.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industry.features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow border border-slate-100 text-center hover:shadow-lg hover:border-primary-200 transition"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <p className="text-slate-700 font-medium text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Ready to Transform Your {industry.name.replace(/s$/, '')} Business?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Starting at just <span className="font-bold text-primary-600">${industry.startingPrice}</span> for {industry.name.toLowerCase()} solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition">
              Get Free Consultation
            </a>
            <a href="/#pricing" className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 transition border border-slate-200">
              View All Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Related Industries */}
      {relatedIndustries.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 mb-8">
              Related Industries in {industry.category}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedIndustries.map((related) => (
                <Link
                  key={related.id}
                  href={`/industries/${related.id}`}
                  className="bg-white rounded-2xl p-6 shadow border border-slate-100 hover:shadow-lg hover:border-primary-200 transition group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{related.icon}</span>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary-600 transition">
                      {related.name}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm line-clamp-2">{related.shortDescription}</p>
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
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">NexaFlow AI</span>
            </div>
            <p className="text-slate-400 text-sm text-center">Next-Gen AI. Seamless Flow. | © 2026 NexaFlow AI Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
