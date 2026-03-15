// ── Site Data ─────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Home',        href: '#home' },
  { label: 'Menu',        href: '#specials' },
  { label: 'Special',     href: '#specialities' },
  { label: 'Chef',        href: '#chef' },
  { label: 'Contact',     href: '#footer' },
]

export const SPECIALS = [
  {
    id: 1,
    name: 'Dragon Roll',
    desc: 'Tempura shrimp, cucumber, avocado, tobiko, unagi sauce drizzle.',
    price: '$28',
    stars: 5,
    badge: "Today's Pick",
    badgeGold: false,
    img: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Omakase Nigiri',
    desc: 'Premium toro, hamachi, uni, and ikura on hand-pressed shari rice.',
    price: '$65',
    stars: 5,
    badge: "Chef's Choice",
    badgeGold: true,
    img: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600&q=80&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 3,
    name: 'Spicy Tuna Crunch',
    desc: 'Bluefin tuna, crispy tempura flakes, sriracha aioli, micro greens.',
    price: '$32',
    stars: 4,
    badge: 'New',
    badgeGold: false,
    img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600&q=80&auto=format&fit=crop',
  },
]

export const SPEC_LIST = [
  {
    id: 1,
    name: 'Toro Sashimi',
    desc: 'Premium fatty tuna, sea salt, yuzu zest',
    price: '$48',
    img: 'https://images.unsplash.com/photo-1569585723035-0e9e6ff87cbf?w=200&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Rainbow Roll',
    desc: 'California roll topped with assorted sashimi',
    price: '$36',
    img: 'https://images.unsplash.com/photo-1617196034096-2186592926b4?w=200&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Wagyu Gunkan',
    desc: 'A5 Wagyu, quail egg, black truffle shavings',
    price: '$72',
    img: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=200&q=80&auto=format&fit=crop',
  },
]

export const TRENDING = [
  { id: 1, label: 'Grand Platter',   span: 'tall',  img: 'https://images.unsplash.com/photo-1617196034099-3b5c64fcc6c7?w=500&q=80&auto=format&fit=crop' },
  { id: 2, label: 'Chopstick Roll',  span: '',       img: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=500&q=80&auto=format&fit=crop' },
  { id: 3, label: 'Dipping Sauces',  span: '',       img: 'https://images.unsplash.com/photo-1558985250-27a406d64cb3?w=500&q=80&auto=format&fit=crop' },
  { id: 4, label: 'Roll Closeup',    span: 'tall',   img: 'https://images.unsplash.com/photo-1576132559747-4b3b1a0c0f21?w=500&q=80&auto=format&fit=crop' },
  { id: 5, label: 'Nigiri Set',      span: 'wide',  img: 'https://images.unsplash.com/photo-1625938144755-652e08e359b7?w=700&q=80&auto=format&fit=crop' },
  { id: 6, label: 'Fresh Sashimi',   span: '',       img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=500&q=80&auto=format&fit=crop' },
]

export const EVENTS = [
  {
    id: 1,
    title: 'Sushi Night',
    price: '$500',
    priceGold: false,
    desc: 'An intimate 6-course sushi journey with curated sake pairings for two.',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Gold Experience',
    price: '$1,000',
    priceGold: true,
    featured: true,
    desc: 'A full 10-course gold-plated omakase evening with premium champagne service.',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80&auto=format&fit=crop',
  },
  {
    id: 3,
    title: "Chef's Table",
    price: '$1,500',
    priceGold: false,
    desc: "A private chef's counter experience — watch the master craft every piece live.",
    img: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80&auto=format&fit=crop',
  },
]

export const ACHIEVEMENTS = [
  { number: '3',   label: 'Michelin Stars' },
  { number: '25+', label: 'Years Experience' },
  { number: '12',  label: 'Awards Won' },
]

export const EXP_ICONS = [
  { icon: '🍣', label: 'Freshest Fish' },
  { icon: '🍶', label: 'Premium Sake' },
  { icon: '🎋', label: 'Zen Atmosphere' },
  { icon: '⭐', label: 'Michelin Starred' },
]

export const FOOTER_NAV = [
  { label: 'Home',          href: '#home' },
  { label: 'Menu',          href: '#specials' },
  { label: 'Specialities',  href: '#specialities' },
  { label: 'Chef',          href: '#chef' },
  { label: 'Events',        href: '#events' },
]

export const FOOTER_CONTACT = [
  { icon: '📍', text: '12 Sakura Lane, Ginza District, Tokyo' },
  { icon: '📞', text: '+81 (3) 1234-5678' },
  { icon: '✉️', text: 'reservations@kosushi.com' },
  { icon: '🕐', text: 'Tue–Sun: 6PM – 11PM' },
]
