import { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { site } from '../data/site'

export default function Privacy() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Privacy Policy — İDEONİX'
    return () => {
      document.title = previousTitle
    }
  }, [])

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-5 pt-28 pb-20 md:px-8 md:pt-36 md:pb-28">
        <p className="text-[0.72rem] tracking-[0.22em] text-violet uppercase">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-sm tracking-[0.04em] text-muted">Last updated: September 30, 2026</p>

        <div className="mt-14 space-y-12 text-base leading-relaxed text-muted md:text-lg">
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-paper">Overview</h2>
            <p>
              This Privacy Policy describes how {site.name} handles information in the mobile game Wood
              Master: Furniture Craft (the “Game”).
            </p>
            <p>The Game does not collect personal information.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-paper">
              Information we do not collect
            </h2>
            <p>
              The Game does not collect your name, email address, phone number, physical address,
              location, or similar personal information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-paper">Accounts</h2>
            <p>The Game does not create a user account.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-paper">
              Sale and advertising
            </h2>
            <p>We do not sell personal information.</p>
            <p>We do not share personal information for advertising purposes.</p>
          </section>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold tracking-[-0.03em] text-paper">Contact</h2>
            <p>If you have a question about this Privacy Policy, email us at</p>
            <a
              href={`mailto:${site.email}`}
              className="inline-block font-display text-xl break-all text-paper underline decoration-violet/70 decoration-1 underline-offset-8 transition-colors hover:text-violet md:text-2xl"
            >
              {site.email}
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
