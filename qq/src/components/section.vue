<template>
	<div class="section">
		<search_></search_>
		<advices_></advices_>		
	</div>
</template>
<script>
import advices_ from './smallModule/advices'
import search_ from './smallModule/search'
	export default {
		name: 'section',
		components: {
			advices_,
			search_
		}
	}
</script>
<style scoped>
	.section{
		flex: 1;
		width: 100%;
		overflow-y: auto
	}
</style>