/* ============================================================
   Editor's Pick spotlight · Interviews · User reviews
   ============================================================ */

function Spotlight() {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)

  const toggleSound = () => {
    const el = videoRef.current
    if (!el) return
    el.muted = !el.muted
    if (!el.muted) el.play().catch(() => {})
    setMuted(el.muted)
  }

  return (
    <section id="spotlight" className="px-4 py-16 sm:px-6 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* ---------- Copy ---------- */}
        <div>
          <Reveal className="mb-5 block">
            <SectionLabel icon={Sparkles}>Editor’s pick · April</SectionLabel>
          </Reveal>

          <Reveal
            as="h2"
            delay={80}
            className="tracking-cinematic text-3xl font-normal sm:text-4xl md:text-5xl"
          >
            Step Through
          </Reveal>

          <Reveal as="p" delay={160} className="mt-5 text-base text-gray-400 md:text-lg">
            Lena Márquez shot her third feature on a single stage over nineteen days. What came out
            is a chamber piece about memory that keeps rearranging itself — and the best sound
            design of the year by a distance.
          </Reveal>

          <Reveal
            delay={240}
            className="mt-8 flex flex-wrap items-center gap-3 text-xs sm:gap-6 sm:text-sm"
          >
            <span className="flex items-center gap-2">
              <Star size={16} className="fill-white" />
              <span className="font-medium">8.7/10 IMDB</span>
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              <span>132 min</span>
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              <span>April, 2025</span>
            </span>
          </Reveal>

          <Reveal delay={320} className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <SolidButton icon={Play}>Watch Now</SolidButton>
            <GlassButton>
              <Plus size={18} />
              My List
            </GlassButton>
          </Reveal>
        </div>

        {/* ---------- Video frame ---------- */}
        <Reveal delay={200}>
          <div className="liquid-glass liquid-glass-panel relative overflow-hidden rounded-3xl p-2">
            <div className="relative overflow-hidden rounded-[20px]">
              <video
                ref={videoRef}
                className="aspect-video w-full object-cover"
                src={VIDEO_URL}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 z-[2] flex items-end justify-between p-4 sm:p-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
                    Official trailer
                  </p>
                  <p className="tracking-cinematic mt-1 text-lg font-medium sm:text-xl">
                    Step Through. Work Smarter.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={toggleSound}
                  aria-label={muted ? 'Unmute trailer' : 'Mute trailer'}
                  className="liquid-glass flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors hover:text-gray-300"
                >
                  {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Interviews() {
  return (
    <section id="interviews" className="px-4 py-16 sm:px-6 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Interviews"
          labelIcon={Quote}
          title="The people behind the frame"
          description="Long-form conversations with directors, editors and composers — published every Thursday."
          action={
            <a
              href="#"
              className="liquid-glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-colors hover:text-gray-300"
            >
              All interviews
              <ArrowRight size={16} />
            </a>
          }
        />

        <div className="grid gap-6 md:grid-cols-3">
          {INTERVIEWS.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <a href="#" className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-900">
                  <img
                    src={still(item.seed, 800, 500)}
                    alt={item.person}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-80 grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <span className="liquid-glass absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.16em]">
                    {item.role}
                  </span>
                </div>

                <p className="mt-5 text-xs text-gray-500">{item.date}</p>
                <h3 className="tracking-cinematic mt-2 text-xl font-normal transition-colors group-hover:text-gray-300 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-400">{item.excerpt}</p>
                <p className="mt-4 flex items-center gap-2 text-sm font-medium">
                  {item.person}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review }) {
  return (
    <figure className="liquid-glass liquid-glass-panel w-[300px] shrink-0 rounded-2xl p-6 sm:w-[360px]">
      <Stars count={review.stars} />
      <blockquote className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
        “{review.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="liquid-glass flex h-9 w-9 items-center justify-center rounded-full text-xs font-medium">
          {review.name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-medium">{review.name}</span>
          <span className="block text-xs text-gray-500">{review.handle}</span>
        </span>
      </figcaption>
    </figure>
  )
}

function Reviews() {
  const rowOne = REVIEWS.slice(0, 4)
  const rowTwo = REVIEWS.slice(4)

  return (
    <section id="reviews" className="overflow-hidden py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <SectionHeading
          label="User reviews"
          labelIcon={Star}
          title="Twelve thousand members, one opinion each"
          description="No aggregate score, no bots — every review is written by someone who finished the film."
        />
      </div>

      <div className="marquee edge-fade space-y-6">
        <div className="marquee-track">
          {[...rowOne, ...rowOne].map((review, i) => (
            <ReviewCard key={`a-${i}`} review={review} />
          ))}
        </div>
        <div className="marquee-track reverse">
          {[...rowTwo, ...rowTwo].map((review, i) => (
            <ReviewCard key={`b-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
