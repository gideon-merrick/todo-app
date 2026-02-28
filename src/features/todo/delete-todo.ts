"use server";

import { handle } from "@/lib/handle";
import { deleteTodoService } from "@/services/todo/delete-todo-service";

export async function deleteTodo(id: string) {
  const { error } = await handle(deleteTodoService(id));
  if (error) return { error };
  return { error: null };
}
