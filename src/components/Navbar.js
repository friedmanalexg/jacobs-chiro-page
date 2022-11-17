import React from 'react'
import logo from "../assets/logo.jpeg";


const Navbar = () => {

  return (
    <div>
        <header aria-label="Site Header" class="bg-white dark:bg-gray-900">
            <div
                class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8"
            >
                <a href='/'>
                    <span class="sr-only">Home</span>
                    <span className="inline-flex">
                        
                    <img
                    src={logo}
                    alt='lion logo'
                    className='logo'
                    />
                    </span>
                </a>
                

                <div class="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Site Nav" class="hidden md:block">
                    <ul class="flex items-center gap-6 text-sm">
                    <li>
                        <a
                        class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="/about"
                        >
                        About
                        </a>
                    </li>

                    <li>
                        <a
                        class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="/services"
                        >
                        Services
                        </a>
                    </li>

                    <li>
                        <a
                        class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                        href="/contact"
                        >
                        Contact
                        </a>
                    </li>

                    
                    </ul>
                </nav>

                <div class="flex items-center gap-4">
                    

                    <button
                    class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 md:hidden"
                    >
                    <span class="sr-only">Toggle menu</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
            </header>

    </div>
  )
}

export default Navbar