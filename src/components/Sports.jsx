import Reveal from './ui/Reveal'
import { sports } from '../data/content'

function Row({ items, reverse = false }) {
  return (
    <div className="marquee overflow-hidden">
      <div
        className="marquee-track flex w-max gap-4 py-2"
        style={reverse ? { animationDirection: 'reverse' } : undefined}
      >
        {[...items, ...items].map((s, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            data-cursor
            className="whitespace-nowrap rounded-full border border-line px-7 py-4 font-display text-2xl font-semibold transition-colors hover:border-accent hover:bg-accent hover:text-on-accent sm:text-4xl"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Sports() {
  const half = Math.ceil(sports.list.length / 2)
  return (
    <section id="campus" className="overflow-hidden py-24">
      <Reveal className="mx-auto mb-12 max-w-7xl px-5 sm:px-8">
        <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight sm:text-6xl">{sports.heading}</h2>
        <p className="mt-4 text-lg text-muted">{sports.body}</p>
      </Reveal>
      <div className="space-y-3">
        <Row items={sports.list.slice(0, half)} />
        <Row items={sports.list.slice(half)} reverse />
      </div>
    </section>
  )
}
