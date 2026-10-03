import { useCallback, useEffect, useRef, useState } from 'react'
import Reveal from './ui/Reveal'
import { community } from '../data/content'

const initials = (name) => name.split(' ').map((w) => w[0]).slice(0, 2).join('')

function PersonCard({ person }) {
  const [failed, setFailed] = useState(false)
  return (
    <li data-cursor className="group w-[78vw] max-w-sm shrink-0 snap-start select-none sm:w-80">
      <div className="grid aspect-[3/4] place-items-center overflow-hidden rounded-3xl bg-surface">
        {failed ? (
          // Fallback if the hotlinked photo is unavailable
          <span className="font-display text-6xl font-extrabold text-accent">{initials(person.name)}</span>
        ) : (
          <img
            src={person.img}
            alt={person.name}
            loading="lazy"
            draggable={false}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <h3 className="mt-4 font-display text-2xl font-bold">{person.name}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted">{person.role}</p>
    </li>
  )
}

const Arrow = ({ dir, disabled, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={dir === 'prev' ? 'Previous' : 'Next'}
    className="grid size-12 place-items-center rounded-full border border-line transition-colors hover:bg-accent hover:text-on-accent disabled:pointer-events-none disabled:opacity-30"
  >
    <svg viewBox="0 0 24 24" className={`size-5 ${dir === 'prev' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </button>
)

export default function Community() {
  const track = useRef(null)
  const drag = useRef({ active: false, startX: 0, startScroll: 0 })
  const [state, setState] = useState({ progress: 0, canPrev: false, canNext: true })
  const [dragging, setDragging] = useState(false)

  const update = useCallback(() => {
    const el = track.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setState({
      progress: max > 0 ? el.scrollLeft / max : 0,
      canPrev: el.scrollLeft > 4,
      canNext: el.scrollLeft < max - 4,
    })
  }, [])

  useEffect(() => {
    update()
    addEventListener('resize', update)
    return () => removeEventListener('resize', update)
  }, [update])

  // Arrow buttons move one card (plus gap) at a time
  const step = (dir) => {
    const el = track.current
    const card = el.querySelector('li')
    el.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: 'smooth' })
  }

  // Mouse drag-to-scroll (touch already scrolls natively)
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return
    drag.current = { active: true, startX: e.clientX, startScroll: track.current.scrollLeft }
    setDragging(true)
  }
  const onPointerMove = (e) => {
    if (!drag.current.active) return
    track.current.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX)
  }
  const endDrag = () => {
    drag.current.active = false
    setDragging(false)
  }

  return (
    <section id="community" className="py-24">
      <Reveal className="mx-auto mb-10 flex max-w-7xl items-end justify-between gap-6 px-5 sm:px-8">
        <h2 className="font-display text-4xl font-bold sm:text-6xl">{community.heading}</h2>
        <div className="flex gap-2">
          <Arrow dir="prev" disabled={!state.canPrev} onClick={() => step(-1)} />
          <Arrow dir="next" disabled={!state.canNext} onClick={() => step(1)} />
        </div>
      </Reveal>

      <ul
        ref={track}
        onScroll={update}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        aria-label="Influential personalities"
        tabIndex={0}
        className={`hide-scrollbar flex gap-5 overflow-x-auto px-5 pb-4 sm:px-8 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))] ${
          dragging ? 'cursor-grabbing' : 'cursor-grab snap-x snap-mandatory scroll-smooth'
        }`}
      >
        {community.people.map((p) => (
          <PersonCard key={p.name} person={p} />
        ))}
      </ul>

      {/* Progress rail */}
      <div className="mx-auto mt-6 max-w-7xl px-5 sm:px-8" aria-hidden="true">
        <div className="h-1 overflow-hidden rounded-full bg-line">
          <div
            className="h-full origin-left rounded-full bg-accent transition-transform duration-150"
            style={{ width: '100%', transform: `scaleX(${Math.max(0.08, state.progress)})` }}
          />
        </div>
      </div>
    </section>
  )
}