import React from 'react'
import { FaGithub, FaDiscord, FaEnvelope } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

function Footer() {
  return (
    <div className="border-t-2 py-5">
      <div className="mt-4 flex justify-center">
        <a
          className="m-1 rounded-full p-1 text-xl text-black transition-colors duration-300 hover:bg-black hover:text-white sm:m-2 sm:p-2"
          href="https://discord.com/users/758578599715405824"
        >
          <FaDiscord />
        </a>
        <a
          className="m-1 rounded-full p-1 text-xl text-black transition-colors duration-300 hover:bg-black hover:text-white sm:m-2 sm:p-2"
          href="https://github.com/nexxeln"
        >
          <FaGithub />
        </a>
        <a
          className="m-1 rounded-full p-1 text-xl text-black transition-colors duration-300 hover:bg-black hover:text-white sm:m-2 sm:p-2"
          href="mailto:shoubhit2005@gmail.com"
        >
          <FaEnvelope />
        </a>
      </div>
      <div className="mt-4 flex justify-center">
        <p className="flex items-center font-mono text-black">
          made with &lt;3 using &nbsp;
          <SiNextdotjs className="h-6 w-6 rounded-full transition duration-300" />
        </p>
      </div>
    </div>
  )
}

export default Footer
