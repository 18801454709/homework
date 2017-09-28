<template>
    <div class="Header">
        <div class="search">
            <div class="input">
                <input type="text" placeholder="京东生鲜超级品类日，领券满199减80！">
            </div>
            <b>JD</b>
            <i class='iconfont icon-fangdajing'></i>
        </div>
        <span>
            登录
        </span>
    </div>
</template>     
<script>
export default {

}
</script>
<style scoped>
.Header {
    width: 100%;
    height: 45px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    display: -webkit-flex;
}

.Header .search {
    background: #fff;
    border-radius: 20px;
    margin: 7px 10px;
    flex: 1;
    position: relative;
}

.Header span {
    display: inline-block;
    padding: 0 7px 0 0;
    line-height: 45px;
    color: #fff;
    font-size: 14px;
}

.Header .search .input {
    width: 100%;
    padding-left: 56px;
    padding-right: 10px;
    box-sizing: border-box;
}

.Header .search .input input {
    width: 95%;
    border: none;
    height: 30px;
    outline: none;
}

.Header .search b {
    position: absolute;
    left: 13px;
    top: 4px;
    color: red;
    font-size: 15px;
}

.Header .search i {
    position: absolute;
    left: 34px;
    top: 7px;
    font-size: 15px;
    color: #ccc
}
</style>
  