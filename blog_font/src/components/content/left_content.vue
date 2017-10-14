<template>
	<div class="left_content">
		<div class="left_main">
			<el-breadcrumb separator="/" >
				<el-breadcrumb-item >
					<router-link tag='span' :to='{name:"/"}'>
						首页
	        		</router-link>
				</el-breadcrumb-item>
				<el-breadcrumb-item>
					<router-link tag='span' :to='{name:"rightCon",params:{id:"11"}}'>
						{{oneCon}}
	        		</router-link>
				</el-breadcrumb-item>
				<el-breadcrumb-item>
					<router-link tag='span' :to='{name:"rightCon",params:{id:"11"}}'>
						{{twoCon}}
	        		</router-link>
				</el-breadcrumb-item>
			</el-breadcrumb>
			<datas></datas>
			<div class="select_list">
			</div>
		</div>

	</div>
</template>
<script>
import data from './data.vue'
export default {
	data(){
		return{
			one:"",
			two:"",
			oneCon:'',
			twoCon:'',
			navData:"",
			twoData:""

		}
	},
	components:{
		datas:data
	},
	mounted(){
		// console.log(this.$parent.$children[0]);

		var _this = this;
        this.axios.get('/api/front_article/getNav').then(function (response){

            _this.navData = response.data.data;

	    	_this.navData.forEach(function(i){
	    		Bus.$on('idData',function(data){
					if(data[0]=='1'){
						_this.one = data[1];
						if(i.onedata.id == data[1]){
			    			_this.oneCon = i.onedata.cnname;
			    			_this.twoCon = '';
			    		}

					}else{

						_this.two = data[1];
						 if(i.onedata.id == _this.one){
			   			_this.twoData = i.twodata;
			   				_this.twoData.forEach(function(j){
			    				if(j.id == data[1]){
					    			_this.twoCon = j.cnname;
					    		}
			     			})
			    		}
					}
				})
	    	})

        }).catch(function(error){
           console.log(error);
        });
	}
}
</script>
<style>
	.el-breadcrumb{
		width: 100%;
		background: #fff;
		padding: 10px;
	}
	/*.el-breadcrumb__item__inner, .el-breadcrumb__item__inner a {

	}
	.el-breadcrumb__item:last-child .el-breadcrumb__item__inner, .el-breadcrumb__item:last-child .el-breadcrumb__item__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__item__inner a:hover,
	.el-breadcrumb__item:last-child .el-breadcrumb__item__inner:hover {

	}*/


</style>
