'use client'

import { Zap, Phone, CheckCircle, Brain, BarChart3, Globe, ArrowRight, Shield, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const FORMSPREE_FORM_ID = 'mykdrobb'

export default function AICallCenterPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...formData, service: 'AI Call Center', comment: 'Interested in AI Call Center service' }),
      })
      if (!response.ok) throw new Error('Failed')
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '' })
    } catch {
      setStatus('error')
    }
  }

  const features = [
    { icon: <Phone className="w-6 h-6" />, title: "24/7 AI Voice Agent", desc: "Every call answered instantly \u2014 no hold times, no voicemail, no missed opportunities" },
    { icon: <Brain className="w-6 h-6" />, title: "Smart Knowledge Base", desc: "Upload your docs, FAQs, and policies \u2014 the AI knows your business inside out" },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Real-Time Analytics", desc: "Dashboard showing call volume, sentiment, resolution rates, and trending topics" },
    { icon: <Globe className="w-6 h-6" />, title: "90+ Languages", desc: "Speak your customer\u2019s language \u2014 automatic multilingual support built in" },
    { icon: <Shield className="w-6 h-6" />, title: "Smart Escalation", desc: "Detects when a human is needed and transfers seamlessly" },
    { icon: <MessageSquare className="w-6 h-6" />, title: "Call Transcripts", desc: "Every call transcribed with AI-generated summaries and topic tags" },
  ]

  const plans = [
    {
      name: "Starter",
      price: "$300",
      period: "/mo",
      calls: "500 calls/mo",
      agents: "1 AI agent",
      features: ["24/7 call handling", "Knowledge base (50 docs)", "Call transcripts", "Basic analytics", "1 language", "Email support"],
      popular: false,
      stripeLink: "https://buy.stripe.com/fZudR3aJ34Ys8qfbD8eME00",
    },
    {
      name: "Growth",
      price: "$800",
      period: "/mo",
      calls: "2,000 calls/mo",
      agents: "3 AI agents",
      features: ["Everything in Starter", "Knowledge base (500 docs)", "Advanced analytics", "5 languages", "CRM integration", "Priority support", "Call recordings"],
      popular: true,
      stripeLink: "https://buy.stripe.com/8x29ANeZj0Ic8qf0YueME01",
    },
    {
      name: "Enterprise",
      price: "$2,000+",
      period: "/mo",
      calls: "Unlimited calls",
      agents: "Unlimited agents",
      features: ["Everything in Growth", "Unlimited knowledge base", "90+ languages", "Custom voice personas", "API access", "Dedicated support", "Custom integrations", "SLA guarantee"],
      popular: false,
      stripeLink: "https://buy.stripe.com/fZu9AN6sNbmQ9uj0YueME02",
    },
  ]

  const faqs = [
    { q: "How quickly can we get started?", a: "Most clients are live within 48 hours. We handle the entire setup \u2014 phone number, agent training, and knowledge base configuration." },
    { q: "What happens when the AI can't help?", a: "The AI detects complex situations and escalates to a human agent seamlessly. You can configure escalation rules based on keywords, sentiment, or topics." },
    { q: "Can I customize the AI agent's voice?", a: "Yes! Enterprise plans include custom voice personas. You can also configure greeting messages, system prompts, and escalation rules." },
    { q: "Do we need any hardware?", a: "Zero hardware needed. Fully cloud-based. We provision the phone numbers and handle all the infrastructure." },
    { q: "How does the knowledge base work?", a: "Upload your documents (PDFs, DOCX, TXT) and the AI learns your business. It answers questions about products, policies, pricing \u2014 anything in your docs." },
    { q: "Can we try it before committing?", a: "Absolutely! 14-day free trial on all plans. No credit card required to start." },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">NexaFlow AI</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-slate-600 hover:text-primary-600 transition">Home</Link>
            <Link href="/plans" className="text-slate-600 hover:text-primary-600 transition">Plans</Link>
            <a href="#pricing" className="text-slate-600 hover:text-primary-600 transition">Pricing</a>
            <a href="#contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition font-medium">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8">
            <Phone className="w-4 h-4 text-green-400" />
            <span className="text-white/90 text-sm">AI-Powered Call Center as a Service</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your AI Receptionist.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300">Never Miss a Call.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            24/7 AI voice agents that answer every call, know your business, resolve issues, and escalate when needed. Starting at $300/mo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition text-lg">
              Start Free Trial <ArrowRight className="w-5 h-5 inline ml-1" />
            </a>
            <a href="#how-it-works" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition text-lg">
              See How It Works
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-white/70 text-sm">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> 14-day free trial</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> No setup fees</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Cancel anytime</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "98%", label: "Calls Resolved" },
            { value: "<2s", label: "Response Time" },
            { value: "90+", label: "Languages" },
            { value: "24/7", label: "Availability" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold text-primary-600">{s.value}</p>
              <p className="text-slate-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Everything You Need</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">A complete AI call center solution \u2014 no hardware, no hiring, no hassle.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary-300 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-lg text-slate-500">From signup to live calls in 3 simple steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Upload Your Knowledge", desc: "Upload your company docs, FAQs, pricing sheets. Our AI ingests and understands everything.", time: "~10 min" },
              { step: "2", title: "Configure Your Agent", desc: "Set your agent\u2019s voice, greeting, escalation rules. We provision a phone number for you.", time: "~15 min" },
              { step: "3", title: "Go Live", desc: "Your AI agent starts answering calls. Monitor everything from your dashboard.", time: "Instant" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">{s.step}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm mb-2">{s.desc}</p>
                <span className="text-xs text-primary-600 font-medium">{s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-500">14-day free trial. No credit card required. Cancel anytime.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className={`bg-white rounded-2xl p-8 border-2 ${plan.popular ? 'border-primary-500 shadow-xl scale-105' : 'border-slate-200'} relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs px-3 py-1 rounded-full font-medium">Most Popular</div>
                )}
                <h3 className="text-xl font-bold text-slate-800">{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                  <span className="text-slate-500">{plan.period}</span>
                </div>
                <p className="text-sm text-primary-600 font-medium mb-4">{plan.calls} &middot; {plan.agents}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={plan.stripeLink} target="_blank" rel="noopener noreferrer" className={`block text-center py-3 rounded-full font-medium transition ${plan.popular ? 'bg-primary-600 text-white hover:bg-primary-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-800 mb-2">{faq.q}</h3>
                <p className="text-slate-500 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="hero-gradient py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Never Miss a Call?</h2>
          <p className="text-slate-300 mb-8">Start your 14-day free trial. No credit card needed.</p>

          {status === 'success' ? (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <p className="text-white text-xl font-semibold">Thank you! We&apos;ll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input required type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50" />
                <input required type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50" />
                <input type="tel" placeholder="Phone (optional)" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50" />
                <input type="text" placeholder="Company Name" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50" />
              </div>
              <button type="submit" disabled={status === 'loading'} className="w-full bg-white text-primary-600 py-3 rounded-lg font-semibold hover:bg-slate-50 disabled:opacity-50 transition">
                {status === 'loading' ? 'Sending...' : 'Start Free Trial \u2192'}
              </button>
              {status === 'error' && <p className="text-red-300 text-sm">Something went wrong. Please email info@nexaflow360.com</p>}
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary-400" />
            <span className="font-semibold text-white">NexaFlow AI</span>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/plans" className="hover:text-white transition">Plans</Link>
            <a href="mailto:info@nexaflow360.com" className="hover:text-white transition">info@nexaflow360.com</a>
            <a href="tel:+13239171129" className="hover:text-white transition">(323) 917-1129</a>
          </div>
          <p className="text-sm">&copy; 2026 NexaFlow AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
