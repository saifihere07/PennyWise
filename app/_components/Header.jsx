'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../../components/ui/button'

function Header() {
  const {  isSignedIn } = useUser();
  return (
    <div className='p-10 px-10 max-sm:px-4 h-[70px] flex justify-between shadow-lg  items-center border '>
      <Image className='max-sm:w-[100px]'
       src="/Logo.png" alt='logo'
        width={150}
        height={80}
      />
      {isSignedIn
        ?
        <div className="flex items-center gap-2 ">
          <UserButton showName />
        </div>
        :
        <Link href={'/sign-in'}><Button>Get Started</Button>
        </Link>}
    </div>
  )
}

export default Header