import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <div className="max-w-4xl px-4 pt-8 mx-auto">
      <p className="font-mono text-2xl text-left text-black md:text-4xl">hi</p>
      <p className="mt-4 font-mono text-base leading-relaxed text-left text-gray-600 sm:text-xl">
        i'm a student currently in 12th grade. i'm aspiring to get my bachelors
        degree in computer science. i'm a self-taught developer and am a huge
        believer in open-source and open-access. i also like making{' '}
        <Link href="/code_art" passHref>
          <a>
            <span className="text-transparent transition-opacity duration-500 cursor-pointer bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text opacity-80 hover:bg-gradient-to-l hover:opacity-100">
              art with code.
            </span>
          </a>
        </Link>
      </p>
    </div>
  )
}

export default About
