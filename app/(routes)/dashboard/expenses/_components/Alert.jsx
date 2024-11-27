"use client";
import React from "react";
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
import { Button } from "../../../../../components/ui/button";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { deleteBudget } from "../action";

function Alert({ params }) {
  const router = useRouter();
  const route = useRouter();
  return (
    <div className="">
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
              This action cannot be undone. This will permanently delete your
              current budget along with expenses and remove your data from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                const result = await deleteBudget({ params });

                if (!result) {
                  toast("Budget could not be deleted please try again.");
                  return;
                }
                route.replace("/dashboard/budgets");
                router.refresh();
                toast("Budget Deleted");
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default Alert;
