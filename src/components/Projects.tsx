const projects = [
  {
    title: 'Scissors',
    description: 'A full-stack URL shortener with custom aliases, QR code generation, and click analytics. Built with a production Convex backend and Clerk authentication.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    tags: ['React', 'TypeScript', 'Convex', 'Clerk', 'Vite'],
    github: 'https://github.com/Kamsiyochukwu-Orji',
    live: '#',
    featured: true,
    status: 'Live',
  },
  {
    title: 'DRIP Fashion Store',
    description: 'A bold e-commerce product page for fashion & clothing. Features product listing, search & filter, product detail with size/color picker, and a fully functional cart.',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80',
    tags: ['React', 'TypeScript', 'React Router', 'Context API', 'FakeStoreAPI'],
    github: 'https://github.com/Kamsiyochukwu-Orji',
    live: '#',
    featured: true,
    status: 'Live',
  },
  {
    title: 'Reciply',
    description: 'A recipe discovery app built with Vue 3 and TypeScript. Browse thousands of meals by category, search by name, and view full step-by-step instructions with ingredients.',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80',
    tags: ['Vue 3', 'TypeScript', 'Vue Router', 'TheMealDB API', 'Vite'],
    github: 'https://github.com/Kamsiyochukwu-Orji',
    live: '#',
    featured: false,
    status: 'Live',
  },
  {
    title: 'Converto',
    description: 'A clean currency converter with live exchange rates, 20 supported currencies, rate caching, conversion history saved to localStorage, and a live rates table.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
    tags: ['React', 'TypeScript', 'React Router', 'open.er-api', 'Vite'],
    github: 'https://github.com/Kamsiyochukwu-Orji',
    live: '#',
    featured: false,
    status: 'Live',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-tag justify-center">
            <span className="w-8 h-px bg-sky-400" />
            Portfolio
            <span className="w-8 h-px bg-sky-400" />
          </p>
          <h2 className="section-title">Things I've Built</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Real projects built from scratch — each one taught me something new about development, deployment, and problem solving.
          </p>
        </div>

        {/* Featured projects */}
        <div className="space-y-8 mb-12">
          {projects.filter(p => p.featured).map((project, i) => (
            <div key={project.title}
              className={`group grid md:grid-cols-2 gap-0 bg-gray-900 border border-gray-800 hover:border-sky-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5 ${i % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`relative overflow-hidden aspect-video md:aspect-auto ${i % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                <img src={project.image} alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/50 to-transparent" />
                <span className="absolute top-4 left-4 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-mono px-2 py-1 rounded-full">
                  ● {project.status}
                </span>
              </div>

              {/* Content */}
              <div className={`p-8 flex flex-col justify-center ${i % 2 !== 0 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <span className="text-sky-400 text-xs font-mono mb-2 tracking-widest uppercase">Featured Project</span>
                <h3 className="font-display text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono bg-gray-800 text-gray-300 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline text-sm py-2 px-4">
                    GitHub ↗
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary text-sm py-2 px-4">
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map(project => (
            <div key={project.title}
              className="group card hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-5">
                <img src={project.image} alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                <span className="absolute top-3 right-3 bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-mono px-2 py-1 rounded-full">
                  ● {project.status}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline text-xs py-1.5 px-3">
                  GitHub ↗
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary text-xs py-1.5 px-3">
                  Live ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">More projects on GitHub</p>
          <a href="https://github.com/Kamsiyochukwu-Orji" target="_blank" rel="noreferrer" className="btn-outline">
            View All Repositories ↗
          </a>
        </div>
      </div>
    </section>
  )
}
