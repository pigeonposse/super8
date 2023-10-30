<script lang="ts">

    import { Tooltip } from "flowbite-svelte";
    import Btn from "$lib/input/btn.svelte";
    import { componentTypes } from "$lib/types"
    import { faTrash, Fa } from "$lib/fa/main"

    /**
     * VARIABLES
     */
    export let onClick = () => {}
    export let text: string | undefined = undefined

</script>

<Btn
    color={componentTypes.btn.none}
    on:click={onClick}
    customClasses="!px-2 my-0 px-1 ml-1 mt-0"
>
    <Fa icon={faTrash}></Fa>
    <Tooltip class="text-xs">{text || 'Reset value'}</Tooltip>
</Btn>