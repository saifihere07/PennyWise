"use client";
import { Button } from "../../../../../components/ui/button";
import { PenBox } from "lucide-react";
import React, { useEffect, useState } from "react";
//dialogue imports
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../../components/ui/dialog";
import EmojiPicker from "emoji-picker-react";
import { Input } from "../../../../../components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { updateBudget } from "../action";

function EditBudget({ budgetInfo }) {
  const [emojiIcon, setEmojiIcon] = useState(budgetInfo?.icon);
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const router = useRouter();
  const [name, setName] = useState();
  const [amount, setAmount] = useState();

  useEffect(() => {
    if (budgetInfo) {
      setEmojiIcon(budgetInfo?.icon);
      setName(budgetInfo?.name);
      setAmount(budgetInfo?.amount);
    }
  }, [budgetInfo]);

  const onUpdateBudget = async () => {
    if (amount < budgetInfo?.totalSpend) {
      toast.error(
        `Please enter your budget greater than : ${budgetInfo?.totalSpend}`
      );
      return;
    }
    const result = await updateBudget({
      name: name,
      amount: amount,
      icon: emojiIcon,
      budgetId: budgetInfo.id,
    });

    if (result) {
      toast("Budget Updated!");
      router.refresh();
    }
  };

  return (
    <div className="max-sm:ml-5">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex gap-2">
            {" "}
            <PenBox /> Edit
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Budget</DialogTitle>
            <DialogDescription>
              <div className="mt-5">
                <Button
                  className="text-lg"
                  variant="outline"
                  onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                >
                  {emojiIcon}
                </Button>
                <div className="absolute z-20">
                  <EmojiPicker
                    open={openEmojiPicker}
                    onEmojiClick={(e) => {
                      setEmojiIcon(e.emoji);
                      setOpenEmojiPicker(false);
                    }}
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-black font-medium m-1">Budget Name</h2>
                  <Input
                    placeHolder="e.g. Car"
                    defaultValue={budgetInfo?.name}
                    type="text"
                    pattern="[A-Za-z\s]"
                    title="Only letters and spaces are allowed"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mt-2">
                  <h2 className="text-black font-medium m-1">Budget Amount</h2>
                  <Input
                    defaultValue={budgetInfo?.amount}
                    type="number"
                    placeHolder="e.g. 5000$"
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                onClick={() => onUpdateBudget()}
                disabled={!(name && amount)}
                className="mt-5 w-full"
              >
                Update Budget
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditBudget;
