"use server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { handle } from "@/lib/handle";

export async function logoutService() {
  const { data, error } = await handle(auth.api.signOut({ headers: await headers() }));
  if (error) throw new Error(error);
  if (!data) throw new Error("Failed to logout");
  return data.success;
}
