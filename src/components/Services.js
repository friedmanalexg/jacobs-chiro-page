import React from 'react'

const Services = () => {
  return (
    <section class="text-stone-900 bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-lg text-center">
          <h2 class="text-3xl font-bold sm:text-4xl">Our Services</h2>
          <img />
          <p class="mt-4 text-stone-900">
            We treat musclulo-skeletal complaints, mobility issues, and provide rehabilitation services.
            The doctor will also counsel patients regarding general health, diet and exercise.   
          </p>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <a
            class="block rounded-xl border border-green-800 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-stone-500/10"
            href="/services/digital-campaigns"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10 text-green-800">
              <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zM6 12a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V12zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 15a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V15zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM6 18a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V18zm2.25 0a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>


            <h2 class="mt-4 text-xl font-bold text-stone-900">Exams</h2>

            <p class="mt-1 text-sm text-stone-900">
              Your first exam will likely include assessment of vitals, range of motion examination, neurological examination, and an orthopedic exam.
              You should arrive 30 minutes early to provide medical history and paperwork.  
            </p>
          </a>

          <a
            class="block rounded-xl border border-green-800 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-stone-500/10"
            href="/services/digital-campaigns"
          >
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-green-800">
  <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z" clipRule="evenodd" />
  <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z" clipRule="evenodd" />
</svg>


            <h2 class="mt-4 text-xl font-bold text-stone-900">Re-Exams</h2>

            <p class="mt-1 text-sm text-stone-900">
              Re-exams will be performed to assess patient progress. The doctor will measure progress compared to the initial examination
              to ensure patients are responding to care and improving.   
            </p>
          </a>

          <a
            class="block rounded-xl border border-stone-800 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-stone-500/10"
            href="/services/digital-campaigns"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-10 w-10 text-green-900">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>

            <h2 class="mt-4 text-xl font-bold text-stone-900">Treatment</h2>

            <p class="mt-1 text-sm text-stone-900">
              Treatment can include spinal manipulation, extremity manipulation, trigger point therapy, muscular stretching, and rehabilitation. 
              The doctor may also provide supplemental, nutritional, fitness, and ergonomical advice. 
            </p>
          </a>

          <a
            class="block rounded-xl border border-stone-800 p-8 shadow-xl transition hover:border-green-500/10 hover:shadow-stone-500/10"
            href="https://en.wikipedia.org/wiki/Electrical_muscle_stimulation" target="_blank" rel="noreferrer noopener"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-green-800">
  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
</svg>


            <h2 class="mt-4 text-xl font-bold text-stone-900">E-Stim</h2>

            <p class="mt-1 text-sm text-stone-900">
              We offer interferential electrical stimulation treatment to assist in rehabilitation and muscular recovery. Interferential current
              penetrates more deeply and improves vital bloodflow to promote healing more effectively than commercially available treatment. <br></br>Click for more info.
            </p>
          </a>

         
        </div>

        <div class="mt-12 text-center">
          <a
            href="/contact"
            class="mt-8 inline-flex items-center rounded border border-green-800 bg-green-800 px-8 py-3 text-white hover:bg-transparent hover:text-stone-900 focus:outline-none focus:ring active:text-green-500"
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
    </section>

  )
}

export default Services