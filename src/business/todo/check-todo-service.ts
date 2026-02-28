import type { Todo } from "@/generated/client";
import { db } from "@/lib/db";
import { handle } from "@/lib/handle";
import { getTodoService } from "./get-todo-service";

export async function checkTodoService(id: string): Promise<Todo> {
  const todo = await getTodoService(id);
  const { data: result, error } = await handle(
    db.todo.update({
      where: { id: todo.id },
      data: { done: !todo.done },
    })
  );
  if (error) throw new Error(error);
  if (!result) throw new Error("Failed to check todo");
  return result;
}
