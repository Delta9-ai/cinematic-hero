/* ============================================================
   Navbar — fixed, turns to glass once the hero scrolls away
   ============================================================ */

function Navbar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-4 transition-all duration-500 ease-out sm:px-6 md:px-12 md:py-6 ${
          scrolled ? 'bg-black/60 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <a
          href="#top"
          className="animate-blur-fade-up flex h-8 items-center text-xl font-semibold tracking-[-0.04em] md:h-10 md:text-2xl"
          style={{ animationDelay: '0ms' }}
        >
          CINEMATIC
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="animate-blur-fade-up text-sm transition-colors hover:text-gray-300"
              style={{ animationDelay: `${100 + i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="liquid-glass animate-blur-fade-up hidden items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors hover:text-gray-300 sm:flex md:px-6"
            style={{ animationDelay: '350ms' }}
          >
            <span>Search</span>
            <Search size={18} />
          </button>

          <button
            type="button"
            aria-label="Profile"
            className="liquid-glass animate-blur-fade-up hidden h-10 w-10 items-center justify-center rounded-full sm:flex"
            style={{ animationDelay: '400ms' }}
          >
            <User size={18} />
          </button>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="liquid-glass animate-blur-fade-up flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
            style={{ animationDelay: '350ms' }}
          >
            <Menu
              size={18}
              className={`absolute transition-all duration-500 ease-out ${
                menuOpen ? 'rotate-180 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'
              }`}
            />
            <X
              size={18}
              className={`absolute transition-all duration-500 ease-out ${
                menuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-50 opacity-0'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ---------- Mobile menu ---------- */}
      <div
        className={`fixed left-0 right-0 top-[72px] z-40 border-b border-t border-gray-800 bg-gray-900/95 shadow-2xl backdrop-blur-lg transition-all duration-500 ease-out lg:hidden ${
          menuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <div className="flex flex-col p-3">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-lg px-3 py-3 transition-all duration-500 ease-out hover:bg-gray-800/50 ${
                menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: `${menuOpen ? i * 50 : 0}ms` }}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-2 flex items-center gap-3 border-t border-gray-800 pt-3 sm:hidden">
            <button
              type="button"
              className="liquid-glass flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2 text-sm"
            >
              <span>Search</span>
              <Search size={18} />
            </button>
            <button
              type="button"
              aria-label="Profile"
              className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full"
            >
              <User size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
