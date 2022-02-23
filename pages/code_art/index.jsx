import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Header from '../../components/Header'
import Preview from '../../components/Preview'

function Code_art() {
  useEffect(() => {
    Aos.init({
      once: true,
    })
  })

  return (
    <div>
      <Head>
        <title>Shoubhit Dash | Code Art</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="min-h-screen overflow-x-hidden bg-black">
        <Header index={true} />
        <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="400">
          <Preview
            position="left"
            image="https://raw.githubusercontent.com/nexxeln/pycasso/main/rectangle_art/rectangle_examples/rectangle_2.png"
            title="rekt-angles"
            description={
              <div>
                yes those are rectangles and yes i know im so good with names.
                this was also made using python and the{' '}
                <a
                  href="https://python-pillow.org/"
                  target={'_blank'}
                  className="text-[#e4572e] transition-colors duration-300 hover:text-[#0bbcd6]"
                >
                  pillow
                </a>{' '}
                library. there are 10 rectangles all randomly coloured and
                randomly placed. i had never seen something like this in
                generative art scene before and i think its quite unique. i like
                the glitchy look of it.
              </div>
            }
          />
        </div>
        <div data-aos="fade-down" data-aos-duration="800" data-aos-delay="400">
          <Preview
            position="right"
            image="https://raw.githubusercontent.com/nexxeln/pycasso/main/line_art/line_examples/image_10.png"
            title="lines"
            description={
              <div>
                i know, very creative name. this is some line art created using
                python and the{' '}
                <a
                  href="https://python-pillow.org/"
                  target={'_blank'}
                  className="text-[#0bbcd6] transition-colors duration-300 hover:text-[#e4572e]"
                >
                  pillow
                </a>{' '}
                library. all the colours, angles and lines are randomised.
                usually pillow is used for image processing and manipulation. i
                thought doing image generation with pillow was quite unique and
                i'm very happy with how it came out. this was also my first time
                making generative art.
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Code_art
