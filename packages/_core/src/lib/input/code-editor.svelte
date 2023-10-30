<script lang="ts">

    import CodeMirror from "svelte-codemirror-editor";
    import { oneDark } from "@codemirror/theme-one-dark";
    import { json } from "@codemirror/lang-json";
    import { componentTypes, type ComponentCodeEditor } from "$lib";

    export let value: ComponentCodeEditor['value']
    // export let id: ComponentCodeEditor['id'] = ""
    export let type: ComponentCodeEditor['type'] = componentTypes.codeEditor.json
    export let readonly: ComponentCodeEditor['readonly'] = false
    export let placeholder: ComponentCodeEditor['placeholder'] = ""
    export let height: ComponentCodeEditor['height'] = undefined
    export let width: ComponentCodeEditor['width'] = undefined
    export let customClasses: ComponentCodeEditor['customClasses'] = ""
    
    if(readonly === undefined ) readonly = false
    if(placeholder === undefined ) placeholder = ""
    
    /**
     * VARIABLES
     */
    let editorClass='[&>.cm-editor]:bg-gray-200/50 [&>.cm-editor]:dark:bg-gray-800 [&>.cm-editor]:text-gray-500 [&>.cm-editor]:dark:text-gray-200 [&>.cm-editor>.cm-scroller>.cm-gutters]:bg-gray-500/70 [&>.cm-editor>.cm-scroller>.cm-gutters]:dark:bg-gray-900/50'

</script>

{#if type === componentTypes.codeEditor.json }

    <CodeMirror 
        {readonly} 
        bind:value 
        lang={json()} 
        theme={oneDark}
        {placeholder}
        editable={!readonly}
        class="{editorClass} {customClasses}"
        styles={{
            "&": {
                width: width || "100%",
                height: height || "200px",
                borderRadius: '10px',
                opacity: readonly ? "0.5" : "1"
            },

            ".cm-scroller": {
                borderRadius: '10px'
            }
        }}
    />

{/if}