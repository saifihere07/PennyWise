"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Name() {
  const { user } = useUser();
  return (
    <section>
      <div className="profile w-[174px] h-[174px] border-[3px] rounded-full mx-auto mt-10">
        <div className="max-w-[150px] h-[150px] bg-[#45198D] text-white text-[40px] font-[700] flex items-center justify-center rounded-full m-[9px]">
          {user.imageUrl ? (
            <Image
              className="w-[150px] h-[150px] rounded-full"
              src={user.imageUrl}
              alt={user.fullName}
              width={150}
              height={150}
            />
          ) : (
            user?.fullName?.charAt(0)
          )}
        </div>
      </div>
      <div className="textcontainer py-4 text-center text-[#32383F] text-[24px] font-[700]">
        <p className="">{user?.fullName}</p>
      </div>
    </section>
  );
}
