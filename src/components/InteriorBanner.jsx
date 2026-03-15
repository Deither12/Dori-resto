export default function InteriorBanner() {
  return (
    <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=1800&q=80&auto=format&fit=crop"
        alt="Restaurant Interior"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0" style={{ background: 'rgba(14,10,0,0.55)' }}/>
    </section>
  )
}