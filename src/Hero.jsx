/* ============================================================
   Hero — full viewport, content anchored to the bottom
   ============================================================ */

function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 flex h-screen min-h-[620px] flex-col justify-end px-4 pb-8 pt-24 sm:px-6 md:px-12 md:pb-16"
    >
      <div className="flex flex-col items-end gap-8 md:flex-row">
        {/* ---------- Left ---------- */}
        <div className="flex-1">
          <div
            className="animate-blur-fade-up mb-6 flex flex-wrap items-center gap-3 text-xs sm:gap-6 sm:text-sm md:mb-8"
            style={{ animationDelay: '300ms' }}
          >
            <div className="flex items-center gap-2">
              <Star size={16} className="fill-white sm:h-5 sm:w-5" />
              <span className="font-medium">8.7/10 IMDB</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>132 min</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>April, 2025</span>
            </div>
          </div>

          <h1
            className="animate-blur-fade-up tracking-cinematic mb-4 text-3xl font-normal sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl"
            style={{ animationDelay: '400ms' }}
          >
            Step Through. Work Smarter.
          </h1>

          <p
            className="animate-blur-fade-up mb-6 max-w-2xl text-base text-gray-400 sm:text-lg md:mb-12 md:text-xl"
            style={{ animationDelay: '500ms' }}
          >
            A voyage through forgotten realms, where past and future intertwine.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              type="button"
              className="animate-blur-fade-up flex items-center gap-2 rounded-full bg-white px-6 py-2.5 font-medium text-black transition-colors hover:bg-gray-200 sm:px-8 sm:py-3"
              style={{ animationDelay: '600ms' }}
            >
              <Play size={18} className="fill-black" />
              <span>Watch Now</span>
            </button>

            <button
              type="button"
              className="liquid-glass animate-blur-fade-up rounded-full px-6 py-2.5 font-medium transition-colors hover:text-gray-300 sm:px-8 sm:py-3"
              style={{ animationDelay: '700ms' }}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* ---------- Right: carousel arrows ---------- */}
        <div className="flex w-full justify-start gap-3 sm:gap-4 md:w-auto md:justify-end">
          <button
            type="button"
            className="liquid-glass animate-blur-fade-up flex items-center gap-2 rounded-full px-4 py-2.5 transition-colors hover:text-gray-300 sm:px-6 sm:py-3"
            style={{ animationDelay: '800ms' }}
          >
            <ChevronLeft size={18} />
            <span>Previous</span>
          </button>

          <button
            type="button"
            className="liquid-glass animate-blur-fade-up flex items-center gap-2 rounded-full px-4 py-2.5 transition-colors hover:text-gray-300 sm:px-6 sm:py-3"
            style={{ animationDelay: '900ms' }}
          >
            <span>Next</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* ---------- Scroll cue ---------- */}
      <a
        href="#trending"
        className="animate-blur-fade-up absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-gray-500 transition-colors hover:text-white lg:flex"
        style={{ animationDelay: '1100ms' }}
      >
        <span>Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
