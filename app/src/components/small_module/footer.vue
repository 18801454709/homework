<template>
	<div class='footer'>
		<router-link to='a' tag='div'>	
				<dl v-for='i in list'>
					<dt><img :src="i.img" alt=""></dt>
					<dd v-text='i.text'></dd>
				</dl>
		</router-link>
	</div>
</template>
<script>
	export default{
		name: 'footer',
		data(){
			return {
				list: [
					{
						img: '../../../static/images/footer_1.png',
						text: '首页'
					},
					{
						img: '../../../static/images/footer_2.png',
						text: '首页'
					},
					{
						img: '../../../static/images/footer_3.png'
					},
					{
						img: '../../../static/images/footer_4.png',
						text: '首页'
					},
					{
						img: '../../../static/images/footer_5.png',
						text: '首页'
					}
				]
			}
		}
	}
</script>
<style scoped>
	.footer{
		width: 100%;
		height: 50px;
		background: #fff;
		border-top: 1px solid #ddd;

	}
	.footer div{
		display: -webkit-flex;
		width: 100%;
		height: 50px;
	}
	.footer dl{
		flex: 1;
		height: 100%;
	}
	
	.footer dl dt{
		width: 50%;
		height: 50%;
		margin: auto;
	}
	.footer dl dt img{
		width: 100%;
		height: auto;
	}
	.footer dl dd{
		height: 50%;
		font-size: 13px;
		text-align: center;
		padding-top: 2px;
		box-sizing: border-box;
		color: #333;
	}
	.footer dl:nth-child(3){
		position: relative;
	}
	.footer dl:nth-child(3) dt{
		position: absolute;
		top: -20px;
		left: 13%;
		width: 80%;
		height: 100%;
	}
</style>