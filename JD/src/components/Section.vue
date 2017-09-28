<template>
    <div class="Section">
        <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" ref="loadmore">
            <div class="banner">
                <mt-swipe :auto="4000">
                    <mt-swipe-item><img src="../../static/images/header_swiper/01.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../../static/images/header_swiper/02.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../../static/images/header_swiper/03.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../../static/images/header_swiper/04.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../../static/images/header_swiper/05.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../../static/images/header_swiper/06.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../../static/images/header_swiper/07.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../../static/images/header_swiper/08.jpg" alt=""></mt-swipe-item>
                </mt-swipe>
            </div>
            <div class="opa1">
                <img src="../../static/images/header_swiper/opa1.jpg" alt="">
            </div>
            <nav>
                <div>
                    <dl>
                        <dt><img src="../../static/images/nav/01.png" alt=""></dt>
                        <dd>京东超市</dd>
                    </dl>
                    <dl>
                        <dt><img src="../../static/images/nav/02.png" alt=""></dt>
                        <dd>全球购</dd>
                    </dl>
                    <dl>
                        <dt><img src="../../static/images/nav/03.png" alt=""></dt>
                        <dd>服装城</dd>
                    </dl>
                    <dl>
                        <dt><img src="../../static/images/nav/04.png" alt=""></dt>
                        <dd>京东生鲜</dd>
                    </dl>
                    <dl>
                        <dt><img src="../../static/images/nav/05.png" alt=""></dt>
                        <dd>京东到家</dd>
                    </dl>
                </div>
                <div>
                    <dl>
                        <dt><img src="../../static/images/nav/06.png" alt=""></dt>
                        <dd>充值缴费</dd>
                    </dl>
                    <dl>
                        <dt><img src="../../static/images/nav/07.png" alt=""></dt>
                        <dd>领京豆</dd>
                    </dl>
                    <dl>
                        <dt><img src="../../static/images/nav/08.png" alt=""></dt>
                        <dd>领券</dd>
                    </dl>
                    <dl>
                        <dt><img src="../../static/images/nav/09.png" alt=""></dt>
                        <dd>惠赚钱</dd>
                    </dl>
                    <dl>
                        <dt><img src="../../static/images/nav/10.png" alt=""></dt>
                        <dd>物流查询</dd>
                    </dl>
                </div>
            </nav>
            <div class="opa1">
                <img src="../../static/images/header_swiper/opa2.jpg" alt="">
            </div>
            <div class="jd-news">
                <div>
                    <img class='newsicon' src="../../static/images/icon/jd_news.png" alt="">
                    <div class="jping">
                        <marquee direction='up' scrolldelay='200' Height="30px">
                            <p>大药房:大牌直降</p>
                            <p>陪伴宝宝:1元抢好货</p>
                            <p>二手优品:iPhone6秒杀</p>
                            <p>白条商城:手机12期免息</p>
                            <p>爱车生活:大牌直降</p>
                            <p>鞋靴箱包:399减80</p>
                            <p>电脑办公:笔记本超低价</p>
                        </marquee>
                    </div>
                    <span class="more">更多</span>
                </div>
            </div>
            <div class="seckill-floor">
                <div class="timeOut">
                    <img src="../../static/images/icon/arrow_rt.png" class="arrow_rt" alt="">
                    <b>京选尖货轮番秒</b>
                    <img src="../../static/images/icon/jdms.png" class='jdms' alt="">
                    <p>8点场</p>
                    <span id='timeout'>00:56:36</span>
                </div>
                <div class="content">
                    <dl>
                        <dt><img src="../../static/images/product/01 (50).jpg" alt=""></dt>
                        <dd>
                            <p>
                                <b>￥899</b>
                            </p>
                            <p>￥1299</p>
                        </dd>
                    </dl>
                    <dl>
                        <dt><img src="../../static/images/product/01 (51).jpg" alt=""></dt>
                        <dd>
                            <p>
                                <b>￥1310</b>
                            </p>
                            <p>￥1299</p>
                        </dd>
                    </dl>
                    <dl>
                        <dt><img src="../../static/images/product/01 (52).jpg" alt=""></dt>
                        <dd>
                            <p>
                                <b>￥1299</b>
                            </p>
                            <p>￥1299</p>
                        </dd>
                    </dl>
                    <dl>
                        <dt><img src="../../static/images/product/01 (53).jpg" alt=""></dt>
                        <dd>
                            <p>
                                <b>28.8</b>
                            </p>
                            <p>￥103</p>
                        </dd>
                    </dl>
                </div>
                <div class="opa1">
                    <img src="../../static/images/header_swiper/opa3.jpg" alt="">
                </div>
                <div class="opa2">
                    <img src="../../static/images/header_swiper/opa4.jpg" alt="">
                    <img src="../../static/images/header_swiper/opa5.jpg" alt="">
                </div>
                <div class="opa2">
                    <img src="../../static/images/header_swiper/opa6.jpg" alt="">
                    <img src="../../static/images/header_swiper/opa7.jpg" alt="">
                </div>
                <Reuse_love></Reuse_love>
                <Reuse_enjoy></Reuse_enjoy>
                <Reuse_shop></Reuse_shop>
                <Recommend></Recommend>
                <div id="Share">
                    <Share_></Share_>
                </div>

                <div class="foot">
                    <div class="nav">
                        <div class="footnav">
                            <p>登录</p>
                            <p>|</p>
                            <p>注册</p>
                            <p>|</p>
                            <p>反馈</p>
                            <p>|</p>
                            <p>回到顶部</p>
                        </div>
                    </div>
                    <div class="copyright">
                        <p>Copyright © 2004-2017 京东JD.com 版权所有</p>
                    </div>


                </div>
            </div>

        </mt-loadmore>
    </div>
