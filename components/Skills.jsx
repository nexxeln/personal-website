import React from 'react'
import { FaReact, FaNodeJs, FaPython, FaRust } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs, SiMongodb } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { DiGo } from 'react-icons/di'

function Skills() {
  return (
    <div className="max-w-4xl py-12 mx-auto justify-left" id="skills">
      <p className="px-4 pt-4 font-mono text-2xl text-left text-black sm:text-4xl">
        tech im in love with
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#61dbfb" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-semibold text-center">React</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiNextdotjs color="#000000" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-semibold text-center">Next JS</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaNodeJs color="#68a063" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-semibold text-center">Node JS</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTailwindcss color="#00C0A3" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-semibold text-center">Tailwind CSS</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaPython color="#306998" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-semibold text-center">Python</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaRust color="#000000" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-semibold text-center">Rust</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiMongodb color="#4db33d" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-semibold text-center">Mongo DB</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <GrMysql color="#00758f" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-semibold text-center">MySQL</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <DiGo color="#007D9C" className="mx-auto text-4xl " />
          <p className="mt-6 text-xl font-semibold text-center">Go</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
