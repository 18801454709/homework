<template>
<div class="header">
	<div class="header_title">
		<h1>WANG·浩の博客</h1>
	</div>

	<el-menu theme="dark"  class="el-menu-demo" mode="horizontal" @select="handleSelect" :default-active="activeIndex">
		<el-submenu index="1">
		    <template slot="title">列表1</template>
			<div class="nav_li" v-for='(item, key, index) in navData'>
				<el-menu-item :index="item.onedata.id">{{item.onedata.cnname}}</el-menu-item>
			</div>
	 	</el-submenu>
		<el-submenu index="2">
		    <template slot="title">列表2</template>
			<div class="nav_li" v-for='(item, key, index) in twoNavData'>
				<el-menu-item :index="item.id">{{item.cnname}}</el-menu-item>
			</div>
	 	</el-submenu>
	</el-menu>

</div>
</template>
<script>
export default {
	data(){
		return{
			navData:'',
			twoNavData:'',
			activeIndex:'1',
			idData:""

		}
	},
    created(){
        var _this = this;
        this.axios.get('/api/front_article/getNav').then(function (response){
        	// console.log(response)
             _this.navData = response.data.data;

           // console.log(_this.navData)
        }).catch(function(error){
           console.log(error);
        });
    },
    methods: {
      	handleSelect(key, keyPath) {

	    	var _this = this;
	    	this.navData.forEach(function(i){
	    		if(i.onedata.id == key){
	    			_this.twoNavData = i.twodata;
	    		}
	    	})
	    	this.idData = keyPath;

	    	Bus.$emit('idData',this.idData)
	    	// console.log(Bus)
	    	// console.log(key, keyPath)
      	}

    }
}
</script>
<style>
.header_title h1{
	font-size: 50px;
	font-family: '宋体'
}
.header_nav{
	width: 100%;
	padding: 20px 0;
}
.el-menu--dark .el-menu-item, .el-menu--dark .el-submenu__title {
    color: #fff;
    font-size:16px;
}
.el-menu--horizontal .el-submenu .el-submenu__icon-arrow {
    color: #fff;
}
.el-menu--dark {
    background:none ;
}
.el-menu--horizontal .el-submenu .el-submenu__title:hover{
    background:none;
   border-bottom:0;
}
.el-menu--horizontal .el-submenu>.el-menu {
    border: none;
    background: rgba(255,255,255,.8);
}
.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item, .el-menu--horizontal.el-menu--dark .el-submenu .el-submenu-title:hover .el-menu-item:hover{
    color: #075498;
    background: none;
    font-size: 12px;

}
.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item:hover, .el-menu--horizontal.el-menu--dark .el-submenu .el-submenu-title:hover .el-menu-item:hover{
    color: #075498;
    background: none;
}

</style>