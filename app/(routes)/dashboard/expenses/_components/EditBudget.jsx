'use client'
import { Button } from '../../../../../components/ui/button'
import { PenBox } from 'lucide-react'
import React, { useEffect, useState } from 'react'
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
} from "../../../../../components/ui/dialog"
import EmojiPicker from 'emoji-picker-react'
import { Input } from '../../../../../components/ui/input'
import { useUser } from '@clerk/nextjs'
import { db } from '../../../../../utils/dbConfig'
import { Budgets } from '../../../../../utils/schema'
import { toast } from 'sonner'
import { eq } from 'drizzle-orm'

function EditBudget({ budgetInfo, refreshData }) {
    const [emojiIcon, setEmojiIcon] = useState(budgetInfo?.icon);
    const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
   
    const [name, setName] = useState();
    const [amount, setAmount] = useState();
    const { user } = useUser();


    useEffect(() => {
        if (budgetInfo) {
            setEmojiIcon(budgetInfo?.icon)
            setName(budgetInfo?.name)
            setAmount(budgetInfo?.amount)
        }

    }, [budgetInfo])

    console.log(budgetInfo)

    const onUpdateBudget = async () => {
        const result = await db.update(Budgets).set({
            name: name,
            amount: amount,
            icon: emojiIcon
        }).where(eq(Budgets.id, budgetInfo.id))
            .returning();

        if (result) {

        
            toast('Budget Updated!')
        }
    }

    return (
        <div className='max-sm:ml-5'>

            <Dialog>
                <DialogTrigger asChild>
                    <Button className="flex gap-2"> <PenBox /> Edit</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Update Budget</DialogTitle>
                        <DialogDescription>
                            <div className='mt-5'>
                                <Button className="text-lg" variant="outline" onClick={() => setOpenEmojiPicker(!openEmojiPicker)}>{emojiIcon}</Button>
                                <div className='absolute z-20'>
                                    <EmojiPicker
                                        open={openEmojiPicker}
                                        onEmojiClick={(e) => {
                                            setEmojiIcon(e.emoji)
                                            setOpenEmojiPicker(false)
                                        }}
                                    />
                                </div>
                                <div className='mt-2'>
                                    <h2 className='text-black font-medium m-1'>Budget Name</h2>
                                    <Input placeHolder="e.g. Car"
                                        defaultValue={budgetInfo?.name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className='mt-2'>
                                    <h2 className='text-black font-medium m-1'>Budget Amount</h2>
                                    <Input defaultValue={budgetInfo?.amount}
                                        type="number" placeHolder="e.g. 5000$"
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
                                className="mt-5 w-full">Update Budget</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default EditBudget