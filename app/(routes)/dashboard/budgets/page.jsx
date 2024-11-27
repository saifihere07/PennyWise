import React from "react";
import BudgetList from "./_components/BudgetList";

function Budgets() {
  return (
    <div className="p-10">
      <h1 className=" text-3xl font-extrabold "> My Budgets</h1>
      <BudgetList />
    </div>
  );
}

export default Budgets;
