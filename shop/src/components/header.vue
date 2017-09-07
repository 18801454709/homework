<template>
	<div class='header'>
		<h4 v-text='titleName'></h4><span v-text='titleNameNum'></span>
		<span class='compile' v-text='bianji'></span>
	</div>
</template>
<script>
	export default{
		name: 'header',
		data(){
			return{
				"titleName": "购物车",
				"titleNameNum":"(102)",
				"bianji": "编辑"
			}
			
		}
	}
</script>
<style scoped>
	.header{
		width: 100%;
		height: 45px;
		background-color: #ff5d00;
		line-height: 45px;
		color: #fff;
		position: relative;
	}
	.header h4{
		text-align: center;
		font-weight: normal;
		font-size: 16px;
	}
	.header span{
		position: absolute;
		top: 2px;
		right: 33%;
		font-size: 12px;
	}
	.header .compile{
		position: absolute;
		right: 10px;
		top: 2px;
		font-size: 12px;
	}
</style>