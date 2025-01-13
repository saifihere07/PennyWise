import React from "react";
import BudgetList from "./_components/BudgetList";

function Budgets() {
  return (
    <div className=" px-24 pt-11">
      <div className="flex flex-row justify-between">
        <h1 className=" text-3xl font-extrabold text-[#32383F] ">
          {" "}
          My Budgets
        </h1>
        {/* <div className="sm:hidden">
          <UserButton showName />
        </div> */}
      </div>
      <BudgetList />
    </div>
  );
}

export default Budgets;
