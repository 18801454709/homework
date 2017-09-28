<template>
    <div class="Reuse">
        <div class="title">
            <img src="../../static/images/header_swiper/bg.png" class='floor-tit-bgimg' alt="">
            <span>
                <img src="../../static/images/hr/1 (5).jpg" class='tit' alt="">
            </span>
        </div>
        <div class="row">
            <div class="plate">
                <h4>智能生活</h4>
                <p>时尚智能表</p>
                <span>黑科技</span>
                <img src="../../static/images/header_swiper/three1.jpg" alt="">
            </div>
            <div class="plate">
                <h4>手机数码</h4>
                <p>爆款手机特惠</p>
                <span>新品抢购</span>
                <img src="../../static/images/header_swiper/three2.jpg" alt="">
            </div>
        </div>
        <div class="row">
            <div class="plate">
                <h4>大家电馆</h4>
                <p>每满1000减</p>
                <img src="../../static/images/header_swiper/three3.jpg" alt="">
            </div>
            <div class="plate">
                <h4>时尚馆</h4>
                <p>2件7折3件</p>
                <img src="../../static/images/header_swiper/three4.jpg" alt="">
            </div>
        </div>
        <div class="rowFour">
            <div class="one">
                <h4>中外名酒</h4>
                <p>满199减100</p>
                <img src="../../static/images/header_swiper/three5.jpg" alt="">
            </div>
            <div class="one">
                <h4>电脑办公</h4>
                <p>笔记本超薄</p>
                <img src="../../static/images/header_swiper/three6.jpg" alt="">
            </div>
            <div class="one">
                <h4>鞋靴箱包</h4>
                <p>399减80</p>
                <img src="../../static/images/header_swiper/three7.jpg" alt="">
            </div>
            <div class="one">
                <h4>小家电馆</h4>
                <p>满200-30</p>
                <img src="../../static/images/header_swiper/three8.jpg" alt="">
            </div>
        </div>
        <div class="advertising">
            <div class="advertisingimg">
                <mt-swipe :auto="4000">
                    <mt-swipe-item><img src="../../static/images/header_swiper/advertising5.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../../static/images/header_swiper/advertising6.jpg" alt=""></mt-swipe-item>
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
        background: #0072f2;
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