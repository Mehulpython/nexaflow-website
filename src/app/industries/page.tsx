'use client'

import { Zap, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { industries, industryCategories, searchIndustries } from '@/data/industries'

export default function IndustriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter industries
  const filteredIndustries = searchQuery
    ? searchIndustries(searchQuery)
    : selectedCategory === 'All'
      ? industries
      : industries.filter(i => i.category === selectedCategory)

  return (
    <div className="min-h-screen bg-slate-50">
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
            <a href="/services/connect" className="text-slate-600 hover:text-primary-600 transition">Connect</a>
            <Link href="/industries" className="text-primary-600 font-medium">Industries</Link>
            <a href="/#features" className="text-slate-600 hover:text-primary-600 transition">Features</a>
            <a href="/#pricing" className="text-slate-600 hover:text-primary-600 transition">Pricing</a>
            <a href="/#contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition font-medium">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Industries We Serve
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            NexaFlow AI helps businesses across 30+ industries automate tasks, save time, and grow. 
            Find your industry and see how we can help.
          </p>
          
          {/* Search */}
          <div className="max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search industries (e.g., salon, dental, restaurant)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === 'All'
                  ? 'bg-primary-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Industries ({industries.length})
            </button>
            {industryCategories.map(category => {
              const count = industries.filter(i => i.category === category).length
              return (
                <button
                  key={category}
                  onClick={() => { setSelectedCategory(category); setSearchQuery(''); }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category} ({count})
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {filteredIndustries.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-slate-600">No industries found matching "{searchQuery}"</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                className="mt-4 text-primary-600 hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredIndustries.map((industry) => (
                <Link
                  key={industry.id}
                  href={`/industries/${industry.id}`}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl hover:border-primary-200 transition group"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{industry.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-1 group-hover:text-primary-600 transition">
                        {industry.name}
                      </h3>
                      <p className="text-sm text-primary-600 mb-2">{industry.category}</p>
                      <p className="text-slate-600 text-sm line-clamp-2">{industry.shortDescription}</p>
                      <div className="mt-3 flex items-center text-primary-600 text-sm font-medium">
                        Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            NexaFlow AI can help any business automate tasks and save time. 
            Contact us for a free consultation about your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contact" className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition">
              Get Free Consultation
            </a>
            <a href="tel:+13239171129" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> (323) 917-1129
            </a>
          </div>
        </div>
      </section>

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
