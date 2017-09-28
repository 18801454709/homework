<template>
    <div class="Reuse">
        <div class="title">
            <img src="../../static/images/header_swiper/bg.png" class='floor-tit-bgimg' alt="">
            <span>
                <img src="../../static/images/hr/1 (6).jpg" class='tit' alt="">
            </span>
        </div>
        <div class="row">
            <div class="plate">
                <h4>玩3C</h4>
                <p>IPhone7超低价</p>
                <span>疯狂秒杀中</span>
                <img src="../../static/images/header_swiper/plate1.jpg" alt="">
            </div>
            <div class="plate">
                <h4>京东家电</h4>
                <p>每满1500-100</p>
                <img src="../../static/images/header_swiper/plate2.jpg" alt="">
            </div>
        </div>
        <div class="row">
            <div class="plate">
                <h4>京东超市</h4>
                <p>满99减50</p>
                <span>零食188减</span>
                <img src="../../static/images/header_swiper/plate3.jpg" alt="">
            </div>
            <div class="plate">
                <h4>爱家</h4>
                <p>家装节199</p>
                <span>家装节全品</span>
                <img src="../../static/images/header_swiper/plate4.jpg" alt="">
            </div>
        </div>
        <div class="rowFour">
            <div class="one">
                <h4>爱宝宝</h4>
                <p>爆款低至5折</p>
                <img src="../../static/images/header_swiper/one1.jpg" alt="">
            </div>
            <div class="one">
                <h4>爱美丽</h4>
                <p>美妆0元起</p>
                <img src="../../static/images/header_swiper/one2.jpg" alt="">
            </div>
            <div class="one">
                <h4>爱吃</h4>
                <p>低至9.9包邮</p>
                <img src="../../static/images/header_swiper/one3.jpg" alt="">
            </div>
            <div class="one">
                <h4>爱穿搭</h4>
                <p>十一出行必备</p>
                <img src="../../static/images/header_swiper/one4.jpg" alt="">
            </div>
        </div>
        <div class="advertising">
            <div class="advertisingimg">
                <mt-swipe :auto="5000">
                    <mt-swipe-item><img src="../../static/images/header_swiper/advertising1.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../../static/images/header_swiper/advertising2.jpg" alt=""></mt-swipe-item>
                </mt-swipe>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    }

</script>
<style scoped>
    .Reuse {
        width: 100%;
        height: auto;
    }

    .Reuse .advertising {
        width: 96%;
        margin-left: 2%;
        height: 80px;
        margin-top: 10px;
    }
    .Reuse .advertising .advertisingimg{
        width: 100%;
        height: 100%;
    }
    .Reuse .advertising .advertisingimg img{
        width: 100%;
        height: auto;
    }

    .Reuse .rowFour {
        width: 100%;
        height: 120px;
        background: #fff;
    }

    .Reuse .rowFour .one {
        width: 25%;
        height: 100%;
        float: left;
        position: relative;
    }

    .Reuse .rowFour .one img {
        width: 75%;
        height: auto;
        position: absolute;
        bottom: 5px;
        left: 10px
    }

    .Reuse .rowFour .one h4 {
        margin: 4px 0 0 5px;
    }

    .Reuse .rowFour .one p {
        font-size: 12px;
        margin-left: 5px
    }
    /*overflow: hidden; 自动隐藏文字*/
    /*text-overflow: ellipsis;文字隐藏后添加省略号*/
    /*white-space: nowrap;强制不换行*/

    .Reuse .row {
        width: 100%;
        height: 110px;
        background: #fff;
        border-bottom: 1px solid #eee;
    }

    .Reuse .row .plate {
        width: 49.8%;
        height: 100%;
        float: left;
        position: relative
    }

    .Reuse .row .plate h4 {
        margin-left: 5px;
        margin-top: 5px;
        z-index: 10;
        font-size: 15px;
    }

    .Reuse .row .plate p {
        color: #686868;
        margin-left: 5px;
        font-size: 10px;
    }

    .Reuse .row .plate:nth-child(1) {
        border-right: 1px solid #eee;
    }

    .Reuse .row .plate img {
        width: 45%;
        height: auto;
        position: absolute;
        right: 3px;
        bottom: 0;
    }

    .Reuse .row .plate span {
        display: inline-block;
        padding: 1px 2px 1px 2px;
        background: #ff4a7d;
        color: #fff;
        font-size: 11px;
        margin-left: 5px
    }

    .Reuse .title {
        width: 100%;
        height: 40px;
        position: relative
    }

    .Reuse .title span {
        position: absolute;
        left: 0;
        right: 0;
        top: 7px;
        bottom: 0px;
        height: 73.6%;
        margin: auto;
        display: block;
        overflow: hidden;
    }

    .Reuse .title span img {
        display: block;
        width: auto;
        max-height: 100%;
        top: 0;
        bottom: 0;
        position: absolute;
        left: 0;
        right: 0;
        text-align: center;
        margin: 0 auto;
    }

    .Reuse .title .floor-tit-bgimg {
        position: relative;
        width: 100%;
    }
</style>