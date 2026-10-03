import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { school } from '../data/content'

export default function MobileApplyBar() {
  const { scrollY } = useScroll()
  const [show, setShow] = useState(false)
  useMotionValueEvent(scrollY, 'change', (y) => setShow(y > 500))

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-line bg-bg/90 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden"
        >
          <a href={`tel:${school.phone}`} className="grid flex-1 place-items-center rounded-full border border-line py-3 font-bold">
            Call
          </a>
          <a href={school.applyUrl} className="grid flex-[2] place-items-center rounded-full bg-accent py-3 font-bold text-on-accent">
            Apply now
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
