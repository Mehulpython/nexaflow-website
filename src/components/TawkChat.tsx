'use client'

import { useState } from 'react'
import { X, MessageCircle } from 'lucide-react'

export default function TawkChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Send to Formspree
    try {
      const response = await fetch('https://formspree.io/f/mykdrobb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: 'Chat message from NexaFlow website'
        })
      })
      if (response.ok) {
        setSent(true)
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('Error sending message:', error)
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 px-4 py-3">
            <h3 className="text-white font-bold">Chat with NexaFlow</h3>
            <p className="text-white/80 text-sm">We typically reply within minutes</p>
          </div>

          {/* Body */}
          <div className="p-4">
            {sent ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 text-2xl">✓</span>
                </div>
                <p className="text-slate-700 font-medium">Message sent!</p>
                <p className="text-slate-500 text-sm">We'll get back to you soon.</p>
                <button
                  onClick={() => { setSent(false); setIsOpen(false) }}
                  className="mt-4 text-primary-600 text-sm hover:underline"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-primary-500"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-primary-500"
                />
                <textarea
                  placeholder="How can we help?"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-primary-500 resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-2 rounded-lg font-medium hover:bg-primary-700 transition text-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
