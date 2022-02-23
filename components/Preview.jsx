import Link from 'next/link'
import React from 'react'

function Preview(props) {
  if (props.position === 'left') {
    return (
      <div className="preview-container flex px-12 py-12">
        <img className="image-border-l w-96" src={props.image} alt="1" />
        <div className="flex flex-col py-12 px-6">
          <Link
            href={`/code_art/${
              props.title.includes(' ')
                ? props.title.replace(' ', '_')
                : props.title
            }`}
            className="flex max-w-fit justify-start"
          >
            <h1 className="cursor-pointer px-4 font-manrope text-6xl text-teal-500 hover:underline">
              {props.title}
            </h1>
          </Link>
          <h3 className="px-4 py-4 font-manrope text-xl text-[#d6f8d6]">
            {props.description}
          </h3>
        </div>
      </div>
    )
  } else if (props.position === 'right') {
    return (
      <div className="preview-container flex px-12 py-12">
        <div className="flex flex-col py-12 px-6">
          <h1 className="px-4 text-right font-manrope text-6xl text-[#e4572e]">
            <Link
              href={`/code_art/${
                props.title.includes(' ')
                  ? props.title.replace(' ', '_')
                  : props.title
              }`}
              className="w-fit"
            >
              <span className="cursor-pointer hover:underline">
                {props.title}
              </span>
            </Link>
          </h1>
          <h3 className="px-4 py-4 text-right font-manrope text-xl text-[#d6f8d6]">
            {props.description}
          </h3>
        </div>
        <img className="image-border-r w-96" src={props.image} alt="1" />
      </div>
    )
  }
}

export default Preview
// #e4572e make border this color and links this color, teal will be headings. this can be alternated wooooo
