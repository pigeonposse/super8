<script lang="ts">
    
    import { 
        componentTypes, 
        type ComponentNot,
        Fa,
        faCircleCheck, 
        faCircleExclamation, 
        faCircleInfo, 
        faTriangleExclamation
    } from "$lib";

    /**
     * VARIABLES
     */
    export let id: ComponentNot['id'] = '';
    export let type: ComponentNot['type'] = componentTypes.notification.info;
    export let customClasses: ComponentNot['customClasses'] = '';
    export let onHover = false

    let data = {
        [componentTypes.notification.error]: {
            divClass: 'bg-red-900/80 dark:bg-red-800/25 border border-red-900/50 text-red-200 dark:text-red-300',
            icon: faCircleExclamation,
            iconClass: 'text-red-950/50 dark:text-red-400',
        },
        [componentTypes.notification.warn]: {
            divClass:'bg-yellow-900/80 dark:bg-yellow-800/25 border border-yellow-900/50 text-yellow-200 dark:text-yellow-300',
            icon: faTriangleExclamation,
            iconClass: 'text-yellow-950/50 dark:text-yellow-400',
        },
        [componentTypes.notification.success]: {
            divClass:'bg-green-900/80 dark:bg-green-800/25 border border-green-900/50 text-green-200 dark:text-green-300',
            icon: faCircleCheck,
            iconClass: 'text-green-950/50 dark:text-green-400',
        },
        [componentTypes.notification.info]: {
            divClass:'bg-gray-800/80 dark:bg-gray-800/25 border border-gray-900/50 text-gray-200 dark:text-gray-300',
            icon: faCircleInfo,
            iconClass: 'text-gray-950/50 dark:text-gray-400',
        }
    }

    /**
     * CLASSES 
     */
    let divSection="rounded-lg p-2 flex flex-row items-center mt-4"
    let iconClass = 'mr-2 text-xl'

    /**
     * EVENTS 
     */
    const handleHover = () => {
        onHover = true
    }
    const handleLeave = () => {
        onHover = false
    }

</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div 
    {id} 
    class="{divSection} {data[type].divClass} {customClasses}"
    on:mouseover={handleHover}
    on:mouseleave={handleLeave}
>
    <Fa icon={data[type].icon} class="{iconClass} {data[type].iconClass}"></Fa>
    <span class="text-[13px]">
        <slot/>
    </span>
</div>    