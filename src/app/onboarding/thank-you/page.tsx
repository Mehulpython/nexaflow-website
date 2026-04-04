import { CheckCircle, Clock, Zap, ArrowRight, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export default function ThankYouPage() {
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
            <Link href="/services/ai-studio" className="text-slate-600 hover:text-primary-600 transition">AI Studio</Link>
          </div>
          <Link href="/" className="text-primary-600 font-medium hover:text-primary-700 transition">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-slate-600 mb-12">
            We&apos;ve received your application. Our team will review it and get back to you within 24 hours.
          </p>

          {/* Timeline */}
          <div className="bg-white rounded-3xl shadow-lg border border-slate-200 p-8 text-left mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary-500" />
              What to Expect Next
            </h2>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Application Review', detail: 'We review your business information and requirements.', time: 'Within 24 hours', done: false },
                { step: '2', title: 'AI Agent Configuration', detail: 'We train your AI agent on your services, pricing, and FAQs.', time: 'Within 48 hours', done: false },
                { step: '3', title: 'Testing Period', detail: 'You test your AI agent free for 14 days. No credit card required.', time: '14 days', done: false },
                { step: '4', title: 'Go Live! 🚀', detail: 'Your AI agent starts handling customer inquiries 24/7.', time: 'Launch day', done: false },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-sm">
                      {item.step}
                    </div>
                    {i < 3 && <div className="w-0.5 h-full bg-slate-200 mt-2" />}
                  </div>
                  <div className="pb-6">
                    <p className="font-semibold text-slate-800">{item.title}</p>
                    <p className="text-slate-500 text-sm mt-1">{item.detail}</p>
                    <p className="text-primary-600 text-sm font-medium mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 border border-primary-100 mb-10">
            <h3 className="font-bold text-slate-800 mb-3">Questions?</h3>
            <p className="text-slate-600 text-sm mb-4">
              Reach out anytime — we&apos;re happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@nexaflow360.com" className="flex items-center gap-2 text-primary-600 font-medium hover:underline">
                <Mail className="w-4 h-4" /> info@nexaflow360.com
              </a>
              <a href="tel:+13239171129" className="flex items-center gap-2 text-primary-600 font-medium hover:underline">
                <Phone className="w-4 h-4" /> (323) 917-1129
              </a>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-700 transition"
          >
            Back to Home <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-10 px-6">
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
