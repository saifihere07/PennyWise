"use client";
import { UserButton, useUser } from "@clerk/nextjs";

export default function UserButtonComponent() {
  const { user } = useUser();
  return (
    <section className="flex flex-row gap-x-3 items-center">
      <UserButton />
      {user?.firstName || user?.username || "Guest"}
    </section>
  );
}
