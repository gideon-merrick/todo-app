"use client";

import { AlertCircle } from "lucide-react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { useFormContext } from "@/components/form/lib/form-context";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "form"> {
  icon?: ReactNode;
  legend: string;
  name: string;
}

export function FormField({ icon, legend, name, ...inputProps }: Props) {
  const { state, pending, formId } = useFormContext();
  const error = state.fieldErrors?.[name];
  const inputId = `${formId}${name}`;
  const errorId = `${formId}${name}-error`;

  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{legend}</legend>
      <label className={`input w-full ${error ? "input-error" : ""}`} htmlFor={inputId}>
        {icon && <span className="opacity-50">{icon}</span>}
        <input
          aria-describedby={error ? errorId : undefined}
          aria-invalid={error ? true : undefined}
          disabled={pending}
          id={inputId}
          name={name}
          {...inputProps}
        />
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
