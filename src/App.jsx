import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FadeIn from './components/FadeIn'

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 pt-16">
        <Hero />
        <FadeIn><About /></FadeIn>
        <FadeIn><Skills /></FadeIn>
        <Projects />
        <FadeIn><Experience /></FadeIn>
        <FadeIn><Contact /></FadeIn>
      </main>
      <Footer />
    </>
  )
}

export default App