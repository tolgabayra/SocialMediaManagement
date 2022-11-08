import React from 'react'
import type { ReactElement } from 'react'
import Leftbar from '../../components/main/Leftbar'
import Leftsecondbar from '../../components/main/Leftsecondbar'
import Topbar from '../../components/main/Topbar'

type Props = {
    children: ReactElement
}


export default function Main({ children }: Props) {
    return (
        <div>
            <div className="flex w-screen h-screen text-gray-700">

                <Leftbar />
                <Leftsecondbar />
                <div className='flex flex-col flex-grow'>
                    <Topbar />
                    <div className="flex-grow p-6 overflow-auto bg-gray-200">

                        <main>
                            {children}
                        </main>
                    </div>
                </div>


            </div>

            <a className="fixed flex items-center justify-center h-8 pr-2 pl-1 bg-blue-600 rounded-full bottom-0 right-0 mr-4 mb-4 shadow-lg text-blue-100 hover:bg-blue-600" target="_top">
                <div className="flex items-center justify-center h-6 w-6 bg-blue-500 rounded-full">
                </div>
                <span className="text-sm ml-1 leading-none">V1.0</span>
            </a>
        </div>
    )
}

