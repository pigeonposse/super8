<script lang="ts">
    
  	import { Seo, flowbite, styleClass } from "$lib";
	// import { onMount } from "svelte";
	import { page } from "$app/stores";

	let Content: ConstructorOfATypedSvelteComponent
	let loading = true
	let error: string
  
  	const Spinner = flowbite.Spinner

  import('$lib')
    .then(module => {
      Content = module.Content
      loading = false

    })
    .catch(e => {
      console.error('Error loading the component:', e);
      error = e
    });
	const { t } = $page.data

	// onMount(()=> {
		
	// 	const html = document.querySelector('html')
	// 	const setDarkMode = () => {

	// 		if(html) {
	// 			html.style.colorScheme = 'dark'
	// 			html.classList.add('dark')
	// 			if(localStorage) localStorage.theme = 'dark'
	// 		}
	// 		// localStorage.theme = 'dark'

	// 	}

	// 	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
	// 		setDarkMode()
	// 	} else {
	// 		setDarkMode()
	// 	}
		
	// })

</script>

<Seo 
    title={$t('common.description.message')}
    description="{$t('common.description.message')}"
    titleType="left"
/>

{#if error}

  <div class="flex flex-col items-center justify-center max-w-[400px] m-auto text-center">
    <h1 class="{styleClass.h1}">Error in super8</h1>
    <span class="opacity-50 italic">An unexpected error occurred while processing super8. Try reloading the page if the error persists. Contact the pigeonposse team.</span>
    <span class="m-4">{error}</span>
  </div>

{:else}

  {#if loading}
    
    <div class=" flex flex-col items-center">
      <Spinner/>
    </div>

  {:else}
    
    <svelte:component this={Content}/>

  {/if}

{/if}
