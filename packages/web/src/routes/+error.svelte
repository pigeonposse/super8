<script lang="ts">
    
    import '../app.css'
    import { page } from '$app/stores'
    import { currLocaleRoute, t } from '$lib/i18n'
    import Page from '$lib/components/page.svelte';
    import { Seo, styleClass } from '$lib';
    import ErrorGif from "$lib/assets/error.gif";

    const { status, error } = $page


</script>

<Seo
    title={$t('common.description.message')}
    description="{$t('common.error.title')} {$t('common.description.message')}"
    titleType="left"
/>

<Page>
  <div class="content flex flex-col items-center">

    <h1 class="{styleClass.h1Super}">{$t('common.error.title')}</h1>
    <p class="{styleClass.h1White} my-4">{$t(`common.error.${status}`, { default: $t('common.error.default') })}</p>
  
      {#if error && 'message' in error}
        <p>{error.message}</p>
      {/if}

      <img 
        src={ErrorGif}
        class="object-cover h-[150px] w-[150px] rounded-full mt-4 opacity-70 hover-change-hue" 
        alt="Error gif" 
        width="150px"
        height="150px"
      />

    <a 
      class="text-center font-medium focus:ring-0 focus:outline-0 inline-flex items-center justify-center px-3 py-2 text-xs mt-8 mb-0 rounded-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:primary-800 dark:bg-primary-700 dark:hover:bg-primary-600 ring-primary-800 hover-change-hue"
      href={$currLocaleRoute}
    >
      {$t('common.goHome.message')}
    </a>
  </div>
</Page>
