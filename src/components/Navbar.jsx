import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import ThemeToggle from './ui/ThemeToggle'
import { navLinks, school } from '../data/content'

export default function Navbar({ theme, onToggleTheme }) {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  // Hide on scroll down, reveal on scroll up
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(y > prev && y > 120 && !open)
  })

  return (
    <motion.header
      animate={{ y: hidden ? '-100%' : 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed inset-x-0 top-1 z-50 px-3 sm:px-6"
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-line bg-bg/80 py-2 pl-5 pr-2 backdrop-blur-md"
      >
        <a href="#top" className="font-display text-xl font-extrabold tracking-tight">
          {school.short}
          <span className="ml-2 hidden font-sans text-sm font-semibold text-muted sm:inline">
            Tulas International School
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href={school.applyUrl}
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-on-accent transition-transform hover:scale-105 sm:block"
          >
            Apply now
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-items-center rounded-full border border-line lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <motion.span animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="absolute left-0 top-0 h-0.5 w-5 bg-current" />
              <motion.span animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="absolute bottom-0 left-0 h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-auto mt-2 max-w-7xl rounded-3xl border border-line bg-surface p-3 lg:hidden"
          >
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 font-display text-2xl font-semibold hover:bg-bg"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
