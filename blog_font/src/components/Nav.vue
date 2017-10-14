<template>
  <div class="Nav">
    <div class="Nav_top">
      <h3>个人博客</h3>
      <nav>
        <router-link to='homeC' tag='p'>首页</router-link>
        <router-link to='Article' tag='p'>技术文章</router-link>
        <router-link to='Guestbook' tag='p'>留言板</router-link>
      </nav>
    </div>

  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.Nav {
  width: 100%;
  height: auto;
}

.Nav .Nav_top {
  width: 100%;
  height: 50px;
  background: black;
}

.Nav .Nav_top h3 {
  color: #fff;
  font-weight: normal;
  line-height: 50px;
  margin-left: 15px;
  float: left;
}
.Nav nav {
  display: -webkit-flex;
  color:#fff;
  margin-left: 180px;
  float: left;
  height: 50px;
  line-height: 50px;
}
.Nav nav p{
  padding: 0 40px;
  cursor: pointer;
  font-size: 14px;
}
.Nav nav p:hover{
  background: #333
}
</style>
