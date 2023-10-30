<script lang="ts">
    
    import { 
        componentPositions, 
        type ComponentFilters, 
    } from '../../types'

    import { filters } from '../store/main';

    import Btn from './btn.svelte';
    import Sidebar from './sidebar.svelte';

    export let btn: ComponentFilters['btn'] = undefined
    export let content: ComponentFilters['content']  = undefined
    export let position: ComponentFilters['position'] = componentPositions.filters.sidebar.right
    
    const { active } = filters

</script>
    
<Btn
    {...btn}
/>

{#if $active}

    <Sidebar {content} {position}>
        <slot name="header" slot="header">
        </slot>
        <slot name="content" slot="content">
        </slot>
        <slot name="footer" slot="footer">
        </slot>
    </Sidebar>

{/if}