</template>
<script>
    import Share_ from './Share'
    import Reuse_love from './reuse_love'
    import Reuse_enjoy from './reuse_enjoy'
    import Reuse_shop from './reuse_shop'
    import Recommend from './Recommend'

    export default {
        name: 'Section',
        components: {
            Reuse_love,
            Reuse_enjoy,
            Reuse_shop,
            Recommend,
            Share_

        },
        methods: {
            loadTop() {
                let this_ = this;
                setTimeout(function () {
                    console.log('loadTop')
                    this_.$refs.loadmore.onTopLoaded()
                }, 800)
            },
            loadBottom() {
                var _this = this;
                setTimeout(function () {
                    _this.$refs.loadmore.onBottomLoaded();
                    console.log(1)
                    let Share = document.getElementById('Share');

                }, 1000)
            },
            allLoaded() {
                console.log('allLoaded')
            }
        }
    }

</script>
<style scoped>
    .Section {
        flex: 1;
        background: #f4f4f4;
        overflow-y: auto;
        /*padding-bottom: 100px;*/
    }

    .Section .banner {
        width: 100%;
        height: 155px
    }

    .Section .banner img {
        width: 100%;
        height: 100%;
    }

    .Section .opa1 {
        width: 100%;
        height: auto;
    }

    .Section .opa2 {
        width: 100%;
        height: 100px;
        clear: both;
        margin-bottom: 1px;
    }

    .Section .opa2 img {
        width: 49.8%;
        height: 100%;
        float: left;
    }

    .Section .opa2 img:nth-child(1) {
        margin-right: .3%;
    }


    .Section .opa1 img {
        width: 100%;
        height: auto;
    }

    .Section nav {
        width: 100%;
        height: auto;
    }

    .Section nav div {
        width: 100%;
        height: auto;
        display: -webkit-flex;
        margin-bottom: 4px;
    }

    .Section nav div dl {
        flex: 1;
    }

    .Section nav div dl dt {
        width: 100%;
        height: auto;
    }

    .Section nav div dl dt img {
        width: 50%;
        height: auto;
        margin: auto;
        display: block
    }

    .Section nav div dl dd {
        font-size: 12px;
        text-align: center;
        margin-top: 2px;
    }

    .Section .jd-news {
        width: 100%;
        height: auto;
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
    }

    .Section .jd-news div {
        background: #fff;
        display: -webkit-flex;
        border-radius: 10px;
    }

    .Section .jd-news .newsicon {
        width: 73px;
        height: 16px;
        margin-top: 8px;
        margin-left: 15px;
    }

    .Section .jd-news .jping {
        flex: 1;
    }

    .Section .jd-news .jping marquee {
        text-align: center;
        padding-bottom: 10px;
        padding-top: 10px;
        box-sizing: border-box;
    }

    .Section .jd-news .jping marquee p {
        height: 25px;
        font-size: 12px;
        color: #686868
    }

    .Section .jd-news .more {
        line-height: 30px;
        padding: 0 5px;
        font-size: 13px;
        margin-right: 5px;
    }

    .Section .seckill-floor {
        width: 100%;
        height: auto;
        margin-top: 8px;
    }

    .Section .seckill-floor .timeOut {
        width: 100%;
        height: 35px;
        background: #fff;
    }

    .Section .seckill-floor .timeOut .jdms {
        width: auto;
        height: 90%;
        display: inline-block;
        float: left;
    }

    .Section .seckill-floor .timeOut p {
        line-height: 35px;
        display: inline-block;
        float: left;
        margin-left: 8px;
        font-size: 13px;
        font-weight: bold;
    }

    .Section .seckill-floor .timeOut span {
        font-size: 13px;
        line-height: 36px;
        margin-left: 8px;
    }

    .Section .seckill-floor .timeOut b {
        float: right;
        color: #f23030;
        font-weight: normal;
        font-size: 13px;
        line-height: 35px;
    }

    .Section .seckill-floor .timeOut .arrow_rt {
        float: right;
        width: auto;
        height: 40%;
        margin-top: 9px;
        margin-left: 3px;
        margin-right: 3px;
    }

    .Section .seckill-floor .content {
        width: 200%;
        height: 150px;
        padding-left: 8px;
        box-sizing: border-box;
        background: #fff;
    }

    .Section .seckill-floor .content dl {
        height: 100%;
        width: auto;
        float: left;
        margin-right: 8px;
    }

    .Section .seckill-floor .content dl dt {
        height: 70%;
        width: auto;
    }

    .Section .seckill-floor .content dl dt img {
        height: 100%;
        width: auto;
    }

    .Section .seckill-floor .content dl dd {
        font-size: 15px;
        color: #f23030;
        text-align: center;
    }

    .Section .seckill-floor .content dl dd p:nth-child(1) {
        margin-top: 2px;
    }

    .Section .seckill-floor .content dl dd p:nth-child(2) {
        color: #686868;
        font-size: 13px;
        margin-top: -5px;
    }

    .Section .seckill-floor .foot {
        width: 100%;
        height: auto;
        margin-top: 8px;
    }

    .Section .seckill-floor .foot .nav {
        width: 100%;
        height: auto;
        padding-left: 30px;
        padding-right: 30px;
        box-sizing: border-box;
        background: #f8f8f8;
        border-bottom: 1px solid #ccc;
    }

    .Section .seckill-floor .foot .nav .footnav {
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 13px;
    }

    .Section .seckill-floor .foot .nav .footnav p {
        text-align: center;
        float: left;
        padding: 0 11px;
        color: #848689
    }
    .Section .seckill-floor .foot .copyright{
        width: 100%;
        height: 40px;
        font-size: 12px;
        line-height: 45px;
        text-align: center;
        color: #848689
    }
</style>