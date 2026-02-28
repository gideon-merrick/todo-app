"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { emailLoginService } from "@/business/auth/email-login";
import { handle } from "@/lib/handle";
import { parseErrors } from "@/lib/issues-to-field-errors";
import type { ActionState } from "@/lib/types/action-state";

const EmailLoginSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export async function emailLoginAction(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = EmailLoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) return { status: "error", fieldErrors: parseErrors(parsed.error), message: "Invalid form data" };
  const result = await handle(emailLoginService(parsed.data.email, parsed.data.password));
  if (result.error) return { status: "error", message: result.error };
  redirect("/dashboard");
}
