import React from 'react'
import logo from '../assets/svglogo.svg'

const Navbar = () => {
  return (
    
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-black">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" class="flex items-center">
            <img src={logo} class="h-34" alt="lion logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Jacobs Chiropractic</span>
        </a>
        <div class="w-full md:block md:w-auto" id="navbar-default">
        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 dark:text-white" aria-current="page">Home</a>
            </li>
            <li>
            </li>
            <a href="#" class="block py-2 pl-3 pr-4 text-green-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-gray-200 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-green-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-gray-200 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
            </li>
            <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-green-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-gray-200 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>

  )
}

// export default Navbar