<script lang="ts">

    import { filters } from '../../store/main'
    import { 
        componentTypes,
        functs,
        Fa,
        faAdd, 
        faCheckCircle,
        CodeEditor,
        InputColor,
        Btn,
        InputText,
        Title,
        Not
    } from "../../../index";

    /**
     * VARIABLES 
     */
    const { locales, more } = filters
    const { addPreset } = more
    const { isInvalidName, isInvalidValue, isAdded } = addPreset

    let notHover = false

    /**
     * CLASSES 
     */
    let iconClass = 'mr-2 text-[10px]'
    let isInvalidTextClass = 'ring-2 ring-red-500/50 focus:ring-2 focus:ring-red-500/50'
    let isInvalidObjClass = 'rounded-lg ring-2 ring-red-500/50 focus:ring-2 focus:ring-red-500/50'

</script>


<Title
    id={functs.generateRamdomID()}
    value={$locales.more.addPresets.inputName.title}
    desc={$locales.more.addPresets.inputName.desc}
    customClasses="text-gray-500 my-2"
/>

<div class="flex flex-row items-center">

    <InputText
        bind:value={$addPreset.name}
        placeholder={$locales.more.addPresets.inputName.placeholder}
        customClasses="w-[90%] {$isInvalidName ? isInvalidTextClass : ''}"
    />
    <InputColor 
        id={functs.generateRamdomID()}
        type={componentTypes.colorPicker.nativeAndOpacity}
        bind:value={$addPreset.color}
        customClasses="ml-2"
    />  

</div> 

<Title
    id={functs.generateRamdomID()}
    value={$locales.more.addPresets.inputObject.title}
    desc={$locales.more.addPresets.inputObject.desc}
    customClasses="text-gray-500 my-2"
/>
<CodeEditor
    type={componentTypes.codeEditor.json}
    readonly={false}
    bind:value={$addPreset.value}
    placeholder={$locales.more.addPresets.inputObject.placeholder}
    customClasses={$isInvalidValue ? isInvalidObjClass: ''}
/>

<Btn 
    color={componentTypes.btn.neutral}
    disabled={$isInvalidName || $isInvalidValue || $isAdded ? true : false}
    on:click={(e) => { 
        e.stopPropagation()
        addPreset.addFunct()
    }}
    active={false}
>
    <Fa icon={$isAdded ? faCheckCircle : faAdd } class="{iconClass}"></Fa>
    {$locales.more.addPresets.btn.title}
</Btn>

{#if $isAdded || notHover}

    <Not 
        bind:onHover={notHover}
        type={componentTypes.notification.success} 
    >
        {$locales.more.addPresets.nots.success}
    </Not>

{/if}

{#if $isInvalidName}

    <Not type={componentTypes.notification.error} >
        {$locales.more.addPresets.nots.errorName}
    </Not>

{/if}

{#if $isInvalidValue}

    <Not type={componentTypes.notification.error} >
        {$locales.more.addPresets.nots.errorObject}
    </Not>
    
{/if}