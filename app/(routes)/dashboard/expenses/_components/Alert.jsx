'use client'
import React from 'react';
//alert dialogue imports
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../../../../../components/ui/alert-dialog";
import { Button } from '../../../../../components/ui/button';
import { Trash } from 'lucide-react';
import { toast } from 'sonner';
import { db } from '../../../../../utils/dbConfig';
import { Budgets, Expenses } from '../../../../../utils/schema';
import { eq } from 'drizzle-orm';



function Alert({ params}) {

    const deleteBudget = async () => {
       

        const deleteExpenseResult = await db.delete(Expenses)
            .where(eq(Expenses.budgetId, params.id))
            .returning()

        if (deleteExpenseResult) {
            const result = await db.delete(Budgets)
                .where(eq(Budgets.id, params.id))
                .returning();
        }
        toast('Budget Deleted!')




    }
    return (
        <div className=''>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button className="flex gap-2 h" variant="destructive">
                        <Trash /> Delete
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your current budget along with expenses
                            and remove your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => deleteBudget()}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </div>
    )
}

export default Alert