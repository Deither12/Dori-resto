const LINKS = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter',  href: '#' },
  { label: 'Youtube',  href: '#' },
]
const NAV = ['Menu', 'Fine Dining', 'About', 'Contact']

export default function Footer() {
  const go = (href) => {
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
  }

  return (
    <footer id="footer" className="bg-ink border-t border-gold/10">

      {/* Main */}
      <div className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col items-center gap-8">

        {/* Logo */}
        <div className="w-14 h-14 rounded-full border-2 border-gold flex items-center justify-center bg-ink">
          <div className="text-center leading-none">
            <div className="font-display font-bold text-gold text-sm tracking-wider">DORI</div>
            <div className="font-display text-gold text-[10px] tracking-widest">SUSHI</div>
          </div>
        </div>

        {/* Social row */}
        <div className="flex gap-6">
          {LINKS.map(l => (
            <a key={l.label} href={l.href}
               className="font-sans text-2xs tracking-widest2 uppercase text-muted hover:text-gold transition-colors duration-300">
              {l.label}
            </a>
          ))}
        </div>

        {/* Nav row */}
        <div className="flex flex-wrap justify-center gap-6">
          {NAV.map(n => (
            <button key={n}
              onClick={() => go(`#${n.toLowerCase().replace(' ','-')}`)}
              className="font-sans text-2xs tracking-widest2 uppercase text-muted hover:text-gold transition-colors duration-300">
              {n}
            </button>
          ))}
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/10 py-5">
        <p className="text-center font-sans text-2xs text-muted/50 tracking-wide">
          © 2025 Dori Sushi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
