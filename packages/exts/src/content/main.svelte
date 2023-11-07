<script lang="ts" >
    
    import { browser, getDateString, messagesIds } from '../lib/index';

    let Content: ConstructorOfATypedSvelteComponent
    let loading = true

    import('../lib/index')
        .then(module => {
  
            Content = module.ContentFilters
            loading = false

        })
        .catch(e => {

            console.error('Error loading the component:', e);
            browser.runtime.sendMessage( {
					type : messagesIds.log,
					data : {
						time    : getDateString(),
						type    : 'error',
						message : `Error loading super8 in ${window.location.href}`,
					},
			} )

        })

</script>

{#if !loading}

    <svelte:component this={Content}/>

{/if}
