<script lang="ts">

    import { 
        componentTypes, 
        type ComponentBtnFilters,
        componentPositions, 
        Btn, 
        Indicator
    } from "../../index";

    import { filters } from "../store/main";


    /**
     * VARIABLES 
     */
    export let title: ComponentBtnFilters['title'] = ''
    export let position: ComponentBtnFilters['position'] = componentPositions.filters.btn.none
    export let customClasses: ComponentBtnFilters['customClasses'] = ''
    export let color: ComponentBtnFilters['color'] = componentTypes.btn.primary
    export let indicator: Partial<ComponentBtnFilters['indicator']> = undefined

    const pBtn = componentPositions.filters.btn
    const p = !position ? pBtn.none : position
    const { active, styles } = filters
    const storeID = styles.id
    const customCount = filters.custom.valuesNotInDefault.count

    /**
     * CLASSES 
     */
    let classPosition = {
        [pBtn.topRight]: 'fixed z-[2000000000000000] top-4 right-4 text-[20px]',
        [pBtn.topLeft]: 'fixed z-[2000000000000000] top-4 left-4 text-[20px]',
        [pBtn.bottomRight]: 'fixed z-[2000000000000000] bottom-4 right-4 text-[20px]',
        [pBtn.bottomLeft]: 'fixed z-[2000000000000000] bottom-4 left-4 text-[20px]',
        [pBtn.none]: ''
    }

    let shadowClass = "shadow-[0_0_20px_0px_rgba(0,0,0,0.3)] shadow-primary-400/30"

</script>

<Btn
    id="{$storeID}-btn"
    on:click={() => $active = true}
    {color}
    customClasses="{classPosition[p]} {$active ? shadowClass : ''} !p-0 {customClasses}"
>
    <div class="relative w-full h-full px-3 py-2 {customClasses}">
        {title}

        {#if indicator && $customCount > 0}
            <Indicator 
                title={String($customCount)}
                position={componentPositions.indicator.topRight}
                {...indicator}
            />
        {/if}
    </div>

</Btn>
<!-- 
@component

## Props
@prop export let title: ComponentBtnFilters['title'] = ''
@prop export let position: ComponentBtnFilters['position'] = componentPositions.filters.btn.none
@prop export let customClasses: ComponentBtnFilters['customClasses'] = ''
@prop export let color: ComponentBtnFilters['color'] = componentTypes.btn.primary
@prop export let indicator: Partial<ComponentBtnFilters['indicator']> = undefined
 -->