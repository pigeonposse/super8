<script>

    import { filters } from '../../store/main'
    import { componentTypes, Not } from "../../../index";

    const { locales } = filters

</script>

<Not 
    type={componentTypes.notification.info}
>
    <h4 class="font-bold">{$locales.custom.animation.nots.comingsoon.title}</h4>
    <span class="opacity-75">{$locales.custom.animation.nots.comingsoon.desc}</span>
</Not>