"use client";

import { Trash } from "lucide-react";
import { checkTodoAction } from "@/actions/todo/check-todo-action";
import { deleteTodoAction } from "@/actions/todo/delete-todo-action";
import { Form } from "@/components/form";
import type { Todo } from "@/generated/client";

interface Props {
  todo: Todo;
}

export function TodoItem({ todo }: Props) {
  return (
    <li className="flex items-center justify-between gap-4 rounded-box bg-base-200 px-4 py-3 transition-colors hover:bg-base-300">
      <span className={`flex-1 text-sm ${todo.done ? "line-through opacity-40" : ""}`}>{todo.title}</span>
      <Form.Root action={checkTodoAction}>
        <Form.Field hidden name="id" readOnly value={todo.id} />
        <Form.Checkbox
          defaultChecked={todo.done}
          label=""
          name="done"
          onChange={(e) => e.currentTarget.form?.requestSubmit()}
        />
      </Form.Root>
      <Form.Root action={deleteTodoAction}>
        <Form.Field hidden name="id" readOnly value={todo.id} />
        <Form.Submit className="btn-ghost btn-sm">
          <Trash className="h-4 w-4" />
        </Form.Submit>
      </Form.Root>
    </li>
  );
}
