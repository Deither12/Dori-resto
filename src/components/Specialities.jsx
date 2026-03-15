import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const TABS = ['Specialties', 'Handmade Sushi', 'Steak', 'White Rice', 'Cocktails', 'Wine', 'Appetizer']

const ITEMS = [
  {
    id: 1, name: 'Dragon Sushi', price: '$50', flip: false,
    desc: 'Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tortor sed imperative ultricies.',
    imgs: [
      'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=700&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=700&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=700&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 2, name: 'Creamy Sushi', price: '$50', flip: true,
    desc: 'Ingredients: Authentic food from our restaurant served with high quality ingredients.',
    imgs: [
      'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=700&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617196034099-3b5c64fcc6c7?w=700&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562802378-063ec186a863?w=700&q=80&auto=format&fit=crop',
    ],
  },
  {
    id: 3, name: 'Roll Salmon Sushi', price: '$50', flip: false,
    desc: 'Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tortor sed imperative.',
    imgs: [
      'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=700&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=700&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=700&q=80&auto=format&fit=crop',
    ],
  },
]

function FallbackImage({ imgs, alt }) {
  const [idx, setIdx] = useState(0)
  return (
    <img
      key={idx}
      src={imgs[idx]}
      alt={alt}
      onError={() => { if (idx < imgs.length - 1) setIdx(idx + 1) }}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      loading="lazy"
    />
  )
}

function SpecialItem({ item, index }) {
  const [ref, visible] = useReveal(0.08)

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Image */}
      <div
        className={`relative rounded-sm overflow-hidden ${item.flip ? 'md:order-2' : 'md:order-1'}`}
        style={{ height: '280px' }}
      >
        <FallbackImage imgs={item.imgs} alt={item.name} />
      </div>

      {/* Text */}
      <div className={item.flip ? 'md:order-1' : 'md:order-2'}>
        <h3 className="font-display font-bold text-2xl text-parchment mb-3">{item.name}</h3>
        <p className="text-sm text-muted leading-relaxed mb-5">{item.desc}</p>
        <p className="font-display font-bold text-3xl text-parchment">{item.price}</p>
      </div>
    </div>
  )
}

export default function Specialities() {
  const [activeTab, setActiveTab] = useState('Specialties')
  const [headerRef, headerVisible] = useReveal()

  return (
    <section id="specialities" className="py-24 bg-deep">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-3 transition-all duration-700"
          style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(28px)' }}
        >
          <span className="eyebrow">Really Food For You</span>
          <h2 className="section-title mt-1">Our Specialities</h2>
          <div className="gold-divider" />
          <p className="text-sm text-muted mt-3 max-w-lg mx-auto leading-relaxed">
            Authentic food from our restaurant served with high quality ingredients.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-14">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`tab-pill ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="flex flex-col gap-16">
          {ITEMS.map((item, i) => (
            <SpecialItem key={item.id} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}