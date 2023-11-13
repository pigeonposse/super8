/**
 * Svelte Components to React Components Converter.
 *
 * @description This file converts Svelte components from the @s-8/core library to React components.
 */
import * as SvelteComponents   from '@s-8/core/components'
import toReact                 from 'svelte-adapter/react'
import type { ComponentReact } from './types'
import './styles.css'

const res: ComponentReact = {}

for ( const [
	key, SvelteComponent, 
] of Object.entries( SvelteComponents ) ) {

	res[key] = toReact( SvelteComponent, {}, 'div' )

}
export { res }
export default res
