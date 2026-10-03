import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/** Counts from 0 to `to` once, when scrolled into view. Writes to the DOM directly to avoid re-rendering every frame. */
export default function CountUp({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!inView || !el) return
    if (reduce) {
      el.textContent = `${to}${suffix}`
      return
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (el.textContent = `${Math.round(v)}${suffix}`),
    })
    return () => controls.stop()
  }, [inView, to, suffix, reduce])

  return <span ref={ref}>0{suffix}</span>
}
