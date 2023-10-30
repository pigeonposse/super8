/**
 * Add CSS styles.
 *
 * @description Class where filter styles are modified to CSS filters and added to an HTML style tag.
 */

import { filterCustomIds, filtersSectionsIds, type InputRangeAttrs, type AddStylesConstructorParams } from '../../../types'

export class StylesCSS {
	
	readonly customValues
	readonly presetsValue
	readonly selectors
	readonly isHide
	readonly id
	readonly document

	constructor( { customValues, presetsValue, selectors, isHide, id, document }: AddStylesConstructorParams ) {

		this.customValues = customValues
		this.presetsValue = presetsValue
		this.selectors    = selectors
		this.isHide       = isHide
		this.id           = id
		this.document     = document
	
	}

	#addStyleTagToHeadHtml ( styleString: string ) {

		let styleElement = this.document.getElementById( this.id )
	
		if ( styleElement ) {
	
			styleElement.innerHTML = styleString
		
		} else {
	
			styleElement           = this.document.createElement( 'style' )
			styleElement.id        = this.id
			styleElement.innerHTML = styleString
			this.document.head.appendChild( styleElement )
	
		}
	
	} 

	#transformDataToCSS() {
        
		let boxShadowCSS = `${filterCustomIds.shadowInset} ${filterCustomIds.shadowX} ${filterCustomIds.shadowY} ${filterCustomIds.shadowBlur} ${filterCustomIds.shadowSpread} ${filterCustomIds.shadowColor}`,
			filterCSS    = '',
			borderCSS    = ''

		for ( const style of this.customValues ) {
    
			const { id, opts, value } = style
    
			const verifyUnit = <T>( option: T ): boolean => {
    
				return option !== null && typeof option === 'object' && !Array.isArray( option ) && 'unit' in option
    
			}
    
			let unit, op: Required<InputRangeAttrs>
    
			if( verifyUnit( opts ) ) {
    
				op = opts as Required<InputRangeAttrs>
    
				if( typeof op.unit === 'object' && 'opts' in op.unit && 'value' in op.unit )
					unit = op.unit.value
				else if( typeof op.unit === 'string' )
					unit = op.unit
            
			}	

			unit = unit ? unit : ''
    
			if ( id.startsWith( filtersSectionsIds.custom.shadow ) ) {
    
				if ( filterCustomIds.shadowInset === id ) 
					boxShadowCSS = boxShadowCSS.replace( filterCustomIds.shadowInset, ( value === true ) ? 'inset' : '' )
				else 
					boxShadowCSS = boxShadowCSS.replace( id, `${value}${unit}` )
			
			} else if ( id.startsWith( filtersSectionsIds.custom.filter ) ) {
    
				const subProperty = id.replace( filtersSectionsIds.custom.filter + '--', '' )
				filterCSS        += `${subProperty}(${value}${unit}) `
    
			} else if ( id.startsWith( filtersSectionsIds.custom.border ) ) {
    
				const subProperty = id.replace( filtersSectionsIds.custom.border + '-', '' )
				borderCSS        += `border-${subProperty}: ${value}${unit} !important;\n`
    
			}
    
		}
    
		return `box-shadow: ${boxShadowCSS} !important;
		filter: ${filterCSS} !important;
		${borderCSS}`
    
	} 

	addStylesToHTML( ){

		let res: string

		if( this.isHide ) res = ''
		else {

			res = `${this.selectors.join( ', ' )} {
			${this.#transformDataToCSS()}
		}`	
		
		}

		this.#addStyleTagToHeadHtml( res )
	
	}

}
