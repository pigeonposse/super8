<script lang="ts">

    import { fly } from 'svelte/transition';
    import { onMount, onDestroy } from "svelte";
    import { componentPositions, type ComponentFilters } from '../../types'
    import Tabs from "../tabs/main.svelte";
    import { filters } from '../store/main';

    /**
     * VARIABLES 
     */
    export let position: ComponentFilters['position'] = componentPositions.filters.sidebar.right
    export let content: ComponentFilters['content'] = undefined
    
    const { active, styles } = filters
    const { id } = styles
    let pValue = componentPositions.filters.sidebar
    let p = !position ? pValue.right : position
    let btnClick: boolean = true // THIS WHEN YOU CLICK BTN IN FIST TIME TO OPEN SIDEBAR
    let targetDiv: Element

    let transition = {
        [pValue.top]: { y: -1000, duration: 500 },
        [pValue.bottom]: { y: 1000, duration: 500 },
        [pValue.right]: { x: 1000, duration: 500 },
        [pValue.left]: { x: -1000, duration: 500 },
        [pValue.none]: {}
    }

    /**
     * CLASSES 
     */

    let divClass = "bg-gray-100/80 dark:bg-gray-900/90 backdrop-blur-[20px] text-white p-4 rounded-lg shadow-[0_0_40px_0px_rgba(0,0,0,0.3)] shadow-gray-900/20 dark:shadow-gray-400/20"
    let classPosition = {
        [pValue.top]: 'fixed z-[3000000000000001] left-4 top-4 right-4',
        [pValue.bottom]: 'fixed z-[3000000000000001] left-4 bottom-4 right-4',
        [pValue.right]: 'fixed z-[3000000000000001] top-4 bottom-4 right-4',
        [pValue.left]: 'fixed z-[3000000000000001] top-4 bottom-4 left-4 ',
        [pValue.none]: ''
    }

    /**
     * EVENTs 
     */
    const handleClickOutside = (event: Event) => {

        event.preventDefault()
        const target = event.target as Node

        if( $active && !targetDiv ) return

        if(!btnClick){

            if (!targetDiv.contains(target)) $active = false
  
        }else {
            btnClick = false
        }

    }
    
    onMount(() => {
  
        btnClick = true
        window.addEventListener("click", handleClickOutside);

    })

    onDestroy(() => {

        window.removeEventListener("click", handleClickOutside);
        btnClick = false

    })

</script>

<div
    bind:this={targetDiv}
    class="{classPosition[p]} {divClass}"
    in:fly={transition[p]} 
    out:fly={transition[p]}
    id="{$id}-sidebar"
>

    <Tabs {...content} >
        <slot name="header" slot="header">
        </slot>
        <slot name="content" slot="content">
        </slot>
        <slot name="footer" slot="footer">
        </slot>
    </Tabs>

</div>