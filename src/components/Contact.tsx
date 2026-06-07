import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Opens mailto with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.open(`mailto:kamsiyochukwuorji@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const contacts = [
    { icon: '📧', label: 'Email', value: 'kamsiyochukwuorji@gmail.com', href: 'mailto:kamsiyochukwuorji@gmail.com' },
    { icon: '🐙', label: 'GitHub', value: 'Kamsiyochukwu-Orji', href: 'https://github.com/Kamsiyochukwu-Orji' },
    { icon: '💼', label: 'LinkedIn', value: 'Connect with me', href: 'https://linkedin.com' },
    { icon: '📍', label: 'Location', value: 'Nigeria — Remote', href: null },
  ]

  return (
    <section id="contact" className="py-28 bg-gray-900/50 relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-tag justify-center">
            <span className="w-8 h-px bg-sky-400" />
            Contact
            <span className="w-8 h-px bg-sky-400" />
          </p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            I'm currently open to remote frontend roles and freelance projects. Have something in mind? Let's talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div>
            <h3 className="font-display text-xl font-semibold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4 mb-8">
              {contacts.map(c => (
                <div key={c.label} className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-sky-500/30 transition-all duration-200">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noreferrer"
                        className="text-white text-sm font-medium hover:text-sky-400 transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-white text-sm font-medium">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability card */}
            <div className="bg-gradient-to-br from-sky-500/10 to-blue-600/10 border border-sky-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Available Now</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                I'm actively looking for remote frontend developer roles. Experienced with React, TypeScript, and the full deployment pipeline from dev to Vercel production.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="card">
            <h3 className="font-display text-xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  placeholder="John Doe"
                  className="w-full bg-gray-800 border border-gray-700 focus:border-sky-500 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  placeholder="john@example.com"
                  className="w-full bg-gray-800 border border-gray-700 focus:border-sky-500 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-1.5">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-gray-800 border border-gray-700 focus:border-sky-500 text-white placeholder-gray-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                />
              </div>
              <button type="submit"
                className={`w-full btn-primary justify-center py-3.5 ${sent ? 'bg-green-500 hover:bg-green-500' : ''}`}>
                {sent ? '✓ Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
