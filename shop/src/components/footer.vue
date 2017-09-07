<template>
	<div class="footer">
		<div class="payment" v-for='i in settle'>
			<div class="radiol">
				<div></div>
			</div>
			<div class="allMoney">
				<span class='allcheck' v-text='i.allcheck'></span>
				<span class='allmon'><span v-text='i.allmon'></span><span class='orange'><b v-text='i.icon'></b><b v-text='i.money'></b></span></span>
			</div>
			<div class="button">
				<p><span v-text='i.button'></span><span v-text='i.buttonNum'></span></p>
			</div>
		</div>
		<div class="foot">
			<dl v-for='i in foot'>
				<dt><img :src="i.footerImg" alt=""></dt>
				<dd v-text='i.footerName'></dd>
			</dl>
		</div>
	</div>
</template>
<script>
	export default{
		name: "footer",
		data(){
			return{
				"foot":[
					{
						'footerImg': "../../static/images/footer_1.png",
						'footerName': "首页"
					},
					{
						'footerImg': "../../static/images/footer_2.png",
						'footerName': "微淘"
					},
					{
						'footerImg': "../../static/images/footer_3.png",
						'footerName': "消息"
					},
					{
						'footerImg': "../../static/images/footer_4.png",
						'footerName': "购物车"
					},
					{
						'footerImg': "../../static/images/footer_5.png",
						'footerName': "我的淘宝"
					}
				],
				"settle":[
					{
						"allcheck": "全选",
						"allmon": "合计",
						"icon": "￥",
						"money": "0",
						"button": "结算",
						"buttonNum": "(0)"
					}
				]
			}
		}
	}
</script>
<style scoped>
	.footer{
		width: 100%;
		height: 95px;
		background-color: #fff;
		border-top: 1px solid #eee;
		overflow: hidden;
	}
	.footer .payment{
		width: 100%;
		height: 45px;
		border-top: 1px solid #dcdcdc;
		display: -webkit-flex;
		font-size: 14px;
	}
	.footer .payment .radiol{
		width: 35px;
		height: 100%;
		float: left;
	}
	.footer .payment .radiol div{
		width: 18px;
		height: 18px;
		border-radius: 50%;
		border: 1px solid #666;
		float: left;
		margin-left: 6px;
		margin-top: 13px;
	}
	.footer .payment .allMoney{
		flex: 1;
		line-height: 45px;
	}
	.footer .payment .allMoney .allcheck{
		float: left;
		margin-left: 5px;
	}
	.footer .payment .allMoney .allmon{
		float: right;
		margin-right: 10px;
	}
	.footer .payment .allMoney .allmon .orange{
		color: #ff8b02;
	}
	.footer b{
		font-weight: normal;
	}
	.footer .payment .button{
		width: 100px;
		height: 100%;
		background: url('../../static/images/button.png');
	}
	.footer .payment .button{
		color: #fff;
		font-size: 14px;
		text-align: center;
		line-height: 44px;
	}
	.footer .foot{
		width: 100%;
		height: 50px;
		border-top: 1px solid #dcdcdc;
		display: -webkit-flex;
	}
	.footer .foot dl{
		flex: 1;
		text-align: center;
		font-size: 12px;
	}
	.footer .foot dl dt{
		width: 50%;
		margin: auto;
		margin-top: 2px;
	}
	.footer .foot dl dt img{
		width: 100%;
		height: auto;
	}
	.footer .foot dl dd{
	}
</style>