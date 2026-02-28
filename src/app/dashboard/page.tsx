"use server";

import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { getSession } from "@/lib/get-session";
import { CreateTodoForm } from "@/widgets/create-todo-form";
import { TodoItem } from "@/widgets/todo-item";

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/auth/login");
  const todos = await db.todo.findMany({ where: { userId: session.user.id } });

  const done = todos.filter((t) => t.done).length;

  return (
    <div className="min-h-screen bg-base-100">
      <div className="mx-auto flex max-w-xl flex-col gap-8 px-4 py-12">
        <div>
          <h1 className="font-bold text-2xl">Hello, {session.user.name}!</h1>
          <p className="mt-1 text-base-content/50 text-sm">
            {done} of {todos.length} tasks completed
          </p>
        </div>

        <ul className="flex flex-col gap-2">
          {todos.length === 0 && (
            <p className="py-8 text-center text-base-content/40 text-sm">No todos yet. Add one below!</p>
          )}
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>

        <div className="divider" />

        <CreateTodoForm />
      </div>
    </div>
  );
}
