"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "../utils/cn";

const backButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border border-primary-100 text-base-black hover:border-primary-500",
      },
      size: {
        default: "h-[48px] w-[48px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BackButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof backButtonVariants> {
  asChild?: boolean;
}

const BackButton = React.forwardRef<HTMLButtonElement, BackButtonProps>(
  ({ className, variant, size, asChild = false, onClick, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const router = useRouter();
    const [isHovered, setIsHovered] = React.useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(e);
      }
      router.back();
    };

    return (
      <Comp
        className={cn(backButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={
            isHovered
              ? "/icons/back-arrow-blue.svg"
              : "/icons/back-arrow-white.svg"
          }
          alt="back"
          width={23}
          height={23}
        />
      </Comp>
    );
  }
);
BackButton.displayName = "BackButton";

export { BackButton, backButtonVariants };
