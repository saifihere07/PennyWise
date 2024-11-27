"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const SideMenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-[1000]">
      {/* Menu Icon (Hamburger or Close) */}
      <div
        className="  top-4 left-4 z-10 text-2xl cursor-pointer lg:hidden"
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
        <div className="space-y-4 z-[1000] lg:space-y-0 lg:flex lg:space-x-8 mt-10">
          <Link
            href="/"
            className="block py-2 px-4 rounded hover:bg-gray-700 lg:hover:bg-transparent"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className="block py-2 px-4 rounded hover:bg-gray-700 lg:hover:bg-transparent"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/budgets"
            className="block py-2 px-4 rounded hover:bg-gray-700 lg:hover:bg-transparent"
          >
            Budgets
          </Link>
          <Link
            href="/dashboard/expenses"
            className="block py-2 px-4 rounded hover:bg-gray-700 lg:hover:bg-transparent"
          >
            Expenses
          </Link>
          <Link
            href="/dashboard/upgrade"
            className="block py-2 px-4 rounded hover:bg-gray-700 lg:hover:bg-transparent"
          >
            Upgrade
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenuBar;
