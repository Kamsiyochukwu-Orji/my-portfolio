const skills = [
  {
    category: 'Core',
    icon: '⚛️',
    items: [
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 78 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML & CSS', level: 90 },
    ]
  },
  {
    category: 'Frameworks & Tools',
    icon: '🛠',
    items: [
      { name: 'Vue 3', level: 70 },
      { name: 'Vite', level: 80 },
      { name: 'Tailwind CSS', level: 82 },
      { name: 'React Router', level: 80 },
    ]
  },
  {
    category: 'Backend & DevOps',
    icon: '🔧',
    items: [
      { name: 'Convex', level: 70 },
      { name: 'Clerk Auth', level: 72 },
      { name: 'Git & GitHub', level: 80 },
      { name: 'Vercel', level: 78 },
    ]
  },
]

const techBadges = [
  'React', 'TypeScript', 'Vue 3', 'Vite', 'Tailwind CSS',
  'Convex', 'Clerk', 'Git', 'GitHub', 'Vercel',
  'HTML5', 'CSS3', 'JavaScript', 'React Router', 'REST APIs',
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="section-tag justify-center">
            <span className="w-8 h-px bg-sky-400" />
            Skills & Technologies
            <span className="w-8 h-px bg-sky-400" />
          </p>
          <h2 className="section-title">My Technical Stack</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Tools and technologies I work with regularly — built through real projects, not just tutorials.
          </p>
        </div>

        {/* Skill cards with progress bars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skills.map(group => (
            <div key={group.category} className="card hover:shadow-lg hover:shadow-sky-500/5">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-display font-semibold text-white text-lg">{group.category}</h3>
              </div>
              <div className="space-y-4">
                {group.items.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-sky-400 text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-sky-500 to-blue-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badges marquee */}
        <div className="relative overflow-hidden py-4">
          <div className="flex gap-3 flex-wrap justify-center">
            {techBadges.map(tech => (
              <span key={tech}
                className="px-4 py-2 bg-gray-900 border border-gray-800 hover:border-sky-500/50 text-gray-300 hover:text-sky-400 text-sm font-mono rounded-full transition-all duration-200 cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Currently learning */}
        <div className="mt-12 bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
            <h3 className="font-display font-semibold text-white">Currently Exploring</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Testing (Vitest, Playwright)', 'Next.js', 'Node.js', 'CI/CD Pipelines', 'Docker basics'].map(item => (
              <span key={item} className="px-3 py-1.5 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm rounded-lg">
                📖 {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
