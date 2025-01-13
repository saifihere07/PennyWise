"use client";
import { UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DashboardNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="z-[1000] h-[30px] items-center px-5 relative hidden max-lg:flex backdrop-blur-sm">
      {/* Menu Icon (Hamburger or Close) */}
      <div className="flex space-x-[180px] mt-5 ml-4 md:space-x-[520px]  h-5">
        <div
          className=" top-7 z-[1001] text-2xl cursor-pointer text-[#5B25B4]"
          onClick={toggleSidebar}
        >
          {isOpen ? <X /> : <Menu />}
          {/* Toggle between hamburger menu and close */}
        </div>
        <div className=" ml-6">
          <UserButton showName />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={` inset-0 z-[1000] bg-white bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed -top-4 z-[1000] left-0 h-full max-sm:-ml-2 max-sm:-mt-2 max-w-64  text-white p-5 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:bg-transparent text-gray-600 lg:p-0 lg:flex lg:flex-row lg:justify-around lg:h-auto`}
      >
        {/* Sidebar Links */}
        <div className="w-64 bg-white shadow-2xl rounded-3xl text-white min-h-screen p-5 max-2xl:w-full">
          <div className="text-2xl font-semibold pt-14 text-black text-center">
            Dashboard
          </div>
          <ul>
            <div className="svgtext1 flex gap-4 hover:bg-[#EBE3E3] items-center rounded-3xl p-3 mt-10 border hover:scale-110 cursor-pointer duration-500">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.33368 8.00001C5.33368 7.29277 5.61463 6.61449 6.11473 6.11439C6.61482 5.61429 7.2931 5.33334 8.00035 5.33334H10.667C11.3743 5.33334 12.0525 5.61429 12.5526 6.11439C13.0527 6.61449 13.3337 7.29277 13.3337 8.00001V10.6667C13.3337 11.3739 13.0527 12.0522 12.5526 12.5523C12.0525 13.0524 11.3743 13.3333 10.667 13.3333H8.00035C7.2931 13.3333 6.61482 13.0524 6.11473 12.5523C5.61463 12.0522 5.33368 11.3739 5.33368 10.6667V8.00001ZM18.667 8.00001C18.667 7.29277 18.948 6.61449 19.4481 6.11439C19.9482 5.61429 20.6264 5.33334 21.3337 5.33334H24.0003C24.7076 5.33334 25.3859 5.61429 25.886 6.11439C26.3861 6.61449 26.667 7.29277 26.667 8.00001V10.6667C26.667 11.3739 26.3861 12.0522 25.886 12.5523C25.3859 13.0524 24.7076 13.3333 24.0003 13.3333H21.3337C20.6264 13.3333 19.9482 13.0524 19.4481 12.5523C18.948 12.0522 18.667 11.3739 18.667 10.6667V8.00001ZM5.33368 21.3333C5.33368 20.6261 5.61463 19.9478 6.11473 19.4477C6.61482 18.9476 7.2931 18.6667 8.00035 18.6667H10.667C11.3743 18.6667 12.0525 18.9476 12.5526 19.4477C13.0527 19.9478 13.3337 20.6261 13.3337 21.3333V24C13.3337 24.7073 13.0527 25.3855 12.5526 25.8856C12.0525 26.3857 11.3743 26.6667 10.667 26.6667H8.00035C7.2931 26.6667 6.61482 26.3857 6.11473 25.8856C5.61463 25.3855 5.33368 24.7073 5.33368 24V21.3333ZM18.667 21.3333C18.667 20.6261 18.948 19.9478 19.4481 19.4477C19.9482 18.9476 20.6264 18.6667 21.3337 18.6667H24.0003C24.7076 18.6667 25.3859 18.9476 25.886 19.4477C26.3861 19.9478 26.667 20.6261 26.667 21.3333V24C26.667 24.7073 26.3861 25.3855 25.886 25.8856C25.3859 26.3857 24.7076 26.6667 24.0003 26.6667H21.3337C20.6264 26.6667 19.9482 26.3857 19.4481 25.8856C18.948 25.3855 18.667 24.7073 18.667 24V21.3333Z"
                  stroke="#5B25B4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Link
                href="/dashboard"
                className="text-[#32383F] text-[18px] font-[600]"
              >
                Dashboard
              </Link>
            </div>
            <div className="svgtext2 flex gap-4 items-center hover:bg-[#EBE3E3] pl-3 rounded-3xl p-3 mt-5 cursor-pointer border hover:scale-110 duration-500">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.667 21.3333V24C22.667 24.7072 22.386 25.3855 21.8859 25.8856C21.3858 26.3857 20.7075 26.6667 20.0003 26.6667H6.66697C5.95973 26.6667 5.28145 26.3857 4.78135 25.8856C4.28126 25.3855 4.00031 24.7072 4.00031 24V14.6667C4.00031 13.9594 4.28126 13.2811 4.78135 12.781C5.28145 12.281 5.95973 12 6.66697 12H9.33364M13.3336 6.66667H12.0003C11.2931 6.66667 10.6148 6.94762 10.1147 7.44771C9.61459 7.94781 9.33364 8.62609 9.33364 9.33333V18.6667C9.33364 19.3739 9.61459 20.0522 10.1147 20.5523C10.6148 21.0524 11.2931 21.3333 12.0003 21.3333H25.3336C26.0409 21.3333 26.7192 21.0524 27.2193 20.5523C27.7194 20.0522 28.0003 19.3739 28.0003 18.6667V9.33333C28.0003 8.62609 27.7194 7.94781 27.2193 7.44771C26.7192 6.94762 26.0409 6.66667 25.3336 6.66667H24.0003M22.667 12L18.667 16M18.667 16L14.667 12M18.667 16V4"
                  stroke="#5B25B4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <Link
                href="/dashboard/budgets"
                className="text-[#32383F] text-[18px] font-[500]"
              >
                Budgets
              </Link>
            </div>
            <div className="svgtext3 flex gap-4 items-center hover:bg-[#EBE3E3] pl-5 rounded-3xl p-3 mt-5 cursor-pointer border hover:scale-110 duration-500">
              <svg
                width="22"
                height="26"
                viewBox="0 0 22 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66705 3.66667C1.66705 2.95942 1.948 2.28115 2.4481 1.78105C2.9482 1.28095 3.62648 1 4.33372 1H17.6671C18.3743 1 19.0526 1.28095 19.5527 1.78105C20.0528 2.28115 20.3337 2.95942 20.3337 3.66667V25L11.0004 20.3333L1.66705 25V3.66667Z"
                  stroke="#5B25B4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <Link
                href="/dashboard/expenses"
                className="text-[#32383F] text-[18px] font-[500]"
              >
                Expenses
              </Link>
            </div>
            <div className="svgtext4 flex gap-4 items-center hover:bg-[#EBE3E3] pl-5 rounded-3xl p-3 mt-5 cursor-pointer border hover:scale-110 duration-500">
              <svg
                width="22"
                height="26"
                viewBox="0 0 22 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3337 6.33333C16.3337 7.74782 15.7718 9.10438 14.7716 10.1046C13.7714 11.1048 12.4149 11.6667 11.0004 11.6667C9.5859 11.6667 8.22934 11.1048 7.22915 10.1046C6.22896 9.10438 5.66705 7.74782 5.66705 6.33333C5.66705 4.91885 6.22896 3.56229 7.22915 2.5621C8.22934 1.5619 9.5859 1 11.0004 1C12.4149 1 13.7714 1.5619 14.7716 2.5621C15.7718 3.56229 16.3337 4.91885 16.3337 6.33333V6.33333ZM11.0004 15.6667C8.52503 15.6667 6.15106 16.65 4.40072 18.4003C2.65038 20.1507 1.66705 22.5246 1.66705 25H20.3337C20.3337 22.5246 19.3504 20.1507 17.6 18.4003C15.8497 16.65 13.4757 15.6667 11.0004 15.6667V15.6667Z"
                  stroke="#5B25B4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <Link
                href="/dashboard/upgrade"
                className="text-[#32383F] text-[18px] font-[500]"
              >
                Upgrade
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
