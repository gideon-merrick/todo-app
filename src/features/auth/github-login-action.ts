"use server";

import { redirect } from "next/navigation";
import { handle } from "@/lib/handle";
import type { ActionState } from "@/lib/types/action-state";
import { githubLoginService } from "@/services/auth/github-login-service";

export async function githubLoginAction(_prevState: ActionState, _formData: FormData): Promise<ActionState> {
  const { data: url, error } = await handle(githubLoginService());
  if (error) return { status: "error", message: error };
  if (!url) return { status: "error", message: "Something went wrong. Please try again." };
  redirect(url);
}
