'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import React from 'react'
import SideMenuBar from './SideMenuBar'

function DashboardHeader() {
    const { user } = useUser();

   
    return (
        <div className='border-b shadow-sm p-5 h-[70px] flex justify-between'>
            <div className='md:hidden lg:hidden xl:hidden 2xl:hidden'>
            <SideMenuBar/>
            </div>
            <div></div>
           
            
            <div className='flex items-center gap-2 '>
              
                <UserButton showName/>
            </div>
        </div>
    )
}

export default DashboardHeader