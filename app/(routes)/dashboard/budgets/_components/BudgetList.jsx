

import CreateBudget from './CreateBudget';
import { getTableColumns, sql, eq, desc } from 'drizzle-orm';
import { Budgets, Expenses } from '../../../../../utils/schema';
import { auth } from '@clerk/nextjs/server';


import BudgetItem from './BudgetItem'
import { db } from '../../../../../utils/index';

async function BudgetList() {
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

  return (
    <div className='mt-7'>
      <div className='grid grid-cols-1 md:grid-cols-1  lg:grid-cols-3 gap-5'>
        <CreateBudget />
        { budgetList.map((budget, index) => (
          <BudgetItem key={index} budget={budget} />
        ))
        }
      </div>
    </div>
  )
}

export default BudgetList