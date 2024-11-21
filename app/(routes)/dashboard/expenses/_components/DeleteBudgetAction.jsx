
import { eq } from "drizzle-orm";
import { db } from "../../../../../utils/dbConfig";
import { Budgets, Expenses } from '../../../../../utils/schema';


export const deleteBudget = async ({params})=>{
    const deleteExpenseResult = await db.delete(Expenses)
    .where(eq(Expenses.budgetId, params.id))
    .returning()
 

if (deleteExpenseResult) {
    const result = await db.delete(Budgets)
        .where(eq(Budgets.id, params.id))
        .returning();
     

       
        if (result){
            return true;
        }
      
}


}