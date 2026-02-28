"use client";

import type { ReactNode } from "react";
import { useFormContext } from "../lib/form-context";

interface Props {
  children: ReactNode;
  className?: string;
}

export function FormSubmit({ children, className }: Props) {
  const { pending } = useFormContext();
  return (
    <button
      aria-disabled={pending}
      className={`btn btn-primary btn-block ${className ?? ""}`}
      disabled={pending}
      type="submit"
    >
      {pending ? <span className="loading loading-spinner loading-sm" /> : children}
    </button>
  );
}
