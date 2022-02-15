import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import About from '../components/About'
import Card from '../components/Card'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Skills from '../components/Skills'

export default function Home() {
  useEffect(() => {
    Aos.init({
      once: true,
    })
  })
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-3 sm:px-5">
      <div data-aos="fade-down" data-aos-duration="800">
        <Card />
      </div>
      <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="400">
        <About />
      </div>
      <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="400">
        <Skills />
      </div>
      <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="400">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
