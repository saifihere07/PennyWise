"use client";
import { motion } from "framer-motion";
import { fadeLeft, faderight } from "./Animation";
import Image from "next/image";

const WhyChoseus = () => {
  return (
    <div className="px-[130px] py-[150px] w-full h-full max-lg:px-5" id="page">
      {/* row 1 */}
      <div className="row1">
        <motion.div
          variants={faderight(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="svgtext flex max-lg:justify-center items-center gap-5"
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
          <h1 className="text-[20px] text-[#45198D] underline">Why Chose Us</h1>
        </motion.div>
        <div className="paragraph">
          <div className="text flex max-lg:flex-col justify-between items-center">
            <motion.h1
              variants={faderight(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[#000000] text-s text-[60px] max-lg:text-center max-lg:text-[40px] max-lg:leading-[51px] leading-[70px] font-[400] pt-4"
            >
              Unlocking <span className="textt font-[700]">Financial</span>{" "}
              <br /> Success{" "}
              <span className="textt font-[700]">Management</span>
            </motion.h1>
            <motion.p
              variants={fadeLeft(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[#555555] text-[16px] poppins max-lg:text-center max-lg:pt-8"
            >
              <span className="text-[#000000] text-[16px] leading-9">
                This book delves into the intricacies of wealth management,
                offering
              </span>
              <br /> readers comprehensive strategies to grow and protect thei
              assets It <br /> covers topics ranging from investment
              diversification to tax <br /> optimization tailored for the
              contemporary
            </motion.p>
          </div>
        </div>
      </div>
      {/* row 2 */}
      <div className="containers gap-[40px] flex justify-between max-lg:flex-col max-lg:items-center mt-28">
        <motion.div
          variants={faderight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="1flexbox shadow-2xl w-[470px] max-md:w-[300px] h-[504px] rounded-[35px] bg-[#D7EBFF]"
        >
          <p className="text-[25px] poppins text-[#000000] underline pt-10 text-center">
            Tax Planning and Optimization
          </p>
          <Image
            src="/friendship.jpg"
            alt=""
            width={353}
            height={328}
            className="w-[353px] mt-10 h-[328px] bg-[#D9D9D9] rounded-2xl mx-auto"
          />
        </motion.div>
        <motion.div
          variants={faderight(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="2flexbox shadow-2xl rounded-[35px] w-[470px] max-md:w-[300px] h-[375px] bg-[#D7EBFF] mt-32"
        >
          <p className="text-[25px] poppins text-[#000000] underline underline-offset-[7px] pt-16 text-center">
            Tax Planning and Optimization
          </p>
          <p className="text-[16px] poppins leading-9 text-center text-[#555555] pt-10">
            Offer comprehensive tax planning services both individuals and
            businesses, helping cli minimize tax liabilities and maximize after
            tax
          </p>
          <div className="flex justify-around mt-16">
            <span className="w-[48px] h-0 border-4  border-[#45198D] rounded-xl"></span>
            <span className="w-[48px] h-0 border-4 border-[#ACACAC] rounded-xl"></span>
            <span className="w-[48px] h-0 border-4  border-[#ACACAC] rounded-xl"></span>
            <span className="w-[48px] h-0 border-4  border-[#ACACAC] rounded-xl"></span>
          </div>
        </motion.div>
        <motion.div
          variants={faderight(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="3flexbox"
        >
          <Image
            src="/image-2.png"
            alt=""
            width={366}
            height={504}
            className="bg-cover shadow-2xl rounded-[35px] w-[470px] max-md:w-[300px] max-md:mt-10 h-[504px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChoseus;
