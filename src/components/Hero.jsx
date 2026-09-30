import HeroAtmosphere from './HeroAtmosphere'
import HeroController from './HeroController'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-end scroll-mt-20">
      <HeroAtmosphere />
      <div className="absolute top-20 left-1/2 z-10 w-[14.5rem] -translate-x-1/2 md:top-[15%] md:right-[7%] md:left-auto md:w-[19.5rem] md:translate-x-0 lg:top-[13%] lg:right-[8%] lg:w-[23rem]">
        <HeroController />
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-5 pt-28 pb-16 md:px-8 md:pb-24">
        <p className="reveal text-[0.72rem] tracking-[0.28em] text-violet uppercase">Independent studio</p>
        <h1 className="reveal delay-1 mt-6 max-w-4xl font-display text-[2.7rem] leading-[0.96] font-semibold tracking-[-0.03em] sm:text-6xl lg:text-[5.4rem]">
          WE TURN
          <br />
          GREAT IDEAS
          <br />
          INTO <span className="text-violet">DIGITAL</span>
          <br />
          EXPERIENCES.
        </h1>
        <p className="reveal delay-2 mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          İDEONİX is an independent game and technology studio creating original experiences through
          creativity, technology and imagination.
        </p>
        <div className="reveal delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#games"
            className="inline-flex h-12 items-center justify-center bg-paper px-6 text-[0.75rem] tracking-[0.16em] text-ink uppercase transition-colors hover:bg-violet hover:text-paper"
          >
            Explore games
          </a>
          <a
            href="#about"
            className="inline-flex h-12 items-center justify-center border border-line px-6 text-[0.75rem] tracking-[0.16em] uppercase transition-colors hover:border-paper"
          >
            About İDEONİX
          </a>
        </div>
      </div>
    </section>
  )
}
