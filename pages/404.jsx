import React from 'react'

function Custom404() {
  return (
    <div className="h-screen bg-black">
      <h1 className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text px-4 pt-36 text-center font-manrope text-4xl text-transparent sm:text-8xl">
        whoops!
      </h1>
      <p className="py-8 px-4 text-center font-manrope text-white sm:text-3xl">
        looks like the link is broken or doesn't exist.
      </p>
      <p className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text py-8 px-4 text-center font-manrope text-transparent opacity-75 transition-opacity duration-300 hover:bg-gradient-to-l hover:opacity-100 sm:text-3xl">
        <a href="/">back to home.</a>
      </p>
    </div>
  )
}

export default Custom404
