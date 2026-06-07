export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="animate-fade-up">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-mono">Available for remote work</span>
          </div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            Building the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              web, one
            </span><br />
            component<br />
            at a time.
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
            I'm <span className="text-white font-semibold">Kamsiyochukwu Orji</span>, a junior frontend developer based in Nigeria. I craft clean, functional web experiences with React and TypeScript.
          </p>

          <div className="flex flex-wrap gap-4">
            <button onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary">
              View My Work ↓
            </button>
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-outline">
              Get In Touch
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-8">
            {[
              { num: '4+', label: 'Projects Built' },
              { num: '2+', label: 'Years Learning' },
              { num: '100%', label: 'Remote Ready' },
            ].map(s => (
              <div key={s.label}>
                <div className="font-display text-2xl font-bold text-sky-400">{s.num}</div>
                <div className="text-gray-500 text-sm mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual card */}
        <div className="hidden md:block animate-fade-in">
          <div className="relative">
            {/* Main card */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 font-mono text-sm shadow-2xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <div className="space-y-1.5">
                <p><span className="text-blue-400">const</span> <span className="text-sky-300">developer</span> <span className="text-gray-500">=</span> {'{'}</p>
                <p className="pl-4"><span className="text-green-400">name</span><span className="text-gray-500">:</span> <span className="text-amber-300">"Kamsiyochukwu"</span><span className="text-gray-500">,</span></p>
                <p className="pl-4"><span className="text-green-400">role</span><span className="text-gray-500">:</span> <span className="text-amber-300">"Frontend Dev"</span><span className="text-gray-500">,</span></p>
                <p className="pl-4"><span className="text-green-400">location</span><span className="text-gray-500">:</span> <span className="text-amber-300">"Nigeria 🇳🇬"</span><span className="text-gray-500">,</span></p>
                <p className="pl-4"><span className="text-green-400">stack</span><span className="text-gray-500">:</span> [</p>
                <p className="pl-8"><span className="text-amber-300">"React"</span><span className="text-gray-500">,</span> <span className="text-amber-300">"TypeScript"</span><span className="text-gray-500">,</span></p>
                <p className="pl-8"><span className="text-amber-300">"Vue"</span><span className="text-gray-500">,</span> <span className="text-amber-300">"Vite"</span><span className="text-gray-500">,</span></p>
                <p className="pl-4">]<span className="text-gray-500">,</span></p>
                <p className="pl-4"><span className="text-green-400">openToWork</span><span className="text-gray-500">:</span> <span className="text-purple-400">true</span></p>
                <p>{'}'}<span className="text-gray-500">;</span></p>
                <p className="mt-3 text-gray-500">{'// Always learning, always building'}</p>
                <p className="flex items-center gap-1">
                  <span className="text-sky-400">console</span>
                  <span className="text-gray-500">.</span>
                  <span className="text-yellow-400">log</span>
                  <span className="text-gray-500">(</span>
                  <span className="text-amber-300">"Let's build something"</span>
                  <span className="text-gray-500">)</span>
                  <span className="inline-block w-2 h-4 bg-sky-400 ml-1 animate-pulse" />
                </p>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-sky-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-sky-500/30">
              React ⚛️
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gray-800 border border-gray-700 text-gray-300 text-xs font-mono px-3 py-1.5 rounded-full">
              TypeScript 💙
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
