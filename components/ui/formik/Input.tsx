import { Field, ErrorMessage } from "formik";

import { cn } from "@/lib/utils";

import { cva, type VariantProps } from "class-variance-authority";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

export const baseClasses =
  "flex h-12 w-full rounded border-none border-gray bg-gray-light px-4 !py-0 text-base ring-offset-light file:border-0 file:bg-transparent file:text-sm file:font-bold placeholder:text-gray-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export function Input({ className, type, label, ...props }: InputProps) {
  return (
    <div className="grid gap-1">
      <label className={cn(labelVariants(), className)} htmlFor={props.name}>
        {label}
      </label>
      <Field
        type={type}
        className={cn(baseClasses, className)}
        id={props.name}
        {...props}
      />
      <ErrorMessage
        name={props.name}
        component="div"
        className="text-sm text-red-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      />
    </div>
  );
}
