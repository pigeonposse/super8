<script lang="ts">

    import { type ComponentTabs, Indicator } from "$lib";

    /**
     * VARIABLES
     */
    export let items: ComponentTabs['items']
    export let activeTabValue: ComponentTabs['activeTabValue'] = undefined
    export let customClasses: ComponentTabs['customClasses'] = ''
    export let customBtnClasses: ComponentTabs['customBtnClasses'] = ''

    if(!activeTabValue) activeTabValue = items[0].value
    
    /**
     * CLASSES
     */
    let tabClass = "text-white flex flex-col h-full justify-start gap-2"
    let tabHeaderClass = "flex flex-row items-center justify-center"
    let tabHeaderBtnClass = "px-4 py-2 m-2 rounded-xl font-bold text-base relative"
    let shadowClass = {
        neutral: 'hover:shadow-[0_0_20px_0px_rgba(0,0,0,0.3)] hover:shadow-gray-200/30 dark:hover:shadow-gray-500/30',
        primary:"shadow-[0_0_20px_0px_rgba(0,0,0,0.3)] shadow-primary-500/30 hover:shadow-primary-500/30",
    }
    
    /**
     * EVENTS
     */
    const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);

</script>

<div class="{tabClass} {customClasses}">

    <div class="{tabHeaderClass}">

        {#each items as item}

            <button 
                on:click={handleClick(item.value)}
                class="{tabHeaderBtnClass} {shadowClass.neutral} {activeTabValue === item.value ? 'bg-primary-500 text-gray-800 '+shadowClass.primary : 'bg-gray-300/50 dark:bg-gray-600/50'} {customBtnClasses}"
                title="{item.desc}"
            >
                {item.name}

                {#if item.indicator }
                    <Indicator />
                {/if}

            </button>

        {/each}

    </div>
    
    {#each items as item}

        {#if activeTabValue === item.value}

            <div class="overflow-y-scroll h-full scrollbar-hide px-4 py-2">
                <svelte:component 
                    this={item.component}
                    {...item.props}
                />
            </div>

        {/if}

    {/each}

</div>
