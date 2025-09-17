"use client";
import { motion } from "framer-motion";
import { FadeUp } from "./Animation";
import { Twitter, Facebook, Instagram, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer2 = () => {
  return (
    <div
      className="w-full h-full px-[130px] py-[150px] max-xl:px-10 max-md:px-5"
      id="footer"
    >
      <div className="flex max-md:flex-col border-t border-[#45198D] items-center justify-between">
        <div className="row1 mt-10">
          <div className="logotext max-md:-ml-5 flex items-center max-md:justify-center cursor-pointer hover:-translate-y-3 duration-700">
            <motion.div
              variants={FadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* <Image src="/Logo.png " width={50} height={50} alt="logo" /> */}
            </motion.div>
            <motion.h1
              variants={FadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[#5B25B4] text-[28px] font-[600] leading-[38.5px] ml-2"
            >
              PennyWise
            </motion.h1>
          </div>
          <motion.p
            variants={FadeUp(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[#000000] text-[16px] pt-5 max-md:text-center"
          >
            Budgeting is like a roadmap for your financial goals. <br /> It
            helps you allocate resources, track expenses, and achieve <br />{" "}
            financial clarity.
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
          © Copyright 2025, All Rights Reserved By Pennywise.
        </p>
      </motion.div>
    </div>
  );
};

export default Footer2;
