export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-white text-lg">
          Kamy<span className="text-sky-400">.</span>
        </div>
        <p className="text-gray-500 text-sm text-center">
          Built with React, TypeScript & Tailwind CSS · Deployed on Vercel
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/Kamsiyochukwu-Orji" target="_blank" rel="noreferrer"
            className="text-gray-500 hover:text-sky-400 text-sm transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"
            className="text-gray-500 hover:text-sky-400 text-sm transition-colors">
            LinkedIn
          </a>
          <a href="mailto:kamsiyochukwuorji@gmail.com"
            className="text-gray-500 hover:text-sky-400 text-sm transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
