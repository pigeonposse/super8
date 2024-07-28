<script lang="ts">
    
    import { 
      allowedFilterTabs, 
      type ComponentSidebarContentFilters, 
      Tabs,
      Not,
      componentTypes,
      Badge
    } from "../../index";
    import Reset from "./reset.svelte";
    import { filters } from "../store/main";

    /**
     * VARIABLES 
     */
    export let width: ComponentSidebarContentFilters['width'] = '420px'
    export let height: ComponentSidebarContentFilters['height'] = '100%'
    export let allowedItems: ComponentSidebarContentFilters['allowedItems'] = undefined
    export let customClasses: ComponentSidebarContentFilters['customClasses'] = ""

    const { tabs, items, custom, locales, styles } = filters
    const { isBlocked, limit } = custom
    const { id } = styles
    const allowedItemsStore = items.allowedItems
    
    if( allowedItems ) allowedItemsStore.set( allowedItems )
    
    /**
     * CLASSES 
     */
    let divClass = 'py-6 px-4 flex flex-col overflow-y-scroll scrollbar-hide gap-2'
    let sectionClass = "flex flex-row items-center justify-center px-4 pb-4 w-full"
    let tabClass = "h-full"

</script>

<div 
  class="{divClass} {customClasses}" 
  style="width:{width}; height:{height};"
  id="{$id}-content"
>

    <slot name="header"/>

    <Tabs 
      items={$items}
      bind:activeTabValue={$tabs}
      customClasses={tabClass}
    />
    
    <slot name="content"/>

    {#if $isBlocked}
      <div class="{sectionClass}">
        <Not
            type={componentTypes.notification.warn} 
            customClasses="w-full "
        >
        
          {$locales.limit.nots.onLimit}
          {$locales.limit.limitAllowed} <Badge >{$limit}</Badge>
        </Not>
      </div>
    {/if}

    {#if !$allowedItemsStore || ($allowedItemsStore && $allowedItemsStore.includes(allowedFilterTabs.btn) )}
      
      <Reset/>  

    {/if}

    <slot name="footer"/>  

</div>
