<template>
    <div class="main-col col-sm-12 col-md-12">
        <div class="row sub-row">
            <div class="sub-col col-sm-12 col-md-12">
                <div id="blog_home" class="menu-recent wow fadeInUp" data-wow-delay="100ms">
                    <div class="containers">
                        <div class="blog-title module-title">
                            <h3>Blog posts</h3>
                        </div>
                        <div class="row">
                            <div class="articles-container">
                                <el-carousel :interval="5000" arrow="always">
                                    <el-carousel-item v-for="item in items" :key="item">
                                        <div class="row_items">
                                            <div class="articles-inner item-inner">
                                                <div class="articles-date">
                                                    <span class="date-added">{{ item.day }}</span>
                                                    <span class="date-added-year">{{ item.year }}</span>
                                                </div>
                                                <div class="articles-content">
                                                    <div class="articles-image">
                                                        <img :src="item.imgage" alt="#">
                                                    </div>
                                                    <div class="articles-action">
                                                        <span class="article-author">Post by<em>{{ item.author }}</em></span>
                                                        <a class="articles-name"
                                                           href="http://organica4.demo.towerthemes.com/index.php?route=blog/article&amp;article_id=1">
                                                           {{ item.title }}
                                                        </a>
                                                        <div class="articles-intro">
                                                            {{ item.content }}
                                                        </div>
                                                        <div class="readmore"><a
                                                                href="http://organica4.demo.towerthemes.com/index.php?route=blog/article&amp;article_id=1">Read
                                                            more <i class="fa fa-long-arrow-right"></i></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </el-carousel-item>
                                </el-carousel>

                                <div class="row_items">
                                    <div class="articles-inner item-inner">
                                        <div class="articles-date">
                                            <span class="date-added">22</span>
                                            <span class="date-added-year">Jul 2015</span>
                                        </div>
                                        <div class="articles-content">
                                            <div class="articles-image"><img
                                                    src="http://organica4.demo.towerthemes.com/image/cache/catalog/demo/img-block/blog-3-445x270.jpg"
                                                    alt="#"></div>
                                            <div class="articles-action">
                                                <span class="article-author">Post by<em>towerthemes</em></span>
                                                <a class="articles-name"
                                                   href="http://organica4.demo.towerthemes.com/index.php?route=blog/article&amp;article_id=6">Answers
                                                    to your Questions...</a>
                                                <div class="articles-intro">Lorem ipsum dolor sit amet, consectetuer
                                                    adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem
                                                    ipsum dolor sit amet, consectetuer...
                                                </div>
                                                <div class="readmore"><a
                                                        href="http://organica4.demo.towerthemes.com/index.php?route=blog/article&amp;article_id=6">Read
                                                    more <i class="fa fa-long-arrow-right"></i></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="newletter-subscribe newletter-home">
                    <div class="containera">
                        <div id="box" class="newletter-container">
                            <div class="row">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div style="" id="dialog_normal" class="window">
                                        <div class="box">
                                            <div class="newletter-title">
                                                <h2><span class="first-text">Sign up for</span> <span
                                                        class="secon-text">sent</span> newsletter</h2>
                                            </div>
                                            <div class="box-content newleter-content">
                                                <div id="frm_subscribe_normal">
                                                    <form name="subscribe" id="subscribe_normal">
                                                        <table>
                                                            <tbody>
                                                            <tr>
                                                                <td>
                                                                    <input type="text" value="" name="subscribe_email"
                                                                           id="subscribe_email">
                                                                    <input type="hidden" value="" name="subscribe_name"
                                                                           id="subscribe_name">
                                                                </td>
                                                            </tr>
                                                            <tr class="btn-sub">
                                                                <td>
                                                                    <a class="button" onclick="email_subscribe()"><span>Submit<i
                                                                            class="fa fa-long-arrow-right"></i></span></a>

                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </form>
                                                </div><!-- /#frm_subscribe -->
                                                <div id="notification_normal"></div>
                                            </div><!-- /.box-content -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- /.box -->
                <div id="cmsblock-21" class="cmsblock">
                    <div class="description">
                        <div class="static-block wow fadeInUp" data-wow-delay="100ms">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-4 col-ms-12 first-col">
                                        <span class="icon"><i class="fa fa-phone"></i></span>
                                        <span class="first-text">Do you have a question?</span>
                                        <span class="secon-text">+0123 456 789</span>
                                    </div>
                                    <div class="col-md-4 col-ms-12 secon-col">
                                        <span class="icon"><i class="fa fa-envelope-o"></i></span>
                                        <span class="first-text">offer question?</span>
                                        <span class="secon-text">Contact@posthemes.com</span>
                                    </div>
                                    <div class="col-md-4 col-ms-12 third-col">
                                        <span class="icon"><i class="fa fa-life-ring"></i></span>
                                        <span class="first-text">SUpport question?</span>
                                        <span class="secon-text">support@posthemes.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                items: [
                    {
                        'day': '22',
                        'year': 'Jul 2015',
                        'imgage': 'http://organica4.demo.towerthemes.com/image/cache/catalog/demo/img-block/blog-1-445x270.jpg',
                        'author': 'Towerthemes',
                        'title': 'Welcome to plazathemes',
                        'content': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer...',
                    },
                    {
                        'day': '22',
                        'year': 'Jul 2016',
                        'imgage': 'http://organica4.demo.towerthemes.com/image/cache/catalog/demo/img-block/blog-2-445x270.jpg',
                        'author': 'Towerthemes',
                        'title': 'Answers to your Questions...',
                        'content': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer...',
                    },
                    {
                        'day': '22',
                        'year': 'Jul 2014',
                        'imgage': 'http://organica4.demo.towerthemes.com/image/cache/catalog/demo/img-block/blog-3-445x270.jpg',
                        'author': 'Towerthemes',
                        'title': 'Welcome to plazathemes',
                        'content': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer...',
                    },
                    {
                        'day': '22',
                        'year': 'Jul 2018',
                        'imgage': 'http://organica4.demo.towerthemes.com/image/cache/catalog/demo/img-block/blog-3-445x270.jpg',
                        'author': 'Towerthemes',
                        'title': 'Welcome to plazathemes',
                        'content': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt. Lorem ipsum dolor sit amet, consectetuer...',
                    }

                ]
            }
        }
    }
</script>