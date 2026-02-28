"use client";

import { Trash } from "lucide-react";
import { startTransition } from "react";
import { checkTodoFunction } from "@/features/todo/check-todo-function";
import { deleteTodoFunction } from "@/features/todo/delete-todo-function";
import type { Todo } from "@/generated/client";

interface Props {
  todo: Todo;
}

export function TodoItem({ todo }: Props) {
  function handleCheck() {
    startTransition(async () => {
      await checkTodoFunction(todo.id);
    });
  }

  function handleDelete() {
    startTransition(async () => {
      await deleteTodoFunction(todo.id);
    });
  }

  return (
    <li className="flex items-center justify-between gap-4 rounded-box bg-base-200 px-4 py-3 transition-colors hover:bg-base-300">
      <span className={`flex-1 text-sm ${todo.done ? "line-through opacity-40" : ""}`}>{todo.title}</span>
      <input className="checkbox" defaultChecked={todo.done} onChange={handleCheck} type="checkbox" />
      <button className="btn-ghost btn-sm" onClick={handleDelete} type="button">
        <Trash className="h-4 w-4" />
      </button>
    </li>
  );
}
