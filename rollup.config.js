import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import svelte from 'rollup-plugin-svelte-hot';
import hmr from 'rollup-plugin-hot';

const production = !process.env.ROLLUP_WATCH;
const watch = !!process.env.ROLLUP_WATCH
const hot = !production && !!watch;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		svelte({
			// enable HMR (only have effect when dev is also true)
			hot,
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: css => {
				css.write('public/build/bundle.css')
			},
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		babel({
			extensions: ['.js', '.mjs', '.html', '.svelte'],
			include: ['src/**', 'node_modules/svelte/**'],
		}),

		// NOTE during dev, we're now gonna serve via rollup-plugin-hot -- it's
		// easier for simple cases and more stable against Rollup restarts
		//

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser(),

		hmr({
			enabled: !production,
			public: 'public',
			inMemory: true,
			port: 8000,
			mount: {
				public: '/',
			}
		})
	],
	watch: {
		clearScreen: false
	}
};
