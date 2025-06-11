
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'], // Enables class-based dark mode
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Updated to use Inter for body and Space Grotesk for headline
        headline: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        code: ['var(--font-space-mono)', 'monospace'],
      },
      colors: {
        // Uses CSS variables defined in globals.css for themeability
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
          DEFAULT: 'hsl(var(--primary))',
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
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
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
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-lilac': { 
          '0%, 100%': { boxShadow: '0 0 0 0px hsla(var(--primary), 0.7)' },
          '50%': { boxShadow: '0 0 0 10px hsla(var(--primary), 0)' },
        },
        'pulse-mint': { 
          '0%, 100%': { transform: 'scale(1)', filter: 'drop-shadow(0 0 0px hsl(var(--accent)))' },
          '50%': { transform: 'scale(1.1)', filter: 'drop-shadow(0 0 8px hsl(var(--accent)))' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'draw-line': {
          '0%': { strokeDasharray: '0, 1000', strokeDashoffset: '0', opacity: '0.3' },
          '40%': { strokeDasharray: '1000, 0', strokeDashoffset: '0', opacity: '1' },
          '80%, 100%': { strokeDasharray: '1000, 0', strokeDashoffset: '-1000', opacity: '0.3' },
        },
        'glitch-transform': {
          '0%, 100%': { transform: 'translate(0, 0) skewX(0)' },
          '20%': { transform: 'translate(1px, -0.5px) skewX(-1deg)' },
          '40%': { transform: 'translate(-1px, 0.5px) skewX(0deg)' },
          '60%': { transform: 'translate(0.5px, -1px) skewX(1deg)' },
          '80%': { transform: 'translate(-0.5px, 1px) skewX(0deg)' },
        },
        'pulse-wave-opacity': {
          '0%, 100%': { opacity: '0.6', strokeWidth: '1.5' },
          '50%': { opacity: '1', strokeWidth: '2.5' },
        },
        'quantum-orb-primary': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.05)', opacity: '0.5' },
        },
        'quantum-orb-accent': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.03)', opacity: '0.45' },
        },
        'node-pulse-lilac': {
          '0%, 100%': { transform: 'scale(0.95)', opacity: '0.7' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        'node-pulse-mint': {
          '0%, 100%': { transform: 'scale(0.95)', opacity: '0.7' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
        },
        'thread-draw': {
          '0%': { strokeDasharray: '0, 200', opacity: '0' }, 
          '50%': { strokeDasharray: '200, 200', opacity: '0.5' },
          '100%': { strokeDasharray: '200, 200', opacity: '0.2' }, 
        },
        'node-pulse-lilac-urgent': {
          '0%, 100%': { transform: 'scale(0.9)', opacity: '0.6' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
        },
        'node-pulse-mint-urgent': {
          '0%, 100%': { transform: 'scale(0.9)', opacity: '0.6' },
          '50%': { transform: 'scale(1.1)', opacity: '1' },
        },
        'thread-draw-fast': {
          '0%': { strokeDasharray: '0, 200', opacity: '0' },
          '50%': { strokeDasharray: '200, 200', opacity: '0.6' },
          '100%': { strokeDasharray: '200, 200', opacity: '0.3' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'pulse-lilac': 'pulse-lilac 2s infinite',
        'pulse-mint': 'pulse-mint 1.5s infinite ease-in-out',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'draw-glitch-1': 'draw-line 3.5s ease-in-out infinite, glitch-transform 0.25s steps(2, jump-none) infinite alternate',
        'draw-glitch-2': 'draw-line 3.5s 0.3s ease-in-out infinite, glitch-transform 0.25s 0.1s steps(2, jump-none) infinite alternate-reverse',
        'draw-glitch-3': 'draw-line 3.5s 0.6s ease-in-out infinite, glitch-transform 0.25s 0.2s steps(2, jump-none) infinite alternate',
        'pulse-wave': 'pulse-wave-opacity 2.5s infinite ease-in-out',
        'quantum-orb-primary': 'quantum-orb-primary 3s infinite ease-in-out',
        'quantum-orb-accent': 'quantum-orb-accent 3.5s 0.5s infinite ease-in-out',
        'node-pulse-lilac': 'node-pulse-lilac 2.5s infinite ease-in-out',
        'node-pulse-mint': 'node-pulse-mint 2.5s infinite ease-in-out',
        'thread-draw': 'thread-draw 4s ease-out infinite alternate',
        'node-pulse-lilac-urgent': 'node-pulse-lilac-urgent 1.5s infinite ease-in-out',
        'node-pulse-mint-urgent': 'node-pulse-mint-urgent 1.5s infinite ease-in-out',
        'thread-draw-fast': 'thread-draw-fast 2.5s ease-out infinite alternate',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
