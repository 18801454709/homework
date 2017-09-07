<template>
	<div class="science">
		<div class="title" v-for='i in title'>
			<div class="radiol">
				<div></div>
			</div>
			<img class='qi' :src="i.logo" alt="">
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
	export default{
		name: "science",
		data(){
			return{
				"title": [
					{
						"logo": "../../../static/images/qi.png",
						"title": "一说科技",
						"back": "../../../static/images/back.png"
					}
				],
				"shop": [
					{
						"shopImg": "../../../static/images/shop_1.png",
						"shopIntroduce": "一说只能机器人S1儿童陪伴机器人玩具早教故事机",
						"money": "￥898",
						"beforeMoney": "￥1280",
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
	.science{
		width: 100%;
		height: auto;
		background-color: #fff;
		margin-top: 8px;
		overflow: hidden;
	}
	.science .title{
		width: 100%;
		height: 40px;
		border-bottom: 1px solid #eee;
		margin-left: 3%;
		position: relative;
	}
	.science .title .radiol{
		width: 35px;
		height: 100%;
		float: left;
	}
	.science .title .qi{
		position: absolute;
		left: 24px;
		top: 6px;
	}
	.science .title p{
		float: left;
		height: 40px;
		margin-left: 24px;
		line-height: 40px;
		font-size: 13px;
	}
	.science .title .back{
		margin-left: 10px;
		margin-top: 10.5px;
	}
	.science .title .radiol div{
		width: 18px;
		height: 18px;
		border-radius: 50%;
		border: 1px solid #666;
		float: left;
		margin-top: 9px;
		margin-left: -4px;
	}
	.science .shop{
		width: 100%;
		height: 90px;
		display: -webkit-flex;
	}
	.science .shop .radiol{
		width: 35px;
		height: 100%;
		float: left;
	}
	.science .shop .radiol div{
		width: 18px;
		height: 18px;
		border-radius: 50%;
		border: 1px solid #666;
		float: left;
		margin-left: 6px;
		margin-top: 30px;
	}
	.science .shop dl{
		flex: 1;
		height: 100%;
		display: -webkit-flex;
	}
	.science .shop dl dt{
		float: left;
		width: 80px;
	}
	.science .shop dl dt img{
		width: 100%;
		height: auto;
		margin-top: 5px;
	}
	.science .shop dl dd:nth-child(2){
		float: left;
		flex: 1;
		padding-left: 15px;
		box-sizing: border-box;
		padding-top: 5px;
	}
	.science .shop dl dd:nth-child(3){
		width: 28px;
		height: 100%;
		display: -webkit-flex;
		flex-direction: column;
	}
	.science .shop dl dd:nth-child(3) img{
		margin-top: 5px;
	}
	.science .shop dl dd:nth-child(3) span{
		font-size: 14px;
		color: #ccc;
		margin-top: 10px;
		flex: 1;
		padding-top: 7px;
		padding-left: 6px;
		box-sizing: border-box;
	}
	.science .shop dl dd:nth-child(3) b{
		font-weight: normal;
		color: #666
	}
	.science .shop dl dd p{
		font-size: 12px;
	}
	.science .shop dl dd p:nth-child(2) {
		margin-top: 6px;
	}
	.science .shop dl dd p:nth-child(2) b {
		color: #ff6801;
		font-weight: normal;
	}
	.science .shop dl dd p:nth-child(2) span {
		color: #ccc;
		text-decoration: line-through;
		margin-left: 5px;
	}

</style>