import React from 'react'
import logo from '../assets/svglogoresize.svg'

const Navbar = () => {
  return (
    <nav class="flex items-center justify-between px-4 py-3 bg-gray-800">
  <div class="flex items-center w-24 h-24">
    <img src={logo} alt="Logo" class="object-contain w-24 max-h-72"/>
  </div>
  <div class="flex items-center">
    <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Home</a>
    <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">About</a>
    <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Services</a>
    <a href="#" class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Contact</a>
  </div>
</nav>

  )
}

export default Navbar