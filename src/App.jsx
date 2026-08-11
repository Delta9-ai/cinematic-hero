/* ============================================================
   App — composes the page and owns the fixed background layers
   ============================================================ */

const BOTTOM_BLUR_MASK = 'linear-gradient(to top, black 0%, transparent 45%)'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* ---------- Fixed background video (z-0) ---------- */}
      <video
        className="fixed inset-0 z-0 h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ---------- Bottom blur overlay, no darkening (z-1) ---------- */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] backdrop-blur-xl"
        style={{ WebkitMaskImage: BOTTOM_BLUR_MASK, maskImage: BOTTOM_BLUR_MASK }}
      />

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="relative">
        <Hero />

        {/* Opaque body — the video stays behind, hidden until the closing CTA */}
        <div className="relative z-10 bg-black">
          <Stats />
          <Trending />
          <Spotlight />
          <TopTen />
          <Genres />
          <Interviews />
          <Reviews />
          <Pricing />
          <Faq />
        </div>

        {/* Black dissolves and the video re-emerges for the finale */}
        <div className="relative z-10 h-32 bg-gradient-to-b from-black to-transparent md:h-48" />

        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-black/40" />
          <ClosingCta />
        </div>

        <div className="relative z-10 h-32 bg-gradient-to-b from-transparent to-black md:h-48" />
      </main>

      <Footer />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
