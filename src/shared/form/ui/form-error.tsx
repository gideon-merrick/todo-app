"use client";

import { AlertCircle, CheckCircle } from "lucide-react";
import { useFormContext } from "@/components/form/lib/form-context";

export function FormError() {
  const { state } = useFormContext();

  const rootError = state.fieldErrors?.root;
  const message = state.message;

  if (!(rootError || message)) return null;

  return (
    <div className="flex flex-col gap-2">
      {rootError && (
        <div className="alert alert-error alert-soft" role="alert">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span className="text-sm">{rootError}</span>
        </div>
      )}
      {message && (
        <div
          className={`alert alert-soft ${state.status === "success" ? "alert-success" : "alert-info"}`}
          role="status"
        >
          <CheckCircle className="h-4 w-4 shrink-0" />
          <span className="text-sm">{message}</span>
        </div>
      )}
    </div>
  );
}
