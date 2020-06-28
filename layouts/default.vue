<template>
    <div id="content">
        <!--<TheNav />-->
        <TheHeader/>
        <nuxt/>
        <!--<TheFooter />-->
    </div>
</template>
<script>
    // import { getUserInfor } from '~/plugins/information';

    export default {
        components: {
            // TheNav: () => import("~/components/share/TheNav"),
            // TheFooter: () => import('~/components/share/TheFooter'),
            TheHeader: () => import('~/components/share/header'),
        },
        mounted() {
        },
    }
</script>

<style>

</style>

