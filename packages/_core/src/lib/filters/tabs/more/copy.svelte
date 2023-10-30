<script lang="ts">

    import { filters } from '../../store/main'
    import {
        componentTypes,
        Fa,
        faCheckCircle, 
        faCopy,
        Not,
        Btn,
        CodeEditor
    } from "../../../index";

    /**
     * VARIABLES 
     */
    const { locales, more } = filters
    const { copy } = more
    const { isCopied, copyFunct } = copy

    let notHover = false

    /**
     * CLASSES 
     */
    let iconClass = 'mr-2 text-[10px]'

</script>

<CodeEditor
    type={componentTypes.codeEditor.json}
    readonly={true}
    value={$copy}
    height="180px"
/>
<Btn 
    color={componentTypes.btn.neutral}
    on:click={copyFunct}
    disabled={ $isCopied ? true : false }
>
    <Fa icon={$isCopied ? faCheckCircle : faCopy } class="{iconClass}"></Fa>
    {$isCopied ? $locales.more.copy.btn.onClick : $locales.more.copy.btn.title}

</Btn>

{#if $isCopied || notHover}

    <Not
        bind:onHover={notHover}
        type={componentTypes.notification.success} 
    >
        {$locales.more.copy.nots.success}
    </Not>
    
{/if}
