"use client";

import { AlertCircle } from "lucide-react";
import type { InputHTMLAttributes } from "react";
import { useFormContext } from "../lib/form-context";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "form" | "type"> {
  label: string;
  name: string;
}

export function FormCheckbox({ label, name, ...inputProps }: Props) {
  const { state, pending, formId } = useFormContext();
  const error = state.fieldErrors?.[name];
  const inputId = `${formId}${name}`;
  const errorId = `${formId}${name}-error`;

  return (
    <fieldset className="fieldset">
      <label className="label cursor-pointer gap-2" htmlFor={inputId}>
        <input
          aria-describedby={error ? errorId : undefined}
          aria-invalid={error ? true : undefined}
          disabled={pending}
          id={inputId}
          name={name}
          type="checkbox"
          {...inputProps}
        />
        <span>{label}</span>
      </label>
      {error && (
        <p className="label flex items-center gap-1 text-error" id={errorId} role="alert">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      )}
    </fieldset>
  );
}
