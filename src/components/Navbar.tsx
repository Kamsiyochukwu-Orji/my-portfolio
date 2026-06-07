import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNav(href: string) {
    setActive(href)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-xl text-white">
          Kamy<span className="text-sky-400">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <button key={l.href} onClick={() => handleNav(l.href)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${active === l.href ? 'text-sky-400 bg-sky-500/10' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}>
              {l.label}
            </button>
          ))}
          <a href="https://github.com/Kamsiyochukwu-Orji" target="_blank" rel="noreferrer"
            className="ml-4 btn-primary text-sm py-2">
            GitHub ↗
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMenuOpen(o => !o)}>
          <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
          <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
          <div className="w-5 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 flex flex-col gap-2">
          {links.map(l => (
            <button key={l.href} onClick={() => handleNav(l.href)}
              className="text-left px-4 py-2 text-gray-300 hover:text-sky-400 font-medium rounded-lg hover:bg-gray-800 transition-all">
              {l.label}
            </button>
          ))}
          <a href="https://github.com/Kamsiyochukwu-Orji" target="_blank" rel="noreferrer"
            className="mt-2 btn-primary text-sm justify-center">
            GitHub ↗
          </a>
        </div>
      )}
    </header>
  )
}
