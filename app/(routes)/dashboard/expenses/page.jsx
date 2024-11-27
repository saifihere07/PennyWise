
import ExpensesListTable from './_components/ExpensesListTable'
import { db } from '../../../../utils/index';
import { Budgets, Expenses } from '../../../../utils/schema';
import { desc, eq } from 'drizzle-orm';
import { auth } from '@clerk/nextjs/server';

async function ExpensesList() {

  const { userId } = await auth()



  const expensesList = await db.select({
    id: Expenses.id,
    name: Expenses.name,
    amount: Expenses.amount,
    createdAt: Expenses.createdAt
  }).from(Budgets)
    .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
    .where(eq(Budgets.user_id, userId))
    .orderBy(desc(Expenses.id));
    


  return (
    <div className='p-10'>
      <h1 className=' text-3xl font-extrabold '> My Expenses</h1>
      <div className='-mt-5'>
      {expensesList?.length > 0 ? <ExpensesListTable
          expensesList={expensesList}
          
        /> : <div className="h-[110px] w-[500px] max-sm:w-[300px] md:[200px] mt-10 border-[3px] rounded-2xl ml-2">
              <h1 className='text-xl p-10 max-sm:p-5'>Please add an Expense to see it here!</h1>
               </div>}
      </div>
    </div>
  )
}

export default ExpensesList