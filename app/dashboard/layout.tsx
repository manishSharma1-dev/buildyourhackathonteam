"use client"
import Link from 'next/link'
import React from 'react'
import burn from "@/public/file.svg"
import Image from 'next/image'
import ProtectedRoute from '@/components/ProtectedRoute'
import { useUser } from '@clerk/nextjs'

interface Dashboardlayoutprops {
    children : React.ReactNode
}



const DashboardLayout: React.FC<Dashboardlayoutprops> = (props) => {
    
    const { user } = useUser()

    return(
        <ProtectedRoute>
          <main>
            <div className='grid grid-cols-7 min-h-screen overflow-x-hidden'>
              <div className='col-start-1 col-end-2 border-black border-r'>
                <div className='flex flex-col justify-between min-h-screen py-4 px-1'>
                    <div className='flex flex-col text-xs'>
                        <p className={`cursor-pointer hover:bg-neutral-100 py-1 px-2 rounded`}>
                          <Link href={'/dashboard'}>your team</Link>
                        </p>
                        <p className={` cursor-pointer hover:bg-neutral-100 py-1 px-2 rounded`}>
                          <Link href={'/dashboard/allteams'}>other teams to join</Link>
                        </p>
                        <p className={`cursor-pointer hover:bg-neutral-100 py-1 px-2 rounded`}>
                          <Link href={'/dashboard'}>team joined as member</Link>
                        </p>
                        <p className={`cursor-pointer hover:bg-neutral-100 py-1 px-2 rounded`}>
                          <Link href={'/dashboard/otherdev'}>meet other developers</Link>
                        </p>
                    </div>
                    <button className='bg-black text-white px-6 py-1 text-xs rounded'>logout</button>
                </div>
              </div>
              <div className='col-start-2 col-end-8'>
                <div className='flex justify-between px-3 py-1 items-center border-b border-black'>
                    <p className={`text-xs`}>buildyourhackathonteam</p>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center'>
                        <Image src={burn} alt='token' className='size-3' />
                        <p className='text-sm'>3</p>
                        </div>
                        <Link href={'/dashboard/me'}>
                          <img src={`${user?.imageUrl}`} alt='user_profile' className='rounded-[50%] size-7'/>
                        </Link>
                    </div>
                </div>
                {props.children}
              </div>
            </div>
        </main>
        </ProtectedRoute>
    )
}

export default DashboardLayout