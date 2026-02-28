"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { checkTodoService } from "@/business/todo/check-todo-service";
import { handle } from "@/lib/handle";
import { parseErrors } from "@/lib/issues-to-field-errors";
import type { ActionState } from "@/lib/types/action-state";

const CheckTodoSchema = z.object({
  id: z.string(),
});

export async function checkTodoAction(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = CheckTodoSchema.safeParse({
    id: formData.get("id"),
  });
  if (!parsed.success) return { status: "error", fieldErrors: parseErrors(parsed.error) };
  const result = await handle(checkTodoService(parsed.data.id));
  if (result.error) return { status: "error", message: "Failed to check todo" };
  revalidatePath("/");
  return { status: "success" };
}
