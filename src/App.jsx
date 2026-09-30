import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Games from './components/Games'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Privacy from './components/Privacy'

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  if (path === '/privacy') {
    return <Privacy />
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Games />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
