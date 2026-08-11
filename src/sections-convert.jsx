/* ============================================================
   Pricing · FAQ · Closing CTA · Footer
   ============================================================ */

function Pricing() {
  return (
    <section id="pricing" className="px-4 py-16 sm:px-6 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          label="Membership"
          labelIcon={Bookmark}
          title="Three ways in. Cancel in one click."
          description="Prices in euros, VAT included. Switch or stop whenever you like — nothing hides in a settings sub-menu."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-7 sm:p-8 ${
                  plan.featured ? 'bg-white text-black' : 'liquid-glass liquid-glass-panel'
                }`}
              >
                {plan.featured ? (
                  <span className="absolute right-7 top-7 rounded-full bg-black px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white sm:right-8 sm:top-8">
                    Most chosen
                  </span>
                ) : null}

                <h3 className="tracking-cinematic text-xl font-medium">{plan.name}</h3>
                <p
                  className={`mt-2 text-sm ${plan.featured ? 'text-gray-600' : 'text-gray-400'}`}
                >
                  {plan.tagline}
                </p>

                <p className="tracking-cinematic mt-8 flex items-end gap-1">
                  <span className="text-4xl font-normal sm:text-5xl">€{plan.price}</span>
                  <span
                    className={`pb-1.5 text-sm ${plan.featured ? 'text-gray-600' : 'text-gray-500'}`}
                  >
                    /month
                  </span>
                </p>

                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          plan.featured ? 'text-black' : 'text-white'
                        }`}
                      />
                      <span className={plan.featured ? 'text-gray-700' : 'text-gray-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`mt-9 w-full rounded-full py-3 text-sm font-medium transition-colors ${
                    plan.featured
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'liquid-glass hover:text-gray-300'
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="px-4 py-16 sm:px-6 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Reveal className="mb-5 block">
            <SectionLabel>FAQ</SectionLabel>
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="tracking-cinematic text-3xl font-normal sm:text-4xl md:text-5xl"
          >
            Everything else you might ask
          </Reveal>
          <Reveal as="p" delay={160} className="mt-4 text-base text-gray-400 md:text-lg">
            Still stuck? Our team answers in under four hours, seven days a week.
          </Reveal>
          <Reveal delay={240} className="mt-8">
            <a
              href="#"
              className="liquid-glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-colors hover:text-gray-300"
            >
              <Mail size={16} />
              Contact support
            </a>
          </Reveal>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 80}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-gray-300"
                >
                  <span className="text-base font-medium sm:text-lg">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform duration-500 ease-out ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 text-sm text-gray-400 sm:text-base">{item.a}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* Transparent on purpose — the fixed background video reappears here */
function ClosingCta() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center px-4 py-24 text-center sm:px-6 md:px-12">
      <div className="relative z-10 mx-auto max-w-3xl">
        <Reveal className="mb-6 block">
          <SectionLabel icon={Sparkles}>Two weeks free</SectionLabel>
        </Reveal>

        <Reveal
          as="h2"
          delay={80}
          className="tracking-cinematic text-4xl font-normal sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Step through. Start tonight.
        </Reveal>

        <Reveal as="p" delay={160} className="mx-auto mt-6 max-w-xl text-base text-gray-300 md:text-xl">
          One membership, every screen, no advertising. Cancel before day fifteen and you pay
          nothing at all.
        </Reveal>

        <Reveal delay={240} className="mt-10">
          <form
            className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="cta-email" className="sr-only">
              Email address
            </label>
            <input
              id="cta-email"
              type="email"
              required
              placeholder="you@example.com"
              className="liquid-glass w-full rounded-full px-5 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-white/40"
            />
            <button
              type="submit"
              className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200"
            >
              Get started
              <ArrowRight size={16} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black px-4 pb-10 pt-16 sm:px-6 md:px-12 md:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <Reveal>
            <p className="text-xl font-semibold tracking-[-0.04em] md:text-2xl">CINEMATIC</p>
            <p className="mt-4 max-w-sm text-sm text-gray-400">
              A streaming library built by people who still argue about aspect ratios. Curated
              daily from Paris, Lagos and Seoul.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:text-gray-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {FOOTER_LINKS.map((column, i) => (
              <Reveal key={column.title} delay={i * 80}>
                <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-gray-500 sm:flex-row sm:items-center">
          <p>© 2026 Cinematic Media. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Cookies
            </a>
            <a href="#top" className="transition-colors hover:text-white">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
