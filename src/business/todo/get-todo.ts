import type { Todo } from "@/generated/client";
import { db } from "@/lib/db";
import { getSession } from "@/lib/get-session";
import { handle } from "@/lib/handle";

export async function getTodoService(id: string): Promise<Todo> {
  const session = await getSession();
  const { data: result, error } = await handle(
    db.todo.findFirst({
      where: {
        id,
        userId: session?.user.id,
      },
    })
  );
  if (error) throw new Error(error);
  if (!result) throw new Error("Failed to update todo");
  return result;
}
