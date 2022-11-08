import React from 'react'

type Props = {}

export default function Leftsecondbar({}: Props) {
  return (
    <div>
             <div className="flex flex-col w-56 border-r border-gray-300">
          <button className="relative text-sm focus:outline-none group">
            <div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 hover:bg-gray-300">
              <span className="font-medium">
                Dropdown
              </span>
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
            <div className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg group-focus:flex">
              <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
              <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
              <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">Menu Item 1</a>
            </div>
          </button>
          <div className="flex flex-col flex-grow p-4 overflow-auto">
            <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
              <span className="leading-none">Item 1</span>
            </a>
            <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
              <span className="leading-none">Item 2</span>
            </a>
            <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
              <span className="leading-none">Item 3</span>
            </a>
            <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
              <span className="leading-none">Item 4</span>
            </a>
            <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
              <span className="leading-none">Item 5</span>
            </a>
            <a className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-gray-300" href="#">
              <span className="leading-none">Item 6</span>
            </a>
            <a className="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium bg-gray-200 rounded hover:bg-gray-300"
              href="#">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="ml-2 leading-none">New Item</span>
            </a>
          </div>

        </div>

    </div>
  )
}