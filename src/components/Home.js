import React from 'react'

const Home = () => {
  return (
    <section>
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="Party"
          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="lg:py-24">
        <h2 class="text-3xl font-bold text-stone-800 sm:text-4xl">Welcome to Jacob's Chiropractic</h2>

        <p class="mt-4 text-stone-800">
          Your local Newcomerstown chiropractic care center, run by your hometown Doctor of Chiropractic, Dr. Brett Jacobs. 
        </p>

        <a
          href="/contact"
          class="mt-8 inline-flex items-center rounded border border-green-800 bg-green-900 px-8 py-3 text-white hover:bg-transparent hover:text-stone-900 focus:outline-none focus:ring active:text-lime-500"
        >
          <span class="text-sm font-medium"> Make an Appointment </span>

          <svg
            class="ml-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

  )
}

export default Home