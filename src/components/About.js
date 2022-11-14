import React from 'react'

const About = () => {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-bold sm:text-4xl">
            Your Hometown Chiropractic Practice
          </h2>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt="Party"
              src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div class="lg:py-16">
            <article class="space-y-4 text-gray-600">
              <h3 class="mt-4 text-xl font-bold">243 W State Street, Newcomerstown, OH 43832</h3>
              <p>
              Our office is located in central Newcomerstown in the Newcomerstown Wellness Plaza, next to Mediwise Pharmacy. 
              </p>
              <h3 class="mt-4 text-xl font-bold">Dr. Brett Jacobs</h3>  
              <p>
              Dr. Jacobs is a practicing Doctor of Chiropractic. He served the community of Cadiz, Ohio, for many years before returning home to Newcomerstown and opening his practice in 2022.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
    
  )
}

export default About