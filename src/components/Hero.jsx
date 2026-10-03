import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { hero, school } from '../data/content'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <section id="top" ref={ref} className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-end gap-12 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <h1 className="font-display text-[clamp(3.4rem,11vw,9.5rem)] font-extrabold leading-[0.92] tracking-tight">
            <span className="sr-only">{hero.title}. </span>
            {hero.lines.map((line, i) => (
              // overflow-hidden mask: each line slides up from below its own baseline
              <span key={line} aria-hidden="true" className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className="block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.15 + i * 0.14, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="mt-8 max-w-xl"
          >
            <p className="text-xl font-semibold leading-snug">{hero.intro}</p>
            <p className="mt-3 leading-relaxed text-muted">{hero.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={school.applyUrl} className="rounded-full bg-accent px-7 py-3.5 font-bold text-on-accent transition-transform hover:scale-105">
                Apply now
              </a>
              <a href="#contact" className="rounded-full border border-line px-7 py-3.5 font-bold transition-colors hover:bg-surface">
                Enquire now
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ clipPath: 'inset(100% 0 0 0 round 9999px 9999px 2rem 2rem)' }}
          animate={{ clipPath: 'inset(0% 0 0 0 round 9999px 9999px 2rem 2rem)' }}
          transition={{ duration: 1.3, delay: 0.3, ease }}
          className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden bg-surface lg:max-w-none"
        >
          <motion.img
            src={hero.image}
            alt="Tulas International School campus in Dehradun"
            style={{ y: imageY }}
            className="absolute inset-0 h-[115%] w-full object-cover"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
        </motion.div>
      </div>
    </section>
  )
}
