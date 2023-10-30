<script lang="ts">

    /**
     * TYPES
     */
    import { componentTypes, type ComponentBadge } from '../types';

    /**
     * VARIABLES
     */
    export let type: ComponentBadge['type'] = componentTypes.badge.gray;
    export let customClasses: ComponentBadge['customClasses'] = '';
    export let id: ComponentBadge['id'] = '';
    export let url: ComponentBadge['url'] = '';
    export let title: ComponentBadge['title'] = '';

    /**
     * CLASSES
     */
    let badgeDefautClass='font-medium inline-flex items-center justify-center px-2.5 py-0.5 text-xs rounded-full whitespace-nowrap overflow-x-scroll'
    let badgeColorClass = {
        [componentTypes.badge.primary]: 'border-gray-200 dark:border-gray-700 bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300',
        [componentTypes.badge.secondary]: 'border-gray-200 dark:border-gray-700 bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300',
        [componentTypes.badge.error]: 'border-gray-200 dark:border-gray-700 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
        [componentTypes.badge.success]: 'border-gray-200 dark:border-gray-700 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
        [componentTypes.badge.warning]: 'border-gray-200 dark:border-gray-700 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
        [componentTypes.badge. gray]: 'border-gray-200 dark:border-gray-700 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
        [componentTypes.badge.neutral]: 'border-gray-200 dark:border-gray-700 bg-gray-700 text-gray-200',
        // dark : 'border-gray-200 dark:border-gray-700 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300',
        [componentTypes.badge.transparent]: ''
    }
    let badgeClass = badgeDefautClass + ' '+ badgeColorClass[type] 

</script>

{#if url && url !== "" }

    <a 
        class="pp-s8-badge {badgeClass} {customClasses}"
        id={id}
        href={url}
        target="_blank"
        {title}
    >
        <slot/>
    </a>

{:else}

    <div 
        class="pp-s8-badge {badgeClass} {customClasses}"
        id={id}
        {title}
    >
        <slot/>
    </div>

{/if}

<style>
    .pp-s8-badge::-webkit-scrollbar {
        display: none;
    }
</style>

<!--
@component

[Go to docs](/packages/_core/docs/components-index.md)

## Props
@prop export let type: typeof componentTypes.badge = componentTypes.badge.gray;
@prop export let customClasses: string = '';
@prop export let id: string = '';
@prop export let url: string = '';
@prop export let title: string = '';
-->