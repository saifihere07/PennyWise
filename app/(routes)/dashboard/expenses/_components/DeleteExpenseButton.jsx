"use client";

import React from "react";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import { deleteExpense } from "../action";

const DeleteExpenseButton = ({ expenses }) => {
  return (
    <Trash
      onClick={async () => {
        const result = await deleteExpense(expenses);

        if (!result) {
          toast("Expenses could not be deleted please try again.");
          return;
        }

        toast("Expense Deleted");
      }}
      className="text-slate-500 hover:text-red-600 hover:animate-bounce cursor-pointer max-sm:ml-6 md:ml-8"
    />
  );
};

export default DeleteExpenseButton;
