import Link from 'next/link'
import React from 'react'

function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 pt-8">
      <p className="text-left font-mono text-2xl text-black md:text-4xl">hi</p>
      <p className="mt-4 text-left font-mono text-base leading-relaxed text-gray-600 sm:text-xl">
        i'm a student currently in 11th grade. i'm aspiring to get my bachelors
        degree in computer science. i'm a self-taught developer and am a huge
        believer in open-source and open-access. i also like making{' '}
        <Link href="/code_art" passHref>
          <a>
            <span className="cursor-pointer bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text  text-transparent  opacity-80 transition-opacity duration-500 hover:bg-gradient-to-l hover:opacity-100">
              art with code.
            </span>
          </a>
        </Link>
      </p>
    </div>
  )
}

export default About
