import { FormCheckbox } from "./ui/form-checkbox";
import { FormError } from "./ui/form-error";
import { FormField } from "./ui/form-field";
import { FormFields } from "./ui/form-fields";
import { FormRoot } from "./ui/form-root";
import { FormSubmit } from "./ui/form-submit";

export const Form = Object.assign(FormRoot, {
  Root: FormRoot,
  Fields: FormFields,
  Field: FormField,
  Error: FormError,
  Submit: FormSubmit,
  Checkbox: FormCheckbox,
});
