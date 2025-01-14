"use client";
import { motion } from "framer-motion";
import { fadeLeft } from "./Animation";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="px-[130px] py-[150px] w-full h-full max-lg:px-5" id="about">
      <div className="flex justify-between space-x-5 max-lg:flex-col">
        <div className="row1 w-[55%]  max-xl:w-full max-lg:flex max-lg:justify-center max-lg:items-center">
          <Image
            src="/doller.jpeg"
            alt=""
            width={500}
            height={775}
            className="w-[500px] h-[775px] max-lg:h-[250px] bg-cover shadow-2xl rounded-3xl"
          />
        </div>
        <div className="row2 w-[45%] max-lg:mt-10 max-xl:w-full">
          <motion.div
            variants={fadeLeft(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="paragraph"
          >
            <p className="text-[#ACACAC] text-[16px] poppins leading-9 max-lg:text-center">
              <span className="text-[#555555] underline">
                Designed for individuals looking for streamline financial
                planning,
              </span>
              <br /> this platform offers tools for naming and managing budgets,
              tracking expenses, <br /> and viewing a summary of financial
              details in one place.
            </p>
          </motion.div>
          <motion.div
            variants={fadeLeft(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-lg:flex max-lg:justify-center"
          >
            <Link href="/dashboard">
              <button className="text-white w-[139px] h-[60px] mt-10 rounded-[26px] bg-[#45198D] hover:bg-[#8364b5] duration-300">
                Discover
              </button>
            </Link>
          </motion.div>
          <div className="about -ml-40 mt-20 max-2xl:-ml-20 max-xl:ml-0">
            <motion.div
              variants={fadeLeft(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="svgtext flex items-center gap-5 max-lg:justify-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="10" r="10" fill="#45198D" />
              </svg>
              <h1 className="text-[20px] text-[#45198D] underline">About Us</h1>
            </motion.div>
            <motion.div
              variants={fadeLeft(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text max-lg:text-center"
            >
              <span className="text-[#000000] text-[70px] max-sm:text-[40px] max-2xl:text-[50px] font-[300]">
                Finance <span className="textt font-[600]">Mastery</span>{" "}
                Advanced Strategies for Budgeting
              </span>
            </motion.div>
            <motion.div
              variants={fadeLeft(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex max-md:flex-col gap-[60px]"
            >
              <div className="svgtext1 flex gap-[10px] mt-16">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-sm:w-[50px]"
                >
                  <path
                    d="M11.6666 58.3334C10.0625 58.3334 8.68922 57.7622 7.54685 56.6199C6.40449 55.4775 5.83331 54.1042 5.83331 52.5001V17.5001C5.83331 15.8959 6.40449 14.5227 7.54685 13.3803C8.68922 12.2379 10.0625 11.6667 11.6666 11.6667H58.3333C59.9375 11.6667 61.3107 12.2379 62.4531 13.3803C63.5955 14.5227 64.1666 15.8959 64.1666 17.5001V33.0313C63.2916 32.3994 62.368 31.8404 61.3958 31.3542C60.4236 30.8681 59.4028 30.4549 58.3333 30.1147V23.3334H11.6666V35.0001H37.9166C36.0208 36.8473 34.526 39.0227 33.4323 41.5261C32.3385 44.0296 31.7916 46.7154 31.7916 49.5834C31.7916 51.139 31.9618 52.6581 32.3021 54.1407C32.6423 55.6233 33.1285 57.0209 33.7604 58.3334H11.6666ZM52.2083 59.7917L42 49.5834C41.368 48.9515 40.9184 48.2709 40.651 47.5417C40.3837 46.8126 40.25 46.0834 40.25 45.3542C40.25 43.7987 40.809 42.4133 41.9271 41.198C43.0451 39.9827 44.4791 39.3751 46.2291 39.3751C47.5903 39.3751 48.6597 39.6911 49.4375 40.323C50.2153 40.9549 51.1389 41.8056 52.2083 42.8751C53.1805 41.9029 54.0677 41.0765 54.8698 40.3959C55.6719 39.7154 56.7778 39.3751 58.1875 39.3751C59.9861 39.3751 61.4323 39.9949 62.526 41.2345C63.6198 42.474 64.1666 43.8716 64.1666 45.4272C64.1666 46.1563 64.0208 46.8855 63.7291 47.6147C63.4375 48.3438 63 49.0001 62.4166 49.5834L52.2083 59.7917Z"
                    fill="#45198D"
                  />
                </svg>
                <div className="text max-sm:text-[13px]">
                  <p className="text-[24px] text-[#000000] leading-7 pt-4">
                    Wealth Management
                  </p>
                  <p className="text-[16px] text-[#555555] poppins leading-9 pt-4">
                    We explore how personal budgeting <br /> and expense
                    tracking can transform financial management.
                  </p>
                </div>
              </div>
              <div className="svgtext2 flex gap-[10px] mt-16">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-sm:w-[50px] max-sm:h-[50px]"
                >
                  <path
                    d="M5.83337 61.25V8.75H35V20.4167H64.1667V61.25H5.83337ZM11.6667 55.4167H29.1667V49.5833H11.6667V55.4167ZM11.6667 43.75H29.1667V37.9167H11.6667V43.75ZM11.6667 32.0833H29.1667V26.25H11.6667V32.0833ZM11.6667 20.4167H29.1667V14.5833H11.6667V20.4167ZM35 55.4167H58.3334V26.25H35V55.4167ZM40.8334 37.9167V32.0833H52.5V37.9167H40.8334ZM40.8334 49.5833V43.75H52.5V49.5833H40.8334Z"
                    fill="#45198D"
                  />
                </svg>

                <div className="text max-sm:text-[13px]">
                  <p className="text-[24px] text-[#000000] leading-7 pt-4">
                    Financial Insights
                  </p>
                  <p className="text-[16px] text-[#555555] poppins leading-9 pt-4">
                    We explore how personal budgeting <br /> and expense
                    tracking can transform financial management.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
