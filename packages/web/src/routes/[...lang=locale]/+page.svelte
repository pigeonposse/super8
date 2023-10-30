<script lang="ts">
    
    import { page } from '$app/stores'
    import { Filters, componentTypes, type IFilterJsonValues, Content, InputText } from "$lib";
    import { onMount } from 'svelte';
    import { t } from '$lib/i18n';
    import { locales } from './filter-locales';
    
    /**
     * VARIABLES
     */
    let data = $page.data
    let active = false

    onMount(() => data.filterOpts.document = document)
    
    let value: IFilterJsonValues | undefined 
    
</script>
  
<div class="{data.classes.pageContentRow}">

    {#if data.filterOpts && Object.keys(data.filterOpts).length > 0 }
    <div class="bg-gray-900 dark:bg-gray-900 rounded-lg">

      <Filters
        type={componentTypes.filters.main}
        {...data.filterOpts}
        content={{
          ...data.filterOpts.content,
          height: '80vh',
        }}
        locales={locales($t)}
        bind:active={active}
        bind:value={value}
      >

      <!-- <div slot="header" class="mx-4">
        <InputText
          id="{data.filterOpts.id}-input"
          value={"https://www.youtube.com/embed/XnmgbZdcRl4?si=95o6RDvy4QSMUp46&amp;start=5617"}
          placeholder="Add here your iframe or your image url"
          customClasses="w-full mt-4"
      />
      </div> -->
      </Filters>
    </div>
  {/if}
  
    <Content
      id={data.filterID}
      src={data.iframe.src}
      value={value}
    />

</div>

