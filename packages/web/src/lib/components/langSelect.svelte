<script lang="ts">
    
    import { t, locales, locale } from '$lib/i18n';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    
    const onChange = ({target}: Event ) => {
        if( target && 'value' in target && typeof target.value === 'string') 
            goto(target.value)
    }
    
    $: ({ route } = $page.data);

</script>

<select 
    on:change={onChange}
    class="bg-transparent border-0 py-0"
    style="box-shadow:none !important"
>
    {#each $locales as lc}
        <option 
            value="/{lc}{route}"
            selected="{lc === $locale}"
        >   {$t(`lang.${lc}`)}
        </option>
    {/each}
</select>