import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Games from './components/Games'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

export default function App() {
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
