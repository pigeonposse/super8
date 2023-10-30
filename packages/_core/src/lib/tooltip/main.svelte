<script lang="ts">

    import { Popover, Tooltip } from 'flowbite-svelte';
    import Badge from "../badge/main.svelte";
    import { Fa, faCircleQuestion } from "../fa/main";
    import {  componentTypes, type ComponentTooltip, componentPositions } from "../types";

    import { blur } from 'svelte/transition';

    /**
     * VARIABLES
     */
    export let icon: ComponentTooltip['icon'] = faCircleQuestion;
    export let id: ComponentTooltip['id'] = '';
    export let type: ComponentTooltip['type'] = componentTypes.tooltip.info;
    export let position: ComponentTooltip['position'] = componentPositions.tooltip.right;
    export let customClasses: ComponentTooltip['customClasses'] = '';

    let badgeID = 'pp-s8-popover-' + id
    
    /**
     * CLASSES
     */
    let badgeClass = "!p-1 !font-semibold cursor-help focus:outline-none"
    let popoverClass = "w-64 z-10 text-xs font-light cursor-auto" 

</script>

{#if type === componentTypes.tooltip.info }

    <Badge 
        id={badgeID}
        type={componentTypes.badge.transparent} 
        customClasses="{badgeClass} {customClasses}"
    >
        <Fa icon={icon}/>
    </Badge>
    <Popover 
        class={popoverClass}
        placement={position} 
        triggeredBy="#{badgeID}" 
        transition={blur} 
        params={{duration: 500}}
    >
        <slot/>
    </Popover>

{:else if type === componentTypes.tooltip.main }

    <Tooltip 
        class="text-xs {popoverClass}"
        placement={position} 
        triggeredBy="#{id}" 
        transition={blur} 
        params={{duration: 500}}
    >
        <slot/>
    </Tooltip>

{/if}
