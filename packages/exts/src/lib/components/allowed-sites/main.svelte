<script lang="ts">

    import Options from "../options/main.svelte"
    import { data } from "./data"

</script>

{#if data }

    <Options 
        {data}
    />

{/if}