/**
 * Todo.
 *
 * @description Todo.
 */

import { writable, derived, get } from 'svelte/store'

import { custom }                          from '../custom/main'
import { presets }                         from '../presets/main'
import { StylesCSS }                       from './css'
import { functs }                          from '../../../_shared/main'
import type { AddStylesConstructorParams } from '../../../types'

const selectorsFuncts = () => {

	const defaultValues = [ 'video' ]
	const value         = writable( defaultValues )
    
	return {
		default : defaultValues,
		...value,
	}

}

const stylesFuncts = ( ) => {

	const sels        = selectorsFuncts()
	const isHide      = writable( false )
	const id          = writable( functs.generateRamdomID() ) // generate random ID by default
	const stylesStore = derived( [ custom.values, presets.valueID, sels, isHide, id ], ( [ $values, $preset, $selectors, $hide, $id ] ) => {

		return { 
			customValues : $values, 
			presetsValue : $preset,
			selectors    : $selectors,
			isHide       : $hide, 
			id           : $id, 
		}
    
	} )

	const addStyles = ( opts: AddStylesConstructorParams ) => {

		new StylesCSS( opts ).addStylesToHTML()
	
	}
	
	const reset = () => custom.reset()
	
	const hide = () => {

		const hide = get( isHide )
		if( !hide ) isHide.set( true )
		else isHide.set( false )
	
	}

	return {
		...stylesStore,
		add : addStyles,
		sels,
		reset,
		hide,
		isHide,
		id,
	}

}

export const styles = stylesFuncts()
