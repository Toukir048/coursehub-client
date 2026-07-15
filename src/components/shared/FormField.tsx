import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}

const FormField = ({ label, required, hint, children }: FormFieldProps) => (
  <label className="block">
    <span className="mb-2 block text-sm font-medium text-base-content">
      {label}{required && <span className="ml-1 text-error" aria-hidden="true">*</span>}
    </span>
    {children}
    {hint && <span className="mt-2 block text-xs leading-relaxed text-base-content/55">{hint}</span>}
  </label>
);

export default FormField;
