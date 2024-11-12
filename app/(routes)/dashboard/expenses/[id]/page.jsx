'use client'
import { db } from '@/utils/dbConfig';
import { Budgets, Expenses } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { desc, eq, getTableColumns, sql } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import BudgetItem from '../../budgets/_components/BudgetItem';
import AddExpense from '../_components/AddExpense';
import ExpensesListTable from '../_components/ExpensesListTable';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';

//alert dialogue imports
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import EditBudget from '../_components/EditBudget';


function ExpensesScreen({ params }) {

  const [budgetInfo, setBudgetInfo] = useState();
  const [expensesList, setExpensesList] = useState([]);
  const { user } = useUser();
  const route = useRouter();
  useEffect(() => {
    console.log(params)
    user && getBudgetInfo();

  }, [user])


  // use to get Budget information by id

  const getBudgetInfo = async () => {
    const result = await db.select({
      ...getTableColumns(Budgets),
      totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
      totalItem: sql`count(${Expenses.id})`.mapWith(Number)
    }).from(Budgets)
      .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .where(eq(Budgets.id, params.id))
      .groupBy(Budgets.id)

    setBudgetInfo(result[0]);
    console.log(budgetInfo)

    getExpensesList();
  }


  // use to get Latest Expenses List
  const getExpensesList = async () => {
    const result = await db.select().from(Expenses)
      .where(eq(Expenses.budgetId, params.id))
      .orderBy(desc(Expenses.id))
    setExpensesList(result)
    console.log(result)

  }


  // use to delete Budget

  const deleteBudget = async () => {

    const deleteExpenseResult = await db.delete(Expenses)
      .where(eq(Expenses.budgetId, params.id))
      .returning()

    if (deleteExpenseResult) {
      const result = await db.delete(Budgets)
        .where(eq(Budgets.id, params.id))
        .returning();
    }
    toast('Budget Deleted!')

    route.replace('/dashboard/budgets');


  }

  return (
    <div className='p-10'>
      <div className='flex justify-between items-center max-sm:flex-col'>
        <h2 className='text-3xl font-extrabold max-sm:-ml-[145px]'>My Expenses</h2>
        <div className='flex gap-2 max-sm:-mr-[100px] max-sm:mt-5 max-sm:-mb-2'>
          <div className=''><EditBudget budgetInfo={budgetInfo}
            refreshData={() => getBudgetInfo()} /></div>
          <div className=''>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="flex gap-2 h" variant="destructive">
                  <Trash /> Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your current budget along with expenses
                    and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => deleteBudget()}>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

          </div>
        </div>

      </div>





      <div className='grid grid-cols-1 md:grid-cols-2 mt-6 max-sm:gap-5'>
        {budgetInfo ? <BudgetItem
          budget={budgetInfo}
        /> :
          <div className='h-[150px] w-full bg-slate-200 rounded-lg animate-pulse'>
          </div>}
        <AddExpense
          user={user} budgetId={params.id}
          refreshData={() => getBudgetInfo()} />
      </div>
      <div className='mt-4'>

        <ExpensesListTable expensesList={expensesList}
          refreshData={() => getBudgetInfo()} />
      </div>
    </div>
  )
}

export default ExpensesScreen