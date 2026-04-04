'use client'

import { Zap, Phone, CheckCircle, Brain, BarChart3, Globe, ArrowRight, Shield, MessageSquare, Headphones, Activity, Database, Link2, Radio, LayoutDashboard, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const FORMSPREE_FORM_ID = 'mykdrobb'

export default function NexaFlowConnectPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...formData, service: 'NexaFlow Connect', comment: 'Interested in NexaFlow Connect AI Call Center' }),
      })
      if (!response.ok) throw new Error('Failed')
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '' })
    } catch {
      setStatus('error')
    }
  }

  const features = [
    { icon: <Headphones className="w-6 h-6" />, title: "AI Voice Agents", desc: "Deploy intelligent voice agents powered by Gemini AI that handle calls naturally — answering questions, booking appointments, and resolving issues 24/7." },
    { icon: <Radio className="w-6 h-6" />, title: "Real-time Monitoring", desc: "Live call dashboard with real-time sentiment analysis, call transcription, and instant escalation alerts. Never lose visibility." },
    { icon: <Database className="w-6 h-6" />, title: "Knowledge Base (RAG)", desc: "Upload your docs, FAQs, and policies. Our RAG engine ensures agents always have accurate, up-to-date information." },
    { icon: <Link2 className="w-6 h-6" />, title: "CRM Integration", desc: "Seamlessly sync with HubSpot, Salesforce, and custom CRMs. Every call logged, every lead captured automatically." },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Analytics & Coaching", desc: "Detailed dashboards showing call volume, resolution rates, sentiment trends, and AI-powered coaching insights." },
    { icon: <Phone className="w-6 h-6" />, title: "Twilio Telephony", desc: "Enterprise-grade telephony built on Twilio. Provision numbers instantly, handle concurrent calls, and scale without limits." },
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
            <Link href="/services/ai-studio" className="text-slate-600 hover:text-primary-600 transition">AI Studio</Link>
            <span className="text-primary-600 font-semibold">Connect</span>
            <a href="#contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition font-medium">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8">
            <Phone className="w-4 h-4 text-green-400" />
            <span className="text-white/90 text-sm">NexaFlow Connect — AI Call Center Platform</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI Call Center.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300">Powered by Connect.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Deploy AI voice agents with Gemini intelligence, real-time monitoring, and a 16-page dashboard. Complete call center SaaS starting at $300/mo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://connect.nexaflow360.com" target="_blank" rel="noopener noreferrer" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition text-lg">
              Launch Connect <ArrowRight className="w-5 h-5 inline ml-1" />
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
            { value: "16", label: "Dashboard Pages" },
            { value: "98%", label: "Calls Resolved" },
            { value: "<2s", label: "Response Time" },
            { value: "90+", label: "Languages" },
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
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Everything You Need in a Call Center</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">A complete AI-powered call center platform — voice agents, monitoring, analytics, and integrations all in one.</p>
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
            <p className="text-lg text-slate-500">From signup to live AI agents in 3 simple steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Upload Your Knowledge", desc: "Upload company docs, FAQs, and pricing sheets. Our RAG engine ingests and understands everything about your business.", time: "~10 min" },
              { step: "2", title: "Configure Your Agents", desc: "Set agent voices, greetings, escalation rules, and CRM connections. We provision phone numbers via Twilio.", time: "~15 min" },
              { step: "3", title: "Go Live & Monitor", desc: "Your AI agents start taking calls. Monitor everything from your 16-page dashboard in real time.", time: "Instant" },
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

      {/* Dashboard Preview Mockup */}
      <section id="demo" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">See the Dashboard</h2>
            <p className="text-lg text-slate-500">16 pages of powerful analytics, monitoring, and management</p>
          </div>
          <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
            {/* Mock browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="flex-1 ml-4">
                <div className="bg-slate-700 rounded-lg px-4 py-1.5 text-slate-400 text-sm max-w-md mx-auto text-center">
                  connect.nexaflow360.com/dashboard
                </div>
              </div>
            </div>
            {/* Mock dashboard UI */}
            <div className="p-6 md:p-8">
              {/* Sidebar + Main content */}
              <div className="grid md:grid-cols-4 gap-4">
                {/* Sidebar */}
                <div className="md:col-span-1 bg-slate-800 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 mb-4 px-2">
                    <Zap className="w-5 h-5 text-primary-400" />
                    <span className="text-slate-300 text-sm font-semibold">Connect</span>
                  </div>
                  {[
                    { name: "Dashboard", active: true },
                    { name: "Agents", active: false },
                    { name: "Live Calls", active: false },
                    { name: "Analytics", active: false },
                    { name: "Monitoring", active: false },
                    { name: "Knowledge Base", active: false },
                    { name: "Integrations", active: false },
                    { name: "Settings", active: false },
                  ].map((item) => (
                    <div key={item.name} className={`px-3 py-2 rounded-lg text-sm ${item.active ? 'bg-primary-600/20 text-primary-400 font-medium' : 'text-slate-400 hover:text-slate-300'}`}>
                      {item.name}
                    </div>
                  ))}
                </div>
                {/* Main content */}
                <div className="md:col-span-3 space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { label: "Total Calls", value: "1,284", change: "+12%" },
                      { label: "Active Agents", value: "6", change: "Online" },
                      { label: "Resolution Rate", value: "96.4%", change: "+2.1%" },
                      { label: "Avg Duration", value: "3:42", change: "-18s" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-slate-800 rounded-xl p-4">
                        <p className="text-slate-500 text-xs mb-1">{stat.label}</p>
                        <p className="text-white text-lg font-bold">{stat.value}</p>
                        <p className="text-green-400 text-xs">{stat.change}</p>
                      </div>
                    ))}
                  </div>
                  {/* Chart area */}
                  <div className="bg-slate-800 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-slate-300 text-sm font-medium">Call Volume (7 days)</span>
                      <div className="flex gap-2">
                        <span className="bg-primary-600/20 text-primary-400 text-xs px-2 py-1 rounded">Daily</span>
                        <span className="bg-slate-700 text-slate-400 text-xs px-2 py-1 rounded">Weekly</span>
                      </div>
                    </div>
                    {/* Bar chart mockup */}
                    <div className="flex items-end gap-2 h-32">
                      {[65, 78, 52, 89, 95, 72, 84].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div
                            className="w-full bg-gradient-to-t from-primary-600 to-primary-400 rounded-t"
                            style={{ height: `${h}%` }}
                          ></div>
                          <span className="text-slate-500 text-xs">
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Recent calls */}
                  <div className="bg-slate-800 rounded-xl p-4">
                    <span className="text-slate-300 text-sm font-medium mb-3 block">Recent Calls</span>
                    <div className="space-y-2">
                      {[
                        { caller: "+1 (555) 0142", agent: "Sales Agent", duration: "4:23", status: "Resolved", sentiment: "Positive" },
                        { caller: "+1 (555) 0198", agent: "Support Agent", duration: "2:11", status: "Escalated", sentiment: "Neutral" },
                        { caller: "+1 (555) 0256", agent: "Billing Agent", duration: "3:47", status: "Resolved", sentiment: "Positive" },
                      ].map((call, i) => (
                        <div key={i} className="flex items-center justify-between bg-slate-700/50 rounded-lg px-4 py-2.5">
                          <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-primary-400" />
                            <span className="text-slate-300 text-sm">{call.caller}</span>
                          </div>
                          <span className="text-slate-400 text-xs">{call.agent}</span>
                          <span className="text-slate-400 text-xs">{call.duration}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${call.status === 'Resolved' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                            {call.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="https://connect.nexaflow360.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-700 transition text-lg">
              Launch Connect Dashboard <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white px-6">
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

      {/* Contact CTA */}
      <section id="contact" className="hero-gradient py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Call Center?</h2>
          <p className="text-slate-300 mb-8">Start your 14-day free trial. No credit card needed.</p>

          <div className="mb-8">
            <a href="https://connect.nexaflow360.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition text-lg">
              Launch Connect <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <p className="text-white/60 text-sm mb-6">Or request a personalized demo:</p>

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
                {status === 'loading' ? 'Sending...' : 'Start Free Trial →'}
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
            <Link href="/services/ai-call-center" className="hover:text-white transition">AI Call Center</Link>
            <Link href="/services/ai-studio" className="hover:text-white transition">AI Studio</Link>
            <a href="https://connect.nexaflow360.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Connect</a>
            <a href="mailto:info@nexaflow360.com" className="hover:text-white transition">info@nexaflow360.com</a>
            <a href="tel:+132****1129" className="hover:text-white transition">(323) 917-1129</a>
          </div>
          <p className="text-sm">&copy; 2026 NexaFlow AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
