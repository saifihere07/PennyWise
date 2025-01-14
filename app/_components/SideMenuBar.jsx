"use client";
import { useState } from "react";

import { Menu, X } from "lucide-react";
import Link from "next/link";

const SideMenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-[1000]">
      {/* Menu Icon (Hamburger or Close) */}
      <div
        className="top-4 -mt-12  z-10 text-2xl cursor-pointer lg:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <X /> : <Menu />}{" "}
        {/* Toggle between hamburger menu and close */}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-[1000] bg-black bg-opacity-50 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar} // Clicking outside will close the sidebar
      ></div>

      <div
        className={`fixed top-0 z-[1000] left-0 h-full w-64 bg-gray-800 text-white p-5 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:bg-transparent lg:text-black lg:p-0 lg:flex lg:flex-row lg:justify-around lg:h-auto`}
      >
        {/* Sidebar Links */}
        <div className="space-y-4 z-[1000] lg:space-y-0 lg:hidden lg:space-x-8 mt-10">
          <li>
            <Link className="text-[18px] font-[500] leading-6" href="#home">
              Home
            </Link>
          </li>
          <Link
            href="/dashboard"
            className="block py-2 px-4 rounded hover:bg-gray-700 lg:hover:bg-transparent"
          >
            Dashboard
          </Link>
          <Link
            href="#about"
            className="block py-2 px-4 rounded hover:bg-gray-700 lg:hover:bg-transparent"
          >
            About Us
          </Link>
          <Link
            href="#servces"
            className="block py-2 px-4 rounded hover:bg-gray-700 lg:hover:bg-transparent"
          >
            Services
          </Link>

          <Link
            href="#blog"
            className="block py-2 px-4 rounded hover:bg-gray-700 lg:hover:bg-transparent"
          >
            Blog
          </Link>
          <Link
            href="#page"
            className="block py-2 px-4 rounded hover:bg-gray-700 lg:hover:bg-transparent"
          >
            Why Chose us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenuBar;
