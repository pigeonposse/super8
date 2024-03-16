<script lang="ts">

	import { page } from "$app/stores";
    export let description: string
    export let title: string | undefined= undefined
    export let titleType: 'left' | 'right' = 'right'
	const { t } = $page.data
    const pageTitle = title ? titleType === 'right' ? `${title} | ${$t('common.name.message')}` :  `${$t('common.name.message')} | ${title}` : $t('common.name.message')

</script>

<svelte:head>

    <title>{pageTitle}</title>
    <meta name="description" content={description} />

</svelte:head>


