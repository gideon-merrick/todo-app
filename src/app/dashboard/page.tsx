"use server";

import { redirect } from "next/navigation";
import { getSession } from "@/lib/get-session";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/auth/login");

  return (
    <div>
      <h1>Hello, {session.user.name}!</h1>
    </div>
  );
}
