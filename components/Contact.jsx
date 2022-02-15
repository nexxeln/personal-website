import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function Contact() {
  return (
    <div
      className="m-auto w-full pt-36 pb-10 text-center font-mono"
      id="contactme"
    >
      <h1 className="text-4xl">want to work together?</h1>
      <a href="mailto:shoubhit2005@gmail.com">
        <span className="mt-6 inline-block w-auto cursor-pointer bg-black py-4 px-7 font-mono text-base text-white md:text-xl">
          <div className="flex flex-row items-center">
            <span className="mr-3 ">Get in touch</span>
            <FaArrowRight color="white" />
          </div>
        </span>
      </a>
    </div>
  )
}

export default Contact
