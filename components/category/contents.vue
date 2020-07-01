<template>
    <div id="content" class="col-md-12 col-sm-12 col-xs-12">
        <div class="row">
            <div class="col-sm-12"><img
                    src="http://organica4.demo.towerthemes.com/image/cache/catalog/demo/img-block/img_cate-870x304.jpg"
                    alt="Shop" title="Shop" class="img-thumbnail img-category"></div>
        </div>
        <div class="col-sm-12"><h2 class="text-left text-top-cate">Shop</h2></div>
        <div class="custom-category">
            <div class="custom-products">
                <div class="row">
                    <div class="product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12"
                         v-for="(item, index) in products" :key="index">
                        <div class="product-thumb item">
                            <div class="item-inner">
                                <div class="image images-container">
                                    <div class="label-pro-new"><span>New</span></div>

                                    <a class="product-image"
                                       href="http://organica4.demo.towerthemes.com/index.php?route=product/product&amp;path=59&amp;product_id=50">
                                        <img :src="item.src"
                                             alt="Organic valley" title="Organic valley" class="img-responsive img1">
                                    </a>
                                </div><!-- image images-container -->
                                <div class="caption des-container">
                                    <h4 class="product-name">
                                        <a href="http://organica4.demo.towerthemes.com/index.php?route=product/product&amp;path=59&amp;product_id=50">
                                            {{ item.title }}</a>
                                    </h4>
                                    <div class="rating">
                                        <img src="~/assets/image/stars-0.png"
                                             alt="<b>Notice</b>: Undefined index: reviews in <b>/home/towerthe/public_html/demo/tt_organica/catalog/view/theme/tt_organica4/template/extension/module/oclayerednavigation/occategory.tpl</b> on line <b>100</b>">
                                    </div>
                                    <p class="description">
                                        {{ item.desc }}
                                    </p>
                                    <p class="price">{{ item.price }} </p>
                                    <div class="actions button-group">
                                        <button type="button" class="btn-addcart" onclick="cart.add('50');"><span
                                                class="btn-add-cart">Add to Cart</span></button>

                                        <button class="btn-wishlist" type="button" data-toggle="tooltip"
                                                title="Add to Wish List" onclick="wishlist.add('50');"><i
                                                class="fa fa-heart"></i></button>
                                        <button class="btn-compare" type="button" data-toggle="tooltip"
                                                title="Compare this Product" onclick="compare.add('50');"><i
                                                class="fa fa-adjust"></i></button>
                                    </div><!-- actions -->
                                </div><!-- caption -->
                            </div><!-- item-inner -->
                        </div><!-- item product-thumb -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                products: [
                    {
                        src: 'http://organica4.demo.towerthemes.com/image/cache/catalog/demo/product/food/5-300x368.jpg',
                        title: 'Organic valley',
                        decs: 'Redefine your workday with the Palm Treo Pro smartphone. Perfectly balanced, you\n' +
                            'can respond to business and personal email, stay on top of appointments and\n' +
                            'contacts, and use Wi-Fi or GPS when you’re out and about. Then watch a video on\n' +
                            'YouTube, catch up with news and sports on the web, or ..',
                        price: '$279.99'
                    },
                    {
                        src: 'http://organica4.demo.towerthemes.com/image/cache/catalog/demo/product/food/4-300x368.jpg',
                        title: 'LOWFAT MILK',
                        decs: 'Redefine your workday with the Palm Treo Pro smartphone. Perfectly balanced, you\n' +
                            'can respond to business and personal email, stay on top of appointments and\n' +
                            'contacts, and use Wi-Fi or GPS when you’re out and about. Then watch a video on\n' +
                            'YouTube, catch up with news and sports on the web, or ..',
                        price: '$279.99'
                    },
                    {
                        src: 'http://organica4.demo.towerthemes.com/image/cache/catalog/demo/product/food/1-300x368.jpg',
                        title: 'Organic valley',
                        decs: 'Redefine your workday with the Palm Treo Pro smartphone. Perfectly balanced, you\n' +
                            'can respond to business and personal email, stay on top of appointments and\n' +
                            'contacts, and use Wi-Fi or GPS when you’re out and about. Then watch a video on\n' +
                            'YouTube, catch up with news and sports on the web, or ..',
                        price: '$279.99'
                    },
                    {
                        src: 'http://organica4.demo.towerthemes.com/image/cache/catalog/demo/product/food/2-300x368.jpg',
                        title: 'LOWFAT MILK',
                        decs: 'Redefine your workday with the Palm Treo Pro smartphone. Perfectly balanced, you\n' +
                            'can respond to business and personal email, stay on top of appointments and\n' +
                            'contacts, and use Wi-Fi or GPS when you’re out and about. Then watch a video on\n' +
                            'YouTube, catch up with news and sports on the web, or ..',
                        price: '$279.99'
                    },
                ]
            }
        }
    }
</script>