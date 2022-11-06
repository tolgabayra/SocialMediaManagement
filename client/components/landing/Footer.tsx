import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <div>
        <footer className="bg-gray-100">
          <div className="container mx-auto px-6 pt-10 pb-6">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/4 text-center md:text-left">
                <h5 className="uppercase mb-6 font-bold">Links</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">FAQ</a>
                  </li>
                
                </ul>
              </div>
              <div className="w-full md:w-1/4 text-center md:text-left">
                <h5 className="uppercase mb-6 font-bold">Legal</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Terms</a>
                  </li>
                 
                </ul>
              </div>
              <div className="w-full md:w-1/4 text-center md:text-left">
                <h5 className="uppercase mb-6 font-bold">Social</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Facebook</a>
                  </li>
                  
                </ul>
              </div>
              <div className="w-full md:w-1/4 text-center md:text-left">
                <h5 className="uppercase mb-6 font-bold">Company</h5>
                <ul className="mb-4">
                  <li className="mt-2">
                    <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Official Blog</a>
                  </li>
               
                </ul>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}