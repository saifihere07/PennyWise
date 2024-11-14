'use client'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../../components/ui/button'

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className='p-5 h-[70px] flex justify-between shadow-lg  items-center border '>
      <Image src="/Logo.png" alt='logo'
        width={150}
        height={80}
      />
      {isSignedIn
        ?
        <div className="flex items-center gap-2 ">
          {user?.fullName || user?.username || 'Guest'}
          <UserButton />
        </div>
        :
        <Link href={'/sign-in'}><Button>Get Started</Button>
        </Link>}
    </div>
  )
}

export default Header