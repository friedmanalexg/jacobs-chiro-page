import React from 'react'
import ribboncut from "../assets/ribboncut.jpg"

const Contact = () => {
  return (
      <section>
        <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div class="relative z-10 lg:py-16">
              <div class="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src= {ribboncut}
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div class="relative flex items-center bg-gray-100">
              <span
                class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"
              ></span>

              <div class="p-8 sm:p-16 lg:p-24">
                <h2 class="text-2xl font-bold sm:text-3xl">
                  Contact
                </h2>

                  <p class="mt-4 text-gray-600">
                  Dr. Brett C Jacobs D.C.<br/> 
                  243 W State St <br/> 
                  Newcomerstown, OH 43832 <br/>
                 
                  </p>
                <h2 class="text-2xl font-bold sm:text-1xl">
                  Make an Appointment
                </h2>
                  <p class="mt-4 text-gray-600">To schedule an appointment,<br/>
                  please call during our business hours (8AM and 5:30PM). <br/>
                  Appointments are available Monday through Thursday, 8AM to noon, 1PM to 5:30PM. <br/>
                  Leave a message and we will return your call.
                  </p>
                <h2 class="text-2xl font-bold sm:text-1xl">
                  1-740-492-4382
                </h2>
     
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}

export default Contact

