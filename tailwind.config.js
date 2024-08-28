/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'primary': '#3876DA',
        'secondary': '#F8A81A',
        grey: {
          1: '#B1B1B1',
          2: '#868686',
        },
        bgc: {
          1: '#f5f7fa',
          2: '#EEEEEE',
          3: '#F9F9F9',
        },
        'heading': '#253B6A',
        'content': '#263B67'
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      fontSize: {
        'h1': ['28px', {
          lineHeight: '34px',
          fontWeight: '600',
        }],
        'h2': ['20px', {
          lineHeight: '25px',
          fontWeight: '600',
        }],
        'h3': ['16px', {
          lineHeight: '20px',
          fontWeight: '600',
        }],
        'h4': ['14px', {
          lineHeight: '17px',
          fontWeight: '600',
        }],
        'p': ['10px', {
          lineHeight: '12px',
          fontWeight: '500',
        }],
        'btn': ['15px', {
          lineHeight: '18px',
          fontWeight: '500',
        }]
      },
      spacing: {
        '24px' : '24px', 
        '37px' : '37px',
        '50px': '50px',
        '133px' : '133px',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '6': '6px',
        '8': '8px',
        '10': '10px'
      },
      boxShadow: {
        'c1': '0px 4px 9.5px 0px #0000003D'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/container-queries'),
  ],
}