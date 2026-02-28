"use server";

import { revalidatePath } from "next/cache";
import { deleteTodoService } from "@/business/todo/delete-todo-service";
import { handle } from "@/lib/handle";

export async function deleteTodoFunction(id: string) {
  const { error } = await handle(deleteTodoService(id));
  if (error) return { error };
  revalidatePath("/dashboard");
  return { error: null };
}
