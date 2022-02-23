import React from 'react'
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFastapi,
  SiMongodb,
  SiProcessingfoundation,
} from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'

function Skills() {
  return (
    <div className="justify-left mx-auto max-w-4xl py-12" id="skills">
      <p className="px-4 pt-4 text-left font-mono text-2xl text-black sm:text-4xl">
        tech im in love with
      </p>
      <div className="flex flex-wrap justify-center  pt-2">
        <div className="m-6 flex w-40  flex-col overflow-hidden rounded-xl bg-white p-10 shadow-2xl sm:w-52">
          <FaReact color="#61dbfb" className="mx-auto text-4xl " />
          <p className="mt-6 text-center text-xl font-semibold">React</p>
        </div>
        <div className="m-6 flex w-40  flex-col overflow-hidden rounded-xl bg-white p-10 shadow-2xl sm:w-52">
          <SiNextdotjs color="#000000" className="mx-auto text-4xl " />
          <p className="mt-6 text-center text-xl font-semibold">Next JS</p>
        </div>
        <div className="m-6 flex w-40  flex-col overflow-hidden rounded-xl bg-white p-10 shadow-2xl sm:w-52">
          <FaNodeJs color="#68a063" className="mx-auto text-4xl " />
          <p className="mt-6 text-center text-xl font-semibold">Node JS</p>
        </div>
        <div className="m-6 flex w-40  flex-col overflow-hidden rounded-xl bg-white p-10 shadow-2xl sm:w-52">
          <SiTailwindcss color="#00C0A3" className="mx-auto text-4xl " />
          <p className="mt-6 text-center text-xl font-semibold">Tailwind CSS</p>
        </div>
        <div className="m-6 flex w-40  flex-col overflow-hidden rounded-xl bg-white p-10 shadow-2xl sm:w-52">
          <FaPython color="#306998" className="mx-auto text-4xl " />
          <p className="mt-6 text-center text-xl font-semibold">Python</p>
        </div>
        <div className="m-6 flex w-40  flex-col overflow-hidden rounded-xl bg-white p-10 shadow-2xl sm:w-52">
          <SiFastapi color="#4dc0b5" className="mx-auto text-4xl " />
          <p className="mt-6 text-center text-xl font-semibold">FastAPI</p>
        </div>
        <div className="m-6 flex w-40  flex-col overflow-hidden rounded-xl bg-white p-10 shadow-2xl sm:w-52">
          <SiMongodb color="#4db33d" className="mx-auto text-4xl " />
          <p className="mt-6 text-center text-xl font-semibold">Mongo DB</p>
        </div>
        <div className="m-6 flex w-40  flex-col overflow-hidden rounded-xl bg-white p-10 shadow-2xl sm:w-52">
          <GrMysql color="#00758f" className="mx-auto text-4xl " />
          <p className="mt-6 text-center text-xl font-semibold">MySQL</p>
        </div>
        <div className="m-6 flex w-40  flex-col overflow-hidden rounded-xl bg-white p-10 shadow-2xl sm:w-52">
          <SiProcessingfoundation
            color="#00008B"
            className="mx-auto text-4xl "
          />
          <p className="mt-6 text-center text-xl font-semibold">Processing</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
