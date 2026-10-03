import { footerLinks, school } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 pb-28 pt-14 sm:px-8 lg:pb-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold">{school.name}</p>
          <address className="mt-3 max-w-xs text-sm not-italic leading-relaxed text-muted">{school.address}</address>
        </div>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm font-semibold">
          {footerLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-muted transition-colors hover:text-ink">{l.label}</a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold md:justify-end">
          {school.social.map((s) => (
            <li key={s.label}>
              <a href={s.href} className="text-muted transition-colors hover:text-ink" rel="noopener noreferrer" target="_blank">{s.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <p className="mx-auto mt-12 max-w-7xl text-sm text-muted">
        Copyright © 2026 Tulas International School, Dehradun | All Rights Reserved
      </p>
    </footer>
  )
}
