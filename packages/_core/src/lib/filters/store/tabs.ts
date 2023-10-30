/**
 * Todo.
 *
 * @description Todo.
 */

import { writable, type Writable } from 'svelte/store'
import type { ComponentTabs }      from '../../types'

const tabsFuncts = () => {

	const activeTab: Writable<ComponentTabs['activeTabValue']> = writable( undefined )

	return {
		...activeTab,
	}

}

export const tabs = tabsFuncts()
