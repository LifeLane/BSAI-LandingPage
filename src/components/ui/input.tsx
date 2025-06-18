
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input"> & { showBlinkingCursor?: boolean }>(
  ({ className, type, showBlinkingCursor = false, ...props }, ref) => {
    return (
      <div className={cn("relative w-full", showBlinkingCursor && "blinking-cursor-container")}>
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-sm border border-primary/50 bg-background/70 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary focus-visible:shadow-neon-primary disabled:cursor-not-allowed disabled:opacity-60",
            "font-terminal-body text-foreground", // Use terminal font and color
            showBlinkingCursor && "pr-4", // Add padding for cursor if shown
            className
          )}
          ref={ref}
          {...props}
        />
        {showBlinkingCursor && (
          <span className="absolute right-2 top-1/2 h-4 w-1 -translate-y-1/2 animate-blink bg-primary" />
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
