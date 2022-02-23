import React, { useEffect, useState } from 'react'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs'

function ImageSlider({ images }) {
  useEffect(() => {
    //preloading image
    images.forEach((image) => {
      const img = new Image()
      img.src = image
    })
  }, [])

  const [index, setIndex] = useState(0)

  const slideRight = () => {
    setIndex((index + 1) % images.length)
  }

  const slideLeft = () => {
    const nextIndex = index - 1
    if (nextIndex < 0) {
      setIndex(images.length - 1)
    } else {
      setIndex(nextIndex)
    }
  }

  return (
    images.length > 0 && (
      <div className="min-w-[23rem] pt-4 sm:min-w-[30rem]">
        <div className="px-12 pt-2">
          <img className="image-border-l" src={images[index]} alt={index} />
          <div className="flex items-center justify-center py-3">
            <button
              className="mr-6 w-fit rounded-sm bg-[#d6f8d6] px-2 py-2 opacity-80 hover:opacity-100"
              onClick={slideLeft}
            >
              <BsChevronDoubleLeft />
            </button>
            <button
              className="ml-6 w-fit rounded-sm bg-[#d6f8d6] px-2 py-2 opacity-80 hover:opacity-100"
              onClick={slideRight}
            >
              <BsChevronDoubleRight />
            </button>
          </div>
        </div>
      </div>
    )
  )
}

export default ImageSlider
