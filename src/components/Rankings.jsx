import Reveal from './ui/Reveal'
import { rankings } from '../data/content'

export default function Rankings() {
  return (
    <section id="rankings" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <ol className="border-t border-line">
          {rankings.map((r, i) => (
            <Reveal as="li" key={r.title + r.place} delay={i * 0.08} className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-1 border-b border-line py-8 transition-colors hover:bg-surface sm:grid-cols-[10rem_1fr_auto] sm:px-4">
              <span className="font-display text-6xl font-extrabold text-accent sm:text-8xl">{r.rank}</span>
              <div>
                <p className="font-display text-2xl font-bold sm:text-3xl">{r.place}</p>
                <p className="mt-1 text-muted">{r.title}</p>
              </div>
              <p className="col-start-2 text-sm font-semibold text-muted sm:col-start-3">by {r.by}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
