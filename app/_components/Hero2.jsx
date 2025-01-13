"use client";
import { fadeLeft, faderight } from "./Animation";
import Image from "next/image";
import { motion } from "framer-motion";
import WhyChoseus from "./WhyChoseus";
import About from "./About";
import Services from "./Services";
import Blog from "./Blog";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <div className="h-[100px] max-sm:h-2"></div>
      <div className="w-screen px-[130px] py-[120px] max-lg:px-5 " id="home">
        <div className="w-full flex max-lg:flex-col justify-between">
          {/* 1nd row */}
          <div className="row1 w-1/2 max-lg:w-full">
            <motion.h1
              variants={faderight(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute text-[35px] text-[#262F2E] leading-[75px] max-lg:hidden -mt-2 left-[34.5%]"
            >
              Strategic Financial
            </motion.h1>
            <motion.span
              variants={faderight(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute text-[35px] text-[#262F2E] leading-[75px] max-lg:hidden pt-10 left-[39%]"
            >
              Management
            </motion.span>
            <motion.div
              variants={faderight(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="img"
            >
              <Image
                src="/image.png"
                alt=""
                className="brightness-95 mt-6 ml-2 max-w-full"
                width={590}
                height={453}
              />
            </motion.div>
            <motion.div
              variants={faderight(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="container absolute max-md:mt-0 max-sm:w-[320px] max-sm:hidden max-md:left-0 -mt-20 left-[15%] max-w-[350px] h-[200px] bg-[white] shadow-2xl rounded-[35px]"
            >
              <div className="svgtext flex items-center justify-center pt-8 gap-4">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6666 58.3334C10.0625 58.3334 8.68922 57.7622 7.54685 56.6198C6.40449 55.4775 5.83331 54.1042 5.83331 52.5V17.5C5.83331 15.8959 6.40449 14.5226 7.54685 13.3802C8.68922 12.2379 10.0625 11.6667 11.6666 11.6667H58.3333C59.9375 11.6667 61.3107 12.2379 62.4531 13.3802C63.5955 14.5226 64.1666 15.8959 64.1666 17.5V33.0313C63.2916 32.3993 62.368 31.8403 61.3958 31.3542C60.4236 30.8681 59.4028 30.4549 58.3333 30.1146V23.3334H11.6666V35H37.9166C36.0208 36.8472 34.526 39.0226 33.4323 41.5261C32.3385 44.0295 31.7916 46.7153 31.7916 49.5834C31.7916 51.1389 31.9618 52.658 32.3021 54.1406C32.6423 55.6233 33.1285 57.0209 33.7604 58.3334H11.6666ZM52.2083 59.7917L42 49.5834C41.368 48.9514 40.9184 48.2709 40.651 47.5417C40.3837 46.8125 40.25 46.0834 40.25 45.3542C40.25 43.7986 40.809 42.4132 41.9271 41.1979C43.0451 39.9827 44.4791 39.375 46.2291 39.375C47.5903 39.375 48.6597 39.691 49.4375 40.3229C50.2153 40.9549 51.1389 41.8056 52.2083 42.875C53.1805 41.9028 54.0677 41.0764 54.8698 40.3959C55.6719 39.7153 56.7778 39.375 58.1875 39.375C59.9861 39.375 61.4323 39.9948 62.526 41.2344C63.6198 42.474 64.1666 43.8715 64.1666 45.4271C64.1666 46.1563 64.0208 46.8854 63.7291 47.6146C63.4375 48.3438 63 49 62.4166 49.5834L52.2083 59.7917Z"
                    fill="#5B25B4"
                  />
                </svg>
                <p className="text-[24px] text-[#000000] leading-7">
                  Corporate Finance <br /> Consulting
                </p>
              </div>
              <p className="text-[16px] text-[#555555] poppins text-center pt-5">
                We explore the evolution of job board and the <br /> recruitment
                process
              </p>
            </motion.div>
          </div>
          {/* 2nd row */}
          <div className="row2 w-1/3 max-lg:w-full">
            <motion.div
              variants={fadeLeft(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="svgbutton max-lg:justify-center max-sm:mt-10 max-lg:mt-36 flex items-center gap-5"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-[#D7EBFF] rounded-2xl px-2"
              >
                <path
                  d="M3.29167 26.625C2.48958 26.625 1.80295 26.3394 1.23177 25.7682C0.66059 25.1971 0.375 24.5104 0.375 23.7083V0.375H3.29167V23.7083H26.625V26.625H3.29167ZM4.75 22.25V9.125H10.5833V22.25H4.75ZM12.0417 22.25V1.83333H17.875V22.25H12.0417ZM19.3333 22.25V14.9583H25.1667V22.25H19.3333Z"
                  fill="#45198D"
                />
              </svg>

              <div className="max-w-[228px] h-[60px] rounded-[15px] bg-[#D7EBFF]">
                <Link href="/dashboard">
                  <button className="text-[#45198D] text-center  px-8 py-[18px]">
                    Wealth Management
                  </button>
                </Link>
              </div>
            </motion.div>
            <div className="text">
              <motion.h1
                variants={fadeLeft(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-[98px] text-[#000000] shadow-sm leading-[120px] max-xl:text-[50px] max-lg:text-center max-xl:leading-[80px] font-[400] pt-20"
              >
                Building <br /> a
                <span className="textt font-[600] pl-1">Financial</span>
                <br />
                Future
              </motion.h1>
              <motion.p
                variants={fadeLeft(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-[16px] poppins text-[#555555] max-lg:text-center"
              >
                In this article, we explore the evolution of job boards and thei
                recruitment process. From the traditional job listings to AI
                driven matchmaking discover how these platforms are streamlining
              </motion.p>
            </div>
          </div>
        </div>
        {/* 3nd row */}
        <div className="row3 pt-28 flex max-lg:flex-col justify-between items-center">
          <motion.div
            variants={faderight(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text max-lg:text-center max-lg:mb-10"
          >
            <p className="text-[#262F2E] underline text-[16px] poppins">
              Designed for individual control of the financial destin this
            </p>
            <span className="text-[#555555]">
              step by step instructions on budgeting, saving, investing <br />{" "}
              and retirement planning
            </span>
          </motion.div>
          <motion.div
            variants={faderight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="svges flex items-center max-lg:mb-10"
          >
            <div className="w-[76px] h-[76px] bg-[#DADADA] rounded-full"></div>
            <div className="w-[76px] h-[76px] bg-[#D7EBFF] -ml-5 rounded-full flex items-center justify-center">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.93934 22.1525C0.353553 22.7383 0.353553 23.688 0.93934 24.2738C1.52513 24.8596 2.47487 24.8596 3.06066 24.2738L0.93934 22.1525ZM24.7132 1.99993C24.7132 1.1715 24.0416 0.499931 23.2132 0.499931L9.7132 0.49993C8.88478 0.49993 8.2132 1.1715 8.2132 1.99993C8.2132 2.82836 8.88478 3.49993 9.7132 3.49993H21.7132V15.4999C21.7132 16.3284 22.3848 16.9999 23.2132 16.9999C24.0416 16.9999 24.7132 16.3284 24.7132 15.4999L24.7132 1.99993ZM3.06066 24.2738L24.2739 3.06059L22.1525 0.93927L0.93934 22.1525L3.06066 24.2738Z"
                  fill="#45198D"
                />
              </svg>
            </div>
          </motion.div>
          <motion.div
            variants={faderight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text max-2xl:hidden max-lg:flex  max-lg:text-center max-lg:mb-10"
          >
            <p className="text-[#555555] poppins leading-9 text-[16px]">
              Thei recruitment procei From <br /> the traditional job
            </p>
          </motion.div>
          <motion.div
            variants={faderight(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container max-w-[350px] h-[200px] shadow-2xl rounded-[35px] bg-[#D7EBFF]"
          >
            <div className="textsvg flex items-center gap-5 justify-center pt-10">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.3333 39.8125V17.5H32.0833V39.8125L27.7083 35.7292L23.3333 39.8125ZM37.9167 44.1875V5.83331H46.6667V35.4375L37.9167 44.1875ZM8.75 54.25V29.1666H17.5V45.5L8.75 54.25ZM8.75 61.3958L27.5625 42.5833L37.9167 51.4792L54.25 35.1458H49.5833V29.3125H64.1667V43.8958H58.3333V39.2291L38.2083 59.3542L27.8542 50.4583L16.9167 61.3958H8.75Z"
                  fill="#5B25B4"
                />
              </svg>
              <p className="text-[24px] text-[#000000]">Corporate Finance </p>
            </div>
            <p className="text-[#555555] text-[16px] text-center poppins pt-4">
              We explore the evolution of job board and the recruitment process
            </p>
          </motion.div>
        </div>
      </div>
      <WhyChoseus />
      <About />
      <Services />
      <Blog />
    </section>
  );
};

export default Hero;
