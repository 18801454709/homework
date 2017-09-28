<template>
    <div class="Reuse">
        <div class="title">
            <img src="../../static/images/header_swiper/bg.png" class='floor-tit-bgimg' alt="">
            <span>
                <img src="../../static/images/hr/1 (7).jpg" class='tit' alt="">
            </span>
        </div>
        <div class="row">
            <div class="plate">
                <h4>全球尖货</h4>
                <p>母婴会场</p>
                <span>买3免1</span>
                <img src="../../static/images/header_swiper/two1.jpg" alt="">
            </div>
            <div class="plate">
                <h4>京东精选</h4>
                <p>精选优质生活</p>
                <span>品质推荐</span>
                <img src="../../static/images/header_swiper/two2.jpg" alt="">
            </div>
        </div>
        <div class="row">
            <div class="plate">
                <h4>京东体育</h4>
                <p>潮流运动</p>
                <span>Adidas潮品</span>
                <img src="../../static/images/header_swiper/two3.jpg" alt="">
            </div>
            <div class="plate">
                <h4>奢品大牌</h4>
                <p>钟表6期免息</p>
                <img src="../../static/images/header_swiper/two4.jpg" alt="">
            </div>
        </div>
        <div class="rowFour">
            <div class="one">
                <h4>环球时尚</h4>
                <p>低至399</p>
                <img src="../../static/images/header_swiper/two5.jpg" alt="">
            </div>
            <div class="one">
                <h4>珠宝首饰</h4>
                <p>周3大牌日</p>
                <img src="../../static/images/header_swiper/two6.jpg" alt="">
            </div>
            <div class="one">
                <h4>设计师</h4>
                <p>潮流设计</p>
                <img src="../../static/images/header_swiper/two7.jpg" alt="">
            </div>
            <div class="one">
                <h4>买手甄选</h4>
                <p>户外小夏季</p>
                <img src="../../static/images/header_swiper/two8.jpg" alt="">
            </div>
        </div>
        <div class="advertising">
            <div class="advertisingimg">
                <mt-swipe :auto="3000">
                    <mt-swipe-item><img src="../../static/images/header_swiper/advertising3.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../../static/images/header_swiper/advertising4.jpg" alt=""></mt-swipe-item>
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
        background: #952dff;
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