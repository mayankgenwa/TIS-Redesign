import Reveal from './ui/Reveal'
import { cta, school } from '../data/content'

const Item = ({ label, href, children }) => (
  <a href={href} className="block border-t border-line py-5 transition-colors hover:text-accent">
    <span className="text-sm font-semibold text-muted">{label}</span>
    <span className="mt-1 block text-lg font-bold">{children}</span>
  </a>
)

export default function Enquire() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-5xl font-extrabold leading-none sm:text-8xl">{cta.heading}</h2>
          <p className="mt-6 max-w-md text-lg text-muted">{cta.body}</p>
          <a href={school.applyUrl} className="mt-8 inline-block rounded-full bg-accent px-8 py-4 text-lg font-bold text-on-accent transition-transform hover:scale-105">
            Apply now
          </a>
        </Reveal>

        <Reveal delay={0.12}>
          <Item label="Admission helpline" href={`tel:${school.phone}`}>{school.phoneDisplay}</Item>
          <Item label="Email" href={`mailto:${school.email}`}>{school.email}</Item>
          <Item label="Landline" href={`tel:${school.landlines[0]}`}>{school.landlines.join(', ')}</Item>
          <Item label="Campus" href={school.mapUrl}>{school.address}</Item>
        </Reveal>
      </div>
    </section>
  )
}
