import { useState } from 'react'

const FALLBACKS = [
  'https://images.unsplash.com/photo-1562802378-063ec186a863?w=1800&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=1800&q=85&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=1800&q=85&auto=format&fit=crop',
]

export default function FoodBanner() {
  const [imgIndex, setImgIndex] = useState(0)

  const handleError = () => {
    if (imgIndex < FALLBACKS.length - 1) setImgIndex(imgIndex + 1)
  }

  return (
    <section className="relative overflow-hidden" style={{ height: '50vh', minHeight: '320px' }}>
      <img
        key={imgIndex}
        src={FALLBACKS[imgIndex]}
        alt="Premium sushi"
        onError={handleError}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center center' }}
      />
      <div className="absolute inset-0" style={{ background: 'rgba(10,8,0,0.2)' }}/>
    </section>
  )
}