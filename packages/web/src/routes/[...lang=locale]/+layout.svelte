<script lang="ts" >

    import '../../app.css'
    import {
        Page, Seo
    } from "$lib";
    import { t } from '$lib/i18n';

</script>

<Seo 
    title={$t('common.description.message')}
    description="{$t('common.description.message')}"
    titleType="left"
/>

<Page>
    <slot />
</Page>