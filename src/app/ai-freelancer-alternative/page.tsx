'use client'

import { Zap, CheckCircle, XCircle, ArrowRight, Bot, Workflow, FileText, BarChart3, Clock, Users, Shield, ChevronDown, ChevronUp, DollarSign, Headphones } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const FORMSPREE_FORM_ID = 'mykdrobb'

export default function AIFreelancerAlternativePage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...formData, service: 'AI Freelancer Alternative', comment: 'Interested in NexaFlow Agency as freelancer alternative' }),
      })
      if (!response.ok) throw new Error('Failed')
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const freelancerProblems = [
    { icon: <DollarSign className="w-5 h-5" />, text: 'High hourly rates ($150-300/hr) that drain your budget' },
    { icon: <BarChart3 className="w-5 h-5" />, text: 'Unpredictable costs — one project can spiral to $5,000+' },
    { icon: <Clock className="w-5 h-5" />, text: 'Slow onboarding — weeks to understand your business' },
    { icon: <Users className="w-5 h-5" />, text: 'Single point of failure — if they disappear, so does your project' },
    { icon: <Headphones className="w-5 h-5" />, text: 'No ongoing support after the project is "done"' },
  ]

  const services = [
    {
      icon: <Bot className="w-7 h-7" />,
      title: 'AI Agents',
      desc: 'Custom AI chatbots and voice agents that handle customer inquiries, qualify leads, and automate support 24/7.',
    },
    {
      icon: <Workflow className="w-7 h-7" />,
      title: 'Workflow Automation',
      desc: 'Automate repetitive tasks — email sequences, CRM updates, data entry, scheduling — so your team focuses on what matters.',
    },
    {
      icon: <FileText className="w-7 h-7" />,
      title: 'Content Systems',
      desc: 'AI-powered content pipelines: blog posts, social media, email newsletters, and SEO content generated consistently.',
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: 'Data Analysis',
      desc: 'Turn raw data into actionable insights with automated reporting, dashboards, and predictive analytics.',
    },
  ]

  const plans = [
    {
      name: 'Starter Agency',
      price: '$599',
      period: '/mo',
      features: [
        { text: '1 AI agent', included: true },
        { text: '1 workflow automation', included: true },
        { text: 'Monthly reporting', included: true },
        { text: 'Email support', included: true },
        { text: 'Content system', included: false },
        { text: 'Priority support', included: false },
      ],
      popular: false,
    },
    {
      name: 'Growth Agency',
      price: '$999',
      period: '/mo',
      features: [
        { text: '3 AI agents', included: true },
        { text: '5 workflow automations', included: true },
        { text: 'Content system', included: true },
        { text: 'Weekly reporting', included: true },
        { text: 'Priority support', included: true },
        { text: 'Dedicated account manager', included: false },
      ],
      popular: true,
    },
    {
      name: 'Enterprise Agency',
      price: '$1,999',
      period: '/mo',
      features: [
        { text: 'Unlimited AI agents', included: true },
        { text: 'Unlimited automations', included: true },
        { text: 'Full content + data suite', included: true },
        { text: 'Daily reporting', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'Custom integrations', included: true },
      ],
      popular: false,
    },
  ]

  const faqs = [
    {
      q: 'How is NexaFlow different from hiring a freelance AI developer?',
      a: 'A freelancer charges $150-300/hr and works on one project at a time. NexaFlow gives you a dedicated team, unlimited requests on most plans, 24/7 availability, and consistent quality — all for a flat monthly fee starting at $599.',
    },
    {
      q: 'What happens after I sign up?',
      a: 'You get an onboarding call within 24 hours. We learn your business, set up your AI agents and automations, and deliver your first results within the first week. No long ramp-up periods.',
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes, all plans are month-to-month with no long-term contracts. You can cancel anytime — though most clients stay because they see immediate ROI.',
    },
    {
      q: 'What if I need something that is not listed?',
      a: 'Our Growth and Enterprise plans include custom work. If you need something specific — a unique integration, a specialized AI model, or a complex workflow — we build it for you.',
    },
    {
      q: 'How quickly will I see results?',
      a: 'Most clients see their first AI agent live within 3-5 business days. Workflow automations and content systems are typically delivered within the first two weeks.',
    },
    {
      q: 'Do I need technical knowledge to use NexaFlow?',
      a: 'Not at all. We handle all the technical setup, integration, and maintenance. You just tell us what you need, and we deliver it ready to use.',
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
          <a href="#contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition font-medium">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-white/90 text-sm">The Smarter Alternative to AI Freelancers</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Stop Paying $200/Hour<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300">for AI Freelancers</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            NexaFlow gives you the same AI capabilities — chatbots, automation, content systems, data analysis — for a flat monthly fee. No hourly billing. No surprises. Just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition text-lg">
              See Plans &amp; Pricing <ArrowRight className="w-5 h-5 inline ml-1" />
            </a>
            <a href="#comparison" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition text-lg">
              Compare vs. Freelancer
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/70 text-sm">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Flat monthly pricing</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Dedicated team</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Cancel anytime</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">The AI Freelancer Problem</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Hiring freelance AI developers sounds great — until you experience the reality.</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-5">
            {freelancerProblems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-red-50 rounded-2xl p-5 border border-red-100">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-red-500 shrink-0">
                  {item.icon}
                </div>
                <p className="text-slate-700 text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">The NexaFlow Advantage</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">See how a dedicated AI agency stacks up against a solo freelancer.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Freelancer Card */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-orange-400">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Hiring a Freelancer</h3>
              </div>
              <ul className="space-y-4">
                {[
                  '$200/hr average rate',
                  '1 project at a time',
                  'Limited availability (business hours)',
                  'No quality guarantee',
                  'Variable quality &amp; reliability',
                  'No ongoing support',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-slate-400 text-sm">Estimated monthly cost (20 hrs/wk)</p>
                <p className="text-3xl font-bold text-orange-500">$16,000<span className="text-base text-slate-400">/mo</span></p>
              </div>
            </div>

            {/* NexaFlow Card */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-green-500 relative">
              <div className="absolute -top-3 right-6 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                Recommended
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">NexaFlow Agency</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Flat monthly fee from $599',
                  'Unlimited requests',
                  '24/7 availability',
                  'Dedicated team — not one person',
                  'Consistent quality guaranteed',
                  'Ongoing support &amp; maintenance',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-slate-400 text-sm">Starting at</p>
                <p className="text-3xl font-bold text-green-600">$599<span className="text-base text-slate-400">/mo</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">What We Build for You</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Everything a $200/hr freelancer would build — plus ongoing support and maintenance.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-primary-300 hover:shadow-lg transition card-hover">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                  {s.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { value: '$8,400', label: 'Average savings per year', sublabel: 'compared to hiring a freelancer' },
            { value: '5-10 hrs', label: 'Saved per week', sublabel: 'through AI automation' },
            { value: '24/7', label: 'AI availability', sublabel: 'no sleep, no sick days' },
          ].map((s) => (
            <div key={s.label} className="text-center bg-white rounded-3xl shadow-lg p-8">
              <p className="text-5xl font-bold gradient-text mb-2">{s.value}</p>
              <p className="text-lg font-semibold text-slate-800">{s.label}</p>
              <p className="text-sm text-slate-400 mt-1">{s.sublabel}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-slate-500">Flat monthly fees. No hourly billing. No surprises.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-3xl shadow-lg p-8 border-2 ${
                  plan.popular ? 'border-primary-500 scale-105 relative' : 'border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs px-4 py-1 rounded-full font-medium">
                    POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-800">{plan.name}</h3>
                <div className="mt-4 mb-6">
                  <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                  <span className="text-slate-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2 text-sm text-slate-600">
                      {f.included ? (
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-slate-300 mt-0.5 shrink-0" />
                      )}
                      <span className={f.included ? '' : 'text-slate-400'}>{f.text}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center py-3 rounded-full font-medium transition ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-500">Everything you need to know before switching from a freelancer.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="font-semibold text-slate-800 pr-4">{faq.q}</h3>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Contact Form */}
      <section id="contact" className="hero-gradient py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Ditch the Freelancer?</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Get a dedicated AI team for less than you&apos;d pay for one day of freelancing. Start today.
          </p>

          {status === 'success' ? (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <p className="text-white text-xl font-semibold">Thank you! We&apos;ll be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/50 resize-none"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-white text-primary-600 py-3 rounded-lg font-semibold hover:bg-slate-50 disabled:opacity-50 transition"
              >
                {status === 'loading' ? 'Sending...' : 'Get Started \u2192'}
              </button>
              {status === 'error' && (
                <p className="text-red-300 text-sm">Something went wrong. Please email info@nexaflow360.com</p>
              )}
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
          </div>
          <p className="text-sm">&copy; 2026 NexaFlow AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
