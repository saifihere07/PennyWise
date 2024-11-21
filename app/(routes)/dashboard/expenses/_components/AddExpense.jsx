
import { revalidatePath } from 'next/cache';
import { Button } from '../../../../../components/ui/button';
import { db } from '../../../../../utils/dbConfig';
import { Budgets, Expenses } from '../../../../../utils/schema';
import moment from 'moment/moment';
import { Input } from '../../../../../components/ui/input';


function AddExpense({ budgetId, user, budgetInfo }) {
  
   

  //use to add expense
  const AddNewExpense = async (formData) => {
     'use server'
   
    const name = formData.get("name");
    const amount = formData.get("amount");
 
   //use to add expense
     const result = await db.insert(Expenses).values({
       name: name,
       amount: amount,
       budgetId: budgetId,
       user_id:user?.userId,
       createdAt: moment().format('DD/MM/YYYY')
     }).returning({ insertedId: Budgets.id })
 
     console.log(result)
    
     if (result) {
       
     return true
    
     }
     revalidatePath("/dashboard")
     revalidatePath("/dashboard/expenses")
    } 



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

export default AddExpense