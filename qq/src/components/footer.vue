<template>
	<div class="footer">
		<dl>
			<dt><img src="../../static/images/footer_1.png" alt=""></dt>
			<dd>消息</dd>
		</dl>
		<dl>
			<dt><img src="../../static/images/footer_2.png" alt=""></dt>
			<dd>消息</dd>
		</dl>
		<dl>
			<dt><img src="../../static/images/footer_3.png" alt=""></dt>
			<dd>消息</dd>
		</dl>
	</div>
</template>
<script>
	
</script>
<style scoped>
	.footer{
		width: 100%;
		height: 53px;
		border-top: 1px solid #ccc;
		display: -webkit-flex;
	}
	.footer dl{
		flex: 1;
	}
	.footer dl dt{
		width: 48%;
		height: 50%;
		margin: auto;
	}
	.footer dl dt img{
		width: 100%;
		height: auto;
		margin-left: -3px;
	}
	.footer dl dd{
		height: 45%;
		font-size: 13px;
		text-align: center;
		padding-top: 2px;
		box-sizing: border-box;
	}
	.footer dl:nth-child(1) dd{
		color: #42bcfb
	}
</style>