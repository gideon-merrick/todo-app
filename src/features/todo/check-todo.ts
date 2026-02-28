"use server";

import { handle } from "@/lib/handle";
import { checkTodoService } from "@/services/todo/check-todo-service";

export async function checkTodo(id: string) {
  const { error } = await handle(checkTodoService(id));
  if (error) return { error };
  return { error: null };
}
