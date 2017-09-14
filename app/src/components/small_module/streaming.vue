<template>
	<div class='streaming'>
		<ul v-for='i in list'>
			<li v-for='j in i'>
				<router-link to='/details' class='chunk'>	
				<div v-for='k in j'>
					<img :src="k.img_" alt="">
					<span v-text='k.name'></span>	
				</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'hot',
		data(){
			return {
				list:[
					{
						list_1:[
							{
								img_: '../../../static/images/1.png',
								name: '音乐'
							},
							{
								img_: '../../../static/images/2.png',
								name: '历史'
							},
							{
								img_: '../../../static/images/3.png',
								name: '情感生活'
							},
							{
								img_: '../../../static/images/4.png',
								name: '人文'
							}
						]		
					},
					{
						list_2:[
							{
								img_: '../../../static/images/5.png',
								name: '付费精品'
							},
							{
								img_: '../../../static/images/6.png',
								name: '脱口秀'
							},
							{
								img_: '../../../static/images/7.png',
								name: '娱乐'
							},
							{
								img_: '../../../static/images/8.png',
								name: '英语'
							}
						]		
					}

				]
				
			}
		}
	}
</script>
<style scoped>
	.streaming{
		width: 100%;
		height: auto;
	}
	.streaming ul {
		width: 100%;
		height: auto;
		margin-top: 2px;
	}
	.streaming ul li{
		list-style: none;
	}
	.streaming ul li .chunk{
		display: -webkit-flex;
	}
	.streaming ul li div{
		margin-right: 2px;
		background: #f8f8f8;
		height: 82px;
		position: relative;
		flex: 1;
	}
	.streaming ul li img{
		position: absolute;
		left: 0;
		right: 0;
		top: -28px;
		bottom: 0;
		margin: auto;
		width: 22px;
		height: 22px;
	}
	.streaming ul li span{
		width: 100%;
		height: 82px;
		text-align: center;
		line-height: 100px;
		font-size: 12px;
		display: inline-block;
		color: #333
	}
</style>