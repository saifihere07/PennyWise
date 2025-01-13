import Link from "next/link";

export default function NewBudgetItem({ budget }) {
  const calculateProgressPerc = () => {
    // (spend/total)*100
    const perc = (budget?.totalSpend / budget?.amount) * 100;

    return perc.toFixed(2);
  };
  return (
    <Link href={"/dashboard/expenses/" + budget?.id}>
      <div className="flex1 mt-5 w-full hover:scale-105 duration-500 cursor-pointer p-4  h-[170px] background rounded-2xl shadow-2xl">
        <div className="flex flex-row items-center gap-x-4">
          <div className="w-[45px] h-[45px] rounded-full bg-[#45198D] mt-2 ml-1 py-0.5 px-0.5">
            <p className="text-center text-white text-[25px]">{budget?.icon}</p>
          </div>
          <div className="mt-2">
            <p className="text-center text-white text-[25px]">{budget?.name}</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p className="text-[16px] text-[#C6C6C6] font-[400] pt-2 ml-1">
            {budget?.totalItem} Items
          </p>
          <span className="text-[30px] text-white font-[700] pt-2 ml-1">
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
          <div className="w-full bg-[#45198D]  h-2 rounded-full ">
            <div
              className=" bg-white h-2 rounded-full "
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
