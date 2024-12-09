import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 focus:outline-none disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "rounded-full bg-brand-primary text-neutral-white px-6 py-3  active:scale-95 disabled:bg-neutral-background-disabled disabled:text-neutral-text-disabled fs-500-16",
        secondary:
          "rounded-full bg-neutral-white text-neutral-text-primary border px-6 py-3 fs-500-16 border-neutral-border hover:bg-neutral-background-soft active:bg-neutral-background-disabled disabled:bg-neutral-background-disabled disabled:text-neutral-text-disabled",
        link: "text-brand-secondary disabled:text-neutral-text-disabled p-0 fs-500-14",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full px-6 py-3 fs-500-16",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full px-6 py-3 fs-500-16",
        ghost:
          "hover:bg-accent hover:text-accent-foreground rounded-full px-6 py-3 fs-500-16",
      },
      size: {
        default: "",
        sm: "px-4 py-2 fs-400-14",
        lg: "px-8 py-4 fs-600-18",
        icon: "h-10 w-10 p-2",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
      iconPosition: {
        left: "[&_svg]:mr-3 [&_svg]:size-4",
        right: "[&_svg]:ml-3 [&_svg]:size-4",
        none: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
      iconPosition: "none",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      iconPosition,
      icon,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const content = (
      <>
        {icon && iconPosition === "left" && icon}
        {children}
        {icon && iconPosition === "right" && icon}
      </>
    );

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, fullWidth, iconPosition, className })
        )}
        ref={ref}
        {...props}
      >
        {content}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
