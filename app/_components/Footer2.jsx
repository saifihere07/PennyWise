"use client";
import { motion } from "framer-motion";
import { FadeUp } from "./Animation";
import { Twitter, Facebook, Instagram, Github } from "lucide-react";
import Link from "next/link";

const Footer2 = () => {
  return (
    <div
      className="w-full h-full px-[130px] py-[150px] max-xl:px-10 max-md:px-5"
      id="footer"
    >
      <div className="flex max-md:flex-col border-t border-[#45198D] items-center justify-between">
        <div className="row1 mt-10">
          <div className="logotext max-md:-ml-5 flex items-center max-md:justify-center cursor-pointer hover:-translate-y-3 duration-700">
            <motion.svg
              variants={FadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 55.9613L13.0575 43.255C12.4967 42.8446 12.0552 42.3173 11.7331 41.6731C11.411 41.029 11.25 40.351 11.25 39.6394V10.7694C11.25 9.50646 11.6875 8.4375 12.5625 7.5625C13.4375 6.6875 14.5065 6.25 15.7694 6.25H44.2306C45.4935 6.25 46.5625 6.6875 47.4375 7.5625C48.3125 8.4375 48.75 9.50646 48.75 10.7694V39.6394C48.75 40.351 48.589 41.029 48.2669 41.6731C47.9448 42.3173 47.5033 42.8446 46.9425 43.255L30 55.9613ZM27.375 36.6344L40.6344 23.375L38 20.6637L27.375 31.2887L22.0769 25.9906L19.3656 28.625L27.375 36.6344Z"
                fill="#5B25B4"
              />
            </motion.svg>
            <motion.h1
              variants={FadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[#5B25B4] text-[28px] font-[600] leading-[38.5px] ml-2"
            >
              fiscus
            </motion.h1>
          </div>
          <motion.p
            variants={FadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#000000] text-[16px] pt-5 max-md:text-center"
          >
            Financial planning is like a GPS for youi financial <br /> journey.
            It helps you set clear goals ant outlines <br /> the steps you need
          </motion.p>
          <motion.div
            variants={FadeUp(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="icons flex gap-[20px] text-[30px] max-md:justify-center mt-4"
          >
            <a href="#">
              <Twitter className="hover:scale-110 duration-500 text-[#5B25B4] hover:-translate-y-2" />
            </a>
            <a href="#">
              <Facebook className="hover:scale-110 duration-300 text-[#5B25B4] hover:-translate-y-2" />
            </a>
            <a href="#">
              <Instagram className="hover:scale-110 duration-300 text-[#5B25B4] hover:-translate-y-2" />
            </a>
            <a href="#">
              <Github className="hover:scale-110 duration-300 text-[#5B25B4] hover:-translate-y-2" />
            </a>
          </motion.div>
        </div>
        <motion.div
          variants={FadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row2 flex gap-[80px] max-md:gap-[30px] mt-10"
        >
          <div className="coulm1 duration-300">
            <p className="text-[#45198D] font-[700] text-[16px] uppercase leading-tight">
              Company
            </p>
            <ul className="pt-5 text-[#555555]">
              <li className="mb-2">
                <Link href="#" className="hover:underline duration-300">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline duration-300">
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline duration-300">
                  Works
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline duration-300">
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div className="coulm2 duration-300">
            <p className="text-[#45198D] font-[700] text-[16px] uppercase leading-tight">
              Help
            </p>
            <ul className="pt-5 text-[#555555]">
              <li className="mb-2">
                <Link href="#" className="hover:underline duration-300">
                  Customer Support
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline duration-300">
                  Delivery Details
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline duration-300">
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline duration-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="coulm3 duration-300">
            <p className="text-[#45198D] font-[700] text-[16px] uppercase leading-tight">
              Resources
            </p>
            <ul className="pt-5 text-[#555555]">
              <li className="mb-2">
                <Link href="#" className="hover:underline duration-300">
                  Free eBooks
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline duration-300">
                  Development Tutorial
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline duration-300">
                  How to - Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="hover:underline duration-300">
                  Youtube Playlist
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={FadeUp(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="row3 border-t border-[#45198D] mt-20"
      >
        <p className="text-[#555555] text-[16px] text-center pt-6">
          © Copyright 2025, All Rights Reserved By Fiscus.
        </p>
      </motion.div>
    </div>
  );
};

export default Footer2;
