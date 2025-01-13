"use client";
import { useUser } from "@clerk/nextjs";

export default function Name() {
  const { user } = useUser();
  return (
    <section>
      <div className="profile w-[174px] h-[174px] border-[3px] rounded-full mx-auto mt-10">
        <div className="max-w-[150px] h-[150px] bg-[#C4C4C4] rounded-full m-[9px]"></div>
      </div>
      <div className="textcontainer py-4 text-center text-[#32383F] text-[24px] font-[700]">
        <p className="">{user?.fullName}</p>
      </div>
    </section>
  );
}
