/* ============================================================
   Shared primitives
   These globals are reused by every section file, so React hooks
   and Lucide icons are destructured here once and only here.
   ============================================================ */

const { useState, useEffect, useRef, useCallback } = React

const {
  Search,
  User,
  Menu,
  X,
  Star,
  Clock,
  Calendar,
  Play,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Plus,
  Check,
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  Sparkles,
  Flame,
  Quote,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Film,
  Volume2,
  VolumeX,
} = LucideReact

/* ---------- Scroll reveal ---------------------------------- */
/* Replays the hero's blurFadeUp animation as sections enter view */
function useInView(options) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px', ...options }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, inView]
}

function Reveal({ delay = 0, className = '', as = 'div', children, ...rest }) {
  const [ref, inView] = useInView()
  return React.createElement(
    as,
    {
      ref,
      className: `${inView ? 'animate-blur-fade-up' : 'reveal-idle'} ${className}`,
      style: { animationDelay: `${delay}ms` },
      ...rest,
    },
    children
  )
}

/* ---------- Section chrome --------------------------------- */
function SectionLabel({ icon: Icon, children }) {
  return (
    <span className="liquid-glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-gray-300">
      {Icon ? <Icon size={13} /> : null}
      {children}
    </span>
  )
}

function SectionHeading({ label, labelIcon, title, description, action, className = '' }) {
  return (
    <div
      className={`mb-8 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between ${className}`}
    >
      <div className="max-w-2xl">
        {label ? (
          <Reveal className="mb-5 block">
            <SectionLabel icon={labelIcon}>{label}</SectionLabel>
          </Reveal>
        ) : null}
        <Reveal
          as="h2"
          delay={80}
          className="tracking-cinematic text-3xl font-normal sm:text-4xl md:text-5xl"
        >
          {title}
        </Reveal>
        {description ? (
          <Reveal as="p" delay={160} className="mt-4 text-base text-gray-400 md:text-lg">
            {description}
          </Reveal>
        ) : null}
      </div>
      {action ? (
        <Reveal delay={240} className="shrink-0">
          {action}
        </Reveal>
      ) : null}
    </div>
  )
}

/* ---------- Buttons ---------------------------------------- */
function SolidButton({ children, icon: Icon, className = '', ...rest }) {
  return (
    <button
      type="button"
      className={`flex items-center gap-2 rounded-full bg-white px-6 py-2.5 font-medium text-black transition-colors hover:bg-gray-200 sm:px-8 sm:py-3 ${className}`}
      {...rest}
    >
      {Icon ? <Icon size={18} className="fill-black" /> : null}
      {children}
    </button>
  )
}

function GlassButton({ children, className = '', ...rest }) {
  return (
    <button
      type="button"
      className={`liquid-glass flex items-center gap-2 rounded-full px-6 py-2.5 font-medium transition-colors hover:text-gray-300 sm:px-8 sm:py-3 ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

/* ---------- Stars ------------------------------------------ */
function Stars({ count = 5, size = 14 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          size={size}
          className={i < count ? 'fill-white text-white' : 'text-gray-600'}
        />
      ))}
    </div>
  )
}

/* ---------- Poster card ------------------------------------ */
function PosterCard({ item, className = '' }) {
  return (
    <a
      href="#"
      className={`group relative block overflow-hidden rounded-2xl bg-gray-900 ${className}`}
    >
      <img
        src={poster(item.seed)}
        alt={item.title}
        loading="lazy"
        className="h-full w-full object-cover opacity-80 grayscale transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:opacity-100 group-hover:grayscale-0"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {item.rating ? (
        <div className="liquid-glass absolute right-3 top-3 flex items-center gap-1 rounded-full px-2.5 py-1 text-xs">
          <Star size={12} className="fill-white" />
          <span className="font-medium">{item.rating}</span>
        </div>
      ) : null}

      <div className="liquid-glass absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 scale-75 items-center justify-center rounded-full opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100">
        <Play size={20} className="fill-white" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="tracking-cinematic text-base font-medium sm:text-lg">{item.title}</h3>
        <p className="mt-1 flex items-center gap-2 text-xs text-gray-400">
          <span>{item.genre}</span>
          {item.year ? (
            <>
              <span className="h-1 w-1 rounded-full bg-gray-600" />
              <span>{item.year}</span>
            </>
          ) : null}
        </p>
      </div>
    </a>
  )
}

/* ---------- Horizontal scroller ---------------------------- */
function ScrollRow({ children, itemClass = '' }) {
  const trackRef = useRef(null)

  const scrollBy = useCallback((direction) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: direction * Math.max(el.clientWidth * 0.8, 280), behavior: 'smooth' })
  }, [])

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:gap-6"
      >
        {children}
      </div>

      <div className="mt-6 flex items-center justify-end gap-3">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => scrollBy(-1)}
          className="liquid-glass flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:text-gray-300"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => scrollBy(1)}
          className="liquid-glass flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:text-gray-300"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  )
}
