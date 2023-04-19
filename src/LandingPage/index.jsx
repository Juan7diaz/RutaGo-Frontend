import Hero from './components/hero/Hero.jsx'
import About from './components/about/About.jsx'
import FrequentQuestions from './components/frequentQuestions/FrequentQuestions.jsx'
import Testimonials from './components/testimonials/Testimonials.jsx'
import NavbarAndFooterLayout from '../layout/NavbarAndFooterLayout.jsx'

const index = () => {
  return (
    <div>
      <NavbarAndFooterLayout>
        <Hero />
        <About />
        <FrequentQuestions />
        <Testimonials />
      </NavbarAndFooterLayout>
    </div>
  )
}

export default index
