<template>
  <div class="Index">
      <Header_></Header_>
      <Section_></Section_>
      <Footer_></Footer_>
  </div>
</template>
<script>
import Header_ from './Header'
import Section_ from './Section'
import Footer_ from './Footer'
export default {
  name: 'Index',
  components:{
    Header_,
    Section_,
    Footer_
  }
}
</script>
<style scoped>
  .Index{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    bottom: 0;
    font-size: 16px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
</style>
