import { join } from 'path'
import type { Config } from 'tailwindcss'
import { skeleton } from '@skeletonlabs/tw-plugin'
import { blacknwhite } from './customtheme'

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			animation: {
			  grid: "grid 15s linear infinite",
			},
			keyframes: {
			  grid: {
				"0%": { transform: "translateY(-50%)" },
				"100%": { transform: "translateY(0)" },
			  },
			},
		  },
	},
	plugins: [
		skeleton({
			themes: {
				custom: [
					blacknwhite
				],
			},
		}),
	],
} satisfies Config;
