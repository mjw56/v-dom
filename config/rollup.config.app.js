import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
	strict: true,
	input: 'demo/index.js',
	output: {
		format: 'cjs',
		file: 'demo/bundle.js',
		// name: 'vdom',
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