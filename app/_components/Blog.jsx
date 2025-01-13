import { motion } from "framer-motion";
import { fadeLeft, faderight, FadeUp } from "./Animation";
import Image from "next/image";
const Blog = () => {
  return (
    <div className="px-[130px] py-[150px] w-full h-full max-lg:px-5" id="blog">
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
          <circle cx="10" cy="10" r="10" fill="#5B25B4" />
        </svg>
        <h1 className="text-[20px] text-[#5B25B4] underline">Services</h1>
      </motion.div>
      <div className="row1 flex max-lg:flex-col justify-between">
        <motion.div
          variants={faderight(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="colm1 max-lg:text-center max-md:pt-10"
        >
          <span className="text-[#000000] max-md:text-[35px] max-md:leading-[50px] text-[60px] max-2xl:text-[40px] font-[300] leading-[70px]">
            Global Markets
            <span className="textt font-[600]">
              Unveiled <br /> Complexities
            </span>
            Inter
          </span>
        </motion.div>
        <motion.div
          variants={fadeLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="colm2 max-lg:text-center max-md:pt-10"
        >
          <p className="text-[16px] leading-9 text-[#555555] poppins">
            <span className="text-[#000000] text-[16px] underline">
              Designed for individuals looking to take control of their
              financial destiny ti
            </span>
            <br /> provides step-by-step instructions on budgeting
          </p>
          <div className="max-lg:flex max-lg:justify-center">
            <button className="text-white w-[139px] h-[60px] mt-8 rounded-[26px] bg-[#45198D] hover:bg-[#45198D] duration-300">
              Discover
            </button>
          </div>
        </motion.div>
      </div>
      <div className="row2 flex max-lg:flex-col gap-[20px] justify-between mt-28">
        <motion.div
          variants={FadeUp(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flexbox1 w-1/3 max-lg:w-full"
        >
          <Image
            src="/image (1).png"
            alt=""
            width={426}
            height={281}
            className="absolute rounded-[34px] w-[426px] max-sm:w-[320px] object-cover"
          />
          <div className="h-[313px] relative bg-[#D4D4D8] rounded-[30px] mt-44 shadow-2xl">
            <div className="container flex gap-[60px] pt-10 justify-center">
              <div className="text flex gap-[20px]">
                <div className="w-[15px] h-[15px] rounded-full bg-[#000000]"></div>
                <span className="text-[16px] text-[#000000]">Admin</span>
              </div>
              <div className="text2 flex gap-[20px]">
                <div className="w-[15px] h-[15px] rounded-full bg-[#000000]"></div>
                <span className="text-[16px] text-[#000000]">12 Agt 2024</span>
              </div>
            </div>
            <div className="pargraph">
              <p className="text-[24px] text-[#000000] text-center pt-10 leading-7">
                The Import Financial Planning for Long Term Success
              </p>
              <p className="text-[16px] poppins text-[#555555] leading-9 text-center pt-7">
                Ensure clients have a clear plat maintain their desired
                lifestyle post-retirement
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={FadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flexbox2 w-1/3 max-lg:w-full  rounded-[30px] shadow-2xl"
        >
          <Image
            src="/image-1.png"
            alt=""
            width={370}
            height={244}
            className="absolute  rounded-[34px] max-w-[428px] max-2xl:w-[370px] max-lg:w-full max-sm:w-[320px] object-cover"
          />
          <div className="h-[313px] relative bg-[#D9D9D9] rounded-[30px] mt-44 shadow-2xl">
            <div className="container flex gap-[60px] pt-10 justify-center">
              <div className="text flex gap-[20px]">
                <div className="w-[15px] h-[15px] rounded-full bg-[#000000]"></div>
                <span className="text-[16px] text-[#000000]">Admin</span>
              </div>
              <div className="text2 flex gap-[20px]">
                <div className="w-[15px] h-[15px] rounded-full bg-[#000000]"></div>
                <span className="text-[16px] text-[#000000]">12 Agt 2024</span>
              </div>
            </div>
            <div className="pargraph">
              <p className="text-[24px] text-[#000000] text-center pt-10 leading-7">
                The Import Financial Planning for Long Term Success
              </p>
              <p className="text-[16px] poppins text-[#555555] leading-9 text-center pt-7">
                Ensure clients have a clear plat maintain their desired
                lifestyle post-retirement
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={FadeUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flexbox3 w-1/3 max-lg:w-full max-sm:mt-5 h-[470px] rounded-[30px] shadow-2xl"
        >
          <Image
            src="/image-2.png"
            alt=""
            width={370}
            height={244}
            className="absolute  rounded-[34px] w-[426px] max-2xl:w-[370px] max-lg:w-full max-sm:w-[320px] object-cover"
          />
          <div className="h-[313px] bg-[#D9D9D9] relative rounded-[35px] mt-40 shadow-2xl">
            <div className="container flex gap-[60px] pt-10 justify-center">
              <div className="text flex gap-[20px]">
                <div className="w-[15px] h-[15px] rounded-full bg-[#000000]"></div>
                <span className="text-[16px] text-[#000000]">Admin</span>
              </div>
              <div className="text2 flex gap-[20px]">
                <div className="w-[15px] h-[15px] rounded-full bg-[#000000]"></div>
                <span className="text-[16px] text-[#000000]">12 Agt 2024</span>
              </div>
            </div>
            <div className="pargraph">
              <p className="text-[24px] text-[#000000] text-center pt-10 leading-7">
                The Import Financial Planning for Long Term Success
              </p>
              <p className="text-[16px] poppins text-[#555555] leading-9 text-center pt-7">
                Ensure clients have a clear plat maintain their desired
                lifestyle post-retirement
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
