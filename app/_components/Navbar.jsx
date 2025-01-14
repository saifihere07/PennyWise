"use client";
import Link from "next/link";
import SideMenuBar from "./SideMenuBar";
import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "../../components/ui/button";
import Image from "next/image";

const Navbar = () => {
  const { isSignedIn } = useUser();
  return (
    <div className="fixed w-full h-[60px] px-[100px] py-[30px] max-lg:pt-5 max-xl:px-10 max-lg:px-5 z-10 ">
      <div className="flex bg-[#9ea8b266] bg-opacity-90 shadow-xl backdrop-filter backdrop-blur-[5px] max-md:p-2 p-4 rounded-[20px] items-center justify-between ">
        {/* Logo Section */}
        <div className="logotext flex items-center cursor-pointer">
          <Image
            className="-mt-1"
            width={40}
            height={40}
            src="/Logo.png"
            alt="logo"
          />
          <h1 className="text-[#5B25B4] text-[24px] font-[600] leading-[38.5px] ml-2">
            PennyWise
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
                Blogs
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
