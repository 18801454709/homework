<template>
	<div class='section'>
		<science_></science_>
		<tianmao_></tianmao_>
	</div>
</template>

<script>
import science_ from "./modules/science"
import tianmao_ from "./modules/tianmao"
	export default{
		name: "section",
		components: {
			science_,
			tianmao_
		}
	}
</script>

<style scoped>
	.section{
		flex: 1;
		background-color: #f6f6f6;
		overflow-y: auto;
	}
</style>