<script lang="ts">
    
    import { onMount } from 'svelte';
    import { 
        Filters, 
        componentTypes, 
        styleClass,
        type ComponentFilters,
    } from "$lib"
    import { 
        filtersHide, 
        filtersPresetsValue, 
        filtersValue, 
        windowWidth,
        responseWidth,
        id,
        stylesId
    } from "../storage/main";
    import { locales } from '../locales/main';
    import { t } from '$lib/i18n';


    /**
     * VARIABLES
     */
    let active = false
    let value = filtersValue
    let isHide = filtersHide
    let presetsValue = filtersPresetsValue

	const filterOpts: Omit<ComponentFilters, 'type' > = {
		active : true,
		id     : $stylesId,
		content     : undefined,
		locales     : undefined,
		toSelectors : [ 
			'#' + $id,
		],
		document : undefined,
		// optionsLimit : 5,
	}
    
    onMount(() => filterOpts.document = document)

</script>

<div class="bg-gray-900 dark:bg-gray-900 {$windowWidth >= $responseWidth ? styleClass.sectionBorder : ''}">

    <Filters
        {...filterOpts}
        type={$windowWidth >= $responseWidth ? componentTypes.filters.main : componentTypes.filters.sidebar }
        content={{
            ...filterOpts.content,
            width: $windowWidth >= $responseWidth ? '450px' : ($windowWidth - ( $windowWidth * 0.2))+'px',
            height: $windowWidth >= $responseWidth ? '80vh' : '100vh'
        }}
        btn={{
            title: $t('home.filters_btn.message'),
            indicator: {
                type: 'main',
                position: 'top'
            },
            customClasses: '!w-full'
        }}
        locales={$locales.filters}
        bind:active={active}
        bind:value={$value}
        bind:hide={$isHide}
        bind:presetsValue={$presetsValue}
    />

</div>