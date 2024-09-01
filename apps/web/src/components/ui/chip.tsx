import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const chipVariants = cva("w-2 h-2 rounded-full bg-green-500", {
  variants: {
    variant: {
      danger: "bg-red-500",
      warning: "bg-yellow-500",
      success: "bg-green-500",
    },
    defaultVariants: {
      variant: "success",
    },
  },
});

interface ChipProps extends VariantProps<typeof chipVariants> {
  text: string;
  className?: string;
}

export function Chip({ variant, text, className }: ChipProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-full border border-input bg-background shadow-sm px-4 py-1",
        className
      )}
    >
      <span className={cn(chipVariants({ variant }))} />
      <small>{text}</small>
    </div>
  );
}
