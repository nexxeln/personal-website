import React, { useEffect } from 'react'
import Head from 'next/head'
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
    <div>
      <Head>
        <title>Shoubhit Dash | Home</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Shoubhit Dash aka nexxel's personal website."
        />
        {/* TODO: Add image */}
        <meta name="og:image" content="http://ia.media-imdb.com/rock.jpg" />
      </Head>
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
    </div>
  )
}
