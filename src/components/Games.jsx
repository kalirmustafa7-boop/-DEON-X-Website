import { forthcomingSlots, games } from '../data/games'
import { useInView } from '../hooks/useInView'

export default function Games() {
  const [ref, inView] = useInView()

  return (
    <section id="games" className="scroll-mt-20 border-t border-line">
      <div
        ref={ref}
        className={`section-in mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32 ${inView ? 'is-visible' : ''}`}
      >
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] md:text-6xl">OUR GAMES</h2>
          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted md:block">
            Original work, released with care. Everything else stays unnamed until it is ready.
          </p>
        </div>

        <ul className="mt-14 space-y-6">
          {games.map((game) => (
            <li key={game.id} id={game.id} className="scroll-mt-28 border border-line bg-ink-raised">
              <article className="grid md:grid-cols-[minmax(0,280px)_1fr]">
                <div className="flex items-center justify-center border-b border-line bg-[#0c0c10] p-8 md:border-r md:border-b-0 md:p-10">
                  <img
                    src={game.logo}
                    alt={game.logoAlt}
                    className="h-44 w-44 rounded-[26%] object-contain md:h-52 md:w-52"
                  />
                </div>
                <div className="flex flex-col justify-between p-7 md:p-10">
                  <div>
                    <p className="text-[0.72rem] tracking-[0.2em] text-violet uppercase">{game.platform}</p>
                    <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
                      {game.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">{game.description}</p>
                  </div>
                  <a
                    href={game.href ?? `#${game.id}`}
                    className="mt-8 inline-flex h-12 w-fit items-center border border-line px-6 text-[0.75rem] tracking-[0.16em] uppercase transition-colors hover:border-paper hover:text-violet"
                  >
                    View game
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <p className="text-[0.72rem] tracking-[0.22em] text-muted uppercase">Forthcoming</p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {forthcomingSlots.map((slot, index) => (
              <li key={slot.id} className="border border-dashed border-line px-6 py-8">
                <p className="text-[0.72rem] tracking-[0.18em] text-muted uppercase">0{index + 2}</p>
                <p className="mt-4 font-display text-2xl text-paper/80">To be announced</p>
                <p className="mt-2 text-sm text-muted">Not released. A place held for the next title.</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
