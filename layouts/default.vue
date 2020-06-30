<template>
    <div class="common-home">
        <TheHeader/>
        <div id="content">
            <nuxt/>
        </div>
        <TheFooter/>
    </div>
</template>
<script>
    export default {
        components: {
            TheHeader: () => import('~/components/share/header'),
            TheFooter: () => import('~/components/share/footer'),
        },
        mounted() {
        },
    }
</script>

<style>

</style>

