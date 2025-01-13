import React from "react";
import ExpenseItem from "../../_components/ExpenseItem";

async function ExpensesListTable({ expensesList }) {
  return (
    <div>
      {" "}
      <p className="text-3xl font-bold ml-10 mt-3 text-[#32383F]"> Expenses</p>
      <div className="containers max-sm:-ml-7">
        {expensesList.length > 0 ? (
          expensesList.map((expense, index) => {
            return (
              <ExpenseItem
                key={index}
                expense={expense}
                expensesList={expensesList}
              />
            );
          })
        ) : (
          <p className="mt-3 ml-10 italic text-[#32383F]">
            Please add an Expense to see it here!
          </p>
        )}
      </div>
    </div>
  );
}

export default ExpensesListTable;
