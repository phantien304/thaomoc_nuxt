<template>
    <div>
        <div class="main-row">
            <div class="container-fluid p-0">
                <div id="cmsblock-29" class="cmsblock">
                    <div class="description">
                        <div class="static-block-3">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-4 col-sm-4 col col-1">
                                        <span class="icon"><i class="fa fa-plane"></i></span>
                                        <span class="text">Free shipping on orders over $200</span>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col col-2">
                                        <span class="icon"><i class="fa fa-history"></i></span>
                                        <span class="text">30 -Day returns money back</span>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col col-3">
                                        <span class="icon"><i class="fa fa-life-ring"></i></span>
                                        <span class="text">24/7 Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <banner/>
                <featured-product/>
            </div>
        </div>
        <div class="main-row">
            <div class="container">
                <div class="row">
                    <product-tab/>
                </div>
            </div>
        </div>
        <div class="main-row brand-logo">
            <div class="container">
                <div class="row">
                    <brand/>
                </div>
            </div>
        </div>
        <div class="main-row full-width">
            <div class="container-fluid p-0">
                <featured-shop/>
            </div>
        </div>
        <div class="main-row ">
            <div class="container">
                <div class="row">
                    <blog-post/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from '~/services/request'

    export default {
        head: {
            title: 'Home page',
        },
        components: {
            'banner': () => import('~/components/home/banner'),
            'featuredProduct': () => import('~/components/home/featuredProduct'),
            'featuredShop': () => import('~/components/home/featuredShop'),
            'productTab': () => import('~/components/home/productTab'),
            'brand': () => import('~/components/home/brand'),
            'blogPost': () => import('~/components/home/blogPost'),
        }
    }
</script>