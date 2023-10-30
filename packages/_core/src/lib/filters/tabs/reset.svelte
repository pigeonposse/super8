<script lang="ts">

    import { Tooltip } from "flowbite-svelte";
    import { 
      Btn,
      componentTypes, 
      faEye, 
      faEyeSlash, 
      faTrash,
      functs
    } from "../../index";
    import { filters } from '../store/main'

    /**
     * VARIABLES 
     */
    const { styles, locales, presets } = filters

    /**
     * CLASSES 
     */
    let sectionClass = "flex flex-row items-center justify-end mx-4 mb-4"
    let btnClass = 'ml-2'
    let tooltipClass = 'text-xs'

</script>

<!-- btn IDs required for tooltip -->
<div class="{sectionClass}">
    
    <Btn
      id={functs.generateRamdomID()} 
      on:click={() => {
        styles.reset()
        presets.reset()
      }}
      icon={faTrash}
      customClasses={btnClass}
    >
      {$locales.reset.title}
    </Btn>

    {#if $locales.reset.desc && $locales.reset.desc !== ''}
      <Tooltip class="{tooltipClass}" >{$locales.reset.desc}</Tooltip>      
    {/if}

    <Btn 
      color={$styles.isHide ? componentTypes.btn.primary : componentTypes.btn.neutral }
      on:click={() => styles.hide()}
      customClasses={btnClass}
      icon={$styles.isHide ? faEye : faEyeSlash}
    >
      {$styles.isHide ? $locales.show.title : $locales.hide.title}
    </Btn>

    {#if $locales.hide.desc && $locales.hide.desc !== ''}
      <Tooltip class="{tooltipClass}" >{$styles.isHide ? $locales.show.desc : $locales.hide.desc}</Tooltip>      
    {/if}

</div> 
