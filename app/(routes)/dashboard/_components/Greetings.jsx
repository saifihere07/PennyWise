"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function Greetings({ budgetLsit }) {
  const { user } = useUser();
  const route = useRouter();
  return (
    <>
      <h2 className="text-3xl font-bold mb-3">
        {" "}
        Hi, {user?.fullName || user?.username || "Guest"} !
      </h2>
      {budgetLsit?.length === 0 && route.replace("/dashboard/budgets")}
    </>
  );
}

export default Greetings;
