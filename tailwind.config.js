/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
	  extend: {
		colors: {
		  sage: {
			'50': '#F5F5F5',
			'100': '#B8860B',
			'200': '#614E1A',
			'300': '#C04000',
			'400': '#483C32',
			'500': '#382C1E',
			'600': '#3C2F2F',
			'700': '#014421',
			'800': '#800020',
			'900': '#36454F'
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
			50: '#f5f3f2',
			100: '#e8e1de',
			200: '#d2c3bd',
			300: '#bba59c',
			400: '#a5877b',
			500: '#8e695a',
			600: '#725448',
			700: '#553f36',
			800: '#392a24',
			900: '#1c1512',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
			50: '#f2f4f3',
			100: '#e6e9e7',
			200: '#ccd3cf',
			300: '#b3bdb7',
			400: '#99a79f',
			500: '#809187',
			600: '#66746c',
			700: '#4d5751',
			800: '#333a36',
			900: '#1a1d1b',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))'
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
			50: '#f7f5f2',
			100: '#efeae5',
			200: '#dfd5cb',
			300: '#cfc0b1',
			400: '#bfab97',
			500: '#af967d',
			600: '#8c7864',
			700: '#695a4b',
			800: '#463c32',
			900: '#231e19',
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
  
  