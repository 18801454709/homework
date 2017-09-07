<template>
  <div id="app">
    <!-- 标题 -->
    <header_></header_>
    <!-- 内容 -->
    <section_></section_> 
    <!-- 页脚 -->
    <footer_></footer_>
  </div>
</template>

<script>

import header_ from "./components/header"
import section_ from "./components/section"
import footer_ from "./components/footer"
export default {
  name: 'app',
  components: {
    header_,
    section_,
    footer_
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  display: -webkit-flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  font-size: 16px;
}
</style>
