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
            'https://github.com/nexxeln/pycasso/blob/main/line_art/line_examples/image_10.png?raw=true',
            'https://github.com/nexxeln/pycasso/blob/main/line_art/line_examples/image_3.png?raw=true',
            'https://github.com/nexxeln/pycasso/blob/main/line_art/line_examples/image_11.png?raw=true',
            'https://github.com/nexxeln/pycasso/blob/main/line_art/line_examples/image_12.png?raw=true',
            'https://github.com/nexxeln/pycasso/blob/main/line_art/line_examples/image_13.png?raw=true',
            'https://github.com/nexxeln/pycasso/blob/main/line_art/line_examples/image_14.png?raw=true',
            'https://github.com/nexxeln/pycasso/blob/main/line_art/line_examples/image_15.png?raw=true',
            'https://github.com/nexxeln/pycasso/blob/main/line_art/line_examples/image_16.png?raw=true',
            'https://github.com/nexxeln/pycasso/blob/main/line_art/line_examples/image_17.png?raw=true',
            'https://github.com/nexxeln/pycasso/blob/main/line_art/line_examples/image_18.png?raw=true',
          ]}
        />
        <div className="flex flex-col px-12 pt-4">
          <h1 className="font-manrope text-6xl text-teal-500">lines</h1>
          <p className="text-container my-12 px-3 py-4 font-manrope text-xl text-[#d6f8d6]">
            i know, very creative name. this is some line art created using
            python and the{' '}
            <a
              href="https://python-pillow.org/"
              target={'_blank'}
              className="text-[#e4572e] transition-colors duration-300 hover:text-[#0bbcd6]"
            >
              pillow
            </a>{' '}
            library. all the colours, angles and lines are randomised. usually
            pillow is used for image processing and manipulation. i thought
            doing image generation with pillow was quite unique and i'm very
            happy with how it came out. this was also my first time making
            generative art.
          </p>
        </div>
      </div>
    </div>
  )
}

export default lines
