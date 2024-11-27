import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const list1 = [
    "Figma",
    "JAVASCRIPT",
    "REACT.jS",
    "NEXT.jS",
    "Adobe Softwares",
  ];

  const list2 = ["UI/UX Design", "WEB DEVELPMENT", "2d & 3d Animation", "SEO"];

  const list3 = [
    "contact@prodigi-studios.com",
    "+92 332 704 4713",
    "M.A Jinnah Road, Okara",
  ];
  return (
    <footer className="bg-[#F9FAFB] max-sm:mt-6">
      <div className="sm:h-auto py-20 px-[150px] gap-7 text-black background max-md:py-5 max-md:px-5">
        <div className="row1 flex justify-between items-start max-sm:flex-col max-sm:gap-3">
          <div className="title">
            <h2 className=" text-4xl font-bold text-primary">PennyWise</h2>
          </div>
          <div className="icons flex justify-center items-center gap-3">
            <div className="flex gap-x-4 text-3xl">
              <Link
                href={"https://www.instagram.com/prodigistudios/"}
                target="_blank"
                className="hover:text-blue-800 transition-all duration-300"
              >
                <Instagram />
              </Link>
              <Link
                href={"https://www.facebook.com/prodigistd"}
                target="_blank"
                className="hover:text-blue-800 transition-all duration-300"
              >
                <Facebook />
              </Link>
              <Link
                href={"https://x.com/Prodigi_Studios"}
                target="_blank"
                className="hover:text-blue-800 transition-all duration-300"
              >
                <Twitter />
              </Link>
              <Link
                href={"https://www.youtube.com/@ProdigiStudios"}
                target="_blank"
                className="hover:text-blue-800 transition-all duration-300"
              >
                <Youtube />
              </Link>
              <Link
                href={"https://www.linkedin.com/company/prodigistudios/"}
                target="_blank"
                className="hover:text-blue-800 transition-all duration-300"
              >
                <Linkedin />
              </Link>
            </div>
          </div>
        </div>

        <div className="row2 my-7 border-y-[1px] border-[#333] flex justify-between items-center pt-14 pb-14 gap-44 max-md:flex-col">
          <div className="menu w-full flex max-lg:gap-[100px] lg:gap-[300px] max-sm:gap-10 ml-[20px]  max-md:w-full max-sm:flex-wrap">
            <div className="menu1 flex flex-col gap-5">
              <h3 className=" text-2xl">Technologies</h3>
              <div className="list1 gap-3 flex flex-col  text-[15px] text-[black]">
                {list1.map((item, index) => (
                  <a
                    className="hover:underline"
                    key={index}
                    href="https://www.prodigi-studios.com/"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="menu2 flex flex-col gap-5">
              <h3 className=" text-2xl">Services</h3>
              <div className="list1 gap-3 flex flex-col  text-[15px] text-[black]">
                {list2.map((item, index) => (
                  <a className="hover:underline" key={index} href="#">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="menu3 flex flex-col gap-5">
              <h3 className=" text-2xl "> Useful Info</h3>
              <div className="list1 gap-3 flex flex-col  text-[15px] text-[black]">
                {list3.map((item, index) => (
                  <a
                    className="hover:underline"
                    key={index}
                    href="https://www.prodigi-studios.com/"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="copyright flex text-[#6D6D6D] justify-between max-sm:flex-col">
          <div className="copyright flex max-sm:py-3 max-sm:flex-row max-sm:items-center max-sm:justify-center">
            <h6 className="text-black">Copyright © 2024 PennyWise</h6>
            <div className="line mx-4 border-r-[1px] border-[black] max-sm:hidden max-sm:py-2"></div>
            <h6 className="text-black">
              Powered By{" "}
              <Link
                className="text-primary text-lg"
                href="https://www.prodigi-studios.com/"
              >
                ProdigiStudios
              </Link>
            </h6>
          </div>
          <div className="term flex  max-sm:flex-row items-center gap-6">
            <h6 className="text-black">Term of use</h6>
            <div className="line mx-4 border-r-[1px] border-black max-sm:hidden"></div>
            <h6 className="max-sm:py-2 text-black">Privacy policy</h6>
            <div className="line mx-4 border-r-[1px] border-black max-sm:hidden"></div>
            <h6 className="text-black">Cookie policy</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
