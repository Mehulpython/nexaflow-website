'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  Zap, ArrowLeft, ArrowRight, CheckCircle, X, Building2, Bot, BookOpen, Send,
  Phone, Mail, Clock, MessageSquare, Globe, ChevronDown, Menu,
  Building, Briefcase, User, Hash
} from 'lucide-react'

const FORMSPREE_FORM_ID = 'mykdrobb'
const STORAGE_KEY = 'nexaflow-onboarding'

const INDUSTRIES = [
  'Plumber', 'Dentist', 'Restaurant', 'Real Estate', 'Law Firm', 'HVAC',
  'Salon', 'Accountant', 'Auto Repair', 'Fitness Studio', 'Photographer',
  'Insurance Agent', 'Veterinarian', 'Contractor', 'Other'
]

const BUSINESS_TYPES = ['Sole proprietor', 'LLC', 'Corporation']
const CHANNELS = ['Telegram', 'WhatsApp', 'Web Chat Widget']
const CAPABILITIES = [
  'Customer inquiries', 'Appointment booking', 'Reminders',
  'FAQ responses', 'Lead capture', 'Order management'
]

interface FormData {
  step: number
  // Step 1
  businessName: string
  industry: string
  businessType: string
  ownerName: string
  email: string
  phone: string
  // Step 2
  channels: string[]
  capabilities: string[]
  businessHoursStart: string
  businessHoursEnd: string
  emergencyContact: string
  // Step 3
  topQuestions: string
  services: string
  prices: string
  policies: string
  websiteUrl: string
  socialMedia: string
  // Step 4
  agreeTerms: boolean
  agreePrivacy: boolean
}

const defaultFormData: FormData = {
  step: 1,
  businessName: '', industry: '', businessType: '', ownerName: '', email: '', phone: '',
  channels: [], capabilities: [],
  businessHoursStart: '09:00', businessHoursEnd: '17:00', emergencyContact: '',
  topQuestions: '', services: '', prices: '', policies: '', websiteUrl: '', socialMedia: '',
  agreeTerms: false, agreePrivacy: false,
}

const STEPS = [
  { num: 1, label: 'Business Info', icon: Building2 },
  { num: 2, label: 'AI Preferences', icon: Bot },
  { num: 3, label: 'Knowledge Base', icon: BookOpen },
  { num: 4, label: 'Review & Submit', icon: Send },
]

const nextSteps = [
  { step: 'You submit', detail: 'We review your application', time: 'Within 24 hours' },
  { step: 'Configuration', detail: 'We configure your AI agent', time: 'Within 48 hours' },
  { step: 'Free trial', detail: 'You test your AI agent', time: '14 days free' },
  { step: 'Go live!', detail: 'Your AI starts working 24/7', time: 'Launch day 🚀' },
]

function loadSaved(): FormData | null {
  if (typeof window === 'undefined') return null
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? { ...defaultFormData, ...JSON.parse(saved) } : null
  } catch { return null }
}

function saveData(data: FormData) {
  if (typeof window === 'undefined') return
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)) } catch { /* ignore */ }
}

function clearSaved() {
  if (typeof window === 'undefined') return
  try { localStorage.removeItem(STORAGE_KEY) } catch { /* ignore */ }
}

function InputField({ label, icon: Icon, required, children }: {
  label: string; icon: React.ElementType; required?: boolean; children: React.ReactNode
}) {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
        <Icon className="w-4 h-4 text-primary-500" />
        {label}
        {required && <span className="text-red-400">*</span>}
      </label>
      {children}
    </div>
  )
}

const inputClass = "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
const selectClass = "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition appearance-none"
const textareaClass = "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none"

