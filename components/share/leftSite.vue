<template>
    <aside id="column-left" class="col-sm-3 hidden-xs">
        <div class="panel panel-default layered-panel">
            <div class="layered-title  group-title">
                <h3>Filter product</h3>
            </div>
            <div class="layered">
                <div class="list-group">
                    <div class="filter-attribute-container filter-attribute-remove-container">
                    </div>
                    <div class="filter-attribute-container">
                        <label>Price</label>
                        <div class="list-group-item">
                            <div class="filter-price">
                                <div id="slider-price"
                                     class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                    <div class="ui-slider-range ui-widget-header ui-corner-all"
                                         style="width: 100%; left: 0%;"></div>
                                    <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"
                                          style="left: 0%;"/>
                                    <span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"
                                          style="left: 100%;"/>
                                </div>
                                <div class="slider-values">
                                    <span>$</span>
                                    <input id="price-from" disabled="disabled" class="input-price" type="text"
                                           value="80" placeholder="Min" name="price-from"> -
                                    <span>$</span>
                                    <input id="price-to" disabled="disabled" class="input-price" type="text"
                                           value="2000" placeholder="Max" name="price-to">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="filter-attribute-container">
                        <label>Capacity</label>
                        <div class="list-group-item">
                            <div id="filter-group7">
                                <a class="a-filter add-filter" href="javascript:void(0);" name="38">100ml (0)</a>
                                <a class="a-filter add-filter" href="javascript:void(0);" name="35">15ml (0)</a>
                                <a class="a-filter add-filter" href="javascript:void(0);" name="36">30ml (1)</a>
                                <a class="a-filter add-filter" href="javascript:void(0);" name="39">330ml (2)</a>
                                <a class="a-filter add-filter" href="javascript:void(0);" name="37">50ml (3)</a>
                                <a class="a-filter add-filter" href="javascript:void(0);" name="34">5ml (0)</a>
                            </div>
                        </div>
                    </div>
                    <div class="filter-attribute-container">
                        <label>Color</label>
                        <div class="list-group-item">
                            <div id="filter-group1">
                                <a class="a-filter add-filter" href="javascript:void(0);" name="4">black (0)</a>
                                <a class="a-filter add-filter" href="javascript:void(0);" name="2">blue (0)</a>
                                <a class="a-filter add-filter" href="javascript:void(0);" name="5">brown (0)</a>
                                <a class="a-filter add-filter" href="javascript:void(0);" name="3">green (0)</a>
                                <a class="a-filter add-filter" href="javascript:void(0);" name="8">orange (0)</a>
                                <a class="a-filter add-filter" href="javascript:void(0);" name="7">pink (0)</a>
                                <a class="a-filter add-filter" href="javascript:void(0);" name="1">red (0)</a>
                                <a class="a-filter add-filter" href="javascript:void(0);" name="41">white (0)</a>
                            </div>
                        </div>
                    </div>
                    <div class="filter-attribute-container">
                        <label>Manufacture</label>
                        <div class="list-group-item">
                            <div id="filter-group2">
                                <a class="a-filter add-filter" href="javascript:void(0);" name="10">chanel (0)</a>
                                <a class="a-filter add-filter" href="javascript:void(0);" name="12">christian dior
                                    (0)</a>
                                <a class="a-filter add-filter" href="javascript:void(0);" name="16">giorgio armani
                                    (0)</a>
                                <a class="a-filter add-filter" href="javascript:void(0);" name="11">louis vuitton
                                    (0)</a>
                                <a class="a-filter add-filter" href="javascript:void(0);" name="15">prada (0)</a>
                                <a class="a-filter add-filter" href="javascript:void(0);" name="14">versace (0)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input type="hidden" class="filter-url"
                   value="http://organica4.demo.towerthemes.com/index.php?route=extension/module/oclayerednavigation/category&amp;path=59">
            <input type="hidden" class="price-url"
                   value="http://organica4.demo.towerthemes.com/index.php?route=extension/module/oclayerednavigation/category&amp;path=59">
        </div>
    </aside>
</template>