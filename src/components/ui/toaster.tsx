
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider swipeDirection="right">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="font-terminal-body border-primary/50 shadow-neon-primary bg-background/90 backdrop-blur-sm">
            <div className="grid gap-1">
              {title && <ToastTitle className="text-primary text-sm">{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-xs text-foreground/80">{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="text-primary/70 hover:text-primary" />
          </Toast>
        )
      })}
      <ToastViewport className="sm:right-4 sm:bottom-4" />
    </ToastProvider>
  )
}
