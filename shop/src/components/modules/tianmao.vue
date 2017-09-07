<template>
	<div class="tianmao">
		<div class="title" v-for='i in title'>
			<div class="radiol">
				<div></div>
			</div>
			<img class='tm' :src="i.logo" alt="">
			<p v-text='i.title'></p>
			<img class='back' :src="i.back">
		</div>
		<div class="shop" v-for='i in shop'>
			<div class="radiol">
				<div></div>
			</div>
			<dl>
				<dt><img :src="i.shopImg" alt=""></dt>
				<dd>
					<p v-text='i.shopIntroduce'></p>
					<p><b v-text='i.money'></b><span v-text='i.beforeMoney'></span></p>
				</dd>
				<dd>
					<img :src="i.writeImg" alt="">
					<span><b v-text='i.numf'></b><b v-text='i.num'></b></span>
				</dd>
			</dl>
		</div>

	</div>
</template>
<script>
	export default {
		name: "tianmao",
		data(){
			return {
				"title": [
					{
						"logo": "../../../static/images/tm.png",
						"title": "天猫超市",
						"back": "../../../static/images/back.png"
					}
				],
				"shop": [
					{
						"shopImg": "../../../static/images/shop_2.png",
						"shopIntroduce": "[天猫超市] 达利园 瑞士卷蛋糕（草莓味）240/袋（12枚）",
						"money": "￥14.9",
						"beforeMoney": "0.24kg",
						"writeImg": "../../../static/images/bianji.png",
						"numf": "x",
						"num": "1"
					},
					{
						"shopImg": "../../../static/images/shop_3.png",
						"shopIntroduce": "[天猫超市] 科比可薯我人性2+1袋装薯片122g休闲膨化办公室零食 瑞士卷蛋糕（草莓味）240/袋（12枚）",
						"money": "￥10.9",
						"beforeMoney": "0.244kg",
						"writeImg": "../../../static/images/bianji.png",
						"numf": "x",
						"num": "2"
					},
					{
						"shopImg": "../../../static/images/shop_4.png",
						"shopIntroduce": "[天猫超市] 达利园派巧克力味涂饰蛋类芯饼20枚修i想食品好享受 ",
						"money": "￥24.9",
						"beforeMoney": "0.6kg",
						"writeImg": "../../../static/images/bianji.png",
						"numf": "x",
						"num": "1"
					},
					{
						"shopImg": "../../../static/images/shop_2.png",
						"shopIntroduce": "[天猫超市] 百草味 多味花生210g休闲零食炒货特产香辣",
						"money": "已降￥24.9",
						"beforeMoney": "",
						"writeImg": "../../../static/images/bianji.png",
						"numf": "x",
						"num": "1"
					}

				]
			}
		}
	}
</script>
<style scoped>
	.tianmao{
		width: 100%;
		height: auto;
		background-color: #fff;
		margin-top: 8px;
		overflow: hidden;
	}
	.tianmao .title{
		width: 100%;
		height: 40px;
		border-bottom: 1px solid #eee;
		margin-left: 3%;
		position: relative;
	}
	.tianmao .title .radiol{
		width: 35px;
		height: 100%;
		float: left;
	}
	.tianmao .title .tm{
		position: absolute;
		left: 24px;
		top: 8px;
	}
	.tianmao .title p{
		float: left;
		height: 40px;
		margin-left: 24px;
		line-height: 40px;
		font-size: 13px;
	}
	.tianmao .title .back{
		margin-left: 10px;
		margin-top: 10.5px;
	}
	.tianmao .title .radiol div{
		width: 18px;
		height: 18px;
		border-radius: 50%;
		border: 1px solid #666;
		float: left;
		margin-top: 9px;
		margin-left: -4px;
	}
	.tianmao .shop{
		width: 100%;
		height: 90px;
		display: -webkit-flex;
		margin-top: 5px;
	}
	.tianmao .shop .radiol{
		width: 35px;
		height: 100%;
		float: left;
	}
	.tianmao .shop .radiol div{
		width: 18px;
		height: 18px;
		border-radius: 50%;
		border: 1px solid #666;
		float: left;
		margin-left: 6px;
		margin-top: 30px;
	}
	.tianmao .shop dl{
		flex: 1;
		height: 100%;
		display: -webkit-flex;
	}
	.tianmao .shop dl dt{
		float: left;
		width: 80px;
	}
	.tianmao .shop dl dt img{
		width: 100%;
		height: auto;
		margin-top: 5px;
	}
	.tianmao .shop dl dd:nth-child(2){
		float: left;
		flex: 1;
		padding-left: 15px;
		box-sizing: border-box;
		padding-top: 5px;
		border-bottom: 1px solid #eee;
	}
	.tianmao .shop dl dd:nth-child(3){
		width: 28px;
		height: 100%;
		display: -webkit-flex;
		flex-direction: column;
	}
	.tianmao .shop dl dd:nth-child(3) img{
		margin-top: 5px;
	}
	.tianmao .shop dl dd:nth-child(3) span{
		font-size: 14px;
		color: #ccc;
		margin-top: 10px;
		flex: 1;
		padding-top: 7px;
		padding-left: 6px;
		box-sizing: border-box;
	}
	.tianmao .shop dl dd p{
		font-size: 12px;
	}
	.tianmao .shop dl dd p:nth-child(2) {
		margin-top: 6px;
	}
	.tianmao .shop dl dd p:nth-child(2) b {
		color: #ff6801;
		font-weight: normal;
	}
	.tianmao .shop dl dd p:nth-child(2) span{
		color: #666;
		margin-left: 5px;
		
	}
	.tianmao .shop dl dd:nth-child(3) b{
		font-weight: normal;
		color: #666
	}
</style>