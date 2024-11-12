import { db } from '@/utils/dbConfig'
import { Expenses } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Trash } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'

function ExpensesListTable({ expensesList, refreshData }) {

    const deleteExpense = async (expense) => {
        const result = await db.delete(Expenses)
            .where(eq(Expenses.id, expense.id))
            .returning()


        if (result)

            toast('Expense Deleted!')
        refreshData();
    }

    return (
        <div className='mt-5 '>
            <h2 className='font-bold text-lg mt-9'>Latest Expenses</h2>
            <div className=' border hover:shadow-md mt-3'>
                <div className='grid grid-cols-4 p-2 bg-slate-200   '>
                    <h2 className='font-bold'>Name</h2>
                    <h2 className='font-bold'>Amount</h2>
                    <h2 className='font-bold'>Date</h2>
                    <h2 className='font-bold'>Action</h2>
                </div>
                {expensesList?.map((expenses, index) => (
                    <div className='grid grid-cols-4 p-2 bg-slate-50 ' key={index}>
                        <h2 className='flex'>{expenses.name}</h2>
                        <h2 className='flex'>{expenses.amount}</h2>
                        <h2 className='flex'>{expenses.createdAt}</h2>
                        <h2><Trash
                            onClick={() => deleteExpense(expenses)}
                            className='text-slate-500 hover:text-red-600 hover:animate-bounce cursor-pointer max-sm:ml-6 md:ml-8' /></h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExpensesListTable