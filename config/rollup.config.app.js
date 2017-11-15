import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
	strict: true,
	input: 'demo/index.js',
	output: {
		format: 'cjs',
		file: 'demo/bundle.js',
		sourcemap: false
	},
	plugins: [
		nodeResolve({
			main: true
		}),
		babel({
			sourceMap: false,
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