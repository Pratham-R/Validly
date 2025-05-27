/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F7F7F2',
          100: '#EAEBD0',
          200: '#E2E3C1',
          300: '#D9DAB2',
          400: '#D1D2A3',
          500: '#C8C994', 
          600: '#BFC085',
          700: '#B6B776',
          800: '#ADAF67',
          900: '#A4A658',
        },
        accent: {
          50: '#FFF5F5',
          100: '#FFE3E3',
          200: '#FFC9C9',
          300: '#DA6C6C', // Light pastel red
          400: '#CD5656',
          500: '#AF3E3E', // Main pastel red
          600: '#993535',
          700: '#832C2C',
          800: '#6D2424',
          900: '#571B1B',
        },
        neutral: {
          50: '#F8F9FA',
          100: '#EAEBD0', // Lightest pastel
          200: '#E2E3C1',
          300: '#D9DAB2',
          400: '#D1D2A3',
          500: '#C8C994',
          600: '#BFC085',
          700: '#B6B776',
          800: '#ADAF67',
          900: '#A4A658',
        }
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        fadeInUp: 'fadeInUp 0.7s ease-out',
        float: 'float 3s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};