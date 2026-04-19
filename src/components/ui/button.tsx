import { forwardRef, type ButtonHTMLAttributes } from "react";
import { buttonClassName, type ButtonVariant } from "@/lib/button-classes";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { className, variant = "primary", type = "button", ...props },
    ref
  ) {
    return (
      <button
        ref={ref}
        type={type}
        className={buttonClassName(variant, className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
