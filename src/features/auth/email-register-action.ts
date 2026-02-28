"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { emailRegisterService } from "@/business/auth/email-register";
import { handle } from "@/lib/handle";
import { parseErrors } from "@/lib/issues-to-field-errors";
import type { ActionState } from "@/lib/types/action-state";

const EmailRegisterSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
});

export async function emailRegisterAction(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = EmailRegisterSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!parsed.success) return { status: "error", fieldErrors: parseErrors(parsed.error), message: "Invalid form data" };
  const result = await handle(emailRegisterService(parsed.data.name, parsed.data.email, parsed.data.password));
  if (result.error) return { status: "error", message: result.error };
  redirect("/dashboard");
}
