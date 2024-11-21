import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import {ContainerScroll} from '../../components/ui/container-scroll-animation'
import { Button } from '../../components/ui/button';
function Hero() {

  return (
    <section className="bg-gray-50 flex flex-col items-center ">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
             <div className=' -mt-[400px] max-sm:-mt-[250px]'>
             <h1 className="text-4xl font-semibold text-black dark:text-white  ">
                Manage Your Expenses with <br />
                <span className="text-4xl md:text-[6rem] text-primary font-bold  leading-none mt-1">
                  PennyWise
                </span>
              </h1>
              <Link href={'/dashboard'} ><Button className='mt-3 w-[200px]'>Dashboard</Button>
              </Link>
             </div>
            </>
          }
        >
          <Image
            src={`/Dashboard.png`}
            alt="hero"
            height={720}
            width={3000}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  )
}

export default Hero