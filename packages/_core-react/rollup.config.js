/**
 * Rollup config.
 *
 * @description Rollup config.
 */
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs        from '@rollup/plugin-commonjs'
import typescript      from 'rollup-plugin-typescript2'
import postCSS         from 'rollup-plugin-postcss'

// import pkg from './package.json'

export default {
	input  : 'src/main.ts',
	output : [
		{
			file   : './dist/cjs/index.js',
			format : 'cjs',
		},
		{
			file   : './dist/esm/index.js',
			format : 'es',
		},
	],
	// external : [ ...Object.keys( pkg.peerDependencies || {} ) ],
	plugins : [
		nodeResolve(),
		commonjs(),
		typescript( {
			typescript : require( 'typescript' ),
		} ),
		postCSS( {
			plugins : [ require( 'autoprefixer' ) ],
		} ),
	],
}