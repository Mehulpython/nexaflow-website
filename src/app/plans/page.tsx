'use client'

import { CheckCircle, X, Zap, ArrowRight, Phone, Mail, Shield, Clock, Users, MessageSquare, Brain, Calendar, BarChart3, ChevronDown, Menu, Rocket } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const FORMSPREE_FORM_ID = 'mykdrobb'

const plans = [
  {
    name: 'Starter',
    price: 99,
    description: 'Perfect for solo entrepreneurs and small businesses getting started with AI.',
    features: [
      { text: '1 channel (Telegram)', included: true },
      { text: 'Basic AI responses', included: true },
      { text: 'Task reminders & notifications', included: true },
      { text: 'Email support', included: true },
      { text: '14-day free trial', included: true },
      { text: 'Custom knowledge base', included: false },
      { text: 'Appointment booking', included: false },
      { text: 'Monthly reporting', included: false },
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: 199,
    description: 'For growing businesses that need custom AI trained on their specific knowledge.',
    features: [
      { text: '2 channels (Telegram + WhatsApp)', included: true },
      { text: 'Custom knowledge base', included: true },
      { text: 'Appointment booking integration', included: true },
      { text: 'Priority support', included: true },
      { text: '14-day free trial', included: true },
      { text: 'Multi-agent system', included: false },
      { text: 'Advanced automation', included: false },
      { text: 'Monthly reporting', included: false },
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Business',
    price: 349,
    description: 'For established businesses that want a full AI-powered operations system.',
    features: [
      { text: '3+ channels (all platforms)', included: true },
      { text: 'Multi-agent system', included: true },
      { text: 'Advanced automation workflows', included: true },
      { text: 'Monthly performance reporting', included: true },
      { text: '14-day free trial', included: true },
      { text: 'Priority support', included: true },
      { text: 'Setup fee waived ($299 value)', included: true },
      { text: 'Custom integrations', included: true },
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
]

const comparisonFeatures = [
  { feature: 'Monthly Price', starter: '$99', professional: '$199', business: '$349' },
  { feature: 'Setup Fee', starter: '$299', professional: '$299', business: 'Waived' },
  { feature: 'Channels', starter: '1 (Telegram)', professional: '2', business: '3+' },
  { feature: 'AI Response Quality', starter: 'Basic', professional: 'Custom-trained', business: 'Multi-agent' },
  { feature: 'Knowledge Base', starter: '—', professional: '✅ Custom', business: '✅ Advanced' },
  { feature: 'Appointment Booking', starter: '—', professional: '✅', business: '✅' },
  { feature: 'Automation Workflows', starter: 'Reminders only', professional: 'Standard', business: 'Advanced' },
  { feature: 'Support', starter: 'Email', professional: 'Priority', business: 'Dedicated' },
  { feature: 'Monthly Reporting', starter: '—', professional: '—', business: '✅' },
  { feature: 'Custom Integrations', starter: '—', professional: '—', business: '✅' },
  { feature: 'Free Trial', starter: '14 days', professional: '14 days', business: '14 days' },
]

const faqs = [
  {
    question: 'How does the 14-day free trial work?',
    answer: 'Sign up and get full access to your chosen plan for 14 days — no credit card required. If you love it (and we\'re confident you will), simply add your payment info before the trial ends. If not, no worries — your trial expires and you owe nothing.',
  },
  {
    question: 'What channels do you support?',
    answer: 'Your AI agent works on Telegram (all plans) and WhatsApp (Professional and Business plans). Telegram is our primary channel because it\'s fast, reliable, and free for both you and your customers. We can add additional channels like SMS and website chat on the Business plan.',
  },
  {
    question: 'How is this different from ChatGPT?',
    answer: 'ChatGPT is a general-purpose AI you talk to. Our AI agent is trained specifically on YOUR business — it knows your services, pricing, policies, and FAQs. It\'s connected to your messaging channels, responds to your customers 24/7, and handles real tasks like booking appointments and sending reminders. Think of it as an AI employee, not an AI chatbot.',
  },
  {
    question: 'Do I need any technical knowledge?',
    answer: 'Zero. We handle everything — setup, configuration, training, and ongoing maintenance. You provide your business information, and we build your AI agent. Most businesses are up and running within 48 hours.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Absolutely. There are no long-term contracts or cancellation fees. Cancel your subscription at any time from your account dashboard. Your AI agent will remain active until the end of your current billing period.',
  },
  {
    question: 'What happens to my data?',
    answer: 'Your data stays on your dedicated, isolated server. We never share your business information, customer conversations, or knowledge base with anyone. Each customer gets their own secure VM — your data never mixes with other businesses.',
  },
  {
    question: 'How quickly can you set up my AI agent?',
    answer: 'Most businesses are live within 48 hours of signing up. This includes training the AI on your business data, setting up your messaging channels, and testing everything. More complex setups (multiple channels, custom integrations) may take 3-5 business days.',
  },
  {
    question: 'Do you offer custom solutions?',
    answer: 'Yes! The Business plan includes custom integrations and advanced automation. If you need something beyond our standard plans — custom AI workflows, additional channels, industry-specific features — reach out and we\'ll build it for you.',
  },
]

const trustBadges = [
  { icon: Shield, text: 'No credit card required for trial' },
  { icon: Clock, text: 'Setup in under 48 hours' },
  { icon: X, text: 'Cancel anytime' },
  { icon: Users, text: 'Used by 50+ small businesses' },
]

export default function PlansPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          service: 'AI Agent Subscription',
          comment: formData.message || 'Interested in AI Agent subscription plan',
        }),
      })
      if (!response.ok) throw new Error('Failed')
      setFormStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch {
      setFormStatus('error')
    }
  }

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
            <a href="/#services" className="text-slate-600 hover:text-primary-600 transition">Services</a>
            <Link href="/plans" className="text-primary-600 font-medium transition">Plans</Link>
            <Link href="/industries" className="text-slate-600 hover:text-primary-600 transition">Industries</Link>
            <Link href="/blog" className="text-slate-600 hover:text-primary-600 transition">Blog</Link>
            <a href="/#contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition font-medium">Get Started</a>
          </div>
          <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 px-6">
            <a href="/#services" className="block py-2 text-slate-600 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <Link href="/plans" className="block py-2 text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>Plans</Link>
            <Link href="/industries" className="block py-2 text-slate-600 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
            <Link href="/blog" className="block py-2 text-slate-600 hover:text-primary-600" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <a href="/#contact" className="block py-2 mt-2 bg-primary-600 text-white text-center rounded-full py-2.5" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white/90 text-sm">14-Day Free Trial — No Credit Card Required</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your AI Employee —<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300">Starting at $99/month</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            24/7 AI assistant that handles customer messages, books appointments, and automates your daily tasks. Set up in under 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#pricing" className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition flex items-center justify-center gap-2">
              Start 14-Day Free Trial <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#faq" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition">
              Learn More
            </a>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 justify-center">
                <badge.icon className="w-5 h-5 text-primary-300" />
                <span className="text-white/80 text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Transparent pricing. No hidden fees. Cancel anytime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl p-8 shadow-lg border ${
                  plan.popular
                    ? 'bg-gradient-to-b from-primary-600 to-primary-700 border-primary-500 transform scale-105 shadow-2xl'
                    : 'bg-white border-slate-200'
                }`}
              >
                {plan.popular && (
                  <div className="text-primary-200 text-sm font-semibold mb-2">MOST POPULAR</div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-800'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.popular ? 'text-primary-200' : 'text-slate-600'}`}>
                  {plan.description}
                </p>
                <div className="mb-8">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-slate-800'}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-primary-200' : 'text-slate-500'}`}>/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-2 ${plan.popular ? 'text-white/90' : 'text-slate-600'}`}>
                      {feature.included ? (
                        <CheckCircle className={`w-5 h-5 ${plan.popular ? 'text-green-400' : 'text-green-500'}`} />
                      ) : (
                        <X className="w-5 h-4 text-slate-400" />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/onboarding"
                  className={`block text-center px-6 py-3 rounded-full font-semibold transition ${
                    plan.popular
                      ? 'bg-white text-primary-700 hover:bg-slate-100'
                      : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                  }`}
                >
                  {plan.cta}
                </Link>
                <Link
                  href="/onboarding"
                  className={`block text-center mt-3 px-6 py-3 rounded-full font-semibold transition border-2 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'border-white/30 text-white hover:bg-white/10'
                      : 'border-primary-200 text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <Rocket className="w-4 h-4" />
                  Start 14-Day Free Trial
                </Link>
              </div>
            ))}
          </div>

          {/* Setup Fee Note */}
          <div className="text-center mt-10">
            <p className="text-slate-500">
              <span className="font-medium text-slate-700">One-time setup fee: $299</span> — covers AI training, channel setup, and configuration. 
              <span className="text-primary-600 font-medium"> Waived for Business plan.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Feature Comparison</h2>
            <p className="text-lg text-slate-600">See exactly what&apos;s included in each plan</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left py-4 px-6 font-semibold text-slate-800">Feature</th>
                  <th className="text-center py-4 px-6 font-semibold text-slate-800">Starter</th>
                  <th className="text-center py-4 px-6 font-semibold text-primary-600">Professional</th>
                  <th className="text-center py-4 px-6 font-semibold text-slate-800">Business</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="py-3 px-6 text-slate-700 font-medium">{row.feature}</td>
                    <td className="py-3 px-6 text-center text-slate-600">{row.starter}</td>
                    <td className="py-3 px-6 text-center text-slate-700 font-medium">{row.professional}</td>
                    <td className="py-3 px-6 text-center text-slate-600">{row.business}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">What Your AI Agent Does</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Your dedicated AI assistant handles the tasks that eat up your time</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Customer Messages</h3>
              <p className="text-slate-600">Responds to customer inquiries 24/7 on Telegram and WhatsApp. Answers questions about your services, pricing, hours, and policies instantly.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Book Appointments</h3>
              <p className="text-slate-600">Manages your calendar, books appointments, sends confirmations and reminders. Reduces no-shows by 30-40% automatically.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Automate Tasks</h3>
              <p className="text-slate-600">Handles reminders, follow-ups, lead capture, and daily workflows. Trained specifically on your business knowledge and processes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about NexaFlow AI Agent</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <button
                  className="w-full flex items-center justify-between py-5 px-6 text-left hover:bg-slate-50 transition"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-slate-800 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Contact Form */}
      <section id="contact-form" className="py-24 px-6 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-slate-300 mb-10">Fill out the form below and we&apos;ll get your AI agent set up within 48 hours.</p>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-xl mx-auto">
            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-white/80">We&apos;ll contact you within 24 hours to get your AI agent started.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (optional)"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50"
                />
                <textarea
                  placeholder="Tell us about your business and what you'd like your AI agent to handle..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 resize-none"
                />
                {formStatus === 'error' && (
                  <p className="text-red-300 text-sm">Something went wrong. Please try again or email us directly.</p>
                )}
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'loading' ? 'Submitting...' : 'Start Your Free Trial'}
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-white/80">
            <a href="tel:+13239171129" className="flex items-center gap-2 hover:text-white transition">
              <Phone className="w-5 h-5" /> (323) 917-1129
            </a>
            <a href="mailto:info@nexaflow360.com" className="flex items-center gap-2 hover:text-white transition">
              <Mail className="w-5 h-5" /> info@nexaflow360.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">NexaFlow AI</span>
            </Link>
            <p className="text-slate-400 text-sm text-center">Next-Gen AI. Seamless Flow. | © 2026 NexaFlow AI Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
