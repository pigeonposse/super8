<script lang="ts">

  import { Filters, type ComponentFilters, type ComponentBtnFilters, componentTypes } from "@s-8/core";
  import { optionsIds, storageIds, type OptionsStore, type BtnStylesClasses, type FilterComponentProps, storageSetIds, storageGroupsIds, type StorageAppContentValues, type AllowedSitesValue, messagesIds } from "../../types";
  import { locales } from "./locales";
  import { browser } from "../../_shared/main";
  import { SvelteComponent, onMount } from "svelte";
  import { site } from "../allowed-sites/functs";
  import { storage } from "../../storage/main";
  import { defaults } from "./data";
  import { images } from "../../../man/manifest";
  
  let value: FilterComponentProps['values']
  let presetsValue: FilterComponentProps['presets']
  let hide: FilterComponentProps['hide']
  let active: ComponentFilters['active']
  let documentValue: ComponentFilters['document']

  let show = false
  let filtersElement: SvelteComponent
  let siteData: Awaited<ReturnType<typeof site>>
  let screenBtnDisplayed = true

  const filterOpts = defaults.filterOpts
  const btnClasses = defaults.btnClasses
  const logUrl = browser.runtime.getURL(images.logo)

  // TODO
  // async function btnInsidePlayer( content: AllowedSitesValue ){

  //   try{

  //     const sel = document.querySelector(`#${optionsIds.filters}-btn`)
  //     console.log(sel, content);
  //     if( content && sel && 'selectorForBtn' in content && content.selectorForBtn ) {

  //       for (const btn of content.selectorForBtn) {

  //         const selQuerys = document.querySelectorAll(btn.query)
  //         if( selQuerys ){

  //           for (const selQuery of selQuerys) {
  //             sel.insertAdjacentElement(btn.position, selQuery)    
  //           }
            
  //           return true

  //         }

  //       }
        
  //     }

  //     return false

  //   }catch(e){

  //     console.log(e)
  //     return false

  //   }

  // }

  async function hideBtn( ){
    const sel = document.querySelector(`#${optionsIds.filters}-btn`) as HTMLElement
    if(sel) sel.style.display = 'none'
  }

  async function setFiltersOptions(optStore: OptionsStore, content: AllowedSitesValue) {

      if(content) filterOpts.toSelectors = content.videoSelector

      if(optStore !== undefined) {

        const ids = optionsIds.filtersSidebar
        
        if(ids.display in optStore ) screenBtnDisplayed = optStore[ids.display] as typeof screenBtnDisplayed

        if(ids.styleTheme in optStore && typeof optStore[ids.styleTheme] === 'string' && filterOpts.btn  ) {
          filterOpts.btn.color = btnClasses[optStore[ids.styleTheme] as keyof BtnStylesClasses] as keyof typeof componentTypes.btn
        }

        if(ids.buttonPosition in optStore && filterOpts.btn ) {
          filterOpts.btn.position = optStore[ids.buttonPosition] as ComponentBtnFilters['position']
          
        }

        if(ids.popupPosition in optStore ) filterOpts.position = optStore[ids.popupPosition] as ComponentFilters['position']

      }
      
  }

  async function setDefaultValues() {
    
    const contentStore = await storage.getGroup(storageGroupsIds.content) as StorageAppContentValues

    if( contentStore[storageIds.hide] ) hide = contentStore[storageIds.hide] as typeof hide
    if( contentStore[storageIds.values] ) value = contentStore[storageIds.values] as typeof value
    if( contentStore[storageIds.presets] ) presetsValue = contentStore[storageIds.presets] as typeof presetsValue
    if( contentStore[storageIds.active] ) active = contentStore[storageIds.active] as typeof active

  }

  onMount( async () => {
    
    siteData = await site()

    if(siteData){
      
      await setDefaultValues()
      await setFiltersOptions(siteData.store, siteData.data)

      browser.runtime.onMessage.addListener((message: any) => {

          if (message.type === messagesIds.activeFilters) {

            if(filtersElement) filtersElement.changeActive(message.data)

          }

      })

      show = true
      documentValue = document
      
    }

  })

  $: if( hide ) storage.value[storageIds.hide].set(hide)
  $: if( presetsValue ) storage.value[storageIds.presets].set(presetsValue)
  $: if( value ) storage.value[storageIds.values].set(value, storageSetIds.debounce)
  $: if( active !== undefined ) storage.value[storageIds.active].set(active)
  $: if( filtersElement && show && siteData && !screenBtnDisplayed ) hideBtn()

</script>

{#if show }

  <Filters 
    bind:this={filtersElement}
    id={optionsIds.filters}
    type={componentTypes.filters.sidebar}
    bind:value={value}
    bind:presetsValue={presetsValue}
    bind:hide={hide}
    active={active}
    {locales}
    document={documentValue}
    {...filterOpts}
  >  
  <div slot="header" class="flex flex-col items-center my-4">
    <img src="{logUrl}" alt="Logo" width="200px" >
  </div>
  </Filters>

{/if}
