"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import { Button } from "../../components/ui/button";
import Faq from "./Faq";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonialsDemo";
import GetStarted from "./GetStarted";

function Hero() {
  return (
    <section className="bg-gray-50 flex flex-col items-center  ">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <div className=" -mt-[300px] max-sm:-mt-[200px] sm:-mb-6 mb-10">
                <h1 className="text-4xl font-semibold text-black dark:text-white  ">
                  Manage Your Expenses with <br />
                  <span className="text-4xl md:text-[6rem] max-sm:text-[55px] text-primary font-bold  leading-none mt-1">
                    PennyWise
                  </span>
                </h1>
                <Link href={"/dashboard"}>
                  <Button className="mt-6 mb-16 w-[200px] max-sm:mt-5 max-sm:-mb-5">
                    Dashboard
                  </Button>
                </Link>
              </div>
            </>
          }
        >
          <Image
            src={`/Dashboard.webp`}
            alt="hero"
            height={720}
            width={3000}
            className="mx-auto rounded-2xl object-cover h-full object-left-top "
            draggable={false}
          />
        </ContainerScroll>
        <div>
          <div className=" -mt-[200px] max-lg:-mt-[300px] max-sm:-mt-[200px]   mb-30 flex justify-center items-center">
            <h1 className="text-4xl font-semibold text-black dark:text-white  ">
              <span className="text-4xl md:text-[6rem] max-sm:text-[55px] text-primary font-bold  leading-none mt-1">
                FAQs
              </span>
            </h1>
          </div>
          <div className="-mt-20 max-lg:mt-2 max-sm:mt-[10px]  ">
            {" "}
            <Faq />
          </div>
        </div>
      </div>
      <div className=" max-sm:mt-[100px] max-sm:ml-[40px] sm:-mb-6 mb-30">
        <h1 className="text-4xl font-semibold text-black dark:text-white  ">
          <span className="text-4xl md:text-[6rem] max-sm:text-[55px] text-primary font-bold  leading-none mt-1">
            What our Clients Says
          </span>
        </h1>
      </div>
      <div className=" mt-5 max-w-5xl mx-auto px-8">
        <AnimatedTestimonialsDemo />
      </div>
      {/* CTA */}
      <section className=" mt-10 max-sm:-mt-8 overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center pb-[20px]">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right ">
            <h2 className="text-2xl font-bold text-primary md:text-[50px] max-sm:text-[35px] mb-5">
              What Are You Waiting
            </h2>
            <h2 className="text-2xl font-bold text-primary md:text-[50px] max-sm:text-[35px] max-sm:-mt-3 mb-4">
              For?
            </h2>

            <p className=" text-gray-500 max-sm:mt-6 md:mt-4 md:block">
              Take control of your finances with PennyWise! Start tracking your
              budget today and make smarter financial decisions.
            </p>
            <p className="hidden text-gray-500 text-xl md:mt-4 md:block">
              Sign-up Now!
            </p>

            <div className="-mt-2 max-sm:mt-6 md:mt-8">
              <Link href="/sign-in">
                <GetStarted />
              </Link>
            </div>
          </div>
        </div>

        <Image
          alt="image"
          src="/mockup.png"
          width={1000}
          height={1000}
          objectPosition="cover"
          className=" h-full w-full object-cover max-sm:hidden sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
    </section>
  );
}

export default Hero;
