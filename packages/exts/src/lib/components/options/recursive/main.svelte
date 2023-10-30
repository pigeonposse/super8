<script lang="ts">

    import Option from './option.svelte'
    import { context } from './context';
    import type { ComponentOptionsRecursive } from '../../../types'

    export let data: ComponentOptionsRecursive
    export let id: string | undefined = undefined
    export let value = context.default

    if(id !== undefined) context.id.set(id)

    $: value = $context

</script>


{#each data as dataValue }

    <Option value={dataValue} />

{/each}
