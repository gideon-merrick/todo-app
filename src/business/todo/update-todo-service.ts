import type { Todo } from "@/generated/client";
import type { TodoUpdateInput } from "@/generated/models";
import { db } from "@/lib/db";
import { handle } from "@/lib/handle";
import { getTodoService } from "./get-todo-service";

export async function updateTodoService(id: string, data: TodoUpdateInput): Promise<Todo> {
  const todo = await getTodoService(id);
  const { data: result, error: updateTodoError } = await handle(
    db.todo.update({
      where: {
        id: todo.id,
      },
      data,
    })
  );
  if (updateTodoError) throw new Error(updateTodoError);
  if (!result) throw new Error("Failed to update todo");
  return result;
}
