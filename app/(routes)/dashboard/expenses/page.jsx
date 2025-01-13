import ExpensesListTable from "./_components/ExpensesListTable";
import { db } from "../../../../utils/index";
import { Budgets, Expenses } from "../../../../utils/schema";
import { desc, eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import ExpenseItem from "../_components/ExpenseItem";
import { UserButton } from "@clerk/nextjs";

async function ExpensesList() {
  const { userId } = await auth();

  const expensesList = await db
    .select({
      id: Expenses.id,
      name: Expenses.name,
      amount: Expenses.amount,
      createdAt: Expenses.createdAt,
    })
    .from(Budgets)
    .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
    .where(eq(Budgets.user_id, userId))
    .orderBy(desc(Expenses.id));

  return (
    <section className="p-10">
      <div className="flex flex-row justify-between mb-6 px-12">
        <h1 className=" text-3xl font-extrabold text-[#32383F] "> Expenses</h1>
        {/* <UserButton showName className="hidden md:ml-1" /> */}
      </div>
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
    </section>
  );
}

export default ExpensesList;
