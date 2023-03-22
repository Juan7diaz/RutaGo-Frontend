import Hero from './components/hero/Hero.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import About from './components/about/About.jsx'
import FrequentQuestions from './components/frequentQuestions/FrequentQuestions.jsx'
import Testimonials from './components/testimonials/Testimonials.jsx'

const index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <FrequentQuestions />
      <Testimonials />
    </div>
  )
}

export default index
