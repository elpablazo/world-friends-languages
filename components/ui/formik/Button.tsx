"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const baseClasses =
  "inline-flex items-center justify-center rounded text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20   focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-light";

const buttonVariants = cva(baseClasses, {
  variants: {
    variant: {
      default: "bg-gradient-to-r from-primary-dark to-primary-light text-light",
      destructive: "bg-red-500 text-red-200 hover:bg-red-500",
      outline: "border-2 border-primary",
      secondary: "bg-secondary text-light",
      ghost: "bg-gray text-gray-dark",
      link: "underline-offset-4 hover:underline text-primary",
    },
    size: {
      default: "h-12 py-4 px-8",
      sm: "h-8 py-2 px-4",
      lg: "h-16 py-6 px-12 text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {props.children}
    </button>
  );
}
