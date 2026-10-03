import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from './ui/Reveal'
import { about } from '../data/content'

/** One word whose opacity is tied to a slice of the section's scroll progress. */
function Word({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  )
}

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.6'] })
  const words = about.statement.split(' ')

  return (
    <section id="about" className="px-5 py-24 sm:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <p ref={ref} className="max-w-5xl font-display text-3xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">{about.heading}</h2>
            <p className="mt-4 max-w-prose leading-relaxed text-muted">{about.body}</p>
          </Reveal>
          <Reveal delay={0.12} className="rounded-3xl bg-accent p-8 text-on-accent sm:p-10">
            <p className="font-display text-2xl font-bold leading-snug">{about.secretQuestion}</p>
            <p className="mt-4 leading-relaxed">{about.secretAnswer}</p>
            <p className="mt-6 font-display text-3xl font-extrabold">{about.punchline}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
