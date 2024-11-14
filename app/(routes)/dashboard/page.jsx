import CardInfo from './_components/cardInfo';
import { desc, eq, getTableColumns, sql } from 'drizzle-orm';
import BarChartDashboard from './_components/BarChartDashboard';
import BudgetItem from './budgets/_components/BudgetItem';
import ExpensesListTable from './expenses/_components/ExpensesListTable';
import { auth } from '@clerk/nextjs/server';
import { db } from '../../../utils/dbConfig';
import { Budgets, Expenses } from '../../../utils/schema';


async function Dashboard() {
  const { userId } = await auth()

  const budgetList = await db.select({
    ...getTableColumns(Budgets),
    totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
    totalItem: sql`count(${Expenses.id})`.mapWith(Number)
  }).from(Budgets)
    .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
    .where(eq(Budgets.user_id, userId))
    .groupBy(Budgets.id)
    .orderBy(desc(Budgets.id))

  const expensesList = await db.select({
    id: Expenses.id,
    name: Expenses.name,
    amount: Expenses.amount,
    createdAt: Expenses.createdAt
  }).from(Budgets)
    .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
    .where(eq(Budgets.user_id, userId))
    .orderBy(desc(Expenses.id));


  console.log('User', userId)



  return (
    <div className='p-8 md:flex md:flex-col'>
      {/* <h2 className='text-3xl font-bold'> Hi, {user?.fullName}!</h2> */}
      <p className='text-gray-500 mt-1'>Here&apos;s what&apos;s happening with your Money, Let&apos;s manage your Expenses! </p>


      {/* 3 Cards for Dashboard along with skeleton effect */}

      {budgetList.length > 0 ? <CardInfo budgetList={budgetList} />
        :
        <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '>
          <div className='h-[110px] w-[325px] md:w-[230px] bg-slate-200 animate-pulse rounded-md'></div>
          <div className='h-[110px] w-[325px] md:w-[230px] bg-slate-200 animate-pulse rounded-md'></div>
          <div className='h-[110px] w-[325px] md:w-[230px] bg-slate-200 animate-pulse rounded-md'></div>
        </div>}


      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 gap-5'>
        <div className='md:col-span-2'>

          {/* BarChart for Dashboard  */}
          <BarChartDashboard
            budgetList={budgetList}
          />


          {/* ExpensesListTable for Dashboard along with skeleton effect */}

          <div>
            {expensesList?.length > 0 ? <ExpensesListTable
              expensesList={expensesList}
            /> :
              <div className='flex flex-col gap-8 ml-3 mt-10'>
                <div className='h-[30px] w-[200px] max-sm:w-[150px] max-lg:w-[200px] max-xl:w-[200px] bg-slate-200 rounded-md  animate-pulse' ></div>
                <div className='h-[30px] w-[650px] max-sm:w-[300px] md:w-[600px] max-lg:w-[800px] max-xl:w-[900px] bg-slate-200 rounded-md  animate-pulse' ></div>
                <div className='h-[30px] w-[650px] max-sm:w-[300px] md:w-[600px] max-lg:w-[800px] max-xl:w-[900px] bg-slate-200  rounded-md animate-pulse' ></div>
                <div className='h-[30px] w-[650px] max-sm:w-[300px] md:w-[600px] max-lg:w-[800px] max-xl:w-[900px] bg-slate-200 rounded-md animate-pulse' ></div>
                <div className='h-[30px] w-[650px] max-sm:w-[300px] md:w-[600px] max-lg:w-[800px] max-xl:w-[900px] bg-slate-200 rounded-md animate-pulse' ></div>

              </div>}
          </div>
        </div>


        {/* BudgetList for Dashboard along with skeleton effect */}

        <div className='grid grid-cols-1  gap-5'>
          <h2 className='font-bold text-lg'>Latest Budgets</h2>
          {budgetList?.length > 0 ? budgetList.map((budget, index) => (
            <BudgetItem budget={budget} key={index} />
          )) : <div className='flex flex-col gap-5' >
            <div className='w-full bg-slate-200 h-[150px] rounded-lg animate-pulse'></div>
            <div className='w-full bg-slate-200 h-[150px] rounded-lg animate-pulse'></div>
            <div className='w-full bg-slate-200 h-[150px] rounded-lg animate-pulse'></div>
          </div>}
        </div>
      </div>

    </div>

  )
}

export default Dashboard