"use client";
import React, { useState } from "react";
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
import { Button } from "../../../../../components/ui/button";
import { Input } from "../../../../../components/ui/input";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { createBudget } from "../action";

function CreateBudget() {
  const [emojiIcon, setEmojiIcon] = useState("😊");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const router = useRouter();

  const { user } = useUser();

  // Use to Create New Budget
  const onCreateBudget = async () => {
    const result = await createBudget({
      name: name,
      amount: amount,
      user_id: user?.id,
      emojiIcon: emojiIcon,
      user_email: user?.primaryEmailAddress?.emailAddress,
    });

    if (result) {
      router.refresh();
      toast("New Budget Created!");
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex1 mt-5 w-full  cursor-pointer  h-[170px] bg-white rounded-2xl shadow-2xl flex flex-col items-center p-10">
            <h2 className="text-3xl">+</h2>
            <h2>Create New Budget</h2>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
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
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mt-2">
                  <h2 className="text-black font-medium m-1">Budget Amount</h2>
                  <Input
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
                onClick={() => onCreateBudget()}
                disabled={!(name && amount)}
                className="mt-5 w-full"
              >
                Create Budget
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateBudget;
