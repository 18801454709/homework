<template>
	<div class="section">

		<nav>
			<router-link to="/hot" tag='p'>热门</router-link>
			<router-link to="/classify" tag='p'>分类</router-link>
			<router-link to="/boutique" tag='p'>精品</router-link>
			<router-link to="/streaming" tag='p'>直播</router-link>
			<router-link to="/broadcast" tag='p'>广播</router-link>
		</nav>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	
</script>
<style scoped>
	.section{
		flex: 1;
		overflow-y: auto;
	}
	.section nav{
		width: 100%;
		height: 38px;
		line-height: 38px;
		background: #f3f4f6;
		display: -webkit-flex;
	}
	.section nav p{
		flex: 1;
		text-align: center;
		font-size: 12px;
	}
</style>