"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { handle } from "@/lib/handle";
import type { ActionState } from "@/lib/types/action-state";
import { deleteTodoService } from "@/services/todo/delete-todo-service";

const DeleteTodoSchema = z.object({
  id: z.string(),
});

export async function deleteTodoAction(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = DeleteTodoSchema.safeParse({
    id: formData.get("id"),
  });
  if (!parsed.success) return { error: parsed.error.issues[0].message };
  const result = await handle(deleteTodoService(parsed.data.id));
  if (result.error) return { error: result.error };
  revalidatePath("/");
  return { success: true };
}
