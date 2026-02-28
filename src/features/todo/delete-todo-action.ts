"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { deleteTodoService } from "@/business/todo/delete-todo-service";
import { handle } from "@/lib/handle";
import { parseErrors } from "@/lib/issues-to-field-errors";
import type { ActionState } from "@/lib/types/action-state";

const DeleteTodoSchema = z.object({
  id: z.string(),
});

export async function deleteTodoAction(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = DeleteTodoSchema.safeParse({
    id: formData.get("id"),
  });
  if (!parsed.success) return { status: "error", fieldErrors: parseErrors(parsed.error) };
  const result = await handle(deleteTodoService(parsed.data.id));
  if (result.error) return { status: "error", message: "Failed to delete todo" };
  revalidatePath("/");
  return { status: "success" };
}
