import Link from "next/link";
import NewBudgetItem from "./NewBudgetItem";
import ExpenseItem from "./ExpenseItem";
import BarChartDashboard from "./BarChartDashboard";
import Name from "./Name";
import Advice from "./Advice";
import { auth } from "@clerk/nextjs/server";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { Budgets, Expenses } from "../../../../utils/schema";
import { db } from "../../../../utils";

const Dashboard2 = async () => {
  const { userId } = await auth();

  const budgetList = await db
    .select({
      ...getTableColumns(Budgets),
      totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
      totalItem: sql`count(${Expenses.id})`.mapWith(Number),
    })
    .from(Budgets)
    .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
    .where(eq(Budgets.user_id, userId))
    .groupBy(Budgets.id)
    .orderBy(desc(Budgets.id));

  const expensesList = await db
    .select({
      id: Expenses.id,
      name: Expenses.name,
      amount: Expenses.amount,
      createdAt: Expenses.createdAt,
    })
    .from(Budgets)
    .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
    .where(eq(Budgets.user_id, userId))
    .orderBy(desc(Expenses.id));

  let totalBudget = 0;
  let totalSpend = 0;
  budgetList.forEach((element) => {
    totalBudget = totalBudget + Number(element.amount);
    totalSpend = totalSpend + element.totalSpend;
  });
  return (
    <div className="w-screen py-10 px-10 max-md:px-5">
      <div className="containers flex max-lg:flex-col">
        {/*  Main Content */}
        <div className="row2 w-[65%] max-lg:w-full max-sm:mt-14 max-lg:mt-10 px-10">
          <Advice totalBudget={totalBudget} totalSpend={totalSpend} />
          <div className="containers flex max-md:flex-col max-md:justify-center max-md:items-center justify-between  gap-[20px] pt-10">
            <div className="flex1 hover:scale-105 duration-500 cursor-pointer w-1/3 max-sm:w-[300px] h-[177px] background rounded-2xl shadow-2xl">
              <div className="w-[35px] h-[35px] rounded-full bg-[#45198D] mt-4 ml-4 py-0.5 px-0.5">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 6C5.20435 6 4.44129 6.31607 3.87868 6.87868C3.31607 7.44129 3 8.20435 3 9V15C3 15.7956 3.31607 16.5587 3.87868 17.1213C4.44129 17.6839 5.20435 18 6 18V9H21C21 8.20435 20.6839 7.44129 20.1213 6.87868C19.5587 6.31607 18.7956 6 18 6H6ZM9 15C9 14.2044 9.31607 13.4413 9.87868 12.8787C10.4413 12.3161 11.2044 12 12 12H24C24.7956 12 25.5587 12.3161 26.1213 12.8787C26.6839 13.4413 27 14.2044 27 15V21C27 21.7956 26.6839 22.5587 26.1213 23.1213C25.5587 23.6839 24.7956 24 24 24H12C11.2044 24 10.4413 23.6839 9.87868 23.1213C9.31607 22.5587 9 21.7956 9 21V15ZM18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 17.2044 20.6839 16.4413 20.1213 15.8787C19.5587 15.3161 18.7956 15 18 15C17.2044 15 16.4413 15.3161 15.8787 15.8787C15.3161 16.4413 15 17.2044 15 18C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21Z"
                    fill="white"
                  />
                </svg>
                <p className="text-[16px] text-[#C6C6C6] font-[400] pt-5">
                  Total Budget
                </p>
                <span className="text-[30px] text-white font-[700] pt-3">
                  ${totalBudget}
                </span>
              </div>
            </div>
            <div className="flex2 hover:scale-105 duration-500 cursor-pointer w-1/3 max-sm:w-[300px] h-[177px] bg-white rounded-2xl shadow-2xl">
              <div className="w-[35px] h-[35px] rounded-full bg-[#F4F4F4] mt-4 ml-4 py-0.5 px-0.5">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.0183 19.5C12.4161 19.5 12.7977 19.658 13.079 19.9393C13.3603 20.2206 13.5183 20.6022 13.5183 21C13.5183 21.3978 13.3603 21.7794 13.079 22.0607C12.7977 22.342 12.4161 22.5 12.0183 22.5H4.51831C4.12049 22.5 3.73895 22.342 3.45765 22.0607C3.17634 21.7794 3.01831 21.3978 3.01831 21V13.5C3.01831 13.1022 3.17634 12.7206 3.45765 12.4393C3.73895 12.158 4.12049 12 4.51831 12C4.91613 12 5.29767 12.158 5.57897 12.4393C5.86028 12.7206 6.01831 13.1022 6.01831 13.5V17.379L12.4578 10.9395C12.7391 10.6583 13.1206 10.5003 13.5183 10.5003C13.9161 10.5003 14.2975 10.6583 14.5788 10.9395L18.0183 14.379L24.4578 7.9395C24.7407 7.66626 25.1196 7.51507 25.5129 7.51849C25.9062 7.52191 26.2824 7.67966 26.5605 7.95777C26.8387 8.23589 26.9964 8.6121 26.9998 9.0054C27.0032 9.39869 26.852 9.7776 26.5788 10.0605L19.0788 17.5605C18.7975 17.8417 18.4161 17.9997 18.0183 17.9997C17.6206 17.9997 17.2391 17.8417 16.9578 17.5605L13.5183 14.121L8.13931 19.5H12.0183Z"
                    fill="#5C26B4"
                  />
                </svg>
              </div>
              <div className="text pl-5">
                <p className="text-[16px] text-[#787878] font-[400] pt-5">
                  Total Spend
                </p>
                <span className="text-[30px] text-[#32383F] font-[700] pt-5">
                  ${totalSpend}
                </span>
              </div>
            </div>
            <div className="flex3 hover:scale-105 duration-500 cursor-pointer w-1/3 h-[177px] max-sm:w-[300px] bg-white rounded-2xl shadow-2xl">
              <div className="w-[35px] h-[35px] rounded-full bg-[#F4F4F4] mt-4 ml-4 px-1 py-2">
                <svg
                  width="24"
                  height="16"
                  viewBox="0 0 24 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 3.51843C14.6022 3.51843 14.2206 3.3604 13.9393 3.07909C13.658 2.79779 13.5 2.41626 13.5 2.01843C13.5 1.62061 13.658 1.23908 13.9393 0.957772C14.2206 0.676468 14.6022 0.518433 15 0.518433H22.5C22.8978 0.518433 23.2794 0.676468 23.5607 0.957772C23.842 1.23908 24 1.62061 24 2.01843V9.51843C24 9.91626 23.842 10.2978 23.5607 10.5791C23.2794 10.8604 22.8978 11.0184 22.5 11.0184C22.1022 11.0184 21.7206 10.8604 21.4393 10.5791C21.158 10.2978 21 9.91626 21 9.51843V5.63943L14.5605 12.0789C14.2792 12.3601 13.8977 12.5181 13.5 12.5181C13.1023 12.5181 12.7208 12.3601 12.4395 12.0789L9 8.63943L2.5605 15.0789C2.2776 15.3522 1.89869 15.5034 1.5054 15.4999C1.1121 15.4965 0.735885 15.3388 0.457773 15.0607C0.17966 14.7825 0.021907 14.4063 0.0184893 14.013C0.0150717 13.6197 0.166263 13.2408 0.4395 12.9579L7.9395 5.45793C8.22079 5.17673 8.60225 5.01875 9 5.01875C9.39775 5.01875 9.77921 5.17673 10.0605 5.45793L13.5 8.89743L18.879 3.51843H15Z"
                    fill="#5C26B4"
                  />
                </svg>
              </div>
              <div className="text pl-5">
                <p className="text-[16px] text-[#787878] font-[400] pt-5">
                  No. of Budgets
                </p>
                <span className="text-[30px] text-[#32383F] font-[700] pt-5">
                  {budgetList?.length}
                </span>
              </div>
            </div>
          </div>
          {/* Giraph Main */}
          <div className="mt-10 ">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 max-sm:p-6">
              <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 shadow-xl rounded-lg">
                <div className="flex justify-between items-center">
                  <p className="text-3xl font-bold ml-10 mt-3 text-[#32383F]">
                    {" "}
                    Overview
                  </p>
                </div>
                <div className="mt-6 bg-gray-50 cursor-pointer dark:bg-gray-700 p-6 rounded-lg shadow-2xl">
                  <BarChartDashboard budgetList={budgetList} />
                </div>
              </div>
            </div>
          </div>

          {/* Expenses */}
          <section>
            <p className="text-3xl font-bold ml-10 mt-3 text-[#32383F]">
              {" "}
              Expenses
            </p>
            <div className="containers max-sm:-ml-7">
              {expensesList.length > 0 ? (
                expensesList.map((expense, index) => {
                  return (
                    <ExpenseItem
                      key={index}
                      expense={expense}
                      expensesList={expensesList}
                    />
                  );
                })
              ) : (
                <p className="mt-3 ml-10 italic text-[#32383F]">
                  Please add an Expense to see it here!
                </p>
              )}
            </div>
          </section>
        </div>

        <div className="row3 rounded-xl shadow-2xl  w-[20%]  max-lg:mt-10 max-lg:w-full bg-[#FFFFFF]">
          <Name />
          <section>
            <p className="text-3xl font-bold ml-7 mt-3 -mb-2 text-[#32383F]">
              {" "}
              Budgets
            </p>
            <div className="containers px-4 pt-4">
              {budgetList.length > 0 ? (
                budgetList?.slice(0, 5).map((budget, index) => {
                  return (
                    <section className="gap-[20px]" key={index}>
                      <NewBudgetItem budget={budget} />
                    </section>
                  );
                })
              ) : (
                <p className="mt-4 ml-4 italic text-[#32383F]">
                  Please create a Budget First to see it here!
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
