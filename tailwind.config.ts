
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: '#403E43',       // Charcoal Gray
        background: '#0A0A1A',   // Deep Navy Black
        foreground: '#FFFFFF',   // Pure White
        primary: {
          DEFAULT: '#005BA9',    // Navy Blue (HSV Blue)
          foreground: '#FFFFFF'  // White
        },
        secondary: {
          DEFAULT: '#403E43',    // Charcoal Gray
          foreground: '#FFFFFF'  // White
        },
        accent: {
          DEFAULT: '#1EAEDB',    // Bright Blue
          foreground: '#FFFFFF'  // White
        },
        hsv: {
          blue: '#005BA9',
          navy: '#0A0A1A',       // Deep Navy Black
          charcoal: '#403E43',   // Charcoal Gray
          white: '#FFFFFF',
          black: '#000000',
          gray: '#8A898C'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out'
      },
      backgroundImage: {
        'hero-pattern': "url('/public/lovable-uploads/a7e14b4f-94b3-42f8-875a-f96b2e11e00f.png')"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

