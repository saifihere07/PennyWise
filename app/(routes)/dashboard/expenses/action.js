"use server";

import { toast } from "sonner";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { db } from "../../../../utils/dbConfig";
import { Expenses } from "../../../../utils/schema";

export const deleteExpense = async (expense) => {
  const result = await db
    .delete(Expenses)
    .where(eq(Expenses.id, expense.id))
    .returning();
  
  revalidatePath("/dashboard");

  if (result) {
    return true;
  }

};