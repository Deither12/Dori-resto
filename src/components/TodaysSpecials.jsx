import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const SPECIALS = [
  {
    id: 1, name: 'Tuna Sushi', stars: 5,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ut imperative.',
    imgs: [
      'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 2, name: 'Salmon Sushi', stars: 5,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ut imperative.',
    imgs: [
      'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617196034099-3b5c64fcc6c7?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 3, name: 'Just Sushi', stars: 4,
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ut imperative.',
    imgs: [
      'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600&q=80&auto=format&fit=crop',
    ],
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5 my-3">
      {[1,2,3,4,5].map(i => (
        <span key={i} className={`text-lg ${i <= count ? 'text-gold' : 'text-muted/30'}`}>★</span>
      ))}
    </div>
  )
}

function FallbackImage({ imgs, alt }) {
  const [idx, setIdx] = useState(0)
  return (
    <img
      key={idx}
      src={imgs[idx]}
      alt={alt}
      onError={() => { if (idx < imgs.length - 1) setIdx(i => i + 1) }}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    />
  )
}

function Card({ item, delay }) {
  const [ref, visible] = useReveal()
  const [ordered, setOrdered] = useState(false)

  return (
    <div
      ref={ref}
      className="sushi-card flex flex-col transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transitionDelay: delay,
      }}
    >
      {/* Image */}
      <div className="overflow-hidden flex-shrink-0" style={{ height: '210px' }}>
        <FallbackImage imgs={item.imgs} alt={item.name} />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-xl text-parchment">{item.name}</h3>
        <p className="text-xs text-muted leading-relaxed mt-1 flex-1">{item.desc}</p>
        <Stars count={item.stars} />
        <button
          onClick={() => { setOrdered(true); setTimeout(() => setOrdered(false), 1800) }}
          className={`mt-2 w-full py-3 font-sans text-2xs tracking-widest2 uppercase rounded-sm border transition-all duration-300
            ${ordered
              ? 'bg-gold text-ink border-gold'
              : 'border-gold/40 text-gold hover:bg-gold hover:text-ink hover:border-gold'}`}
        >
          {ordered ? 'Added ✓' : 'Order Now'}
        </button>
      </div>
    </div>
  )
}

export default function TodaysSpecials() {
  const [headerRef, headerVisible] = useReveal()

  return (
    <section id="specials" className="py-24 bg-ink">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-4 transition-all duration-700"
          style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(28px)' }}
        >
          <span className="eyebrow">Special Menu</span>
          <h2 className="section-title mt-1">Today's Special</h2>
          <div className="gold-divider" />
          <p className="text-sm text-muted mt-3 max-w-md mx-auto leading-relaxed">
            Special menu oftenly comes different everyday, this is our special food for today.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {SPECIALS.map((item, i) => (
            <Card key={item.id} item={item} delay={`${i * 100}ms`} />
          ))}
        </div>

      </div>
    </section>
  )
}