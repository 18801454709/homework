<template>
  <div class="appl">
  	<header_></header_>
  	<section_></section_>
  	<footer_></footer_>
  </div>
</template>

<script>
import header_ from '@/components/small_module/header'
import section_ from '@/components/small_module/section'
import footer_ from '@/components/small_module/footer'

export default {
  name: 'appl',
  components: {
  	header_,
  	section_,
  	footer_
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

.appl {
  font-size: 16px;
  width: 100%;
  display: -webkit-flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
}
</style>
