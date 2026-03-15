import { useReveal } from '../hooks/useReveal'

const INFO = [
  { icon: '📍', label: 'Lorem Address Location' },
  { icon: '📞', label: 'Phone' },
  { icon: '🕐', label: 'Timing' },
]

export default function ExperienceBanner() {
  const [ref, visible] = useReveal(0.15)

  const go = (href) => {
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80&auto=format&fit=crop"
        alt="Dining experience"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0" style={{ background: 'rgba(10,7,0,0.78)' }}/>
      <div
        ref={ref}
        className="relative z-10 text-center px-6 py-20 max-w-2xl mx-auto transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)' }}
      >
        <h2 className="font-display font-extrabold text-parchment uppercase leading-tight mb-10"
            style={{ fontSize: 'clamp(1.9rem, 4vw, 3.2rem)', letterSpacing: '0.01em' }}>
          We Ready To Have You<br/>The Best Dining Experiences
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {INFO.map(item => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="text-gold text-lg">{item.icon}</span>
              <span className="font-sans text-xs text-cream/60 tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="gold-divider mb-10"/>
        <button onClick={() => go('#events')} className="btn-primary">
          Reserve Table
        </button>
      </div>
    </section>
  )
}