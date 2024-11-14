
import ExpensesListTable from './_components/ExpensesListTable'
import { db } from '../../../../utils/dbConfig';
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
          
        /> :
          <div className='flex flex-col mt-10 gap-5'>
            <div className='h-[30px] w-[280px]  max-sm:w-[150px] md:w-[200px] lg:w-[280px] xl:w-[280px]  2xl:w-[500px] bg-slate-200 rounded-md animate-pulse' ></div>
            <div className='h-[50px] w-[1000px] max-sm:w-[300px] md:w-[400px] lg:w-[650px] xl:w-[1000px] 2xl:w-[2000px]  bg-slate-200 rounded-md animate-pulse' ></div>
            <div className='h-[50px] w-[1000px] max-sm:w-[300px] md:w-[400px] lg:w-[650px] xl:w-[1000px] 2xl:w-[2000px] bg-slate-200 rounded-md animate-pulse' ></div>
            <div className='h-[50px] w-[1000px] max-sm:w-[300px] md:w-[400px] lg:w-[650px] xl:w-[1000px] 2xl:w-[2000px] bg-slate-200 rounded-md animate-pulse' ></div>
            <div className='h-[50px] w-[1000px] max-sm:w-[300px] md:w-[400px] lg:w-[650px] xl:w-[1000px] 2xl:w-[2000px] bg-slate-200 rounded-md animate-pulse' ></div>
            <div className='h-[50px] w-[1000px] max-sm:w-[300px] md:w-[400px] lg:w-[650px] xl:w-[1000px] 2xl:w-[2000px] bg-slate-200 rounded-md animate-pulse' ></div>


          </div>}
      </div>
    </div>
  )
}

export default ExpensesList