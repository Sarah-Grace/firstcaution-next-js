/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
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
        '6': '6px',
        '8': '8px',
        '10': '10px'
      },
      boxShadow: {
        'c1': '0px 4px 9.5px 0px #0000003D'
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
};
