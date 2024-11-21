import React from 'react'
import { Button } from '../../../../../components/ui/button';
import { Input } from '../../../../../components/ui/input';
import {AddNewExpense} from './AddExpense'

function Form() {
  return (
    <form action={AddNewExpense} className='border p-5 rounded-lg lg:ml-2 '>
      <h2 className="font-bold text-lg">Add Expense</h2>
      <div className='mt-2'>
        <h2 className='text-black font-medium m-1'>Expense Name</h2>
        <Input placeHolder="e.g. Shoes"
          name='name'
          type='text'
          />
      </div>
      <div className='mt-2'>
        <h2 className='text-black font-medium m-1'>Expense Amount</h2>
        <Input placeHolder="e.g. 3000"
          name='amount'
          type='number'
          />
      </div>
      <Button 
        type='submit'
        className="mt-3 w-full">
       Add Expense
      </Button>
    </form>
  )
}

export default Form