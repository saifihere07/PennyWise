// "use client";
// import { useState, useEffect } from "react";
// import getFinancialAdvice from "./getFinancialAdvice";

export default function Advice({ totalBudget, totalSpend }) {
  //   const [advice, setAdvice] = useState("");

  //   useEffect(() => {
  //     const fetchAdvice = async () => {
  //       try {
  //         const result = await getFinancialAdvice(totalBudget, totalSpend);
  //         setAdvice(result); // Set the advice in state
  //       } catch (error) {
  //         console.error("Error fetching advice:", error);
  //         setAdvice("Could not fetch advice at this time.");
  //       }
  //     };

  //     fetchAdvice();
  //   }, [totalBudget, totalSpend]); // Dependency array for dynamic changes

  return (
    <div className="flex flex-col">
      <h1 className="text-[#32383F] text-4xl font-[700] leading-10">
        Dashboard
      </h1>
      {/* <div className="h-[70px] p-3 mt-3 rounded-xl w-full">
        <p className="italic text-[#32383F]">
          A well-planned budget is the foundation for managing expenses
          effectively and achieving financial goals.Tracking expenses regularly
          helps identify areas to save and ensures financial stability over
          time.
        </p>
      </div> */}
    </div>
  );
}
