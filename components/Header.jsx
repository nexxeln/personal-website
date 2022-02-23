import React from 'react'
import { ImHome } from 'react-icons/im'
import { BsChevronDoubleLeft } from 'react-icons/bs'
import Link from 'next/link'

function Header(props) {
  if (props.index === false) {
    return (
      <div>
        <div className="px-12 py-4">
          <nav className="header-border relative mx-auto flex h-20 flex-wrap items-center justify-center bg-black">
            <Link href="/code_art" className="link">
              <h1 className="header-text cursor-pointer bg-gradient-to-l from-[#e4572e] to-[#0bbcd6] bg-clip-text font-manrope text-3xl text-transparent sm:text-5xl">
                code art.
              </h1>
            </Link>
            <h1 className="absolute right-2 bottom-1 cursor-pointer pl-2 font-manrope text-2xl text-white transition-colors duration-300 hover:text-[#e4572e]">
              <Link href="/">
                <ImHome />
              </Link>
            </h1>
            <h1 className="absolute -left-0 bottom-1 cursor-pointer pl-2 font-manrope text-2xl text-white transition-colors duration-300 hover:text-[#0bbcd6]">
              <Link href="/code_art">
                <BsChevronDoubleLeft />
              </Link>
            </h1>
          </nav>
        </div>
      </div>
    )
  } else if (props.index === true) {
    return (
      <div>
        <div className="px-12 py-4">
          <nav className="header-border relative mx-auto flex h-20 flex-wrap items-center justify-center bg-black">
            <h1 className="header-text cursor-pointer bg-gradient-to-l from-[#e4572e] to-[#0bbcd6] bg-clip-text font-manrope text-3xl text-transparent sm:text-5xl">
              code art.
            </h1>

            <h1 className="absolute right-2 bottom-1 cursor-pointer pl-2 font-manrope text-2xl text-white transition-colors duration-300 hover:text-[#e4572e]">
              <Link href="/">
                <ImHome />
              </Link>
            </h1>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
