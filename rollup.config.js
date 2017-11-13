import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
	strict: true,
	input: 'src/index.js',
	output: {
		format: 'iife',
		file: 'dist/vdom.js',
		name: 'vdom',
		sourcemap: true
	},
	plugins: [
		nodeResolve({
			main: true
		}),
		babel({
			sourceMap: true,
			exclude: 'node_modules/**',
            babelrc: false,
            plugins: [
                ["transform-react-jsx", {
                  "pragma": "h"
                }]
              ]
		})
	]
};