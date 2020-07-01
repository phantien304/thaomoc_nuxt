<template>
    <div class="container layer-category">
        <ul class="breadcrumb">
            <li><a href="http://organica4.demo.towerthemes.com/index.php?route=common/home">Home</a></li>
            <li><a href="http://organica4.demo.towerthemes.com/index.php?route=product/category&amp;path=59">Shop</a></li>
        </ul>
        <div class="row">
            <contents/>
        </div>
    </div>
</template>
<script>
    export default {
        components: {
            leftSite: () => import('~/components/share/leftSite'),
            contents: () => import('~/components/category/contents'),
        },
    }
</script>