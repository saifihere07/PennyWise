'use client'
import { Button } from '../../../../../components/ui/button';
import { Input } from '../../../../../components/ui/input'
import { db } from '../../../../../utils/dbConfig';
import { Budgets, Expenses } from '../../../../../utils/schema';
import { Loader } from 'lucide-react';
import moment from 'moment/moment';
import React, { useState } from 'react'
import { toast } from 'sonner';

function AddExpense({ budgetId, user, refreshData }) {

  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [loading, setLoading] = useState(false);
  console.log(user)

  //use to add expense
  const AddNewExpense = async () => {
    setLoading(true)
    const result = await db.insert(Expenses).values({
      name: name,
      amount: amount,
      budgetId: budgetId,
      user_id:user?.userId,
      createdAt: moment().format('DD/MM/YYYY')
    }).returning({ insertedId: Budgets.id })

    console.log(result)
    setAmount('');
    setName('');
    if (result) {
      setLoading(false)
    
      toast('New Expense Added!')
    }
    setLoading(false)

  }



  return (
    <form className='border p-5 rounded-lg lg:ml-2 '>
      <h2 className="font-bold text-lg">Add Expense</h2>
      <div className='mt-2'>
        <h2 className='text-black font-medium m-1'>Expense Name</h2>
        <input placeHolder="e.g. Shoes"
          value={name}
          type={'email'} />
      </div>
      <div className='mt-2'>
        <h2 className='text-black font-medium m-1'>Expense Amount</h2>
        <Input placeHolder="e.g. 3000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button 
        type={'submit'}
        className="mt-3 w-full">
        {loading ? <Loader className='animate-spin' /> : "Add Expense"}
      </button>
    </form>
  )
}

export default AddExpense