<template>
	<div class='main'>
		<heads ref="head"></heads>
	    <div class="content">
			<div class="con_main">
				<leftcontent></leftcontent>
				<div class="right_content">
					<router-view></router-view>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
import head from './head/head.vue'
import leftcontent  from './content/left_content.vue'
export default {
	data(){
		return{

		}
	},
	components:{
		heads:head,
		leftcontent:leftcontent
	}
}
</script>
<style>


</style>