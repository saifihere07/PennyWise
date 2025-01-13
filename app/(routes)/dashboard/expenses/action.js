"use server";

import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { db } from "../../../../utils";
import { Budgets, Expenses } from "../../../../utils/schema";
import moment from "moment";

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

export const createExpense = async ({ name, amount, budgetId, userId }) => {
  const result = await db
    .insert(Expenses)
    .values({
      name: name,
      amount: amount,
      budgetId: budgetId,
      user_id: userId,
      createdAt: moment().format("DD/MM/YYYY"),
    })
    .returning({ insertedId: Budgets.id });

  return result;
};

export const updateBudget = async ({ name, amount, budgetId, emojiIcon }) => {
  const result = await db
    .update(Budgets)
    .set({
      name: name,
      amount: amount,
      icon: emojiIcon,
    })
    .where(eq(Budgets.id, budgetId))
    .returning();

  return result;
};

export const deleteBudget = async ({ params }) => {
  const deleteExpenseResult = await db
    .delete(Expenses)
    .where(eq(Expenses.budgetId, params.id))
    .returning();

  if (deleteExpenseResult) {
    const result = await db
      .delete(Budgets)
      .where(eq(Budgets.id, params.id))
      .returning();

    if (result) {
      return true;
    }
  }
};
