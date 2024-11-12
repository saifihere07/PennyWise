'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import React from 'react'

function DashboardHeader() {
    const { user } = useUser();
    return (
        <div className='border-b shadow-sm p-5 h-[70px] flex justify-between'>
            <div className=''>
        
            </div>
            <div></div>
            
            <div className='flex items-center gap-2 '>
                {user?.fullName || user?.username || 'Guest'}
                <UserButton />
            </div>
        </div>
    )
}

export default DashboardHeader