import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function Hero() {

  return (
    <section className="bg-gray-50 flex flex-col items-center ">
      <div className="mx-auto max-w-xl text-center mt-8">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Manage Your Expense!
          <strong className="font-extrabold text-primary sm:block"> Control Your Money </strong>
        </h1>

        <p className="mt-4  max-sm:text-sm">
          Your go-to budget tracker for managing expenses and gaining financial insights. Stay on top of your budget and make smarter money decisions with ease!
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4 max-sm:px-1 max-sm:py-2 ">
          <Link
            className="block w-full rounded bg-primary px-12 py-3   text-sm font-medium text-white 
            shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-primary "
            href={'/dashboard'}
          >
            Dashboard
          </Link>
        </div>


      </div>
      <Image
        src="/Dahboard.png"
        alt='Dashboard Image'
        width={1000}
        height={700}
        className=' rounded-xl border-2 mt-8 mb-20 '
      />

    </section>
  )
}

export default Hero