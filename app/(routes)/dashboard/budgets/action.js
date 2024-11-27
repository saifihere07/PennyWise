"use server";

import { db } from "../../../../utils";
import { Budgets } from "../../../../utils/schema";

export const createBudget = async ({
  amount,
  user_email,
  user_id,
  emojiIcon,
  name,
}) => {
  const result = await db
    .insert(Budgets)
    .values({
      name: name,
      amount: amount,
      user_id: user_id,
      createdBy: user_email,
      icon: emojiIcon,
    })
    .returning({ insertedId: Budgets.id });

  return result;
};