export default function OnboardingPage() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>(defaultFormData)
  const [hydrated, setHydrated] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const saved = loadSaved()
    if (saved) setFormData(saved)
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (hydrated) saveData(formData)
  }, [formData, hydrated])

  const update = useCallback((updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }))
  }, [])

  const toggleArray = (field: 'channels' | 'capabilities', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(v => v !== value)
        : [...prev[field], value]
    }))
  }

  const canProceed = (): boolean => {
    switch (formData.step) {
      case 1: return !!(formData.businessName && formData.industry && formData.businessType && formData.ownerName && formData.email && formData.phone)
      case 2: return formData.channels.length > 0 && formData.capabilities.length > 0
      case 3: return true
      case 4: return formData.agreeTerms && formData.agreePrivacy
      default: return false
    }
  }

  const next = () => update({ step: Math.min(formData.step + 1, 4) })
  const back = () => update({ step: Math.max(formData.step - 1, 1) })

  const handleSubmit = async () => {
    if (!canProceed()) return
    setSubmitStatus('loading')
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _tag: '[ONBOARDING]',
          businessName: formData.businessName,
          industry: formData.industry,
          businessType: formData.businessType,
          ownerName: formData.ownerName,
          email: formData.email,
          phone: formData.phone,
          channels: formData.channels.join(', '),
          capabilities: formData.capabilities.join(', '),
          businessHours: `${formData.businessHoursStart} - ${formData.businessHoursEnd}`,
          emergencyContact: formData.emergencyContact || 'Not provided',
          topQuestions: formData.topQuestions || 'Not provided',
          services: formData.services || 'Not provided',
          prices: formData.prices || 'Not provided',
          policies: formData.policies || 'Not provided',
          websiteUrl: formData.websiteUrl || 'Not provided',
          socialMedia: formData.socialMedia || 'Not provided',
          service: 'AI Agent Subscription - Onboarding',
          comment: `Onboarding submission for ${formData.businessName} (${formData.industry})`,
        }),
      })
      if (!response.ok) throw new Error('Failed')
      clearSaved()
      setSubmitStatus('success')
      setTimeout(() => router.push('/onboarding/thank-you'), 1500)
    } catch {
      setSubmitStatus('error')
    }
  }

  const CheckboxBtn = ({ label, checked, onClick }: { label: string; checked: boolean; onClick: () => void }) => (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition ${
        checked
          ? 'border-primary-500 bg-primary-50 text-primary-700'
          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
      }`}
    >
      {checked ? <CheckCircle className="w-4 h-4 text-primary-500" /> : <div className="w-4 h-4 rounded border border-slate-300" />}
      {label}
    </button>
  )

  if (!hydrated) return <div className="min-h-screen bg-slate-50" />

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
            <a href="/services/ai-studio" className="text-slate-600 hover:text-primary-600 transition">AI Studio</a>
            <a href="/services/connect" className="text-slate-600 hover:text-primary-600 transition">Connect</a>
            <Link href="/plans" className="text-slate-600 hover:text-primary-600 transition">Plans</Link>
            <Link href="/blog" className="text-slate-600 hover:text-primary-600 transition">Blog</Link>
            <a href="/#contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition font-medium">Contact</a>
          </div>
          <button className="md:hidden p-2 text-slate-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 px-6">
            <a href="/#services" className="block py-2 text-slate-600" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="/services/ai-studio" className="block py-2 text-slate-600" onClick={() => setMobileMenuOpen(false)}>AI Studio</a>
            <a href="/services/connect" className="block py-2 text-slate-600" onClick={() => setMobileMenuOpen(false)}>Connect</a>
            <Link href="/plans" className="block py-2 text-slate-600" onClick={() => setMobileMenuOpen(false)}>Plans</Link>
            <Link href="/blog" className="block py-2 text-slate-600" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <a href="/#contact" className="block py-2 text-slate-600" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white/90 text-sm">14-Day Free Trial — No Credit Card Required</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Set Up Your AI Agent</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Tell us about your business and we&apos;ll configure a custom AI assistant for you. Takes about 5 minutes.
          </p>
        </div>
      </section>

      {/* Step Indicator */}
      <div className="max-w-4xl mx-auto px-6 -mt-4">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 md:p-6">
          <div className="flex items-center justify-between mb-3">
            {STEPS.map((s, i) => (
              <div key={s.num} className="flex items-center gap-2">
                <div className={`flex items-center gap-2 ${formData.step >= s.num ? 'text-primary-600' : 'text-slate-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    formData.step > s.num ? 'bg-primary-500 text-white' :
                    formData.step === s.num ? 'bg-primary-100 text-primary-600 border-2 border-primary-500' :
                    'bg-slate-100 text-slate-400'
                  }`}>
                    {formData.step > s.num ? <CheckCircle className="w-4 h-4" /> : s.num}
                  </div>
                  <span className="hidden sm:block text-sm font-medium">{s.label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`hidden sm:block w-12 md:w-20 h-0.5 mx-2 ${formData.step > s.num ? 'bg-primary-500' : 'bg-slate-200'}`} />
                )}
              </div>
            ))}
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(formData.step / 4) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6 md:p-8">
              {/* Success state */}
              {submitStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-3">Application Submitted!</h2>
                  <p className="text-slate-600 text-lg mb-2">We&apos;ll be in touch within 24 hours.</p>
                  <p className="text-slate-500">Redirecting you to the confirmation page...</p>
                </div>
              ) : (
                <>
                  {/* Step 1 */}
                  {formData.step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                        <Building2 className="w-7 h-7 text-primary-500" />
                        Business Information
                      </h2>
                      <p className="text-slate-500">Tell us about your business so we can customize your AI agent.</p>

                      <InputField label="Business Name" icon={Building} required>
                        <input type="text" value={formData.businessName} onChange={e => update({ businessName: e.target.value })} placeholder="e.g. Smith's Plumbing" className={inputClass} />
                      </InputField>

                      <InputField label="Industry" icon={Briefcase} required>
                        <div className="relative">
                          <select value={formData.industry} onChange={e => update({ industry: e.target.value })} className={selectClass}>
                            <option value="">Select your industry</option>
                            {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                        </div>
                      </InputField>

                      <InputField label="Business Type" icon={Hash} required>
                        <div className="flex gap-3 flex-wrap">
                          {BUSINESS_TYPES.map(bt => (
                            <button key={bt} type="button" onClick={() => update({ businessType: bt })}
                              className={`px-4 py-2.5 rounded-xl border text-sm font-medium transition ${
                                formData.businessType === bt
                                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                              }`}
                            >{bt}</button>
                          ))}
                        </div>
                      </InputField>

                      <InputField label="Owner Name" icon={User} required>
                        <input type="text" value={formData.ownerName} onChange={e => update({ ownerName: e.target.value })} placeholder="Your full name" className={inputClass} />
                      </InputField>

                      <InputField label="Email" icon={Mail} required>
                        <input type="email" value={formData.email} onChange={e => update({ email: e.target.value })} placeholder="you@business.com" className={inputClass} />
                      </InputField>

                      <InputField label="Phone Number" icon={Phone} required>
                        <input type="tel" value={formData.phone} onChange={e => update({ phone: e.target.value })} placeholder="(555) 123-4567" className={inputClass} />
                      </InputField>
                    </div>
                  )}

                  {/* Step 2 */}
                  {formData.step === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                        <Bot className="w-7 h-7 text-primary-500" />
                        AI Agent Preferences
                      </h2>
                      <p className="text-slate-500">Choose how your AI agent should communicate and what it should handle.</p>

                      <InputField label="Messaging Channels" icon={MessageSquare} required>
                        <p className="text-sm text-slate-400 mb-2">Where should your AI agent be available?</p>
                        <div className="flex flex-wrap gap-3">
                          {CHANNELS.map(ch => (
                            <CheckboxBtn key={ch} label={ch} checked={formData.channels.includes(ch)} onClick={() => toggleArray('channels', ch)} />
                          ))}
                        </div>
                      </InputField>

                      <InputField label="AI Capabilities" icon={Bot} required>
                        <p className="text-sm text-slate-400 mb-2">What should your AI agent handle?</p>
                        <div className="flex flex-wrap gap-3">
                          {CAPABILITIES.map(cap => (
                            <CheckboxBtn key={cap} label={cap} checked={formData.capabilities.includes(cap)} onClick={() => toggleArray('capabilities', cap)} />
                          ))}
                        </div>
                      </InputField>

                      <InputField label="Business Hours" icon={Clock}>
                        <p className="text-sm text-slate-400 mb-2">When should the AI escalate to a human?</p>
                        <div className="flex items-center gap-3 flex-wrap">
                          <input type="time" value={formData.businessHoursStart} onChange={e => update({ businessHoursStart: e.target.value })} className={inputClass + " w-auto"} />
                          <span className="text-slate-500 font-medium">to</span>
                          <input type="time" value={formData.businessHoursEnd} onChange={e => update({ businessHoursEnd: e.target.value })} className={inputClass + " w-auto"} />
                        </div>
                      </InputField>

                      <InputField label="Emergency Contact" icon={Phone}>
                        <input type="tel" value={formData.emergencyContact} onChange={e => update({ emergencyContact: e.target.value })} placeholder="Number for urgent escalations (optional)" className={inputClass} />
                      </InputField>
                    </div>
                  )}

                  {/* Step 3 */}
                  {formData.step === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                        <BookOpen className="w-7 h-7 text-primary-500" />
                        Knowledge Base
                      </h2>
                      <p className="text-slate-500">The more you share, the smarter your AI agent will be. All fields optional.</p>

                      <InputField label="Top 5 Customer Questions" icon={MessageSquare}>
                        <p className="text-sm text-slate-400 mb-2">What questions do customers ask most often?</p>
                        <textarea value={formData.topQuestions} onChange={e => update({ topQuestions: e.target.value })} rows={4} placeholder="1. What are your hours?&#10;2. How much does X cost?&#10;3. Do you offer free estimates?&#10;4. What areas do you serve?&#10;5. How do I book an appointment?" className={textareaClass} />
                      </InputField>

                      <InputField label="Services Offered" icon={Briefcase}>
                        <textarea value={formData.services} onChange={e => update({ services: e.target.value })} rows={4} placeholder="List your main services, packages, or products..." className={textareaClass} />
                      </InputField>

                      <InputField label="Pricing" icon={Hash}>
                        <textarea value={formData.prices} onChange={e => update({ prices: e.target.value })} rows={3} placeholder="Your pricing structure, starting prices, or starting-at ranges..." className={textareaClass} />
                      </InputField>

                      <InputField label="Special Policies" icon={Building}>
                        <textarea value={formData.policies} onChange={e => update({ policies: e.target.value })} rows={3} placeholder="Return policy, cancellation policy, warranty, etc." className={textareaClass} />
                      </InputField>

                      <InputField label="Website URL" icon={Globe}>
                        <input type="url" value={formData.websiteUrl} onChange={e => update({ websiteUrl: e.target.value })} placeholder="https://yourbusiness.com" className={inputClass} />
                      </InputField>

                      <InputField label="Social Media Links" icon={MessageSquare}>
                        <input type="text" value={formData.socialMedia} onChange={e => update({ socialMedia: e.target.value })} placeholder="Facebook, Instagram, Google Business, etc." className={inputClass} />
                      </InputField>

                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <p className="text-sm text-blue-700">
                          <strong>Logo upload coming soon!</strong> You&apos;ll be able to upload your logo after submitting. We&apos;ll add it to your AI agent&apos;s profile.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Step 4 */}
                  {formData.step === 4 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                        <Send className="w-7 h-7 text-primary-500" />
                        Review & Submit
                      </h2>
                      <p className="text-slate-500">Please review your information before starting your free trial.</p>

                      {/* Business Info Summary */}
                      <div className="bg-slate-50 rounded-xl p-5 space-y-2">
                        <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><Building2 className="w-4 h-4 text-primary-500" /> Business Information</h3>
                        <div className="grid sm:grid-cols-2 gap-2 text-sm">
                          <div><span className="text-slate-500">Business:</span> <span className="font-medium text-slate-700">{formData.businessName}</span></div>
                          <div><span className="text-slate-500">Industry:</span> <span className="font-medium text-slate-700">{formData.industry}</span></div>
                          <div><span className="text-slate-500">Type:</span> <span className="font-medium text-slate-700">{formData.businessType}</span></div>
                          <div><span className="text-slate-500">Owner:</span> <span className="font-medium text-slate-700">{formData.ownerName}</span></div>
                          <div><span className="text-slate-500">Email:</span> <span className="font-medium text-slate-700">{formData.email}</span></div>
                          <div><span className="text-slate-500">Phone:</span> <span className="font-medium text-slate-700">{formData.phone}</span></div>
                        </div>
                      </div>

                      {/* AI Preferences Summary */}
                      <div className="bg-slate-50 rounded-xl p-5 space-y-2">
                        <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><Bot className="w-4 h-4 text-primary-500" /> AI Agent Setup</h3>
                        <div className="grid sm:grid-cols-2 gap-2 text-sm">
                          <div><span className="text-slate-500">Channels:</span> <span className="font-medium text-slate-700">{formData.channels.join(', ')}</span></div>
                          <div><span className="text-slate-500">Hours:</span> <span className="font-medium text-slate-700">{formData.businessHoursStart} - {formData.businessHoursEnd}</span></div>
                          <div className="sm:col-span-2"><span className="text-slate-500">Capabilities:</span> <span className="font-medium text-slate-700">{formData.capabilities.join(', ')}</span></div>
                          {formData.emergencyContact && (
                            <div><span className="text-slate-500">Emergency:</span> <span className="font-medium text-slate-700">{formData.emergencyContact}</span></div>
                          )}
                        </div>
                      </div>

                      {/* Knowledge Base Summary */}
                      {(formData.topQuestions || formData.services || formData.prices || formData.websiteUrl) && (
                        <div className="bg-slate-50 rounded-xl p-5 space-y-2">
                          <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><BookOpen className="w-4 h-4 text-primary-500" /> Knowledge Base</h3>
                          {formData.topQuestions && (
                            <div className="text-sm"><span className="text-slate-500">Customer Questions:</span> <span className="font-medium text-slate-700 whitespace-pre-line">{formData.topQuestions.substring(0, 200)}{formData.topQuestions.length > 200 ? '...' : ''}</span></div>
                          )}
                          {formData.services && (
                            <div className="text-sm"><span className="text-slate-500">Services:</span> <span className="font-medium text-slate-700">{formData.services.substring(0, 150)}{formData.services.length > 150 ? '...' : ''}</span></div>
                          )}
                          {formData.websiteUrl && (
                            <div className="text-sm"><span className="text-slate-500">Website:</span> <span className="font-medium text-primary-600">{formData.websiteUrl}</span></div>
                          )}
                        </div>
                      )}

                      {/* Agreements */}
                      <div className="space-y-3 pt-2">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input type="checkbox" checked={formData.agreeTerms} onChange={e => update({ agreeTerms: e.target.checked })} className="mt-1 w-5 h-5 rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                          <span className="text-sm text-slate-600">
                            I agree to the <a href="#" className="text-primary-600 hover:underline font-medium">Terms of Service</a> and understand my 14-day free trial will begin after configuration.
                          </span>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input type="checkbox" checked={formData.agreePrivacy} onChange={e => update({ agreePrivacy: e.target.checked })} className="mt-1 w-5 h-5 rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                          <span className="text-sm text-slate-600">
                            I agree to the <a href="#" className="text-primary-600 hover:underline font-medium">Privacy Policy</a> and consent to NexaFlow AI processing my business information.
                          </span>
                        </label>
                      </div>

                      {submitStatus === 'error' && (
                        <div className="bg-red-50 text-red-600 text-sm p-4 rounded-xl border border-red-200">
                          Something went wrong. Please try again or email us at <a href="mailto:info@nexaflow360.com" className="underline">info@nexaflow360.com</a>.
                        </div>
                      )}
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div>
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
                      <button
                        onClick={formData.step === 1 ? () => router.push('/plans') : back}
                        className="flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium transition"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        {formData.step === 1 ? 'Back to Plans' : 'Previous'}
                      </button>
                      {formData.step < 4 ? (
                        <button
                          onClick={next}
                          disabled={!canProceed()}
                          className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          Next <ArrowRight className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          onClick={handleSubmit}
                          disabled={!canProceed() || submitStatus === 'loading'}
                          className="flex items-center gap-2 bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed shadow-lg"
                        >
                          {submitStatus === 'loading' ? (
                            <><span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> Submitting...</>
                          ) : (
                            <>Start My 14-Day Free Trial <ArrowRight className="w-5 h-5" /></>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* What happens next */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary-500" />
                  What happens next?
                </h3>
                <div className="space-y-4">
                  {nextSteps.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{item.step}</p>
                        <p className="text-slate-500 text-xs">{item.detail}</p>
                        <p className="text-primary-600 text-xs font-medium mt-0.5">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Help */}
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-100">
                <h3 className="font-bold text-slate-800 mb-2">Questions?</h3>
                <p className="text-sm text-slate-600 mb-3">Need help filling this out? We&apos;re here to assist.</p>
                <a href="tel:+13239171129" className="flex items-center gap-2 text-primary-600 text-sm font-medium mb-2 hover:underline">
                  <Phone className="w-4 h-4" /> (323) 917-1129
                </a>
                <a href="mailto:info@nexaflow360.com" className="flex items-center gap-2 text-primary-600 text-sm font-medium hover:underline">
                  <Mail className="w-4 h-4" /> info@nexaflow360.com
                </a>
              </div>

              {/* Progress saved indicator */}
              <div className="text-center text-xs text-slate-400">
                <p>✨ Your progress is saved automatically</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-10 px-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white">NexaFlow AI</span>
          </Link>
          <p className="text-slate-500 text-sm">© 2026 NexaFlow AI Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
