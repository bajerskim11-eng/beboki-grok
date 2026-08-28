import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-display font-semibold tracking-wide transition-[opacity,transform] duration-150 ease-out disabled:pointer-events-none disabled:opacity-40 active:scale-98 min-h-11 px-4 text-sm",
  {
    variants: {
      variant: {
        primary: "bg-moss text-fg border border-moss-2",
        gold: "bg-gold-fill text-fg border border-gold",
        ghost: "bg-transparent text-fg border border-line",
        nav: "h-14 min-h-14 flex-1 flex-col gap-0.5 rounded-lg border-0 bg-transparent px-1 font-body text-2xs font-medium text-muted data-[on=true]:bg-chip data-[on=true]:text-gold",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

export function Button({
  className,
  variant,
  asChild,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant }), className)} {...props} />;
}
