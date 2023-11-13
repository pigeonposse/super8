/**
 * Filters store file.
 *
 * @description Export all filters store functions.
 */

import { custom }  from './custom/main'
import { presets } from './presets/main'
import { styles }  from './styles/main'
import { more }    from './more/main'
import { locales } from './locales'
import { tabs }    from './tabs'
import { active }  from './active'
import { items }   from './items'

const filtFunct = () => {
	
	return {
		custom,
		presets,
		locales,
		styles,
		tabs,
		more,
		active,
		items,
	}

}

export const filters = filtFunct()
