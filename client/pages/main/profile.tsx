import React from 'react'
import MainLayout from "../../layouts/main/index"
import { ReactElement } from 'react'
type Props = {}

export default function Profile({ }: Props) {
    return (
        <div>
            <h2 className='m-10 p-10'>Profile</h2>
        </div>
    )
}



Profile.getLayout = function getLayout(page: ReactElement) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}