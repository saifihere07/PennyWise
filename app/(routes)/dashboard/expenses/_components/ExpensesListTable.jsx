import React from "react";
import DeleteExpenseButton from "./DeleteExpenseButton";

async function ExpensesListTable({ expensesList }) {
  return (
    <div className="mt-5 ">
      <h2 className="font-bold text-lg mt-9">Latest Expenses</h2>
      <div className=" border hover:shadow-md mt-3">
        <div className="grid grid-cols-4 p-2 bg-slate-200   ">
          <h2 className="font-bold">Name</h2>
          <h2 className="font-bold">Amount</h2>
          <h2 className="font-bold">Date</h2>
          <h2 className="font-bold">Action</h2>
        </div>
        {expensesList?.map((expenses, index) => (
          <div className="grid grid-cols-4 p-2 bg-slate-50 " key={index}>
            <h2 className="flex">{expenses.name}</h2>
            <h2 className="flex">{expenses.amount}</h2>
            <h2 className="flex">{expenses.createdAt}</h2>
            <h2>
              <DeleteExpenseButton expenses={expenses} />
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpensesListTable;
