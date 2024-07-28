<script lang="ts">

    // import Tabs from "./tabs/main.svelte";
    // import Sidebar from "./sidebar/main.svelte";
    import { filters } from './store/main'
	import { onMount } from 'svelte';
    import { componentTypes, type ComponentFilters, componentPositions, functs, type FiltersCustomToExport } from "../index";
	
	type TabsType = typeof import('./tabs/main.svelte').default
	type SidebarType = typeof import('./sidebar/main.svelte').default

	let Sidebar: SidebarType| undefined = undefined;
	let Tabs: TabsType | undefined = undefined;

	async function loadTabs() {
		const module = await import('./tabs/main.svelte');
		Tabs = module.default;
	}

	// Función para cargar el componente Sidebar
	async function loadSidebar() {
		const module = await import('./sidebar/main.svelte');
		Sidebar = module.default;
	}
	onMount(async () => {
		await loadTabs();
		await loadSidebar();
	})

    /**
     * VARIABLES 
     */
    
    /** @type {ComponentFilters['type']} */
    export let type: ComponentFilters['type'] = componentTypes.filters.main

    /** @type {ComponentFilters['toSelectors']} */
    export let toSelectors: ComponentFilters['toSelectors'] = ['video']

    /** @type {ComponentFilters['btn']} */
    export let btn: ComponentFilters['btn'] = undefined

    /** @type {ComponentFilters['content']} */
    export let content: ComponentFilters['content'] = undefined

    /** @type {ComponentFilters['locales']} */
    export let locales: ComponentFilters['locales'] = undefined

    /** @type {ComponentFilters['id']} */
    export let id: ComponentFilters['id'] = ''

    /** @type {ComponentFilters['active']} */
    export let active: ComponentFilters['active'] = false

    /** @type {ComponentFilters['document']} */
    export let document: ComponentFilters['document'] = undefined

    /** @type {ComponentFilters['position']} */
    export let position: ComponentFilters['position'] = componentPositions.filters.sidebar.right

    /** @type {ComponentFilters['optionsLimit']} */
    export let optionsLimit: ComponentFilters['optionsLimit'] = undefined

    /** @type {ComponentFilters['valuesChanged']} */
    export let valuesChanged: ComponentFilters['valuesChanged'] = undefined

    const { styles, custom, presets } = filters
    const filtersActive = filters.active

    const i18n = filters.locales
    const { valueID, addCustom, customList} = presets
    const { objectValues, updateValues, valuesNotInDefault } = custom
    const {count} = valuesNotInDefault
    const { sels, isHide } = styles
    const storeID = styles.id

    /** @type {ComponentFilters['values']} */
    export let value: FiltersCustomToExport['values'] = $objectValues

    /** @type {ComponentFilters['hide']} */
    export let hide: FiltersCustomToExport['hide'] = $isHide

    /** @type {ComponentFilters['presets']} */
    export let presetsValue : FiltersCustomToExport['presets'] = {
        value: $valueID,
        customList: $customList,
    }
    
    /** @type {(v: ComponentFilters['active']) => void} */
    export const changeActive = (v: ComponentFilters['active']) => {
      if(typeof v === 'boolean') filtersActive.set(v)
    }

    // Set default value if exist initial value object
    if(
      typeof presetsValue === "object" && 
      'value' in presetsValue && 
      'customList' in presetsValue 
    ) {

      if( typeof presetsValue.value === 'string') 
        valueID.set( presetsValue.value )
       
      if(Array.isArray( presetsValue.customList )){
        for (const preset of presetsValue.customList) {
          const { name, opts, value } = preset
          addCustom( { name, color: opts.color, value } )  
        }
        
      }

    }

    // Set default value if exist initial value object
    if(Array.isArray(value)) {

      const defaultValue = functs.mergeDeepById( $objectValues, value )
      if(defaultValue) updateValues(defaultValue as typeof value)

    }
    
    $: valuesChanged = $count

    // Set default value if exist initial hide
    if(typeof hide === 'boolean') isHide.set(hide)
    $: hide = $isHide

    // Set default value if exist initial active 
    if(typeof active === 'boolean') filtersActive.set(active)
    $: active = $filtersActive
    
    /**
     * EVENTS 
     */
    sels.set(toSelectors)
    storeID.set(id)

     // LOCALES
    $: if( locales ) i18n.add(locales)
    $: if( typeof optionsLimit === 'number' ) custom.limit.set(optionsLimit)

    // FOR EXPORT VALUES
    $: value = $objectValues

    // FOR EXPORT ACTIVE VALUE

    // FOR EXPORT PRESETS VALUE
    $: {
      presetsValue = {
        value: $valueID,
        customList: $customList,
        // list: $presets
      }
    }
    
    // TO ADD STYLE
    $: if( document ) styles.add({...$styles, document})

</script>

{#if Sidebar && Tabs}

	{#if type === componentTypes.filters.sidebar}

		<svelte:component this={Sidebar} {btn} {content} {position}>

			<slot name="header" slot="header">
			</slot>
			<slot name="content" slot="content">
			</slot>
			<slot name="footer" slot="footer">
			</slot>

		</svelte:component>

	{:else if type === componentTypes.filters.main}

		<svelte:component this={Tabs} {...content}>

			<slot name="header" slot="header">
			</slot>
			<slot name="content" slot="content">
			</slot>
			<slot name="footer" slot="footer">
			</slot>

		</svelte:component>

	{/if}

{/if}

<!-- 
  @component

  [Go to docs](/packages/_core/docs/components-index.md)
  
  @example
  <Filters 
    type={componentTypes.filters.main}
    active={true}
    id='ps-s8-styless'
    btn={{ 
      title : 'Super 8',
    }}
    position='right'
    locales={undefined}
    toSelectors={[ 
      'iframe',
    ]}
    document={undefined}
    content={{
      height: '80vh'
    }}
    bind:value={value}
    bind:hide={isHide}
    bind:presetsValue={presetsValue}
  >
    <div slot="header" class="flex flex-col items-center">
      <img src="/logo.png" alt="Logo" width="200px" >
    </div>
    <div slot="content">
      <Not >
      This a custom notification
      </Not>
    </div>
    <div slot="footer" class="flex flex-col items-center">
      <span class="opacity-50 text-[10px]">© copyright PigeonPosse</span>
    </div>
  </Filters>
-->
