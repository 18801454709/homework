<template>
<div>
	<div class="advices" v-for='i in infoNew'>
		<div class="headFace">
			<img :src="i.headImg" alt="">
		</div>
		<div class="info">
			<h4 v-text='i.title'></h4>
			<p v-text='i.content'></p>
		</div>
		<div class="time">
			<p v-text='i.time'></p>
			<p><span v-text='i.infoo'></span></p>
		</div>
	</div>
	<div class="advices" v-for='i in info'>
		<div class="headFace">
			<img :src="i.headImg" alt="">
		</div>
		<div class="info">
			<h4 v-text='i.title'></h4>
			<p v-text='i.content'></p>
		</div>
		<div class="time">
			<p v-text='i.time'></p>
		</div>
	</div>
	
</div>
</template>
<script>
	export default {
		name: 'advices',
		data(){
			return {
				'info':[
					{
						'headImg': '../../../static/images/2.png',
						'title': '腾讯新闻',
						'content': '萌妹子叫"黄埔军校"开学3天火了',
						'time': '19:03',
						'infoo': '1'
					},
					{
						'headImg': '../../../static/images/3.png',
						'title': '【喵喵】分享优惠7群',
						'content': '发单机器人4(不回复)：[图片]户外运',
						'time': '19:03',
						'infoo': '8'
					},
					{
						'headImg': '../../../static/images/4.png',
						'title': '88购物优惠秒杀群6',
						'content': '有事找管理花无缺：[图片]【商品】高邦',
						'time': '19:02',
						'infoo': '3'
					},
					{
						'headImg': '../../../static/images/5.png',
						'title': '官方会员招募群7',
						'content': '群主不理事：[图片]【品名】【Midea/master】',
						'time': '19:01',
						'infoo': '2'
					},
					{
						'headImg': '../../../static/images/6.png',
						'title': '淘宝白菜福利4群',
						'content': '分享小助手：[图片]【Midea/美的】DJ19J1',
						'time': '19:01',
						'infoo': '6'
					},
					{
						'headImg': '../../../static/images/7.png',
						'title': '内部白菜免单群13',
						'content': '发布员：[图片]有情旗舰店控油育发老火山洗面泥',
						'time': '19:01',
						'infoo': '2'
					}
				],
				'infoNew': [
					{
						'headImg': '../../../static/images/1.png',
						'title': '皓天丶',
						'content': '待几天',
						'time': '17:47',
						'infoo': '1'
					}
				]
			}
		}
	}
</script>
<style scoped>
	.advices{
		width: 100%;
		height: 65px;
		display: -webkit-flex;
		padding-left: 10px;
		box-sizing: border-box;
		border-bottom: 1px solid #f4f4f4;
	}
	.advices .headFace{
		width: 50px;
		height: 100%;
	}
	.advices .headFace img{
		width: 100%;
		height: auto;
		margin-top: 7px;
	}
	.advices .info{
		flex: 1;
		padding-left: 10px;
		/*padding-right: 8px;*/
		box-sizing: border-box;
		overflow: hidden;
	}
	.advices .info h4{
		font-weight: normal;
		font-size: 16px;
		margin-top: 8px;
	}
	.advices .info p{
		font-size: 14px;
		margin-top: 3px;
		color: #8b8b8b;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width:100%;
	}
	.advices .time{
		width: 45px;
		height: 100%;
		margin-right: 5px;		
	}
	.advices .time p{
		font-size: 12px;
		text-align: right
	}
	.advices .time p:nth-child(1){
		margin-top: 12px;
		color: #8b8b8b
	}
	.advices .time p span{
		width: 18px;
		height: 18px;
		color: #fff;
		background-color: #f84c30;
		display: inline-block;
		border-radius: 50%;
		text-align: center;
		line-height: 18px;
		float: right;
		margin-top: 3px;
		margin-right: 5px;
	}
</style>