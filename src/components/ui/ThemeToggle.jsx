import { AnimatePresence, motion } from 'framer-motion'

const rays = [0, 45, 90, 135, 180, 225, 270, 315]

function Sun() {
  return (
    <motion.svg key="sun" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      initial={{ rotate: -90, scale: 0, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} exit={{ rotate: 90, scale: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      {rays.map((a) => (
        <line key={a} x1="12" y1="2.5" x2="12" y2="4.5" transform={`rotate(${a} 12 12)`} />
      ))}
    </motion.svg>
  )
}

function Moon() {
  return (
    <motion.svg key="moon" viewBox="0 0 24 24" className="size-5" fill="currentColor"
      initial={{ rotate: 90, scale: 0, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1 }} exit={{ rotate: -90, scale: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
      <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
    </motion.svg>
  )
}

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="grid size-10 place-items-center overflow-hidden rounded-full border border-line text-ink transition-colors hover:bg-accent hover:text-on-accent"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? <Moon /> : <Sun />}
      </AnimatePresence>
    </button>
  )
}
