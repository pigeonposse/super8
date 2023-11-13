/**
 * Filters "more" store.
 *
 * @description Define all Filters "more" store functions in this file.
 */

import {
	derived, get, writable, type Writable, 
}                       from 'svelte/store'
import {
	allowedFilterTabs, type AddPresetParams, filtersSectionsIds, 
} from '../../../types'
import { functs }       from '../../../_shared/main'
import { presets }      from '../presets/main'
import { tabs }         from '../tabs'
import { custom }       from '../custom/main'
import { sectionFunct } from '../_shared/section'

type AddPresets = {
    name: AddPresetParams['name']
    color: AddPresetParams['color']
    value: string
}

const section = sectionFunct( 
	Object.values( filtersSectionsIds.more ), 
	filtersSectionsIds.more.addPreset, 
)

const addPresetFunct = () => {

	const randomColor      = functs.color.getRandom()
	const isAdded          = writable( false )
	const defaultAddPreset = {
		name  : randomColor.name,
		color : randomColor.value,
		value : '[]',
	}
	
	const addPreset: Writable<AddPresets> = writable( functs.deepCopy( defaultAddPreset ) )
	
	const update = ( key: keyof AddPresets, value: string ) => {

		addPreset.update( prevPreset => ( {
			...prevPreset,
			[key] : value,
		} ) )
	
	}

	const isInvalidName = derived( addPreset, $addPreset => {

		return typeof $addPreset.name !== 'string' || 
			$addPreset.name === '' || 
			$addPreset.name.includes( ' ' ) || 
			presets.isInDefaultlist( $addPreset.name )
	
	} )
    
	const isInvalidValue = derived( addPreset, $addPreset => {

		return !presets.isValidObjStyle( $addPreset.value )
	
	} )

	const addFunct = async () => {
        
		const invalidName  = get( isInvalidName )
		const invalidValue = get( isInvalidValue )
		
		if( !invalidName && !invalidValue ){

			const preset = get( addPreset ) 
			isAdded.set( true )
			presets.addCustom( {
				name  : preset.name, 
				color : preset.color, 
				value : functs.jsonToObj( preset.value ),
			} )

			setTimeout( () => isAdded.set( false ), 2000 )
			tabs.set( allowedFilterTabs.preset )
			addPreset.set( functs.deepCopy( defaultAddPreset ) )
		
		}
	
	}

	const addCurrConfig = () => {

		tabs.set( allowedFilterTabs.more )
		section.open( filtersSectionsIds.more.addPreset )
		const currValue = get( custom.jsonValues )
		if( currValue ) update( 'value', currValue )
	
	}

	return {
		...addPreset,
		update,
		isAdded,
		isInvalidName,
		isInvalidValue,
		addFunct,
		addCurrConfig,
	}
    
}
const copyFunct = () => {

	const isCopied = writable( false )
	const copy     = derived( custom.jsonValues, $values => $values )

	const copyFunct = async () => {

		isCopied.set( true )
		const copyValues = get( copy )
		await functs.copyText( copyValues )
		setTimeout( () => isCopied.set( false ), 2000 )
	
	}
	
	return {
		...copy,
		isCopied,
		copyFunct,
	}

}

const moreFunct = () => {
	
	return {
		section,
		addPreset : addPresetFunct(),
		copy      : copyFunct(),
	}

}

export const more = moreFunct()
