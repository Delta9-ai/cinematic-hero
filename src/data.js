/* ============================================================
   Content — everything editable lives here
   ============================================================ */

const VIDEO_URL =
  'https://zxdefgavgwfxastwmmjm.supabase.co/storage/v1/object/public/assets/cinematic.mp4'

const NAV_LINKS = [
  { label: 'Movies', href: '#trending' },
  { label: 'TV Series', href: '#genres' },
  { label: "Editor's Pick", href: '#spotlight' },
  { label: 'Interviews', href: '#interviews' },
  { label: 'User Reviews', href: '#reviews' },
]

/* Deterministic placeholder artwork — swap `poster()` for your own CDN */
const poster = (seed, w = 600, h = 900) => `https://picsum.photos/seed/${seed}/${w}/${h}`
const still = (seed, w = 1200, h = 700) => `https://picsum.photos/seed/${seed}/${w}/${h}`

const TRENDING = [
  { title: 'Neon Requiem', genre: 'Sci-Fi', year: 2025, rating: 8.4, seed: 'neon-requiem' },
  { title: 'The Salt Road', genre: 'Drama', year: 2024, rating: 7.9, seed: 'salt-road' },
  { title: 'Hollow Tide', genre: 'Thriller', year: 2025, rating: 8.8, seed: 'hollow-tide' },
  { title: 'Paper Cities', genre: 'Romance', year: 2023, rating: 7.4, seed: 'paper-cities' },
  { title: 'Iron Meridian', genre: 'Action', year: 2025, rating: 8.1, seed: 'iron-meridian' },
  { title: 'Vellum', genre: 'Mystery', year: 2024, rating: 8.6, seed: 'vellum' },
  { title: 'Sundown Protocol', genre: 'Sci-Fi', year: 2025, rating: 7.7, seed: 'sundown' },
  { title: 'Glass Harbour', genre: 'Drama', year: 2024, rating: 8.3, seed: 'glass-harbour' },
]

const TOP_TEN = [
  { title: 'Step Through', genre: 'Sci-Fi', seed: 'step-through' },
  { title: 'Cold Aperture', genre: 'Thriller', seed: 'cold-aperture' },
  { title: 'The Long Quiet', genre: 'Drama', seed: 'long-quiet' },
  { title: 'Ember & Ash', genre: 'Fantasy', seed: 'ember-ash' },
  { title: 'Nightfold', genre: 'Horror', seed: 'nightfold' },
  { title: 'Signal Bay', genre: 'Mystery', seed: 'signal-bay' },
  { title: 'Meridian Falls', genre: 'Action', seed: 'meridian-falls' },
  { title: 'Blue Interval', genre: 'Romance', seed: 'blue-interval' },
  { title: 'The Cartographer', genre: 'Adventure', seed: 'cartographer' },
  { title: 'Afterlight', genre: 'Sci-Fi', seed: 'afterlight' },
]

const GENRES = [
  { name: 'Science Fiction', count: 248, seed: 'g-scifi' },
  { name: 'Thriller', count: 176, seed: 'g-thriller' },
  { name: 'Drama', count: 412, seed: 'g-drama' },
  { name: 'Documentary', count: 133, seed: 'g-doc' },
  { name: 'Fantasy', count: 97, seed: 'g-fantasy' },
  { name: 'Animation', count: 154, seed: 'g-animation' },
  { name: 'Horror', count: 121, seed: 'g-horror' },
  { name: 'Classics', count: 88, seed: 'g-classics' },
]

const INTERVIEWS = [
  {
    title: 'Building a world out of light and silence',
    person: 'Lena Márquez',
    role: 'Director',
    date: 'March 2025',
    excerpt:
      'On shooting an entire third act with practical light, and why she cut the score from the final sequence.',
    seed: 'int-lena',
  },
  {
    title: 'The score came before the script',
    person: 'Ohara Fenn',
    role: 'Composer',
    date: 'February 2025',
    excerpt:
      'Twelve months of tape loops, a broken piano, and a theme that survived four rewrites untouched.',
    seed: 'int-ohara',
  },
  {
    title: 'Editing at the speed of memory',
    person: 'Ruth Abiola',
    role: 'Editor',
    date: 'January 2025',
    excerpt:
      'How a non-linear cut let the audience assemble the story before the characters did.',
    seed: 'int-ruth',
  },
]

