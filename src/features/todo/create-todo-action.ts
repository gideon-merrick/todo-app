"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createTodoService } from "@/business/todo/create-todo-service";
import { handle } from "@/lib/handle";
import { parseErrors } from "@/lib/issues-to-field-errors";
import type { ActionState } from "@/lib/types/action-state";

const CreateTodoSchema = z.object({
  title: z.string().min(1).max(255),
});

export async function createTodoAction(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = CreateTodoSchema.safeParse({
    title: formData.get("title"),
  });
  if (!parsed.success) return { status: "error", fieldErrors: parseErrors(parsed.error) };
  const result = await handle(createTodoService(parsed.data));
  if (result.error) return { status: "error", message: "Failed to create todo" };
  revalidatePath("/");
  return { status: "success" };
}
