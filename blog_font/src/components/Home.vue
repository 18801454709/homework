<template>
  <div class="Home">
    <Nav_></Nav_>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Nav_ from './Nav';
export default {
  name: 'Home',
  data() {
    return {
      
    }
  },
  components: {
    Nav_
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Home {
  width: 100%;
  height: 1080px;
  position: relative;
  background: #eee;
  /*background: url('../../static/images/bg.jpg') no-repeat;*/
  background-size: 100% auto;
}
.Home .content{
  padding: 30px 40px;
}
</style>
