import type { Todo } from "@/generated/client";
import { db } from "@/lib/db";
import { handle } from "@/lib/handle";
import { getTodoService } from "./get-todo-service";

export async function deleteTodoService(id: string): Promise<Todo> {
  const todo = await getTodoService(id);
  const { data: result, error: toggleTodoError } = await handle(
    db.todo.delete({
      where: { id: todo.id },
    })
  );
  if (toggleTodoError) throw new Error(toggleTodoError);
  if (!result) throw new Error("Failed to delete todo");
  return result;
}
