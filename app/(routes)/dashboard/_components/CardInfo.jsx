import { PiggyBank, Receipt, Wallet } from 'lucide-react';
import React from 'react'

const CardInfo = () => {
  let totalBudget = 0;
  let totalSpend = 0;
  budgetList.forEach((element) => {
    totalBudget = totalBudget + Number(element.amount);
    totalSpend = totalSpend + element.totalSpend;
  });

  return (
    <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
      <div className="p-7 border rounded-lg flex items-center justify-between hover:shadow-md">
        <div>
          <h2 className="text-sm">Total Budget</h2>
          <h2 className="font-bold text-3xl">${totalBudget}</h2>
        </div>
        <PiggyBank className="bg-primary h-12 w-12 p-3 rounded-full text-white" />
      </div>

      <div className="p-7 border rounded-lg flex items-center justify-between hover:shadow-md">
        <div>
          <h2 className="text-sm">Total Spend</h2>
          <h2 className="font-bold text-3xl">${totalSpend}</h2>
        </div>
        <Receipt className="bg-primary h-12 w-12 p-3 rounded-full text-white" />
      </div>

      <div className="p-7 border rounded-lg flex items-center justify-between hover:shadow-md">
        <div>
          <h2 className="text-sm">No. of Budgets</h2>
          <h2 className="font-bold text-3xl">{budgetList?.length}</h2>
        </div>
        <Wallet className="bg-primary h-12 w-12 p-3 rounded-full text-white" />
      </div>
    </div>
  );
}

export default CardInfo