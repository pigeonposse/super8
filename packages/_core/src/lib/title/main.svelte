<script lang="ts">

    import {Tooltip} from "../index";
    import { componentTypes, type ComponentTitle } from "../types";

    /**
     * VARIABLES
     */
    export let value: ComponentTitle['value'] = ""
    export let desc: ComponentTitle['desc'] = undefined
    export let id: ComponentTitle['id'] = ""
    export let type: ComponentTitle['type'] = componentTypes.title.tooltipRight
    export let tooltip: ComponentTitle['tooltip'] = undefined
	export let link: ComponentTitle['link'] = undefined
	export let linkTarget: ComponentTitle['linkTarget'] = '_blank'
    export let customClasses: ComponentTitle['customClasses'] = '';

    /**
     * CLASSES
     */
    let divClass="flex flex-row items-center"
    let titleClass = "text-[14px]"

</script>

<div class="{divClass} {customClasses}">

    {#if type === componentTypes.title.tooltipRight }

        {#if value}
			{#if !link}
            <span {id} class="mr-1 {titleClass}">{value}</span>
			{:else}
				<a {id} class="mr-1 {titleClass}" href="{link}" target="{linkTarget}">{value}</a>
			{/if}
        {/if}

    {/if}

    {#if desc && desc !== ""}

        <Tooltip
            type={componentTypes.tooltip.info}
            id={id+'-desc'}
            {...tooltip}
        >
            {desc}
        </Tooltip>

    {/if}

    {#if type === componentTypes.title.tooltipLeft}
        
		{#if value}
			{#if !link}
            <span {id} class="mr-1 {titleClass}">{value}</span>
			{:else}
				<a {id} class="mr-1 {titleClass}" href="{link}" target="{linkTarget}">{value}</a>
			{/if}
        {/if}
        
    {/if}

</div>
