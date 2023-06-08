import * as React from "react";

import { cn } from "@/lib/utils";

export const baseClasses =
  "flex h-12 w-full rounded border-none border-gray bg-gray-light px-4 !py-0 text-base ring-offset-light file:border-0 file:bg-transparent file:text-sm file:font-bold placeholder:text-gray-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(baseClasses, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
