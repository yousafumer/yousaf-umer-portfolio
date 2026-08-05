/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          950: '#05070C',
          900: '#0A0E17',
          800: '#0F1420',
          700: '#161D2E',
          600: '#1E273B',
        },
        accent: {
          blue: '#3B82F6',
          cyan: '#22D3EE',
          indigo: '#6366F1',
        },
        ink: {
          100: '#E9ECF3',
          300: '#B8C0D4',
          500: '#8B93A7',
          700: '#556077',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'pipeline-gradient': 'linear-gradient(135deg, #3B82F6 0%, #22D3EE 100%)',
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.18), transparent 60%)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.35)',
        glow: '0 0 40px rgba(59,130,246,0.25)',
      },
      animation: {
        'flow': 'flow 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        flow: {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
