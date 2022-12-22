import React from 'react'
import drandsign from '../assets/drandsign.jpg'
import plaza from '../assets/plaza.jpg'
import reception from '../assets/reception.jpg'

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
            <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
              <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active relative float-left w-full">
                  <img
                    src={drandsign}
                    class="block w-full"
                    alt="..."
                  />
                  <div class="carousel-caption hidden md:block absolute text-center">
                  </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                  <img
                    src={plaza}
                    class="block w-full"
                    alt="..."
                  />
                  <div class="carousel-caption hidden md:block absolute text-center">
                  </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                  <img
                    src={reception}
                    class="block w-full"
                    alt="..."
                  />
                  <div class="carousel-caption hidden md:block absolute text-center">
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
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