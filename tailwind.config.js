/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
	  extend: {
		colors: {
		  sage: {
			'50': '#f2f5f3',
			'100': '#dce5e0',
			'200': '#bccec3',
			'300': '#93af9f',
			'400': '#6b8d7b',
			'500': '#507260',
			'600': '#3f5b4c',
			'700': '#34473d',
			'800': '#2b3831',
			'900': '#252e29'
		  },
		  copper: {
			'50': '#fdf3f3',
			'100': '#fde3e3',
			'200': '#fbcbcb',
			'300': '#f7a6a6',
			'400': '#f27474',
			'500': '#e94848',
			'600': '#d62b2b',
			'700': '#b42121',
			'800': '#951f1f',
			'900': '#7d2020'
		  },
		  gold: {
			'50': '#fdfbed',
			'100': '#fbf4d0',
			'200': '#f7e7a2',
			'300': '#f2d46b',
			'400': '#ecbc3c',
			'500': '#e29e1d',
			'600': '#c47b16',
			'700': '#a35c17',
			'800': '#86481a',
			'900': '#713c1a'
		  },
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))'
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))'
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
			50: '#f0f9ff',
			100: '#e0f2fe',
			200: '#bae6fd',
			300: '#7dd3fc',
			400: '#38bdf8',
			500: '#0ea5e9',
			600: '#0284c7',
			700: '#0369a1',
			800: '#075985',
			900: '#0c4a6e',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
			50: '#fdf4ff',
			100: '#fae8ff',
			200: '#f5d0fe',
			300: '#f0abfc',
			400: '#e879f9',
			500: '#d946ef',
			600: '#c026d3',
			700: '#a21caf',
			800: '#86198f',
			900: '#701a75',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))'
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
			50: '#fff7ed',
			100: '#ffedd5',
			200: '#fed7aa',
			300: '#fdba74',
			400: '#fb923c',
			500: '#f97316',
			600: '#ea580c',
			700: '#c2410c',
			800: '#9a3412',
			900: '#7c2d12',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))'
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))'
		  }
		},
		fontFamily: {
		  sans: [
			'"Inter"',
			'"Roboto"',
			'system-ui',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif'
		  ],
		  heading: [
			'"Poppins"',
			'"Montserrat"',
			'system-ui',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif'
		  ],
		},
		fontSize: {
		  xs: ['0.75rem', { lineHeight: '1rem' }],
		  sm: ['0.875rem', { lineHeight: '1.25rem' }],
		  base: ['1rem', { lineHeight: '1.5rem' }],
		  lg: ['1.125rem', { lineHeight: '1.75rem' }],
		  xl: ['1.25rem', { lineHeight: '1.75rem' }],
		  '2xl': ['1.5rem', { lineHeight: '2rem' }],
		  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
		  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
		  '5xl': ['3rem', { lineHeight: '1' }],
		  '6xl': ['3.75rem', { lineHeight: '1' }],
		  '7xl': ['4.5rem', { lineHeight: '1' }],
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)'
		}
	  }
	},
	plugins: [require("tailwindcss-animate")],
  };
  
  