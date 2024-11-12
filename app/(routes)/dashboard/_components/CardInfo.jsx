'use client'
import { PiggyBank, Receipt, Wallet } from 'lucide-react'
import { useEffect, useState } from 'react'


function CardInfo({ budgetList }) {

  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);

  useEffect(() => {
    budgetList && CalculateCardInfo();
  }, [budgetList])

  const CalculateCardInfo = () => {
    console.log(budgetList)
    let totalBudget_ = 0;
    let totalSpend_ = 0;
    budgetList.forEach(element => {
      totalBudget_ = totalBudget_ + Number(element.amount)
      totalSpend_ = totalSpend_ + element.totalSpend
    });

    setTotalSpend(totalSpend_)
    setTotalBudget(totalBudget_)
    console.log(totalBudget_, totalSpend_)
  }




  return (


    <div className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
      <div className='p-7 border rounded-lg flex items-center justify-between hover:shadow-md'>
        <div>
          <h2 className='text-sm'>Total Budget</h2>
          <h2 className='font-bold text-3xl'>${totalBudget}</h2>
        </div>
        <PiggyBank className='bg-primary h-12 w-12 p-3 rounded-full text-white' />
      </div>

      <div className='p-7 border rounded-lg flex items-center justify-between hover:shadow-md'>
        <div>
          <h2 className='text-sm'>Total Spend</h2>
          <h2 className='font-bold text-3xl'>${totalSpend}</h2>
        </div>
        <Receipt className='bg-primary h-12 w-12 p-3 rounded-full text-white' />
      </div>

      <div className='p-7 border rounded-lg flex items-center justify-between hover:shadow-md'>
        <div>
          <h2 className='text-sm'>No. of Budgets</h2>
          <h2 className='font-bold text-3xl'>{budgetList?.length}</h2>
        </div>
        <Wallet className='bg-primary h-12 w-12 p-3 rounded-full text-white' />
      </div>

    </div>

  )
}

export default CardInfo