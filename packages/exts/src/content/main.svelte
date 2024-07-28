<script lang="ts" >
    
    import {  getDateString, browser} from '../lib/_shared/main';
	import {  messagesIds } from "../lib/const"

    let Content: ConstructorOfATypedSvelteComponent
    let loading = true

    import('../lib/components/filters/main.svelte')
        .then(module => {
  
            Content = module.default
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
