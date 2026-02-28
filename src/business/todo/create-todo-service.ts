import type { Todo } from "@/generated/client";
import type { TodoCreateInput } from "@/generated/models/Todo";
import { db } from "@/lib/db";
import { getSession } from "@/lib/get-session";
import { handle } from "@/lib/handle";

export async function createTodoService(data: Omit<TodoCreateInput, "user">): Promise<Todo> {
  const session = await getSession();
  const { data: result, error } = await handle(
    db.todo.create({
      data: {
        ...data,
        user: {
          connect: {
            id: session?.user.id,
          },
        },
      },
    })
  );
  if (error) throw new Error(error);
  if (!result) throw new Error("Failed to create todo");
  return result;
}
