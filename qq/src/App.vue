<template>
  <div id="app">
    <header_></header_>
    <section_></section_>
    <footer_></footer_>
  </div>
</template>

<script>
import header_ from './components/header'
import section_ from './components/section'
import footer_ from './components/footer'

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
  width: 100%;
  display: -webkit-flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  bottom: 0;
  font-size: 16px;
}
</style>
