import { useEffect, useState } from 'react'
import BrandMark from './BrandMark'
import { navLinks, sectionHref, site } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      let current = 'home'
      for (const link of navLinks) {
        const section = document.getElementById(link.id)
        if (section && section.getBoundingClientRect().top <= 96) {
          current = link.id
        }
      }
      setActive(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-ink' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <a href={sectionHref('home')} className="inline-flex items-center gap-2.5 text-paper">
          <BrandMark className="h-7 w-7" />
          <span className="font-display text-[1.05rem] font-semibold tracking-[0.18em]">{site.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={sectionHref(link.id)}
              className={`text-[0.78rem] tracking-[0.16em] uppercase transition-colors ${
                active === link.id ? 'text-paper' : 'text-muted hover:text-paper'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="relative h-10 w-10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span
            className={`absolute left-2 block h-px w-6 bg-paper transition-transform duration-300 ${
              open ? 'top-5 rotate-45' : 'top-3.5'
            }`}
          />
          <span
            className={`absolute top-5 left-2 block h-px w-6 bg-paper transition-opacity duration-300 ${
              open ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-2 block h-px w-6 bg-paper transition-transform duration-300 ${
              open ? 'top-5 -rotate-45' : 'top-6.5'
            }`}
          />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`overflow-hidden border-line bg-ink transition-[max-height,border-color] duration-300 md:hidden ${
          open ? 'max-h-80 border-t' : 'max-h-0 border-t-transparent'
        }`}
        aria-label="Mobile"
      >
        <div className="flex flex-col px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={sectionHref(link.id)}
              className="border-b border-line py-4 text-sm tracking-[0.16em] uppercase"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
