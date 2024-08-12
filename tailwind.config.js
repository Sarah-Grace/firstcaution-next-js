/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '24px' : '24px', 
        '37px' : '37px',
        '133px' : '133px',
        '37px' : '37px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
};
