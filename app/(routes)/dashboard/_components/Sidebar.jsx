"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const { user } = useUser();
  const path = usePathname();

  const menuList = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    {
      id: 4,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];
  return (
    <div className="h-screen p-5 border shadow-sm">
      <Link href="/">
        <Image
          src="/Logo.png"
          alt="logo"
          width={150}
          height={50}
          className="ml-8 -mt-2"
        />
      </Link>
      <div className="mt-5">
        {menuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <h2
              className={`flex gap-2 items-center font-medium mb-2 text-gray-500
                          p-5 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100
                           ${path === menu.path && "text-primary bg-blue-100"}`}
              key={index}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="fixed bottom-10 p-5 flex items-center gap-2 ">
        <UserButton />
        {user?.fullName || user?.username || "Guest"}
      </div>
      <div className="absolute bottom-3 ">
        <div className="text-gray-600">Powered By PRODIGI Studios</div>
      </div>
    </div>
  );
}

export default Sidebar;
