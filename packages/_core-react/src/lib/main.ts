/**
 * Todo.
 *
 * @description Todo.
 */
import * as SvelteComponents   from '@s-8/core/components'
import toReact                 from 'svelte-adapter/react'
import type { ComponentReact } from './types'
import './styles.css'

const res: ComponentReact = {}

for ( const [ key, SvelteComponent ] of Object.entries( SvelteComponents ) ) {

	res[key] = toReact( SvelteComponent, {}, 'div' )

}
export { res }
export default res
