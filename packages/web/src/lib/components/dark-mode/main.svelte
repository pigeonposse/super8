<script lang="ts">

    import {
      Btn, 
      componentTypes, 
      faCircleHalfStroke,
      type ObjectValues,
    } from "$lib";
    import { onMount } from 'svelte';

    /**
     * VARIABLES
     */
    let darkmode = false
    let storageKey = 'theme'
    let modes = {
        dark: 'dark',
        light: 'light'
    }

    export let forceValue: ObjectValues<typeof modes> | undefined = undefined
    export let hidden = false

    /**
     * EVENTS
     */
    const setDarkMode = ( mode = true ) => {

        const html = document.querySelector('html')

        if(mode) {
            document.documentElement.classList.add(modes.dark)
            if(html) html.style.colorScheme = modes.dark
            localStorage.theme = modes.dark
            darkmode = false
        }else {
            document.documentElement.classList.remove(modes.dark)
            if(html) html.style.colorScheme = modes.light
            localStorage.theme = modes.light
            darkmode = true
        }

    }

    const OnClickDarkMode = () => {
        
        if(darkmode) 
            setDarkMode(true)
        else 
            setDarkMode(false)

    }

    onMount(() => {
        
        if(forceValue) {
            if (forceValue === modes.dark)
                setDarkMode(true)
            else
                setDarkMode(false)
        }else if (window.matchMedia) {
            
            if (localStorage.theme === modes.dark || (!(storageKey in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) 
                setDarkMode(true)
            else 
                setDarkMode(false)
        }
      
    })

</script>

{#if !hidden }
    <Btn 
        icon={faCircleHalfStroke}
        color={componentTypes.btn.none}
        on:click={OnClickDarkMode}
        customClasses="!my-0"
    />    
{/if}
