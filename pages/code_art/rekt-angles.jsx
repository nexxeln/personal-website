import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import ImageSlider from '../../components/ImageSlider'

function lines() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <Head>
        <title>Shoubhit Dash | Code Art</title>
      </Head>
      <Header index={false} />
      <div className="flex flex-col sm:flex-row">
        <ImageSlider
          images={[
            'https://raw.githubusercontent.com/nexxeln/pycasso/main/rectangle_art/rectangle_examples/rectangle_2.png',
            'https://raw.githubusercontent.com/nexxeln/pycasso/main/rectangle_art/rectangle_examples/rectangle_0.png',
            'https://raw.githubusercontent.com/nexxeln/pycasso/main/rectangle_art/rectangle_examples/rectangle_3.png',
            'https://raw.githubusercontent.com/nexxeln/pycasso/main/rectangle_art/rectangle_examples/rectangle_5.png',
            'https://raw.githubusercontent.com/nexxeln/pycasso/main/rectangle_art/rectangle_examples/rectangle_6.png',
            'https://raw.githubusercontent.com/nexxeln/pycasso/main/rectangle_art/rectangle_examples/rectangle_8.png',
            'https://raw.githubusercontent.com/nexxeln/pycasso/main/rectangle_art/rectangle_examples/rectangle_9.png',
            'https://raw.githubusercontent.com/nexxeln/pycasso/main/rectangle_art/rectangle_examples/rectangle_11.png',
            'https://raw.githubusercontent.com/nexxeln/pycasso/main/rectangle_art/rectangle_examples/rectangle_12.png',
            'https://raw.githubusercontent.com/nexxeln/pycasso/main/rectangle_art/rectangle_examples/rectangle_12.png',
          ]}
        />
        <div className="flex flex-col px-12 pt-4">
          <h1 className="font-manrope text-6xl text-teal-500">rekt-angles</h1>
          <p className="text-container my-12 px-3 py-4 font-manrope text-xl text-[#d6f8d6]">
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
          </p>
        </div>
      </div>
    </div>
  )
}

export default lines
