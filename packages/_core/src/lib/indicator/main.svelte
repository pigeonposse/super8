<script lang="ts">

    import { 
        componentTypes, 
        type ComponentIndicator, 
        componentPositions, 
        sizeValues
    } from "../index";

    /**
     * VARIABLES 
     */
    export let position: ComponentIndicator['position'] = componentPositions.indicator.bottom
    export let type: ComponentIndicator['type'] = componentTypes.indicator.main
    export let customClasses: ComponentIndicator['customClasses'] = ''
    export let title: ComponentIndicator['title'] = undefined
    export let size: ComponentIndicator['size'] = undefined

    /**
     * CLASSES 
     */
    let defaultClass="flex-shrink-0 rounded-full text-[10px] absolute"
    
    let sizeClass= {
        [sizeValues.extraSmall]: 'w-1 h-1',
        [sizeValues.small]: 'w-2 h-2',
        [sizeValues.medium]: 'w-4 h-4',
        [sizeValues.large]: 'w-8 h-8',
        [sizeValues.extraLarge]: 'w-10 h-10',
    }

    let colorClass = {
        [componentTypes.indicator.main]: 'bg-primary-600 shadow-primary-500/50 text-primary-900',
        [componentTypes.indicator.error]: 'bg-red-600 shadow-red-500/50 text-red-900',
        [componentTypes.indicator.info]: 'bg-blue-600 shadow-blue-500/50 text-blue-900',
        [componentTypes.indicator.neutral]: 'bg-gray-500 shadow-gray-500/50 text-gray-900',
        [componentTypes.indicator.warn]: 'bg-yellow-600 shadow-yellow-500/50 text-yellow-900',
        [componentTypes.indicator.success]: 'bg-green-600 shadow-green-500/50 text-green-900',
    }

    let positionClass = {
        [componentPositions.indicator.top] : 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
        [componentPositions.indicator.bottom] : 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3',
        [componentPositions.indicator.left] : 'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2',
        [componentPositions.indicator.right] : 'top-1/2 right-0 -translate-y-1/2 translate-x-1/3',
        [componentPositions.indicator.bottomLeft] : 'bottom-0 left-0 -translate-x-1/2 translate-y-1/3',
        [componentPositions.indicator.bottomRight] : 'bottom-0 right-0 translate-y-1/2 translate-x-1/3',
        [componentPositions.indicator.topLeft] : 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
        [componentPositions.indicator.topRight] : 'top-0 right-0 -translate-y-1/2 translate-x-1/3',
    }

</script>

<div 
    class="{defaultClass} {size ? sizeClass[size] : sizeClass[sizeValues.medium]} {colorClass[type]} {position? positionClass[position] : ''} {customClasses}"
>
    {#if title }
        <span>{title}</span>
    {/if}
</div>

<style>
    div {
        box-shadow:0 0 25px 5px var(--tw-shadow-color);
    }
</style>

<!--
@component

[Go to docs](/packages/_core/docs/components-index.md)

## Props
@prop export let type: typeof componentTypes.badge = componentTypes.badge.gray;
@prop export let position: ComponentIndicator['position'] = componentPositions.indicator.bottom
@prop export let type: ComponentIndicator['type'] = componentTypes.indicator.main
@prop export let customClasses: ComponentIndicator['customClasses'] = ''
@prop export let title: ComponentIndicator['title'] = undefined
@prop export let size: ComponentIndicator['size'] = sizeValues.medium

-->