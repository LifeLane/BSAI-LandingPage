
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-all duration-150 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] active:brightness-90 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-terminal-heading", // Use terminal font
  {
    variants: {
      variant: {
        default: // Neon Cyan Button
          "bg-primary/10 text-primary border border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-neon-primary focus:shadow-neon-primary rounded-sm",
        destructive:
          "bg-destructive/10 text-destructive border border-destructive hover:bg-destructive hover:text-destructive-foreground hover:shadow-md focus:shadow-md rounded-sm",
        outline: // Neon Accent (Magenta) Button
          "bg-transparent text-accent border border-accent hover:bg-accent hover:text-accent-foreground hover:shadow-neon-accent focus:shadow-neon-accent rounded-sm",
        secondary: // Darker, subtle button
          "bg-secondary/20 text-secondary-foreground border border-secondary/50 hover:bg-secondary/40 hover:border-secondary rounded-sm",
        ghost: // For icon buttons or minimal actions
          "text-foreground/80 hover:bg-primary/10 hover:text-primary rounded-sm",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        success: // Neon Green Button
          "bg-accent-green/10 text-accent-green border border-accent-green hover:bg-accent-green hover:text-black hover:shadow-[0_0_5px_hsl(var(--accent-green)),_0_0_10px_hsl(var(--accent-green))] focus:shadow-[0_0_5px_hsl(var(--accent-green)),_0_0_10px_hsl(var(--accent-green))] rounded-sm"
      },
      size: {
        default: "h-9 px-4 py-2 text-xs sm:text-sm", // Adjusted for terminal feel
        sm: "h-8 rounded-sm px-3 text-xs",
        lg: "h-10 rounded-sm px-8 text-sm sm:text-base",
        icon: "h-8 w-8 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  showRipple?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, showRipple = true, onClick, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (showRipple && event.currentTarget) {
        const button = event.currentTarget;
        const ripple = document.createElement("span");
        const rect = button.getBoundingClientRect();
        const rippleSize = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = `${rippleSize}px`;
        ripple.style.left = `${event.clientX - rect.left - rippleSize / 2}px`;
        ripple.style.top = `${event.clientY - rect.top - rippleSize / 2}px`;
        
        ripple.classList.add("button-ripple-effect");
        button.appendChild(ripple);
        
        ripple.addEventListener("animationend", () => {
          ripple.remove();
        });
      }
      if (onClick) {
        onClick(event);
      }
    };
    
    // Add CSS for ripple effect if not already present globally
    if (typeof window !== "undefined" && !document.getElementById("button-ripple-styles")) {
      const styleSheet = document.createElement("style");
      styleSheet.id = "button-ripple-styles";
      styleSheet.innerText = `
        .button-ripple-effect {
          position: absolute;
          border-radius: 50%;
          background-color: hsl(var(--primary) / 0.5); /* Ripple color from primary */
          animation: button-click-ripple 0.4s ease-out forwards;
          transform: scale(0);
          pointer-events: none;
        }
      `;
      document.head.appendChild(styleSheet);
    }


    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), "relative overflow-hidden")}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
