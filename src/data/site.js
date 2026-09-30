export const site = {
  name: 'İDEONİX',
  domain: 'ideonix.app',
  email: 'hello@ideonix.app',
  tagline: 'IDEAS. TECHNOLOGY. EXPERIENCES.',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'games', label: 'Games' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export function sectionHref(id) {
  const onHome = window.location.pathname === '/'
  return onHome ? `#${id}` : `/#${id}`
}
