'use client'

import { Zap, Camera, Bug, FileText, Video, Layout, CheckCircle, ArrowRight, Sparkles, Upload, Cpu } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const FORMSPREE_FORM_ID = 'mykdrobb'

export default function AIStudioPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...formData, service: 'AI Studio', comment: 'Interested in AI Studio tools' }),
      })
      if (!response.ok) throw new Error('Failed')
      setStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '' })
    } catch {
      setStatus('error')
    }
  }

  const tools = [
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Screenshot to Code",
      desc: "Convert any UI screenshot into clean HTML/CSS/JS, React, Vue, or Tailwind code instantly. Just upload an image and get production-ready code.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      tags: ["HTML", "React", "Vue", "Tailwind"],
    },
    {
      icon: <Bug className="w-6 h-6" />,
      title: "Visual Debugger",
      desc: "Upload a screenshot and let AI analyze it for UI bugs, layout issues, accessibility problems, and design inconsistencies.",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      tags: ["Bug Detection", "A11y", "Layout"],
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Analyzer",
      desc: "Extract insights from any document with smart analysis modes — summarize content, extract key data, review contracts, or process invoices.",
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      tags: ["Summary", "Extract", "Contract", "Invoice"],
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Analyzer",
      desc: "Analyze video content with multiple modes — describe scenes, track objects, detect scene changes, and extract on-screen text.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      tags: ["Describe", "Track", "Scenes", "OCR"],
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Landing Page Generator",
      desc: "Generate complete, professional landing pages from your business info. Enter your details and get a ready-to-deploy page in seconds.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      tags: ["Auto-Generate", "Responsive", "SEO"],
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
            <Link href="/services/ai-call-center" className="text-slate-600 hover:text-primary-600 transition">AI Call Center</Link>
            <span className="text-primary-600 font-semibold">AI Studio</span>
            <Link href="/services/connect" className="text-slate-600 hover:text-primary-600 transition">Connect</Link>
            <a href="#contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition font-medium">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-white/90 text-sm">5 AI-Powered Creative Tools</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI Studio.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300">Your Creative AI Toolkit.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Five powerful AI tools to convert screenshots to code, debug UIs, analyze documents &amp; videos, and generate landing pages — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://studio.nexaflow360.com" target="_blank" rel="noopener noreferrer" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition text-lg">
              Launch AI Studio <ArrowRight className="w-5 h-5 inline ml-1" />
            </a>
            <a href="#tools" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition text-lg">
              Explore Tools
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-white/70 text-sm">
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> No signup required</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> Instant results</div>
            <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-400" /> 100% free to try</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "5", label: "AI Tools" },
            { value: "<10s", label: "Average Result" },
            { value: "4+", label: "Code Formats" },
            { value: "100%", label: "Browser-Based" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold text-primary-600">{s.value}</p>
              <p className="text-slate-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools / Features */}
      <section id="tools" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">5 Powerful AI Tools</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">Everything you need to design, build, analyze, and create — powered by cutting-edge AI.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary-300 hover:shadow-lg transition">
                <div className={`w-12 h-12 bg-gradient-to-br ${tool.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  {tool.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{tool.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{tool.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <span key={tag} className={`text-xs px-2.5 py-1 rounded-full ${tool.bgColor} ${tool.textColor} font-medium`}>
                      {tag}
                    </span>
                  ))}
                </div>
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
            <p className="text-lg text-slate-500">From upload to results in 3 simple steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", icon: <Upload className="w-7 h-7" />, title: "Upload Your File", desc: "Upload a screenshot, document, or video. Supports PNG, JPG, PDF, MP4, and more.", time: "~5 sec" },
              { step: "2", icon: <Cpu className="w-7 h-7" />, title: "AI Analysis", desc: "Our AI processes your file using advanced vision and language models tailored to each tool.", time: "~10 sec" },
              { step: "3", icon: <Sparkles className="w-7 h-7" />, title: "Get Results", desc: "Receive clean code, bug reports, document insights, video analysis, or a full landing page.", time: "Instant" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                  {s.icon}
                </div>
                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 text-sm font-bold mx-auto mb-3 -mt-2">Step {s.step}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm mb-2">{s.desc}</p>
                <span className="text-xs text-primary-600 font-medium">{s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Preview */}
      <section id="demo" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">See It In Action</h2>
            <p className="text-lg text-slate-500">A preview of the AI Studio interface</p>
          </div>
          <div className="bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
            {/* Mock browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="flex-1 ml-4">
                <div className="bg-slate-700 rounded-lg px-4 py-1.5 text-slate-400 text-sm max-w-md mx-auto text-center">
                  studio.nexaflow360.com
                </div>
              </div>
            </div>
            {/* Mock app UI */}
            <div className="p-6 md:p-8">
              {/* Tool tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['Screenshot to Code', 'Visual Debugger', 'Document Analyzer', 'Video Analyzer', 'Landing Page'].map((tab, i) => (
                  <div key={tab} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${i === 0 ? 'bg-primary-600 text-white' : 'bg-slate-700 text-slate-400'}`}>
                    {tab}
                  </div>
                ))}
              </div>
              {/* Upload area mockup */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800 rounded-xl p-6 border-2 border-dashed border-slate-600 flex flex-col items-center justify-center min-h-[240px]">
                  <Upload className="w-10 h-10 text-slate-500 mb-3" />
                  <p className="text-slate-400 text-sm mb-1">Drop your screenshot here</p>
                  <p className="text-slate-500 text-xs">PNG, JPG up to 10MB</p>
                  <div className="mt-4 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Browse Files
                  </div>
                </div>
                <div className="bg-slate-800 rounded-xl p-6 flex flex-col min-h-[240px]">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span className="text-slate-300 text-sm font-medium">Generated Code</span>
                  </div>
                  <div className="flex-1 bg-slate-950 rounded-lg p-4 font-mono text-xs text-slate-400 overflow-hidden">
                    <p><span className="text-pink-400">&lt;div</span> <span className="text-yellow-300">class</span>=<span className="text-green-400">&quot;hero-container&quot;</span><span className="text-pink-400">&gt;</span></p>
                    <p className="ml-4"><span className="text-pink-400">&lt;h1</span> <span className="text-yellow-300">class</span>=<span className="text-green-400">&quot;text-4xl font-bold&quot;</span><span className="text-pink-400">&gt;</span></p>
                    <p className="ml-8 text-slate-300">Welcome to Our App</p>
                    <p className="ml-4"><span className="text-pink-400">&lt;/h1&gt;</span></p>
                    <p className="ml-4"><span className="text-pink-400">&lt;p</span> <span className="text-yellow-300">class</span>=<span className="text-green-400">&quot;text-lg text-gray-600&quot;</span><span className="text-pink-400">&gt;</span></p>
                    <p className="ml-8 text-slate-300">Build amazing things.</p>
                    <p className="ml-4"><span className="text-pink-400">&lt;/p&gt;</span></p>
                    <p><span className="text-pink-400">&lt;/div&gt;</span></p>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <span className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded">HTML</span>
                    <span className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded">React</span>
                    <span className="bg-primary-600/20 text-primary-400 text-xs px-2 py-1 rounded border border-primary-600/30">Tailwind</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="https://studio.nexaflow360.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-700 transition text-lg">
              Try It Now — It&apos;s Free <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Who Is AI Studio For?</h2>
            <p className="text-lg text-slate-500">Whether you&apos;re a developer, designer, or business owner — AI Studio accelerates your workflow.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🧑‍💻",
                title: "Developers",
                desc: "Convert UI mockups to code in seconds. Debug visual issues without manual inspection. Generate boilerplate landing pages instantly.",
              },
              {
                emoji: "🎨",
                title: "Designers",
                desc: "Turn your designs into working code. Get AI feedback on visual bugs. Bridge the gap between design and development.",
              },
              {
                emoji: "💼",
                title: "Business Owners",
                desc: "Analyze contracts and invoices. Generate landing pages without coding. Extract insights from documents and video content.",
              },
            ].map((useCase) => (
              <div key={useCase.title} className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100">
                <div className="text-4xl mb-4">{useCase.emoji}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{useCase.title}</h3>
                <p className="text-slate-500 text-sm">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="hero-gradient py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Build with AI?</h2>
          <p className="text-slate-300 mb-8">Try AI Studio free or get in touch for a custom demo.</p>

          <div className="mb-8">
            <a href="https://studio.nexaflow360.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition text-lg">
              Launch AI Studio <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <p className="text-white/60 text-sm mb-6">Or request a personalized walkthrough:</p>

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
                {status === 'loading' ? 'Sending...' : 'Request Demo →'}
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
            <a href="https://studio.nexaflow360.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">AI Studio</a>
            <a href="mailto:info@nexaflow360.com" className="hover:text-white transition">info@nexaflow360.com</a>
            <a href="tel:+132****1129" className="hover:text-white transition">(323) 917-1129</a>
          </div>
          <p className="text-sm">&copy; 2026 NexaFlow AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
