import DeleteExpenseButton from "../expenses/_components/DeleteExpenseButton";

export default function ExpenseItem({ expense }) {
  return (
    <div className="container1 hover:scale-105 duration-500 cursor-pointer flex items-center justify-between max-sm:w-[350px] w-[90%] mx-auto rounded-2xl mt-5 h-[74px] bg-[white] shadow-2xl">
      <div className="svgtext px-6 py-6 gap-[20px] flex items-center">
        <span className="text-[#32383F] text-[18px] font-[700]">
          {expense.name}
        </span>
      </div>
      <span className="text-[#5B25B4] text-[16px] font-[700] px-3">
        ${expense.amount}
      </span>
      <span className="text-[#5B25B4] text-[16px] font-[700] px-3">
        {expense.createdAt}
      </span>
      <span className="text-[#5B25B4] text-[16px] font-[700] px-3">
        <DeleteExpenseButton expenses={expense} />
      </span>
    </div>
  );
}
