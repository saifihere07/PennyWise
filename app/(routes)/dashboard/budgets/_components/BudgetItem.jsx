import Link from "next/link";
import React from "react";

function BudgetItem({ budget }) {
  const calculateProgressPerc = () => {
    // (spend/total)*100
    const perc = (budget?.totalSpend / budget?.amount) * 100;

    return perc.toFixed(2);
  };

  return (
    <Link href={"/dashboard/expenses/" + budget?.id}>
      <div className="flex1 mt-5 w-full  cursor-pointer p-4  h-[170px] bg-white rounded-2xl shadow-2xl">
        <div className="flex flex-row items-center gap-x-4">
          <div className="w-[45px] h-[45px] rounded-full bg-primary mt-2 ml-1 py-0.5 px-0.5">
            <p className="text-center text-[#32383F] text-[25px]">
              {budget?.icon}
            </p>
          </div>
          <div className="mt-2">
            <p className="text-center text-[#32383F] text-[25px]">
              {budget?.name}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p className="text-[16px] text-[#32383F] pt-2 ml-1">
            {budget?.totalItem} Items
          </p>
          <span className="text-[30px] text-[#32383F] font-[700] pt-2 ml-1">
            $ {budget?.amount}
          </span>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xs text-slate-400">
              ${budget?.totalSpend ? budget?.totalSpend : 0} Spent
            </h2>
            <h2 className="text-xs text-slate-400">
              ${budget?.amount - budget?.totalSpend} Remaining
            </h2>
          </div>
          <div className="w-full bg-[#E8E3E3]  h-2 rounded-full ">
            <div
              className=" bg-primary h-2 rounded-full "
              style={{
                width: `${calculateProgressPerc()}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BudgetItem;
