import { Zap, Globe, Brain, BarChart3, MessageSquare, Calendar, CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">NexaFlow AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-600 hover:text-primary-600 transition">Services</a>
            <a href="#features" className="text-slate-600 hover:text-primary-600 transition">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-primary-600 transition">Pricing</a>
            <a href="#contact" className="bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition font-medium">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white/90 text-sm">AI-Powered Solutions for Small Businesses</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Next-Gen AI.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-accent-300">Seamless Flow.</span>
          </h1>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto mb-4 italic">
            "NexaFlow helps small businesses flow into the future with AI-powered automation."
          </p>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Automate tasks, build stunning websites, and get your own AI assistant. 
            Save 5-10 hours every week with tools built for small businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition flex items-center justify-center gap-2">
              Free Consultation <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#services" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition">
              See Services
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
            <div>
              <div className="text-4xl font-bold text-white">5-10</div>
              <div className="text-slate-400 text-sm">Hours Saved/Week</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">24/7</div>
              <div className="text-slate-400 text-sm">AI Availability</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">4</div>
              <div className="text-slate-400 text-sm">Core Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Everything you need to modernize your business and save time</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg card-hover border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">OpenClaw AI Assistant</h3>
              <p className="text-slate-600 mb-4">Your personal AI assistant that handles messaging, tasks, calendars, and workflows 24/7.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Multi-channel messaging</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Task & reminder management</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Custom AI agents</li>
              </ul>
              <div className="mt-6 text-2xl font-bold text-primary-600">From $500</div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg card-hover border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Website Development</h3>
              <p className="text-slate-600 mb-4">Modern, mobile-responsive websites that help customers find you and convert visitors.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> SEO optimized</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Mobile responsive</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Booking systems</li>
              </ul>
              <div className="mt-6 text-2xl font-bold text-primary-600">From $500</div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg card-hover border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Excel AI Automation</h3>
              <p className="text-slate-600 mb-4">Transform spreadsheets into smart tools that automate calculations and save hours.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> AI-powered formulas</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Automated reports</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Data dashboards</li>
              </ul>
              <div className="mt-6 text-2xl font-bold text-primary-600">From $300</div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg card-hover border border-slate-100">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Data Analysis</h3>
              <p className="text-slate-600 mb-4">Turn your business data into actionable insights with professional analysis.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Visual dashboards</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Trend analysis</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Recommendations</li>
              </ul>
              <div className="mt-6 text-2xl font-bold text-primary-600">From $400</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Why NexaFlow AI?</h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto mb-2 italic font-medium">
              "NexaFlow helps small businesses flow into the future with AI-powered automation."
            </p>
            <p className="text-slate-600 max-w-3xl mx-auto">
              The name NexaFlow combines <strong>NEXA</strong> (next + nexus) — representing the next generation 
              and the connection point between businesses and AI — with <strong>FLOW</strong> — representing 
              smooth processes, automation, and seamless workflows.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Save Time</h3>
              <p className="text-slate-600">Automate repetitive tasks and focus on what matters - growing your business.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-10 h-10 text-accent-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">24/7 Availability</h3>
              <p className="text-slate-600">Your AI assistant never sleeps. Respond to customers anytime, anywhere.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Easy Setup</h3>
              <p className="text-slate-600">We handle everything. No technical knowledge required on your end.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Simple Pricing</h2>
            <p className="text-xl text-slate-600">Transparent pricing with no hidden fees</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Starter Pack</h3>
              <p className="text-slate-600 mb-6">Perfect for getting started</p>
              <div className="text-4xl font-bold text-slate-800 mb-6">$850</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-600"><CheckCircle className="w-5 h-5 text-green-500" /> Landing Page Website</li>
                <li className="flex items-center gap-2 text-slate-600"><CheckCircle className="w-5 h-5 text-green-500" /> OpenClaw Basic Setup</li>
                <li className="flex items-center gap-2 text-slate-600"><CheckCircle className="w-5 h-5 text-green-500" /> 1 Month Support</li>
              </ul>
              <a href="https://buy.stripe.com/fZudR3aJ34Ys8qfbD8eME00" target="_blank" rel="noopener noreferrer" className="block text-center bg-slate-100 text-slate-800 px-6 py-3 rounded-full font-semibold hover:bg-slate-200 transition">Buy Now - $850</a>
            </div>

            {/* Growth - Featured */}
            <div className="bg-gradient-to-b from-primary-600 to-primary-700 rounded-3xl p-8 shadow-2xl transform scale-105">
              <div className="text-primary-200 text-sm font-semibold mb-2">MOST POPULAR</div>
              <h3 className="text-xl font-bold text-white mb-2">Growth Pack</h3>
              <p className="text-primary-200 mb-6">Everything you need to grow</p>
              <div className="text-4xl font-bold text-white mb-6">$2,300</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-white/90"><CheckCircle className="w-5 h-5 text-green-400" /> Professional Website (5-10 pages)</li>
                <li className="flex items-center gap-2 text-white/90"><CheckCircle className="w-5 h-5 text-green-400" /> OpenClaw Pro Setup</li>
                <li className="flex items-center gap-2 text-white/90"><CheckCircle className="w-5 h-5 text-green-400" /> Excel Automation</li>
                <li className="flex items-center gap-2 text-white/90"><CheckCircle className="w-5 h-5 text-green-400" /> 3 Months Support</li>
              </ul>
              <a href="https://buy.stripe.com/8x29ANeZj0Ic8qf0YueME01" target="_blank" rel="noopener noreferrer" className="block text-center bg-white text-primary-700 px-6 py-3 rounded-full font-semibold hover:bg-slate-100 transition">Buy Now - $2,300</a>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Full Business</h3>
              <p className="text-slate-600 mb-6">Complete AI transformation</p>
              <div className="text-4xl font-bold text-slate-800 mb-6">$3,200+</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-600"><CheckCircle className="w-5 h-5 text-green-500" /> All Services Included</li>
                <li className="flex items-center gap-2 text-slate-600"><CheckCircle className="w-5 h-5 text-green-500" /> Custom AI Agents</li>
                <li className="flex items-center gap-2 text-slate-600"><CheckCircle className="w-5 h-5 text-green-500" /> Priority Support</li>
                <li className="flex items-center gap-2 text-slate-600"><CheckCircle className="w-5 h-5 text-green-500" /> Ongoing Maintenance</li>
              </ul>
              <a href="https://buy.stripe.com/fZu9AN6sNbmQ9uj0YueME02" target="_blank" rel="noopener noreferrer" className="block text-center bg-slate-100 text-slate-800 px-6 py-3 rounded-full font-semibold hover:bg-slate-200 transition">Buy Now - $3,200+</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-300 mb-10">Schedule a free 15-minute consultation and see how AI can save you hours every week.</p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-xl mx-auto">
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50" />
              <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50" />
              <input type="tel" placeholder="Phone Number" className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50" />
              <select className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/50">
                <option value="" className="text-slate-800">Select Service</option>
                <option value="openclaw" className="text-slate-800">OpenClaw AI Assistant</option>
                <option value="website" className="text-slate-800">Website Development</option>
                <option value="excel" className="text-slate-800">Excel Automation</option>
                <option value="data" className="text-slate-800">Data Analysis</option>
                <option value="bundle" className="text-slate-800">Bundle Package</option>
              </select>
              <button type="submit" className="w-full bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition">
                Get Free Consultation
              </button>
            </form>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-white/80">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition">
              <Phone className="w-5 h-5" /> [Your Phone]
            </a>
            <a href="mailto:hello@nexaflow.ai" className="flex items-center gap-2 hover:text-white transition">
              <Mail className="w-5 h-5" /> hello@nexaflow.ai
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
