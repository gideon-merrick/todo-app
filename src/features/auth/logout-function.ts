"use server";

import { redirect } from "next/navigation";
import { logoutService } from "@/business/auth/logout-service";
import { handle } from "@/lib/handle";

export async function logoutFunction() {
  const { data, error } = await handle(logoutService());
  if (error) return { error };
  if (!data) return { error: "Something went wrong. Please try again." };
  redirect("/auth/login");
}
