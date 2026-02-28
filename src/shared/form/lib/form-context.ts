import { createContext, useContext } from "react";
import type { ActionState } from "@/lib/types/action-state";

interface FormContextType {
  formId: string;
  pending: boolean;
  state: ActionState;
}

export const FormContext = createContext<FormContextType | null>(null);

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) throw new Error("useFormContext must be used within a <Form /> component.");
  return context;
}