const REVIEWS = [
  {
    quote:
      'The most confident piece of filmmaking I have seen this decade. Every frame earns its place.',
    name: 'Adrien Blake',
    handle: '@adrienwatches',
    stars: 5,
  },
  {
    quote: 'I went in expecting spectacle and left thinking about my grandmother. Devastating.',
    name: 'Mira Osei',
    handle: '@miraosei',
    stars: 5,
  },
  {
    quote: 'Sound design so precise you feel the room change temperature. Watch it loud.',
    name: 'Tomas Ilves',
    handle: '@t_ilves',
    stars: 4,
  },
  {
    quote: 'A second viewing rearranged the whole film for me. That is rare and worth the ticket.',
    name: 'Sasha Grant',
    handle: '@sashagrant',
    stars: 5,
  },
  {
    quote: 'The middle hour drags, then the last twenty minutes justify everything. Stay with it.',
    name: 'Noor Rahmani',
    handle: '@noorwrites',
    stars: 4,
  },
  {
    quote: 'Best interface I have used for finding something worth two hours of my evening.',
    name: 'Ellis Ward',
    handle: '@elliswrd',
    stars: 5,
  },
  {
    quote: 'Streaming that respects the format. No autoplay traps, no compression mush.',
    name: 'Yuki Tanabe',
    handle: '@yukitnb',
    stars: 5,
  },
  {
    quote: 'My whole watchlist migrated here in an afternoon. The 4K catalogue is unmatched.',
    name: 'Paulo Neves',
    handle: '@pauloneves',
    stars: 4,
  },
]

const PLANS = [
  {
    name: 'Matinee',
    price: '4',
    tagline: 'For the occasional evening.',
    features: ['Full HD streaming', 'One device at a time', 'Curated weekly picks', 'No ads, ever'],
    featured: false,
  },
  {
    name: 'Premiere',
    price: '12',
    tagline: 'The whole catalogue, uncompressed.',
    features: [
      '4K HDR + Dolby Atmos',
      'Four devices at once',
      'Offline downloads',
      'Editor’s Pick archive',
      'Early access screenings',
    ],
    featured: true,
  },
  {
    name: 'Director',
    price: '24',
    tagline: 'For people who watch the credits.',
    features: [
      'Everything in Premiere',
      'Commentary tracks & B-roll',
      'Festival live streams',
      'Two guest passes monthly',
    ],
    featured: false,
  },
]

const FAQ = [
  {
    q: 'What can I watch on CINEMATIC?',
    a: 'A hand-built catalogue of roughly 1,800 films and 240 series — restorations, festival premieres, and originals. Every title is reviewed by our editors before it goes live, so there is no filler.',
  },
  {
    q: 'Can I watch offline?',
    a: 'Yes. Premiere and Director plans include downloads on up to four devices. Downloads stay available for 30 days and renew automatically whenever you reconnect.',
  },
  {
    q: 'Which devices are supported?',
    a: 'iOS, Android, Apple TV, Android TV, and any modern browser. 4K HDR playback requires a compatible display and a Premiere plan or above.',
  },
  {
    q: 'How do I cancel?',
    a: 'One click in account settings, no phone call and no retention flow. Your plan stays active until the end of the period you already paid for.',
  },
  {
    q: 'Do you sell my viewing data?',
    a: 'No. We do not sell or share viewing history with third parties, and recommendations are computed on device wherever technically possible.',
  },
]

const FOOTER_LINKS = [
  {
    title: 'Browse',
    links: ['Movies', 'TV Series', 'New & Noteworthy', 'Collections', 'Leaving Soon'],
  },
  { title: 'Editorial', links: ['Editor’s Pick', 'Interviews', 'Essays', 'Festival Diary'] },
  { title: 'Company', links: ['About', 'Careers', 'Press', 'Partners'] },
  { title: 'Support', links: ['Help Centre', 'Devices', 'Accessibility', 'Contact'] },
]
