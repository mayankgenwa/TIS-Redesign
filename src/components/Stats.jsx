import CountUp from './ui/CountUp'
import Reveal from './ui/Reveal'
import { stats } from '../data/content'

export default function Stats() {
  return (
    <section aria-label="TIS at a glance" className="px-5 py-12 sm:px-8">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="bg-bg p-6 sm:p-10">
            <dd className="font-display text-5xl font-extrabold tabular-nums sm:text-7xl">
              <CountUp to={s.value} suffix={s.suffix} />
            </dd>
            <dt className="mt-3 text-sm font-semibold text-muted sm:text-base">{s.label}</dt>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
