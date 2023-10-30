<script lang="ts">
    
    import { SvelteComponent, onMount } from 'svelte';
    import {
      Filters,
      componentTypes,
      type IFilterJsonValues,
      FiltersBtn,
    } from "$lib";
    import { page } from '$app/stores'
    import { browser } from '$app/environment';

    /**
     * VARIABLES
     */
    let data = $page.data
    onMount(() => data.filterOpts.document = document)

    /**
     * CLASSES
     */
    // Nothing
    
    /**
     * EVENTS
     */
    // let value: IFilterJsonValues | undefined = [ { "id": "border-width", "value": 26 }, { "id": "border-radius", "value": 99 }, { "id": "border-style", "value": "solid" }, { "id": "border-color", "value": "rgba(255, 255, 255, 1)" }, { "id": "box-shadow--x", "value": 0 }, { "id": "box-shadow--y", "value": 0 }, { "id": "box-shadow--spread", "value": 0 }, { "id": "box-shadow--blur", "value": 0 }, { "id": "box-shadow--inset", "value": false }, { "id": "box-shadow--color", "value": "rgba(0, 0, 0, 1)" }, { "id": "filter--blur", "value": 0 }, { "id": "filter--brightness", "value": 100 }, { "id": "filter--contrast", "value": 100 }, { "id": "filter--grayscale", "value": 0 }, { "id": "filter--hue-rotate", "value": 0 }, { "id": "filter--invert", "value": 0 }, { "id": "filter--opacity", "value": 100 }, { "id": "filter--saturate", "value": 100 }, { "id": "filter--sepia", "value": 0 } ]
    let value: IFilterJsonValues | undefined // Whithout filters
    // $: if(value) console.log(value);
    let active = false
    // $: console.log(active)
    
    let compEl: SvelteComponent
    onMount(() => {
      console.log(compEl.changeActive);
      // compEl.changeActive(true)
    })

</script>
  
<div class="{data.classes.pageContentCol}">

  <!-- svelte-ignore a11y-missing-attribute -->
  <iframe 
    width="560"
    height="315"
    {...data.iframe} 
  />

  {#if data.filterOpts && Object.keys(data.filterOpts).length > 0  && browser}

    <FiltersBtn
      title="Super8 button LEFT"
      position="bottom-left"
      color="neutral"
      indicator = {{
        position: 'right'
      }}
    />

    <FiltersBtn
      title="Super8 button RIGHT"
      position="bottom-right"
      color="gray"
      indicator = {{
        position: 'left'
      }}
    />

    <Filters 
      bind:this={compEl}
      type={componentTypes.filters.sidebar}
      {...data.filterOpts}
      bind:value={value}
      bind:active={active}
    />

  {/if}

</div>

