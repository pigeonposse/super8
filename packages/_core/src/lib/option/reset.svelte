<script lang="ts">

    import { Tooltip } from "flowbite-svelte";
    import Btn from "$lib/input/btn.svelte";
    import { componentTypes } from "$lib/types"
    import { faTrash } from "$lib/fa/main"

    /**
     * VARIABLES
     */
    export let onClick = () => {}
    export let text: string | undefined = undefined

</script>

<Btn
    color={componentTypes.btn.none}
    on:click={onClick}
    customClasses="!p-1 !my-1 ml-3 hover:opacity-50"
	icon={faTrash}
/>
<Tooltip class="text-xs">{text || 'Reset value'}</Tooltip>
