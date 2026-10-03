import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import useMediaQuery from '../../hooks/useMediaQuery'

const INTERACTIVE = 'a, button, [data-cursor]'

/**
 * Ring that trails the pointer with spring physics and grows over interactive elements.
 * Rendered only on devices with a fine pointer and hover (so never on touch).
 */
export default function CustomCursor() {
  const hasMouse = useMediaQuery('(hover: hover) and (pointer: fine)')
  const [active, setActive] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.4 })

  useEffect(() => {
    if (!hasMouse) return
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => setActive(Boolean(e.target.closest?.(INTERACTIVE)))
    addEventListener('pointermove', move, { passive: true })
    addEventListener('pointerover', over, { passive: true })
    return () => {
      removeEventListener('pointermove', move)
      removeEventListener('pointerover', over)
    }
  }, [hasMouse, x, y])

  if (!hasMouse) return null

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[70]">
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute left-0 top-0"
      >
        <motion.div
          animate={{ scale: active ? 2.2 : 1, opacity: active ? 0.9 : 0.6 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className={`-ml-5 -mt-5 size-10 rounded-full border-2 border-accent ${active ? 'bg-accent/20' : ''}`}
        />
      </motion.div>
      <motion.div
        style={{ x, y }}
        className="absolute left-0 top-0 -ml-[3px] -mt-[3px] size-1.5 rounded-full bg-accent"
      />
    </div>
  )
}
