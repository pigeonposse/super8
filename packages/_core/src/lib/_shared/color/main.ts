/**
 * Color shared functions.
 *
 * @description File for set color shared functions.
 */

import { colorList } from './color-list'
import chroma        from 'chroma-js'

const _getRandomKeyValue = ( obj: ( { [key: string]: unknown } ) ) => {

	const keys        = Object.keys( obj )
	const randomKey   = keys[Math.floor( Math.random() * keys.length )]
	const randomValue = obj[randomKey]
	return {
		key : randomKey, value : randomValue, 
	}

}

const getOpacity = ( color: string ) => {

	if( color === 'transparent' ) color = '#00000000'

	const rgbaArr =  chroma( color ).rgba()
	return rgbaArr[rgbaArr.length - 1]

}

const toRgb = ( color: string ) => {

	if( color === 'transparent' ) color = '#00000000'

	const arr =  chroma( color ).rgb()
	return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`

}
const toHex = ( color: string ) => {

	if( color === 'transparent' ) color = '#00000000'
	return chroma( color ).hex()

}

const toHexWithoutOpacity = ( color: string ) => {

	return toHex( toRgb( color ) )

}

const getHexDarken = ( color: string ) => {

	return chroma( color ).darken().hex()

}

const toRgba = ( color: string, opacity: number ) => {

	if( color === 'transparent' ) color = '#00000000'

	const rgbaArr =  chroma( color ).alpha( opacity / 100 ).rgba()
	return arrayToRgbaString( rgbaArr )

}

const arrayToRgbaString = ( colorArray: number[] ): string => {

	if ( colorArray.length < 3 || colorArray.length > 4 ) {

		throw new Error( 'The color array must have 3 or 4 components (R, G, B [, A])' )
	
	}
  
	const hasAlpha = colorArray.length === 4
	const alpha    = hasAlpha ? colorArray[3] : 1
  
	if ( alpha < 0 || alpha > 1 ) {

		throw new Error( 'The alpha value must be between 0 and 1.' )
	
	}
  
	if ( hasAlpha ) {

		return `rgba(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]}, ${alpha})`
	
	} else {

		return `rgba(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]}, 1)`
	
	}

}

const getRandom = () => {

	const randomColor = _getRandomKeyValue( colorList )
	const colorValue  = arrayToRgbaString( randomColor.value as number[] )

	return {
		name  : randomColor.key,
		value : colorValue,
	}

}

export const color = {
	getHexDarken,
	getRandom,
	arrayToRgbaString,
	getOpacity,
	toRgba,
	toRgb,
	toHex,
	toHexWithoutOpacity,
}
