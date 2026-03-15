import { useReveal } from '../hooks/useReveal'

const PHOTOS = [
  'https://images.unsplash.com/photo-1617196034099-3b5c64fcc6c7?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop',
]

export default function OurStory() {
  const [headerRef, headerVisible] = useReveal()
  const [colRef, colVisible] = useReveal()

  return (
    <section id="story" className="py-24 bg-deep">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-12 transition-all duration-700"
          style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(28px)' }}
        >
          <span className="eyebrow">About Us</span>
          <h2 className="section-title mt-1">Our Story</h2>
          <div className="gold-divider"/>
          <p className="text-sm text-muted mt-3 max-w-sm mx-auto leading-relaxed">
            A journey for the unique flavors to our restaurant and the best services.
          </p>
        </div>

        {/* Two columns */}
        <div
          ref={colRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-700"
          style={{ opacity: colVisible ? 1 : 0, transform: colVisible ? 'translateY(0)' : 'translateY(28px)' }}
        >
          {/* Photo collage — 3 images */}
          <div className="grid grid-cols-2 gap-3" style={{ height: '420px' }}>
            {/* Left: tall image spanning both rows */}
            <div className="row-span-2 rounded-sm overflow-hidden bg-surface">
              <img
                src={PHOTOS[0]}
                alt="Sushi platter"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={e => { e.target.src = 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80&auto=format&fit=crop' }}
              />
            </div>
            {/* Right top */}
            <div className="rounded-sm overflow-hidden bg-surface">
              <img
                src={PHOTOS[1]}
                alt="Restaurant"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={e => { e.target.src = 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600&q=80&auto=format&fit=crop' }}
              />
            </div>
            {/* Right bottom */}
            <div className="rounded-sm overflow-hidden bg-surface">
              <img
                src={PHOTOS[2]}
                alt="Fine dining"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={e => { e.target.src = 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=600&q=80&auto=format&fit=crop' }}
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm text-muted leading-[1.95] mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean sed pulvinar metus, at dignissim diam. Praesent id lacus
              faucibus, posuere urna nec, imperdiet nunc.
            </p>
            <p className="text-sm text-muted leading-[1.95] mb-8">
              Nam sodales diam ornare augue feugiat. Phasellus et
              tincidunt velit, sit amet tincidunt erat. Pellentesque
              tincidunt elit, at porta nunc.
            </p>
            <button className="btn-primary">More About Us</button>
          </div>
        </div>

      </div>
    </section>
  )
}