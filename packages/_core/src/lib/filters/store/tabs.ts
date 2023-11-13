/**
 * Filters tabs store.
 *
 * @description Define all Filters tabs store functions in this file.
 */

import {
	writable, type Writable, 
} from 'svelte/store'
import type { ComponentTabs } from '../../types'

const tabsFuncts = () => {

	const activeTab: Writable<ComponentTabs['activeTabValue']> = writable( undefined )

	return {
		...activeTab,
	}

}

export const tabs = tabsFuncts()
