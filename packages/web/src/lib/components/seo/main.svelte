<script lang="ts">

    import { t } from "$lib/i18n";

    export let description: string
    export let title: string | undefined= undefined
    export let titleType: 'left' | 'right' = 'right'

    const pageTitle = title ? titleType === 'right' ? `${title} | ${$t('common.name.message')}` :  `${$t('common.name.message')} | ${title}` : $t('common.name.message')

</script>

<svelte:head>

    <title>{pageTitle}</title>
    <meta name="description" content={description} />

</svelte:head>


