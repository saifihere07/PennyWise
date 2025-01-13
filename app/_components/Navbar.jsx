"use client";
import Link from "next/link";
import SideMenuBar from "./SideMenuBar";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "../../components/ui/button";

const Navbar = () => {
  const { isSignedIn } = useUser();
  return (
    <div className="fixed w-full h-[60px] px-[130px] py-[30px] max-lg:pt-5 max-xl:px-10 max-lg:px-5 z-10 ">
      <div className="flex bg-[#9ea8b266] bg-opacity-90 shadow-xl backdrop-filter backdrop-blur-[5px] max-md:p-2 p-4 rounded-[20px] items-center justify-between ">
        {/* Logo Section */}
        <div className="logotext flex items-center cursor-pointer">
          <svg
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
          </svg>
          <h1 className="text-[#5B25B4] text-[28px] font-[600] leading-[38.5px] ml-2">
            fiscus
          </h1>
        </div>

        {/* Navbar Links */}
        <div className="hidden lg:flex flex-grow items-center justify-center">
          <ul className="flex gap-[70px]">
            <li>
              <Link
                className="text-[18px] font-[500] text-[#45198D] leading-6"
                href="#home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-[18px] font-[500] text-[#555555] hover:text-[#262F2E] duration-300 leading-6"
                href="#about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-[18px] font-[500] text-[#555555] hover:text-[#262F2E] duration-300 leading-6"
                href="#servces"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                className="text-[18px] font-[500] text-[#555555] hover:text-[#262F2E] duration-300 leading-6"
                href="#blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="text-[18px] font-[500] text-[#555555] hover:text-[#262F2E] duration-300 leading-6"
                href="/dashboard"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <a
                className="text-[18px] font-[500] text-[#555555] hover:text-[#262F2E] duration-300 leading-6"
                href="#page"
              >
                Why Us
              </a>
            </li>
          </ul>
        </div>

        {/* Sign In Button */}
        <div className="hidden lg:flex">
          {isSignedIn ? (
            <div className="flex items-center gap-2 ">
              <UserButton showName />
            </div>
          ) : (
            <Link href={"/sign-in"}>
              <Button className="text-white w-[139px] h-[60px] rounded-[26px] bg-[#45198D] hover:bg-[#7f69a3] duration-300">
                Get Started
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div className="absolute max-lg:right-9">
        <SideMenuBar />
      </div>
    </div>
  );
};

export default Navbar;
