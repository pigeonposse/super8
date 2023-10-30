<script lang="ts">

    import { 
        componentTypes, 
        type ComponentBtn, 
        componentPositions, 
        Tooltip, 
        Fa,
        functs,
    } from "$lib";
    
    /**
     * TYPES
     */
    type SanitizeColor = 'green' | 'red' | 'primary' | 'gray'

    /**
     * VARIABLES
     */
    export let customClasses: ComponentBtn['customClasses'] = ''
    export let id: ComponentBtn['id'] = ''
    export let color: ComponentBtn['type'] = componentTypes.btn.gray
    export let href: ComponentBtn['href'] = ''
    export let ping: ComponentBtn['ping'] = false
    export let active: ComponentBtn['active'] = undefined
    export let disabled: ComponentBtn['disabled'] = undefined
    export let tooltip: ComponentBtn['tooltip'] = undefined
    export let icon: ComponentBtn['icon'] = undefined

    /**
     * CLASSES 
     */
    let btnClass = "text-center font-medium focus:ring-0 focus:outline-0 inline-flex items-center justify-center px-3 py-2 text-xs my-4 mb-0 rounded-full"
    let iconClass = 'mr-2'
    
    let colored = (v: SanitizeColor) => `text-white bg-${v}-700 hover:bg-${v}-800 focus:ring-${v}-300 dark:focus:${v}-800 dark:bg-${v}-700 dark:hover:bg-${v}-600 ring-${v}-800`
    let coloredDark = (v: SanitizeColor) => `text-white bg-${v}-800 hover:bg-${v}-900 focus:ring-${v}-400 dark:focus:${v}-900 dark:bg-${v}-800 dark:hover:bg-${v}-700 ring-${v}-800`
    let coloredDarkReverse = (v: SanitizeColor) => `text-white bg-${v}-900 hover:bg-${v}-800 focus:ring-${v}-400 dark:focus:${v}-900 dark:bg-${v}-700 dark:hover:bg-${v}-800 ring-${v}-800`
    
    let colorClass = {
        [componentTypes.btn.light] : 'text-gray-900 bg-white border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 focus:ring-gray-200 dark:focus:ring-gray-700',
        [componentTypes.btn.neutral]: colored('gray'),
        [componentTypes.btn.primary]: colored('primary'),
        [componentTypes.btn.secondary]: `text-white bg-secondary-700 hover:bg-secondary-800 focus:ring-secondary-300 dark:focus:secondary-800 dark:bg-secondary-700 dark:hover:bg-secondary-600 ring-secondary-800`,
        [componentTypes.btn.gray]: coloredDark('gray'),
        [componentTypes.btn.grayReverse]: coloredDarkReverse('gray'),
        [componentTypes.btn.success]: colored('green'),
        [componentTypes.btn.error]: colored('red'),
        [componentTypes.btn.none] : '',
    }
    
    if (id === '') id = functs.generateRamdomID()

</script>

{#if href !== ''}

    <a 
        {id}
        href="{href}" 
        class="{btnClass} {colorClass[color]} {disabled ? 'cursor-not-allowed opacity-60' : ''} {customClasses}"
        target="_blank" 
        role="button"
        data-active={active}
    >
        <slot/>
    </a>

{:else}

    {#if ping }

        <div class="relative inline-flex items-center justify-center p-0 m-0 rounded-full {disabled ? 'cursor-not-allowed opacity-60' : ''} {customClasses}">
            <div class="{btnClass+' mt-auto m-auto ring-4 btn-ping '+colorClass[color] +' '+ customClasses}">
                <slot/>
            </div>
            <button 
                {id}
                type="button" 
                class={btnClass +' absolute mt-auto m-auto '+ colorClass[color] +' '+ customClasses}
                on:click
                data-active={active}
                {disabled}
            >
                
                {#if icon}
                    <Fa {icon} class="{$$slots.default ? iconClass: ''}"></Fa>
                {/if}

                <slot/>
            </button>
        </div>

    {:else}

        <button 
            {id}
            type="button" 
            class="{btnClass} {colorClass[color]} {disabled ? 'cursor-not-allowed opacity-60' : ''} {customClasses}"
            on:click
            data-active={active}
            {disabled}
        >

            {#if icon}
                <Fa {icon} class="{$$slots.default ? iconClass: ''}"></Fa>
            {/if}

            <slot/>

        </button>

    {/if}

{/if}   

{#if typeof tooltip === 'object' && tooltip.title && tooltip.title !== "" }

<Tooltip 
    type={componentTypes.tooltip.main}
    position={componentPositions.tooltip.top}
    {id}
    {...Object.fromEntries(Object.entries(tooltip).filter(([key]) => key !== 'title'))}
>
    {tooltip.title}
</Tooltip>

{/if}