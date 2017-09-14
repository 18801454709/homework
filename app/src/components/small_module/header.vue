<template>
	<div class='header'>
		<i class='iconfont icon-email'></i>
		<i class='iconfont icon-help'></i>
		<i class='iconfont icon-fenxiang9'></i>
		<div class="search">
			<input type="text" placeholder="双复嘟嘟|采采|鬼故事">
		</div>
	</div>
</template>
<script>
	
</script>
<style scoped>
	.header{
		width: 100%;
		height: 45px;
		background: #fff;
		border-bottom: 1px solid #ddd;
		position: relative;
	}
	.header .search{
		width: 65%;
		height: 28px;
		background: #f0f1f6;
		border-radius: 20px;
		margin-left: 42px;
		margin-top: 8px;
	}
	.header .search input{
		background: none;
		border: none;
		width: 90%;
		height: 30px;
		padding-left: 30px;
		outline: none;
		font-size: 12px;
	}
	.header i{
		line-height: 45px;
	}
	.header .icon-email{
		position: absolute;
		left: 10px;
		top: 0px;
	}
	.header .icon-help{
		position: absolute;
		right: 40px;
		top: 2px;
		font-size: 18px;
	}
	.header .icon-fenxiang9{
		position: absolute;
		right: 10px;
		top: 0px;
		font-size: 20px;
	}
</style>