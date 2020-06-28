<template>
    <div class="banner7">
        <div class="oc-banner7-container">
            <div class="flexslider oc-nivoslider">
                <div class="oc-loading"></div>
                <div id="oc-inivoslider" class="slides">
                    <carousel :autoplay="true" :items="1" :touchDrag="true" :dots="false" :loop="true">
                        <img src="http://organica4.demo.towerthemes.com/image/cache/catalog/demo/banners/5-1920x670.jpg"
                             alt="" title="#banner7-caption1"/>
                        <img src="http://organica4.demo.towerthemes.com/image/cache/catalog/demo/banners/6-1920x670.jpg"
                             alt="" title="#banner7-caption2"/>
                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    if (process.client) {
        var carousel = require('vue-owl-carousel')
    }
    export default {
        components: {carousel}
    }
</script>