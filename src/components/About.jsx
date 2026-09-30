import { site } from '../data/site'
import { useInView } from '../hooks/useInView'

const themes = [
  {
    index: '01',
    title: 'Creativity',
    text: 'Ideas with a point of view, built rather than decorated.',
  },
  {
    index: '02',
    title: 'Technology',
    text: 'Systems chosen because they serve the experience.',
  },
  {
    index: '03',
    title: 'Imagination',
    text: 'Room for worlds and tools that do not exist yet.',
  },
  {
    index: '04',
    title: 'Innovation',
    text: 'New forms, pursued quietly and finished properly.',
  },
]

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="scroll-mt-20 border-t border-line">
      <div
        ref={ref}
        className={`section-in mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32 ${inView ? 'is-visible' : ''}`}
      >
        <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] md:text-6xl">ABOUT İDEONİX</h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
          <div className="max-w-xl space-y-6 text-base leading-relaxed text-muted md:text-lg">
            <p>
              İDEONİX is an independent studio working in games and technology. We take creative ideas
              and turn them into digital experiences — playable, usable, and specific.
            </p>
            <p>
              The studio stays small on purpose. Original games sit beside the technology that makes
              them possible, shaped by creativity, imagination, and a preference for work that feels
              considered.
            </p>
          </div>
          <p className="font-display text-3xl leading-[1.05] font-semibold tracking-[-0.03em] text-paper sm:text-4xl lg:text-5xl">
            {site.tagline}
          </p>
        </div>

        <ul className="mt-20 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {themes.map((theme) => (
            <li key={theme.title} className="bg-ink px-6 py-8">
              <p className="text-[0.72rem] tracking-[0.18em] text-violet">{theme.index}</p>
              <h3 className="mt-5 font-display text-2xl font-semibold">{theme.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{theme.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
