<script lang="ts">
    
    import { onMount } from 'svelte';
    import {
      functs,
      Filters,
      componentTypes,
      type FiltersCustomToExport,
      Not,
    } from "$lib";
    import { page } from '$app/stores'

    /**
     * VARIABLES
     */
    let data = $page.data
    
    onMount(() => data.filterOpts.document = document)

    /**
     * CLASSES
     */
    let divClass="m-2 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg flex flex-row text-[12px]"
    
    /**
     * EVENTS
     */
    let value: FiltersCustomToExport['values'] | undefined // Whithout filters
    let isHide: FiltersCustomToExport['hide']
    let presetsValue: FiltersCustomToExport['presets']
    
    //// options with values
    // let value: IFilterJsonValues | undefined = [ { "id": "border-width", "value": 26 }, { "id": "border-radius", "value": 99 }, { "id": "border-style", "value": "solid" }, { "id": "border-color", "value": "rgba(255, 255, 255, 1)" }, { "id": "box-shadow--x", "value": 0 }, { "id": "box-shadow--y", "value": 0 }, { "id": "box-shadow--spread", "value": 0 }, { "id": "box-shadow--blur", "value": 0 }, { "id": "box-shadow--inset", "value": false }, { "id": "box-shadow--color", "value": "rgba(0, 0, 0, 1)" }, { "id": "filter--blur", "value": 0 }, { "id": "filter--brightness", "value": 100 }, { "id": "filter--contrast", "value": 100 }, { "id": "filter--grayscale", "value": 0 }, { "id": "filter--hue-rotate", "value": 0 }, { "id": "filter--invert", "value": 0 }, { "id": "filter--opacity", "value": 100 }, { "id": "filter--saturate", "value": 100 }, { "id": "filter--sepia", "value": 0 } ]
    // let presetsValue:{
    //     value: string;
    //     customList: IFiltersPresets | [];
    // } = { 
    //   "value": "mullholland", 
    //   "customList": [ { 
    //     "id": "MASKARILLA", 
    //     "name": "MASKARILLA", 
    //     "opts": { "color": "rgba(0, 191, 255, 1)" }, 
    //     "value": [] } 
    //   ],
    // }
    // let isHide: boolean = true

</script>

<div class="{data.classes.pageContentRow}">
    
    <div class="bg-gray-100 dark:bg-gray-900 rounded-xl border-gray-200/50 dark:border-gray-800  border-[2px]">
      {#if data.filterOpts && Object.keys(data.filterOpts).length > 0 }
        <Filters 
          type={componentTypes.filters.main}
          {...data.filterOpts}
          content={{
            ...data.filterOpts.content,
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
      {/if}
    </div>
    
    <div class=" rounded-xl m-2 flex flex-col items-center max-w-[460px]">
      <!-- svelte-ignore a11y-missing-attribute -->
      <iframe 
        width="360"
        height="215" 
        class="m-4"
        {...data.iframe}
      />
      <div class={divClass}>
        {#if value}
          {functs.objectToJson(value)}
        {/if}
      </div>
      <div class={divClass}>
        {#if presetsValue}
          {functs.objectToJson(presetsValue)}
        {/if}
      </div>
      <div class={divClass}>
          Hide:{ isHide}
      </div>
    </div>
    
</div>
