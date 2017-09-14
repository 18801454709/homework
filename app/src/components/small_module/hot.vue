<template>
	<div class='hot'>
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
					},
					{
						list_3:[
							{
								img_: '../../../static/images/9.png',
								name: '教育培训'
							},
							{
								img_: '../../../static/images/10.png',
								name: '小语种'
							},
							{
								img_: '../../../static/images/11.png',
								name: '商业财经'
							},
							{
								img_: '../../../static/images/12.png',
								name: '健康养生'
							}
						]		
					},
					{
						list_4:[
							{
								img_: '../../../static/images/13.png',
								name: '国学书院'
							},
							{
								img_: '../../../static/images/12.png',
								name: '3D体验馆'
							},
							{
								img_: '../../../static/images/13.png',
								name: '头条'
							},
							{
								img_: '../../../static/images/14.png',
								name: '广播剧'
							}
						]		
					},
					{
						list_5:[
							{
								img_: '../../../static/images/15.png',
								name: '戏曲'
							},
							{
								img_: '../../../static/images/16.png',
								name: '电台'
							},
							{
								img_: '../../../static/images/17.png',
								name: 'IT科技'
							},
							{
								img_: '../../../static/images/18.png',
								name: '旅游'
							}
						]		
					}

				]
				
			}
		}
	}
</script>
<style scoped>
	.hot{
		width: 100%;
		height: auto;
	}
	.hot ul {
		width: 100%;
		height: auto;
		margin-top: 2px;
	}
	.hot ul li{
		list-style: none;
	}
	.hot ul li .chunk{
		display: -webkit-flex;
	}
	.hot ul li div{
		margin-right: 2px;
		background: #f8f8f8;
		height: 82px;
		position: relative;
		flex: 1;
	}
	.hot ul li img{
		position: absolute;
		left: 0;
		right: 0;
		top: -28px;
		bottom: 0;
		margin: auto;
		width: 22px;
		height: 22px;
	}
	.hot ul li span{
		width: 100%;
		height: 82px;
		text-align: center;
		line-height: 100px;
		font-size: 12px;
		display: inline-block;
		color: #333
	}
</style>