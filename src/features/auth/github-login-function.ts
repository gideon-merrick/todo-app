"use server";

import { redirect } from "next/navigation";
import { githubLoginService } from "@/business/auth/github-login-service";
import { handle } from "@/lib/handle";

export async function githubLoginFunction() {
  const { data: url, error } = await handle(githubLoginService());
  if (error) return { error };
  if (!url) return { status: "error", message: "Something went wrong. Please try again." };
  redirect(url);
}
