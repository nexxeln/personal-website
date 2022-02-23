import React from 'react'
import { FaGithub, FaDiscord, FaEnvelope } from 'react-icons/fa'

function Card() {
  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-xs flex-col justify-center rounded-xl bg-white p-3 shadow-2xl">
        <div>
          <img
            className="mx-auto w-32 rounded-full shadow-xl drop-shadow-sm"
            src="https://i.imgur.com/qnlkCpy.jpeg"
            alt="profile face"
          />
        </div>
        <div className="mt-5 text-center">
          <p className="font-mono text-xl font-semibold text-gray-900 sm:text-2xl">
            Shoubhit Dash
          </p>
          <p className="inline-block w-auto border-b-2 px-5 pt-2 pb-4 font-mono text-xs text-gray-600 sm:text-base">
            Developer and Creative Coder
          </p>
          <div className="align-center mt-4 flex justify-center">
            <a
              className="m-1 rounded-full p-1 text-xl text-[#7289d9] transition-colors duration-300 hover:bg-[#7289d9] hover:text-white sm:m-2 sm:p-2"
              href="https://discord.com/users/758578599715405824"
            >
              <FaDiscord />
            </a>
            <a
              className="m-1 rounded-full p-1 text-xl text-gray-800 transition-colors duration-300 hover:bg-gray-800 hover:text-white sm:m-2 sm:p-2"
              href="https://github.com/nexxeln"
            >
              <FaGithub />
            </a>
            <a
              className="m-1 rounded-full p-1 text-xl text-blue-600 transition-colors duration-300 hover:bg-blue-600 hover:text-white sm:m-2 sm:p-2"
              href="mailto:shoubhit2005@gmail.com"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
