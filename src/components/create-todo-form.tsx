"use client";

import { Pen } from "lucide-react";
import { createTodoAction } from "@/actions/todo/create-todo-action";
import { Form } from "@/components/form";

export function CreateTodoForm() {
  return (
    <Form.Root action={createTodoAction}>
      <Form.Error />
      <Form.Field
        icon={<Pen className="h-4 w-4" />}
        legend="Title"
        name="title"
        placeholder="Do the dishes"
        required
        type="text"
      />
      <Form.Submit className="mt-2">Create Todo</Form.Submit>
    </Form.Root>
  );
}
