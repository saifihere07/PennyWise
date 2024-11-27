import { db } from "../../../../../utils";
import { Budgets, Expenses } from "../../../../../utils/schema";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import BudgetItem from "../../budgets/_components/BudgetItem";
import AddExpense from "../_components/AddExpense";
import ExpensesListTable from "../_components/ExpensesListTable";
import { auth } from "@clerk/nextjs/server";
import Alert from "../_components/Alert";

import EditBudget from "../_components/EditBudget";

async function ExpensesScreen({ params }) {
  const user = await auth();

  const userInfo = {
    userId: user?.userId,
    primaryEmail: user?.primaryEmailAddress?.emailAddress,
  };

  // use to get Budget information by id

  const budgetInfo = await db
    .select({
      ...getTableColumns(Budgets),
      totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
      totalItem: sql`count(${Expenses.id})`.mapWith(Number),
    })
    .from(Budgets)
    .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
    .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
    .where(eq(Budgets.id, params.id))
    .groupBy(Budgets.id);

  // use to get Latest Expenses List

  const expensesList = await db
    .select()
    .from(Expenses)
    .where(eq(Expenses.budgetId, params.id))
    .orderBy(desc(Expenses.id));

  return (
    <div className="p-10">
      <div className="flex justify-between items-center max-sm:flex-col">
        <h2 className="text-3xl font-extrabold max-sm:-ml-[145px]">
          My Expenses
        </h2>
        <div className="flex gap-2 max-sm:-mr-[100px] max-sm:mt-5 max-sm:-mb-2">
          <div className="">
            <EditBudget budgetInfo={budgetInfo[0]} />
          </div>
          <Alert params={params} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-6 max-sm:gap-5">
        {budgetInfo ? (
          <BudgetItem budget={budgetInfo[0]} />
        ) : (
          <div className="h-[150px] w-full bg-slate-200 rounded-lg animate-pulse"></div>
        )}
        <AddExpense
          budgetInfo={budgetInfo}
          user={userInfo}
          budgetId={params.id}
        />
      </div>
      <div className="mt-4">
        <ExpensesListTable expensesList={expensesList} />
      </div>
    </div>
  );
}

export default ExpensesScreen;
