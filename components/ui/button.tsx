import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import clsx from "clsx";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-primary-950 dark:focus-visible:ring-primary-300",
  {
    variants: {
      variant: {
        default:
          "bg-primary-600 text-primary-50 hover:bg-primary-700 dark:bg-primary-50 dark:text-primary-600 dark:hover:bg-primary-50/90",
        secondary:
          "border bg-white hover:border hover:border-primary-600 hover:text-primary-600 dark:border-primary-800 dark:bg-primary-950 dark:hover:bg-primary-800 dark:hover:text-primary-50",

        // not covered by design team
        destructive:
          "bg-red-500 text-primary-50 hover:bg-red-600/90 dark:bg-red-600 dark:text-primary-50 dark:hover:bg-red-600/90",
        link: "text-primary-600 underline-offset-4 hover:underline dark:text-primary-50",
        // outline:
        //   "border border-primary-200 bg-white hover:bg-primary-300 hover:text-primary-600 dark:border-primary-800 dark:bg-primary-950 dark:hover:bg-primary-800 dark:hover:text-primary-50",
        // ghost:
        //   "hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-800 dark:hover:text-primary-50",
        // secondary: // from shadcn
        //   "bg-primary-100 text-primary-600 hover:bg-primary-100/80 dark:bg-primary-800 dark:text-primary-50 dark:hover:bg-primary-800/80",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      isLoading,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={isLoading || props.disabled}
      >
        <>
          {children}
          {isLoading && (
            <Loader2
              className={clsx("h-4 w-4 animate-spin", {
                "ml-2": !!children,
              })}
            />
          )}
        </>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
