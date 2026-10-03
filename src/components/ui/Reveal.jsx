import { motion } from 'framer-motion'

/**
 * Scroll-triggered entrance. Fires once when ~20% of the element is visible.
 * Pass `delay` (e.g. index * 0.08) to stagger siblings.
 * Reduced-motion users are handled globally by <MotionConfig reducedMotion="user"> in App.
 */
export default function Reveal({ as = 'div', delay = 0, y = 32, className, children }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
