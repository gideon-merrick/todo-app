"use server";

import { revalidatePath } from "next/cache";
import { checkTodoService } from "@/business/todo/check-todo-service";
import { handle } from "@/lib/handle";

export async function checkTodoFunction(id: string) {
  const { error } = await handle(checkTodoService(id));
  if (error) return { error };
  revalidatePath("/dashboard");
  return { error: null };
}
