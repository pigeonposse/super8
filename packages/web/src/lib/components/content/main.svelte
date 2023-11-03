<script lang="ts">
    
    import { onMount } from 'svelte';
    import { 
        Filters, 
        componentTypes, 
        styleClass,
        Btn, 
        copyText,
        Not, 
        type ComponentFilters,
    } from "$lib"
    import Ad from "./ad/main.svelte";
    import Desc from "./desc/main.svelte";
    import Iframe from "./iframe/main.svelte";
    import { filtersHide, filtersPresetsValue, filtersValue, srcIframe } from "./storage/main";
    import { locales } from "./locales/main";
    
    /**
     * VARIABLES
     */
    let active = false
    let innerWidth = 0
    let responseWidth = 950
    let value = filtersValue
    let isHide = filtersHide
    let presetsValue = filtersPresetsValue
    let copied = false
	const id = 'pp-super8-custom'
    const stylesId = 'ps-s8-styles'
	const filterOpts: Omit<ComponentFilters, 'type' > = {
		active : true,
		id     : stylesId,
		btn    : {
            title: 'ADD FILTERS',
            indicator: {
                type: 'main',
                position: 'top'
            },
            customClasses: '!w-full'
        },
		content     : undefined,
		locales     : undefined,
		toSelectors : [ 
			'#' + id,
		],
		document : undefined,
		// optionsLimit : 5,
	}
    
    onMount(() => filterOpts.document = document)

    // $: if($value) iframeValue = JSON.stringify($value, null, 2)

    const copyIframe = () => {
        
        const styleElement = document.querySelector('#'+stylesId)
        let copiedStyles = ''; 
        if (styleElement) {

            const styleContent = styleElement.innerHTML
            if (styleContent) {
                const stylesWithoutSelector = styleContent.replace(/#pp-super8-custom\s*{([^}]*)}/, '$1').trim()
                copiedStyles = stylesWithoutSelector
            }
        }

        const iframeString = `<iframe src="${$srcIframe}" title="${$locales.iframe.title}" style="${copiedStyles}" width="600px" height="350px" ></iframe>`;
        copyText(iframeString)
        copied = true
        setTimeout(() => {
            copied = false;
        }, 3000);
    }

</script>

<svelte:window bind:innerWidth />

<div class="{ innerWidth >= responseWidth ? styleClass.pageContentRow : styleClass.pageContentCol} max-w-[1000px]">
        
    {#if innerWidth <= responseWidth}
        <Desc/>    
    {/if}
    

    <div class="bg-gray-900 dark:bg-gray-900 {innerWidth >= responseWidth ? styleClass.sectionBorder : ''}">

        <Filters
            {...filterOpts}
            type={innerWidth >= responseWidth ? componentTypes.filters.main : componentTypes.filters.sidebar }
            content={{
                ...filterOpts.content,
                height: '80vh',
            }}
            locales={$locales.filters}
            bind:active={active}
            bind:value={$value}
            bind:hide={$isHide}
            bind:presetsValue={$presetsValue}
        />

    </div>

    <div class="rounded-xl m-4 flex flex-col items-center">
        
        {#if innerWidth >= responseWidth}
            <Desc/>    
        {/if}

        <Iframe {id} />

        <Btn 
            id="{id}-btn"
            color="grayReverse"
            customClasses="w-full mt-4"
            on:click={copyIframe}
        >
            {$locales.copyBtn.value}
        </Btn>
        
        {#if copied}
            <Not 
                type="success"
                customClasses="w-full"
            >
                {$locales.copyBtn.copied}
            </Not>
        {/if}
        <Ad/>


    </div>

</div>