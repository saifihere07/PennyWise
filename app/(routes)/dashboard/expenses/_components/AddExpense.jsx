"use client";
import { Button } from "../../../../../components/ui/button";
import { db } from "../../../../../utils";
import { Budgets, Expenses } from "../../../../../utils/schema";
import moment from "moment/moment";
import { Input } from "../../../../../components/ui/input";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createExpense } from "../action";

function AddExpense({ budgetId, user, budgetInfo }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const AddNewExpense = async (data) => {
    const { name, amount } = data;

    if (amount > budgetInfo[0]?.amount - budgetInfo[0]?.totalSpend) {
      toast.error(
        `Please add an expense smaller than: ${
          budgetInfo[0]?.amount - budgetInfo[0]?.totalSpend
        }`
      );
      return;
    }

    try {
      const result = await createExpense({
        name: name,
        amount: amount,
        budgetId: budgetId,
        userId: user?.userId,
      });
      if (result) {
        router.refresh();
        toast("Expense Added!");
        reset(); // Reset the form after successful submission
        return true;
      }
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(AddNewExpense)}
      className="bg-white border p-4 rounded-lg lg:ml-2 "
    >
      <h2 className="font-bold text-lg">Add Expense</h2>

      {/* Expense Name Field */}
      <div className="mt-2">
        <h2 className="text-black font-medium m-1">Expense Name</h2>
        <Input
          placeholder="e.g. Shoes"
          {...register("name", {
            required: "Expense name is required",
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Expense name can only contain letters and spaces",
            },
          })}
          type="text"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Expense Amount Field */}
      <div className="mt-2">
        <h2 className="text-black font-medium m-1">Expense Amount</h2>
        <Input
          placeholder="e.g. 3000"
          {...register("amount", {
            required: "Amount is required",
            valueAsNumber: true,
            min: { value: 1, message: "Amount must be greater than 0" },
          })}
          type="number"
        />
        {errors.amount && (
          <p className="text-red-500 text-sm">{errors.amount.message}</p>
        )}
      </div>

      <Button type="submit" className="mt-3 w-full">
        Add Expense
      </Button>
    </form>
  );
}

export default AddExpense;
