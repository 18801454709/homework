<template>
	<div class="rightCon">

		<ul class="ulist">
			<li>
				<div class="ulist_img">
					<div class="img">
						<img src="images/1.jpg" alt="">
					</div>
				</div>
				<div class="ulist_con">
					<h2><a href="javascript:;">VUE 的使用</a></h2>
					<p>Vue.js (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。</p>

					<div class="rate">
						<el-rate
						    v-model="value"
						    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
						</el-rate>
					</div>
				</div>
			</li>
			<li>
				<div class="ulist_img">
					<div class="img">
						<img src="images/3.jpg" alt="">
					</div>
				</div>
				<div class="ulist_con">
					<h2><a href="javascript:;">VUE 的使用</a></h2>
					<p>Vue.js (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。</p>

					<div class="rate">
						<el-rate
						    v-model="value"
						    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
						</el-rate>
					</div>
				</div>
			</li>
			<li>
				<div class="ulist_img">
					<div class="img">
						<img src="images/5.jpg" alt="">
					</div>
				</div>
				<div class="ulist_con">
					<h2><a href="javascript:;">VUE 的使用</a></h2>
					<p>Vue.js (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。</p>

					<div class="rate">
						<el-rate
						    v-model="value"
						    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
						</el-rate>
					</div>
				</div>
			</li>
		</ul>

	</div>
</template>
<script>
export default {
	data(){
		return{
			id:'',
			value: null,
			navData:''
		}
	},
    created(){
        var _this = this;
        Bus.$on('idData',function(data){
    		console.log(data)
        	this.id = data[1]
        	console.log(this.id)
        })
        this.axios.get('/api/front_article/getArticle',this.id).then(function (response){
        	// console.log('121')
        	// console.log(response)
             _this.navData = response.data.data;

           // console.log(_this.navData)
        }).catch(function(error){
           console.log(error);
        });


    },
    mounted(){

    }
}
</script>
<style>
.ulist{
	padding: 10px 10px;
}
.ulist li{
	width: 100%;
	height: 200px;
	background: #fff;
	margin-bottom: 10px;
	border-radius:10px;
	display: flex;
	padding: 10px;

}
.ulist_img{
	width: 140px;
	height: 100%;
}
.img {
	width: 100%;
	height: 100%;
}
.img img{
	width: 100%;
	height: 100%;
}
.ulist_con{
	flex:1;
	padding:0 20px;
	position: relative;
}
.ulist_con h2{
	width: 100%;
	line-height: 30px;
	border-bottom: 1px dashed #ccc;
	color: #333;
}
.ulist_con h2 a{
	font-size: 18px;
}
.ulist_con p{
	color: #666;
	line-height: 20px;
	padding: 10px 0;
}
.rate{
	width: 100%;
	position: absolute;
	bottom:0;
	left: 0;
}
.el-rate{
	position: absolute;

	bottom:0;
	right:10px;
}


</style>