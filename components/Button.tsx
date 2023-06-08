import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Text can be anything, so we use React.ReactNode
  children?: React.ReactNode;
  variant: "primary" | "secondary" | "tertiary";
}

const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
  if (variant === "primary") {
    return (
      <button
        className="rounded py-4 px-6 flex flex-row gap-2 items-start justify-center relative bg-primary w-full lg:w-auto lg:min-w-[320px]"
        {...props}
      >
        <p className="text-light text-center font-bold text-lg">{children}</p>
      </button>
    );
  } else {
    return (
      <button
        className="bg-secondary rounded flex flex-row gap-2 items-start justify-center relative px-3 py-1"
        {...props}
      >
        <div className="text-light text-center">{children}</div>
      </button>
    );
  }
};

export default Button;
