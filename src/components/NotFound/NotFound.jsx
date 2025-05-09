import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-900 tracking-widest">
          404
        </h1>
        <div className="bg-blue-500 px-2 text-sm rounded rotate-12 absolute mt-[-2rem] ml-[5rem] text-white">
          Page Not Found
        </div>
        <p className="text-gray-500 mt-6 mb-8">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
