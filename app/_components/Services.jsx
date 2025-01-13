"use client";
import { motion } from "framer-motion";
import { fadeLeft, faderight } from "./Animation";
import Image from "next/image";

const Services = () => {
  return (
    <div
      className="px-[130px] py-[150px] w-full h-full max-lg:px-5"
      id="servces"
    >
      <div className="flex justify-between max-xl:flex-col">
        <div className="row1 w-1/2 max-lg:w-full">
          <motion.div
            variants={faderight(0.2)}
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
            <h1 className="text-[20px] text-[#45198D] underline">Services</h1>
          </motion.div>
          <motion.div
            variants={faderight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text pt-28 max-lg:text-center max-md:pt-5"
          >
            <span className="text-[#000000] text-[55px] max-sm:text-[38px] leading-[70px] font-[300]">
              Global Markets
              <span className="textt font-[600]">Unveiled Complexities</span>
              Inter
            </span>
          </motion.div>
          <motion.div
            variants={faderight(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="paragraph pt-16"
          >
            <p className="text-[16px] text-[#555555] poppins max-lg:text-center">
              This book explores the role of financial leader steering companies
              through <br /> economic challenges. It offers practical advice
            </p>
          </motion.div>
          <div className="content">
            <motion.div
              variants={faderight(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="1content pt-10"
            >
              <span className="text-[80px] textt max-lg:flex max-lg:justify-center">
                234+
              </span>
              <p className="text-[#000000] text-[18px] leading-7 max-lg:text-center">
                Wealth Management and Investment Advisory
              </p>
              <p className="text-[#555555] text-[16px] poppins pt-5 max-lg:text-center">
                This book explores the role of financial leader steering
                companies through <br /> economic challenges. It offers
                practical advice
              </p>
            </motion.div>
            <motion.div
              variants={faderight(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="2content pt-10"
            >
              <span className="text-[80px] textt max-lg:flex max-lg:justify-center">
                66+
              </span>
              <p className="text-[#000000] text-[18px] leading-7 max-lg:text-center">
                Debt Management and Credit Counseling
              </p>
              <p className="text-[#555555] text-[16px] poppins pt-5 max-lg:text-center">
                This book explores the role of financial leader steering
                companies through <br /> economic challenges. It offers
                practical advice
              </p>
            </motion.div>
            <motion.div
              variants={faderight(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-lg:flex max-lg:mb-5 max-lg:justify-center"
            >
              <button className="text-white w-[139px] h-[60px] mt-10 rounded-[26px] bg-[#45198D] hover:bg-[#74599f] duration-300">
                Discover
              </button>
            </motion.div>
          </div>
        </div>
        <div className="row2 w-1/3 max-lg:w-full">
          <div className="container absolute max-lg:mx-auto max-xl:relative max-w-[530px]">
            <Image
              src="/download.jpeg"
              alt=""
              width={530}
              height={944}
              className="rounded-[30px] shadow-2xl"
            />
          </div>
          <motion.div
            variants={fadeLeft(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container1 absolute max-xl:relative max-xl:mt-0 max-xl:ml-0 max-lg:mx-auto max-w-[400px] max-sm:mt-5 h-[200px] shadow-2xl rounded-[35px] -ml-32 mt-36 bg-[#D7EBFF]"
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
                  fill="#45198D"
                />
              </svg>
              <p className="text-[24px] text-[#000000]">
                Assist clients in planning
              </p>
            </div>
            <p className="text-[#555555] text-[16px] text-center poppins pt-4">
              Ensure clients have a clear plat maintain their desired lifestyle
              post-retirement
            </p>
          </motion.div>
          <motion.div
            variants={fadeLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container2 absolute max-xl:relative max-xl:mt-0 max-lg:mx-auto max-w-[400px] max-xl:ml-0 h-[200px] shadow-2xl max-lg:mt-4 rounded-[35px] -ml-32 mt-[25%] max-2xl:mt-[30%] bg-[#D7EBFF]"
          >
            <div className="textsvg flex items-center gap-5 justify-center pt-10">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 15V10C17.5 8.625 17.9896 7.44792 18.9688 6.46875C19.9479 5.48958 21.125 5 22.5 5H37.5C38.875 5 40.0521 5.48958 41.0312 6.46875C42.0104 7.44792 42.5 8.625 42.5 10V15H50C51.375 15 52.5521 15.4896 53.5312 16.4688C54.5104 17.4479 55 18.625 55 20V47.5C55 48.875 54.5104 50.0521 53.5312 51.0312C52.5521 52.0104 51.375 52.5 50 52.5H10C8.625 52.5 7.44792 52.0104 6.46875 51.0312C5.48958 50.0521 5 48.875 5 47.5V20C5 18.625 5.48958 17.4479 6.46875 16.4688C7.44792 15.4896 8.625 15 10 15H17.5ZM22.5 15H37.5V10H22.5V15ZM10 42.5H50V35H10V42.5Z"
                  fill="#45198D"
                />
              </svg>

              <p className="text-[24px] text-[#000000]">Financial Education</p>
            </div>
            <p className="text-[#555555] text-[16px] text-center poppins pt-4">
              Ensure clients have a clear plat maintain their desired lifestyle
              post-retirement
            </p>
          </motion.div>
          <motion.div
            variants={fadeLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="container3 absolute max-xl:relative max-xl:mt-0 max-lg:mx-auto max-xl:ml-0 max-w-[400px] h-[200px] max-lg:mt-4 shadow-2xl rounded-[35px] -ml-32 mt-[41%] max-2xl:mt-[51%] bg-[#D7EBFF]"
          >
            <div className="textsvg flex items-center gap-5 justify-center pt-10">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45 55L52.5 47.5L50.75 45.75L46.25 50.25V40H43.75V50.25L39.25 45.75L37.5 47.5L45 55ZM30 27.125L15.1875 18.5625L12.5 20.125V22.75L30 32.875L47.5 22.75V20.125L44.8125 18.5625L30 27.125ZM27.5 54.3125L10 44.25C9.20833 43.7917 8.59375 43.1875 8.15625 42.4375C7.71875 41.6875 7.5 40.8542 7.5 39.9375V20.0625C7.5 19.1458 7.71875 18.3125 8.15625 17.5625C8.59375 16.8125 9.20833 16.2083 10 15.75L27.5 5.6875C28.2917 5.22917 29.125 5 30 5C30.875 5 31.7083 5.22917 32.5 5.6875L50 15.75C50.7917 16.2083 51.4063 16.8125 51.8438 17.5625C52.2813 18.3125 52.5 19.1458 52.5 20.0625V31.6875C51.375 31.1458 50.1771 30.7292 48.9062 30.4375C47.6354 30.1458 46.3333 30 45 30C40.1667 30 36.0417 31.7083 32.625 35.125C29.2083 38.5417 27.5 42.6667 27.5 47.5C27.5 48.8333 27.6354 50.1146 27.9062 51.3438C28.1771 52.5729 28.5833 53.75 29.125 54.875C28.8333 54.7917 28.5521 54.7188 28.2812 54.6563C28.0104 54.5938 27.75 54.4792 27.5 54.3125ZM45 60C41.5417 60 38.5938 58.7812 36.1563 56.3438C33.7188 53.9062 32.5 50.9583 32.5 47.5C32.5 44.0417 33.7188 41.0938 36.1563 38.6562C38.5938 36.2188 41.5417 35 45 35C48.4583 35 51.4062 36.2188 53.8438 38.6562C56.2812 41.0938 57.5 44.0417 57.5 47.5C57.5 50.9583 56.2812 53.9062 53.8438 56.3438C51.4062 58.7812 48.4583 60 45 60Z"
                  fill="#45198D"
                />
              </svg>

              <p className="text-[24px] text-[#000000]">Insurance Planning</p>
            </div>
            <p className="text-[#555555] text-[16px] text-center poppins pt-4">
              Ensure clients have a clear plat maintain their desired lifestyle
              post-retirement
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
