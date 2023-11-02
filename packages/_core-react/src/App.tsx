/**
 * APP.
 *
 * @description App file.
 */

// import Comp from '../dist/lib/bundle'
import Comp                                 from './lib/main'
import { ComponentFilters, componentTypes } from './lib/types'

const App = () => {

	const filterOpts: ComponentFilters = {
		active : false,
		id     : 'ps-s8-styles',
		btn    : { 
			title : 'Super8',
		},
		type        : componentTypes.filters.sidebar,
		// content:{
		//   allowedItems: [
		//     allowedFilterTabs.custom,
		//     allowedFilterTabs.preset
		//   ],
		// },
		content     : undefined,
		locales     : undefined,
		toSelectors : [ 
			'iframe' ,
		],
		document     : document,
		optionsLimit : 5,
	}
	const Filters                      = Comp.Filters as React.FC<ComponentFilters>

	return (
		<>
			<div>
				<h1>Test super8 in react</h1>
				<Filters 
					{...filterOpts} 
				/>
			</div>
		</>
	)

}

export default App
