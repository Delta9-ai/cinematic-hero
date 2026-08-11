/* ============================================================
   Stats · Trending · Top 10 · Genres
   ============================================================ */

const STATS = [
  { value: '1,800+', label: 'Films, hand-picked' },
  { value: '240', label: 'Series & limited runs' },
  { value: '4K HDR', label: 'Dolby Atmos as standard' },
  { value: 'Zero', label: 'Ads, forever' },
]

function Stats() {
  return (
    <section className="border-y border-white/10 px-4 py-10 sm:px-6 md:px-12 md:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 90}>
            <p className="tracking-cinematic text-2xl font-normal sm:text-3xl md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs text-gray-400 sm:text-sm">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Trending() {
  return (
    <section id="trending" className="px-4 py-16 sm:px-6 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Trending now"
          labelIcon={Flame}
          title="What the world is watching tonight"
          description="Updated every hour from what our members actually finish — not what a studio paid to place."
          action={
            <a
              href="#genres"
              className="liquid-glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-colors hover:text-gray-300"
            >
              Browse all
              <ArrowRight size={16} />
            </a>
          }
        />

        <Reveal delay={120}>
          <ScrollRow>
            {TRENDING.map((item) => (
              <PosterCard
                key={item.title}
                item={item}
                className="aspect-[2/3] w-[190px] shrink-0 snap-start sm:w-[230px] lg:w-[260px]"
              />
            ))}
          </ScrollRow>
        </Reveal>
      </div>
    </section>
  )
}

function TopTen() {
  return (
    <section className="px-4 py-16 sm:px-6 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Top 10 this week"
          labelIcon={Sparkles}
          title="The ten everyone is arguing about"
          description="Ranked by completion rate, then by how many people watched it twice."
        />

        <Reveal delay={120}>
          <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 sm:gap-10">
            {TOP_TEN.map((item, i) => (
              <a
                key={item.title}
                href="#"
                className="group flex shrink-0 snap-start items-end gap-2 sm:gap-4"
              >
                <span className="rank-outline tracking-cinematic select-none text-[72px] font-semibold transition-all duration-500 group-hover:[-webkit-text-stroke-color:rgba(255,255,255,0.9)] sm:text-[110px]">
                  {i + 1}
                </span>
                <span className="block">
                  <span className="block aspect-[2/3] w-[120px] overflow-hidden rounded-xl bg-gray-900 sm:w-[150px]">
                    <img
                      src={poster(item.seed, 400, 600)}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-75 grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </span>
                  <span className="mt-3 block text-sm font-medium">{item.title}</span>
                  <span className="mt-0.5 block text-xs text-gray-500">{item.genre}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Genres() {
  return (
    <section id="genres" className="px-4 py-16 sm:px-6 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Browse"
          labelIcon={Film}
          title="Start with a mood, not a menu"
          description="Eight rooms in the library. Every shelf curated by a human being with an opinion."
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {GENRES.map((genre, i) => (
            <Reveal key={genre.name} delay={i * 70}>
              <a
                href="#"
                className="liquid-glass group relative block aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <img
                  src={still(genre.seed, 600, 450)}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-25 grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-45 group-hover:grayscale-0"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 z-[2] flex items-end justify-between p-4">
                  <span>
                    <span className="tracking-cinematic block text-base font-medium sm:text-lg">
                      {genre.name}
                    </span>
                    <span className="mt-1 block text-xs text-gray-400">{genre.count} titles</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="translate-y-1 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
