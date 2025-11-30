import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold uppercase tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#FF7A00] text-white shadow-md hover:bg-[#E66E00] hover:shadow-lg hover:-translate-y-0.5",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-[#2563EB] bg-transparent text-[#2563EB] hover:bg-[#2563EB]/5",
        secondary: "bg-[#F1F5F9] text-[#0F172A] hover:bg-[#E2E8F0]",
        ghost: "hover:bg-[#F1F5F9] text-[#334155] hover:text-[#2563EB]",
        link: "text-[#2563EB] underline-offset-4 hover:underline",
        glass: "bg-white/80 backdrop-blur-md border border-white/20 text-[#0F172A] hover:bg-white shadow-sm",
      },
      size: {
        default: "h-11 px-8 py-2",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-14 rounded-full px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
