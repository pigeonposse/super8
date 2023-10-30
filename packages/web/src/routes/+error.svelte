<script>
    
    import '../app.css'
    import { page } from '$app/stores'
    import { t } from '$lib/i18n'
    import Page from '$lib/components/page.svelte';
  
    const { status, error } = $page

</script>

<Page>
  <div class="content">

    <h1>{$t('error.title')} ({status})</h1>
    <p>{$t(`error.${status}`, { default: $t('error.default') })}</p>
  
      {#if error}
        <p>{error.message}</p>
      {/if}
  
  </div>
</Page>