<script lang="ts">
    import { styleClass } from "$lib";


    import { t } from "$lib/i18n";
    import { locales } from "../locales/main";
    const mainPkg = MAIN_PKG

</script>

<div class="rounded-lg w-full py-8 flex flex-col items-start justify-center ">
    <h1 class="{styleClass.h1}">{$locales.title}</h1>
    <p class="mt-2">
        {$locales.description}
        <a 
            href="{mainPkg.extra.docsUrl}" 
            target="_blank"
            class="ml-1 underline italic hover:text-primary-400 hover:text-shadow-lg shadow-primary-200/50 hover-change-hue"
        >
            {$t('common.learn.message')}
        </a>
    </p>
</div>