"use server";

import { createTodoService } from "@/business/todo/create-todo-service";
import { handle } from "@/lib/handle";
import { revalidatePath } from "next/cache";

export async function createTodoFunction(title: string) {
  const { error } = await handle(createTodoService({ title }));
  if (error) return { error };
  revalidatePath("/dashboard")
  return { error: null };
}
