import React from 'react'
import Navbar from "../../components/landing/Navbar"
import type { ReactElement } from 'react'

type Props = {
    children: ReactElement
}

export default function index({children}: Props) {
  return (
    <div>
        <Navbar />
        <main>
            { children }
        </main>
    </div>
  )
}