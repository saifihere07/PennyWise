import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import {ContainerScroll} from '../../components/ui/container-scroll-animation'
function Hero() {

  return (
    <section className="bg-gray-50 flex flex-col items-center ">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Manage Your Expenses with <br />
                <span className="text-4xl md:text-[6rem] text-primary font-bold mt-1 leading-none">
                  PennyWise
                </span>
              </h1>
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