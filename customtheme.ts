
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const blacknwhite: CustomThemeConfig = {
    name: 'B&W',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `"Space Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `"Cantata One", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #202020 
		"--color-primary-50": "222 222 222", // #dedede
		"--color-primary-100": "210 210 210", // #d2d2d2
		"--color-primary-200": "199 199 199", // #c7c7c7
		"--color-primary-300": "166 166 166", // #a6a6a6
		"--color-primary-400": "99 99 99", // #636363
		"--color-primary-500": "32 32 32", // #202020
		"--color-primary-600": "29 29 29", // #1d1d1d
		"--color-primary-700": "24 24 24", // #181818
		"--color-primary-800": "19 19 19", // #131313
		"--color-primary-900": "16 16 16", // #101010
		// secondary | #404040 
		"--color-secondary-50": "226 226 226", // #e2e2e2
		"--color-secondary-100": "217 217 217", // #d9d9d9
		"--color-secondary-200": "207 207 207", // #cfcfcf
		"--color-secondary-300": "179 179 179", // #b3b3b3
		"--color-secondary-400": "121 121 121", // #797979
		"--color-secondary-500": "64 64 64", // #404040
		"--color-secondary-600": "58 58 58", // #3a3a3a
		"--color-secondary-700": "48 48 48", // #303030
		"--color-secondary-800": "38 38 38", // #262626
		"--color-secondary-900": "31 31 31", // #1f1f1f
		// tertiary | #505050 
		"--color-tertiary-50": "229 229 229", // #e5e5e5
		"--color-tertiary-100": "220 220 220", // #dcdcdc
		"--color-tertiary-200": "211 211 211", // #d3d3d3
		"--color-tertiary-300": "185 185 185", // #b9b9b9
		"--color-tertiary-400": "133 133 133", // #858585
		"--color-tertiary-500": "80 80 80", // #505050
		"--color-tertiary-600": "72 72 72", // #484848
		"--color-tertiary-700": "60 60 60", // #3c3c3c
		"--color-tertiary-800": "48 48 48", // #303030
		"--color-tertiary-900": "39 39 39", // #272727
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #f2ea49 
		"--color-warning-50": "253 252 228", // #fdfce4
		"--color-warning-100": "252 251 219", // #fcfbdb
		"--color-warning-200": "252 250 210", // #fcfad2
		"--color-warning-300": "250 247 182", // #faf7b6
		"--color-warning-400": "246 240 128", // #f6f080
		"--color-warning-500": "242 234 73", // #f2ea49
		"--color-warning-600": "218 211 66", // #dad342
		"--color-warning-700": "182 176 55", // #b6b037
		"--color-warning-800": "145 140 44", // #918c2c
		"--color-warning-900": "119 115 36", // #777324
		// error | #f25449 
		"--color-error-50": "253 229 228", // #fde5e4
		"--color-error-100": "252 221 219", // #fcdddb
		"--color-error-200": "252 212 210", // #fcd4d2
		"--color-error-300": "250 187 182", // #fabbb6
		"--color-error-400": "246 135 128", // #f68780
		"--color-error-500": "242 84 73", // #f25449
		"--color-error-600": "218 76 66", // #da4c42
		"--color-error-700": "182 63 55", // #b63f37
		"--color-error-800": "145 50 44", // #91322c
		"--color-error-900": "119 41 36", // #772924
		// surface | #000000 
		"--color-surface-50": "217 217 217", // #d9d9d9
		"--color-surface-100": "204 204 204", // #cccccc
		"--color-surface-200": "191 191 191", // #bfbfbf
		"--color-surface-300": "153 153 153", // #999999
		"--color-surface-400": "77 77 77", // #4d4d4d
		"--color-surface-500": "0 0 0", // #000000
		"--color-surface-600": "0 0 0", // #000000
		"--color-surface-700": "0 0 0", // #000000
		"--color-surface-800": "0 0 0", // #000000
		"--color-surface-900": "0 0 0", // #000000
		
	}
}