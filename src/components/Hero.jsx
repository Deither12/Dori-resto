import { useReveal } from '../hooks/useReveal'

export default function Hero() {
  const [ref, visible] = useReveal(0.01)

  const go = (href) => {
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=1800&q=85&auto=format&fit=crop"
          alt="Sushi background"
          className="w-full h-full object-cover animate-heroZoom"
        />
        <div className="absolute inset-0"
             style={{ background: 'linear-gradient(to bottom, rgba(10,8,0,0.72) 0%, rgba(10,8,0,0.60) 50%, rgba(10,8,0,0.82) 100%)' }}/>
        <div className="absolute inset-0" style={{ background: 'rgba(30,18,0,0.35)' }}/>
      </div>

      <div
        ref={ref}
        className="relative z-10 text-center px-6 max-w-3xl mx-auto transition-all duration-1000"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transitionDelay: '200ms' }}
      >
        <span className="font-script text-gold text-2xl md:text-3xl block mb-3">
          Best Sushi In Town
        </span>
        <h1 className="font-display font-extrabold text-parchment uppercase leading-tight mb-5 text-shadow-gold"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', letterSpacing: '0.01em' }}>
          Taste The Rich Flavor Of<br/>High Quality Sushi
        </h1>
        <p className="font-sans font-light text-sm text-cream/60 max-w-md mx-auto mb-10 leading-loose">
          We only use the five star quality for our menu,
          come and get the richness in every food we serve.
        </p>
        <button onClick={() => go('#specials')} className="btn-primary text-sm">
          Go To Menu
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-px h-10 animate-scrollPulse"
             style={{ background: 'linear-gradient(to bottom, #D4A843, transparent)' }}/>
      </div>
    </section>
  )
}