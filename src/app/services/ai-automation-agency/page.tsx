'use client'

import { Zap, Bot, Workflow, FileText, BarChart3, CheckCircle, ArrowRight, Brain, Edit, Users, DollarSign, Clock, Sparkles, Lightbulb, Rocket } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const FORMSPREE_FORM_ID = 'mykdrobb'

export default function AIAutomationAgencyPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...formData, service: 'AI Automation Agency', comment: 'Interested in NexaFlow AI Automation Agency services' }),
      })
      if (!response.ok) throw new Error('Failed')
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '' })
    } catch {
      setStatus('error')
    }
  }

  const services = [
    { icon: <Bot className="w-6 h-6" />, title: "AI Agent Development", desc: "Custom chatbots, support agents, and lead qualification bots tailored to your business. Deploy on your website, WhatsApp, or any channel — available 24/7." },
    { icon: <Workflow className="w-6 h-6" />, title: "AI Workflow Automation", desc: "Automate repetitive processes for law firms, accounting practices, recruiting agencies, and more. From intake forms to follow-ups, let AI handle the busywork." },
    { icon: <FileText className="w-6 h-6" />, title: "AI Content Systems", desc: "End-to-end content pipelines with SEO optimization and repurposing workflows. Generate, schedule, and distribute content across all your channels automatically." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "AI Data Analysis", desc: "Catalog optimization, dynamic pricing, and deep customer behavior insights. Turn raw data into actionable strategies that drive revenue growth." },
  ]

  const roiComparisons = [
    { freelancer: "AI Chatbot Developer", freelancerCost: "$8,000–12,000/mo", nexaflowCost: "$599/mo", savings: "~92%" },
    { freelancer: "Workflow Automation Specialist", freelancerCost: "$10,000–16,000/mo", nexaflowCost: "$799/mo", savings: "~94%" },
    { freelancer: "Content + SEO Team (3 people)", freelancerCost: "$12,000–18,000/mo", nexaflowCost: "$999/mo", savings: "~95%" },
    { freelancer: "Data Analyst", freelancerCost: "$8,000–14,000/mo", nexaflowCost: "$599/mo", savings: "~93%" },
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
            <Link href="/services/connect" className="text-slate-600 hover:text-primary-600 transition">Connect</Link>
            <span className="text-primary-600 font-semibold">AI Automation Agency</span>
            <a href="#contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition font-medium">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-white/90 text-sm">NexaFlow AI Automation Agency — Done-For-You AI Solutions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your AI Automation Team,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300">On Demand.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Replace expensive freelancers and slow agencies with an AI-powered automation team. Custom chatbots, workflow automation, content systems, and data analysis — all for a fraction of the cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition text-lg">
              Book a Discovery Call <ArrowRight className="w-5 h-5 inline ml-1" />
            </a>
            <a href="#services" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition text-lg">
              Explore Services
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-white/70 text-sm">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> No long-term contracts</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Custom AI solutions</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Results in 2–4 weeks</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "90%", label: "Cost Savings vs Freelancers" },
            { value: "2–4 wk", label: "Average Delivery Time" },
            { value: "24/7", label: "AI Systems Uptime" },
            { value: "50+", label: "Automations Delivered" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold text-primary-600">{s.value}</p>
              <p className="text-slate-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Our AI Automation Services</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Four core service areas designed to replace your most expensive freelance and agency costs with intelligent AI systems.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-primary-300 hover:shadow-lg transition">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white mb-6">{s.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{s.title}</h3>
                <p className="text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Comparison */}
      <section id="roi" className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">The Cost Comparison Is Not Even Close</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">See how much you save by choosing NexaFlow AI Automation Agency over hiring expensive freelancers and agencies.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-4 px-4 text-slate-600 font-semibold">Service</th>
                  <th className="py-4 px-4 text-slate-600 font-semibold text-center">Hiring Freelancer</th>
                  <th className="py-4 px-4 text-primary-600 font-semibold text-center">NexaFlow Agency</th>
                  <th className="py-4 px-4 text-green-600 font-semibold text-center">You Save</th>
                </tr>
              </thead>
              <tbody>
                {roiComparisons.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition">
                    <td className="py-4 px-4 font-medium text-slate-800">{row.freelancer}</td>
                    <td className="py-4 px-4 text-center text-red-500 font-semibold">{row.freelancerCost}</td>
                    <td className="py-4 px-4 text-center text-primary-600 font-bold">{row.nexaflowCost}</td>
                    <td className="py-4 px-4 text-center">
                      <span className="bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full text-sm">{row.savings}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 bg-slate-50 rounded-3xl p-8 text-center border border-slate-200">
            <div className="flex items-center justify-center gap-2 mb-3">
              <DollarSign className="w-5 h-5 text-primary-600" />
              <span className="text-lg font-semibold text-slate-800">The Math Is Simple</span>
            </div>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A single AI freelancer costs <span className="font-bold text-red-500">$8,000–16,000/mo</span>. Our full agency service starts at <span className="font-bold text-primary-600">$599/mo</span>. That&apos;s an entire AI automation team for less than what you&apos;d pay one contractor.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">How It Works</h2>
            <p className="text-lg text-slate-500">From discovery call to a fully automated business in 3 simple steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", icon: <Lightbulb className="w-6 h-6" />, title: "Discovery Call", desc: "We learn your business, identify bottlenecks, and map out the AI automations that will deliver the highest ROI for your specific needs.", time: "~30 min" },
              { step: "2", icon: <Brain className="w-6 h-6" />, title: "Custom Build", desc: "Our team designs, builds, and tests your custom AI systems — chatbots, workflows, content pipelines, or data tools — tailored to your exact requirements.", time: "2–3 weeks" },
              { step: "3", icon: <Rocket className="w-6 h-6" />, title: "Launch & Optimize", desc: "We deploy your AI systems and continuously optimize performance. You get detailed reporting and ongoing support to ensure maximum results.", time: "Ongoing" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">{s.step}</div>
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mx-auto mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm mb-2">{s.desc}</p>
                <span className="text-xs text-primary-600 font-medium">{s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Built For Businesses That Need Results</h2>
            <p className="text-lg text-slate-500">Perfect for companies spending too much on freelancers and not getting enough done.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Users className="w-8 h-8" />, title: "Law Firms", desc: "Automate client intake, appointment scheduling, document generation, and follow-up sequences." },
              { icon: <DollarSign className="w-8 h-8" />, title: "Accounting Firms", desc: "Streamline data entry, invoice processing, client communications, and tax prep workflows." },
              { icon: <Users className="w-8 h-8" />, title: "Recruiting Agencies", desc: "AI-powered candidate screening, interview scheduling, and automated outreach campaigns." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl p-8 text-center border border-slate-200 hover:shadow-lg transition">
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="hero-gradient py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Automate Your Business?</h2>
          <p className="text-slate-300 mb-8">Book a free discovery call. We&apos;ll map out your AI automation strategy in 30 minutes.</p>

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
                {status === 'loading' ? 'Sending...' : 'Book Discovery Call →'}
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
            <Link href="/services/connect" className="hover:text-white transition">Connect</Link>
            <Link href="/services/ai-automation-agency" className="hover:text-white transition">AI Automation Agency</Link>
            <a href="mailto:info@nexaflow360.com" className="hover:text-white transition">info@nexaflow360.com</a>
            <a href="tel:+132****1129" className="hover:text-white transition">(323) 917-1129</a>
          </div>
          <p className="text-sm">&copy; 2026 NexaFlow AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
