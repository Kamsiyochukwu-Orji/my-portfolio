export default function About() {
  return (
    <section id="about" className="py-28 bg-gray-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            {/* Avatar placeholder with professional look */}
            <div className="relative w-full max-w-sm mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&q=80"
                  alt="Developer at work"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
              </div>

              {/* Floating card — experience */}
              <div className="absolute -bottom-5 -right-5 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 shadow-xl">
                <div className="text-2xl font-display font-bold text-sky-400">2+</div>
                <div className="text-gray-400 text-xs mt-0.5">Years of learning</div>
              </div>

              {/* Floating card — location */}
              <div className="absolute -top-4 -left-4 bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 shadow-xl flex items-center gap-2">
                <span className="text-lg">🇳🇬</span>
                <div>
                  <div className="text-white text-sm font-semibold">Nigeria</div>
                  <div className="text-gray-500 text-xs">Remote Ready</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="section-tag">
              <span className="w-8 h-px bg-sky-400" />
              About Me
            </p>
            <h2 className="section-title mb-6">
              Passionate about crafting{' '}
              <span className="text-sky-400">great web experiences</span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I'm a junior frontend developer based in Nigeria, focused on building clean, functional, and visually appealing web applications. My journey started with curiosity and has grown into a genuine passion for the craft.
              </p>
              <p>
                I primarily work with <span className="text-sky-400 font-medium">React</span> and <span className="text-sky-400 font-medium">TypeScript</span>, and I'm familiar with Vue 3, Convex, Clerk, and deployment via Vercel. I enjoy turning ideas into real products — from URL shorteners to e-commerce stores.
              </p>
              <p>
                I'm actively building my portfolio, contributing to projects, and looking for remote opportunities where I can grow and add value to a team.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: '🎯', label: 'Focus', value: 'Frontend Dev' },
                { icon: '📍', label: 'Location', value: 'Nigeria' },
                { icon: '💼', label: 'Status', value: 'Open to Work' },
                { icon: '🌐', label: 'Work Type', value: 'Remote' },
              ].map(f => (
                <div key={f.label} className="flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-xl p-3">
                  <span className="text-xl">{f.icon}</span>
                  <div>
                    <div className="text-gray-500 text-xs">{f.label}</div>
                    <div className="text-white text-sm font-medium">{f.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              <a href="https://github.com/Kamsiyochukwu-Orji" target="_blank" rel="noreferrer" className="btn-primary">
                GitHub Profile ↗
              </a>
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
