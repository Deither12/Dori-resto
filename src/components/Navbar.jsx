import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'Menu',        href: '#specials' },
  { label: 'Fine Dining', href: '#events' },
  { label: 'About',       href: '#story' },
  { label: 'Contact',     href: '#footer' },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [activeLink, setActiveLink] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = document.querySelectorAll('section[id],footer[id]')
      let cur = ''
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) cur = `#${s.id}` })
      setActiveLink(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const go = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-500
      ${scrolled ? 'bg-ink/95 backdrop-blur-md shadow-[0_1px_0_rgba(212,168,67,0.15)]' : 'bg-transparent'}`}>
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => go('#hero')} className="flex-shrink-0 group">
          <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center
                          bg-ink group-hover:bg-gold/10 transition-colors duration-300">
            <div className="text-center leading-none">
              <div className="font-display font-bold text-gold text-[10px] tracking-wider">DORI</div>
              <div className="font-display text-gold text-[8px] tracking-widest">SUSHI</div>
            </div>
          </div>
        </button>

        {/* Desktop center links */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <button onClick={() => go(l.href)}
                className={`nav-link ${activeLink === l.href ? 'active' : ''}`}>
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Reservation button */}
        <button onClick={() => go('#events')}
          className="hidden md:flex items-center gap-2 border border-gold px-5 py-2
                     font-sans text-2xs tracking-widest2 uppercase text-gold rounded-sm
                     transition-all duration-300 hover:bg-gold hover:text-ink">
          Reservation
          <span className="text-gold/50 text-xs">——</span>
        </button>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-[5px] p-1 z-[60]">
          <span className={`w-6 h-[1.5px] bg-gold transition-all duration-300 ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`}/>
          <span className={`w-6 h-[1.5px] bg-gold transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
          <span className={`w-6 h-[1.5px] bg-gold transition-all duration-300 ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`}/>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 top-[72px] bg-ink/97 backdrop-blur-xl z-50 md:hidden
                       flex flex-col items-center justify-center gap-8
                       transition-all duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {NAV_LINKS.map(l => (
          <button key={l.href} onClick={() => go(l.href)}
            className="font-display text-3xl text-cream hover:text-gold transition-colors duration-300">
            {l.label}
          </button>
        ))}
        <button onClick={() => go('#events')} className="btn-outline mt-4">Reservation</button>
      </div>
    </nav>
  )
}
