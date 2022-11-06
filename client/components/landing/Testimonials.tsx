import React from 'react'

type Props = {}

export default function Testimonials({}: Props) {
  return (
    <div>
         <section className="bg-gray-100">
          <div className="container mx-auto px-6 py-20">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
              Testimonials
            </h2>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    Sunt corrupti delectus eaque pariatur dicta magnam, velit possimus cupiditate iusto hic, ullam, error vel odio adipisci! Mollitia molestias sit beatae? Corrupti!
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    John Doe
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    Sunt corrupti delectus eaque pariatur dicta magnam, velit possimus cupiditate iusto hic, ullam, error vel odio adipisci! Mollitia molestias sit beatae? Corrupti!
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    Jane Doe
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-2 mb-4">
                <div className="bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">
                    Sunt corrupti delectus eaque pariatur dicta magnam, velit possimus cupiditate iusto hic, ullam, error vel odio adipisci! Mollitia molestias sit beatae? Corrupti!
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">
                    James Doe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}