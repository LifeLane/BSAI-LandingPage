
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'terminal-heading': ['var(--font-share-tech-mono)', 'monospace'],
        'terminal-body': ['var(--font-courier-prime)', 'monospace'],
        'terminal-code': ['var(--font-space-mono)', 'monospace'], // Retain for specific code blocks if needed
        // Original fonts kept for potential light theme use or specific elements
        'space-grotesk': ['var(--font-space-grotesk)', 'sans-serif'],
        'space-mono': ['var(--font-space-mono)', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))', // Cyan
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))', // Magenta
          foreground: 'hsl(var(--accent-foreground))',
        },
        'accent-green': 'hsl(var(--accent-green))',
        'accent-yellow': 'hsl(var(--accent-yellow))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))', // Cyan border
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))', // Lighter Cyan for focus
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: { // Overriding default ShadCN radius to be sharper
        lg: 'calc(var(--radius))', // 0.25rem in dark theme
        md: 'calc(var(--radius))',
        sm: 'calc(var(--radius) - 1px)',
        DEFAULT: 'var(--radius)',
      },
      boxShadow: {
        'neon-primary': '0 0 5px hsl(var(--primary)), 0 0 10px hsl(var(--primary) / 0.8), 0 0 15px hsl(var(--primary) / 0.6)',
        'neon-accent': '0 0 5px hsl(var(--accent)), 0 0 10px hsl(var(--accent) / 0.8), 0 0 15px hsl(var(--accent) / 0.6)',
        'terminal-glow': '0 0 8px hsl(var(--primary) / 0.7), inset 0 0 5px hsl(var(--primary) / 0.4)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' }, // Softer entry
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'neon-pulse': {
          '0%, 100%': { boxShadow: '0 0 3px hsl(var(--primary)), 0 0 5px hsl(var(--primary))' },
          '50%': { boxShadow: '0 0 8px hsl(var(--primary)), 0 0 12px hsl(var(--primary))' },
        },
        'button-click-ripple': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '50%': { transform: 'scale(1.05)', opacity: '0.3' },
          '100%': { transform: 'scale(1.1)', opacity: '0' },
        },
        // Previous keyframes - can be reviewed/removed if not used by new theme
        'pulse-lilac': {
          '0%, 100%': { boxShadow: '0 0 0 0px hsla(var(--primary-original), 0.7)' }, // Assuming --primary-original is the old lilac
          '50%': { boxShadow: '0 0 0 10px hsla(var(--primary-original), 0)' },
        },
        'pulse-mint': {
          '0%, 100%': { transform: 'scale(1)', filter: 'drop-shadow(0 0 0px hsl(var(--accent-original)))' }, // Assuming --accent-original
          '50%': { transform: 'scale(1.1)', filter: 'drop-shadow(0 0 8px hsl(var(--accent-original)))' },
        },
         'quantum-orb-primary': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.05)', opacity: '0.5' },
        },
        'quantum-orb-accent': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.03)', opacity: '0.45' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
        'neon-pulse': 'neon-pulse 1.5s infinite alternate',
        'button-click-ripple': 'button-click-ripple 0.3s ease-out forwards',
        // Previous animations
        'pulse-lilac': 'pulse-lilac 2s infinite',
        'pulse-mint': 'pulse-mint 1.5s infinite ease-in-out',
        'quantum-orb-primary': 'quantum-orb-primary 3s infinite ease-in-out',
        'quantum-orb-accent': 'quantum-orb-accent 3.5s 0.5s infinite ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
