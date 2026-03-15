import { useState, useRef, useEffect } from 'react'

const EVENTS = [
  {
    id: 1,
    price: '$500',
    title: 'Fine Dining',
    bullets: ['Bottle of Champagne', 'Fine Sushi Food For 2', 'Dessert'],
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop',
    flip: false,
  },
  {
    id: 2,
    price: '$1000',
    title: 'Gold Dining',
    bullets: ['Bottle of Champagne', 'Special Menu Sushi For 2', 'Dessert'],
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80&auto=format&fit=crop',
    flip: true,
  },
  {
    id: 3,
    price: '$1500',
    title: 'Royalty Dinning',
    bullets: ['Bottle of Luxury Champagne', 'Special Menu Sushi For 2', 'Royal Dessert'],
    img: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&q=80&auto=format&fit=crop',
    flip: false,
  },
]

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function DiningEvents() {
  const [activeTab, setActiveTab] = useState('Private Events')
  const headerRef = useReveal()

  return (
    <section id="events" className="py-24 bg-ink">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-4">
          <span className="eyebrow">Premium</span>
          <h2 className="section-title mt-1">Dining Events</h2>
          <div className="gold-divider" />
          <p className="text-sm text-muted mt-3 max-w-sm mx-auto leading-relaxed">
            The private dining areas for your special day with your important people.
          </p>
        </div>

        {/* Tab toggle */}
        <div className="flex justify-center gap-3 mt-8 mb-12">
          {['Private Events', 'Corporate Events'].map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-6 py-2.5 font-sans text-2xs tracking-widest2 uppercase rounded-sm border transition-all duration-300
                ${activeTab === t
                  ? 'bg-gold text-ink border-gold font-semibold'
                  : 'text-muted border-muted/30 hover:border-gold/50 hover:text-gold'}`}
            >
              {t}
            </button>
          ))}
        </div>

      </div>

      {/* Event rows — full-width, outside container for edge-to-edge */}
      <div className="flex flex-col">
        {EVENTS.map((ev) => (
          <EventRow key={ev.id} ev={ev} />
        ))}
      </div>
    </section>
  )
}

function EventRow({ ev }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="relative overflow-hidden transition-opacity duration-700"
      style={{ height: '260px', opacity: visible ? 1 : 0 }}
    >
      {/* Full-width image */}
      <img
        src={ev.img}
        alt={ev.title}
        className="absolute inset-0 w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />

      {/* Directional dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: ev.flip
            ? 'linear-gradient(to left, rgba(10,8,0,0.92) 40%, rgba(10,8,0,0.35) 100%)'
            : 'linear-gradient(to right, rgba(10,8,0,0.92) 40%, rgba(10,8,0,0.35) 100%)',
        }}
      />

      {/* Text content */}
      <div
        className={`absolute inset-0 flex items-center px-10 md:px-20
                    ${ev.flip ? 'justify-end' : 'justify-start'}`}
      >
        <div className={ev.flip ? 'text-right' : 'text-left'}>
          <div
            className="font-display font-bold text-parchment leading-tight mb-3"
            style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.6rem)' }}
          >
            <span className="text-gold">{ev.price}</span>{' '}
            {ev.title}
          </div>
          <ul className={`flex flex-col gap-1.5 ${ev.flip ? 'items-end' : 'items-start'}`}>
            {ev.bullets.map(b => (
              <li key={b} className={`text-sm text-cream/70 flex items-center gap-2 ${ev.flip ? 'flex-row-reverse' : ''}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}