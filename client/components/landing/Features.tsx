import React from 'react'

type Props = {}

export default function Features({}: Props) {
  return (
    <div>
         
         <section className="container mx-auto px-6 py-10">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-0">
            Features
          </h2>
          <div className="flex items-center flex-wrap mb-10">
            <div className="w-full md:w-1/2 px-4">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                Responsive to the core
              </h4>
              <p className="text-gray-600 mb-8">
                Every Tailwind utility also comes with responsive variants, making it extremely easy to build responsive interfaces without resorting to custom CSS.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <img src="https://cdn.dribbble.com/users/2487395/screenshots/6311129/responsivedesign_2x.png" alt="responsive" />
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 px-4">
              <img src="https://icons8.com/wp-content/uploads/2020/02/tips-on-mobile-UI-design.png" alt="component-friendly" />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                Component-friendly
              </h4>
              <p className="text-gray-600 mb-8">
                While you can do a lot with just utility classNamees, as a project grows it can be useful to codify common patterns into higher level abstractions.
              </p>
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 px-4">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">
                Designed to be customized
              </h4>
              <p className="text-gray-600 mb-8">
                If it makes sense to be customizable, Tailwind lets you customize it. This includes colors, border sizes, font weights, spacing utilities, breakpoints, shadows, and tons more.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <img src="https://statuscast.com/wp-content/uploads/2018/12/untitled-1@3x.png" alt="customizable" />
            </div>
          </div>
        </section>
    </div>
  )
}