import React from 'react'
import MainLayout from "../../layouts/main/index"
import { ReactElement } from 'react'

type Props = {}

export default function Main({ }: Props) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-2 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-2 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-3 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-2 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-2 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-3 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-2 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-1 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-2 bg-white border border-gray-300"></div>
        <div className="h-24 col-span-3 bg-white border border-gray-300"></div>
      </div>
    </div>
  )
}

Main.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}