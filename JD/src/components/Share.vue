<template>
    <div class="Share">
        <dl v-for="i in list">
            <dt>
                <img :src="i.img" alt="">
            </dt>
            <dd>
                <p>{{i.cont}}</p>
                <p style="color:red;">{{i.pic}}</p>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    name: 'Share',
    data() {
        return {
            list: [
                {
                    img: '../../static/images/header_swiper/1.jpg',
                    cont: '辛格威水冷大公牛沙滩车四轮越野摩托铝合金轮款',
                    pic: '￥1000.00'
                }, {
                    img: '../../static/images/header_swiper/2.jpg',
                    pic: '￥2880.00',
                    cont: '捷运来迅鹰款100CC/125CC踏板车摩托车助力车休闲摩'
                }, {
                    img: '../../static/images/header_swiper/3.jpg',
                    pic: '￥2380.00',
                    cont: '豪新一本 125cc迅鹰 免费送合格大证 踏板车 黑色'
                }, {
                    img: '../../static/images/header_swiper/4.jpg',
                    pic: '￥99.00',
                    cont: '莎德妮 单肩手提斜挎包女包斜跨2017'
                }, {
                    img: '../../static/images/header_swiper/5.jpg',
                    pic: '￥2100.00',
                    cont: '新迅鹰踏板车摩托车 男女通用踏板车摩托车 其他颜色'
                }, {
                    img: '../../static/images/header_swiper/6.jpg',
                    pic: '￥230.00',
                    cont: '皮匠传奇男士手包真皮手拿包韩版头层牛皮商务'
                }, {
                    img: '../../static/images/header_swiper/7.jpg',
                    pic: '￥99.00',
                    cont: '莎德妮 单肩手提斜挎包女包斜跨2017'
                }, {
                    img: '../../static/images/header_swiper/8.jpg',
                    pic: '￥2100.00',
                    cont: '新迅鹰踏板车摩托车 男女通用踏板车摩托车 其他颜色'
                }, {
                    img: '../../static/images/header_swiper/9.jpg',
                    pic: '￥230.00',
                    cont: '皮匠传奇男士手包真皮手拿包韩版头层牛皮商务'
                }, {
                    img: '../../static/images/header_swiper/10.jpg',
                    pic: '￥99.00',
                    cont: '莎德妮 单肩手提斜挎包女包斜跨2017'
                }, {
                    img: '../../static/images/header_swiper/11.jpg',
                    pic: '￥2100.00',
                    cont: '新迅鹰踏板车摩托车 男女通用踏板车摩托车 其他颜色'
                }, {
                    img: '../../static/images/header_swiper/12.jpg',
                    pic: '￥230.00',
                    cont: '皮匠传奇男士手包真皮手拿包韩版头层牛皮商务'
                }, {
                    img: '../../static/images/header_swiper/13.jpg',
                    pic: '￥230.00',
                    cont: '皮匠传奇男士手包真皮手拿包韩版头层牛皮商务'
                }
            ]
        }
    }
}
</script>

<style scoped>
.Share {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-left: 5px;
    box-sizing: border-box;
    background: #fff;
}

dl {
    width: 50%;
    font-size: 12px;
    padding-right: 5px;
    box-sizing: border-box;
}

dl dt {
    width: 100%;
}

dl dt img {
    width: 100%;
}

dl dd {
    padding-top: ;
}

dl dd p {
    line-height: 20px;
}
</style>