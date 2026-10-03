import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './ui/Reveal'
import { parents } from '../data/content'

export default function Parents() {
  const [index, setIndex] = useState(0)
  const active = parents.quotes[index]

  return (
    <section id="parents" className="bg-surface px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal as="h2" className="font-display text-4xl font-bold sm:text-6xl">
          {parents.heading}
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div role="tablist" aria-label="Parent reviews" className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {parents.quotes.map((q, i) => (
              <button
                key={q.name}
                role="tab"
                aria-selected={i === index}
                onClick={() => setIndex(i)}
                className={`shrink-0 rounded-2xl border px-5 py-4 text-left transition-colors ${
                  i === index ? 'border-accent bg-accent text-on-accent' : 'border-line hover:border-ink'
                }`}
              >
                <span className="block font-bold">{q.name}</span>
                <span className={`text-sm ${i === index ? '' : 'text-muted'}`}>{q.relation}</span>
              </button>
            ))}
          </div>

          <div role="tabpanel" className="min-h-64">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="font-display text-2xl font-semibold leading-snug sm:text-4xl"
              >
                “{active.text}”
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
