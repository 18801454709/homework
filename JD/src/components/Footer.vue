<template>
    <div class="Footer">
        <dl>
            <dt><img src="../../static/images/footer/a-recommend.png" alt=""></dt>
        </dl>
        <dl>
            <dt><img src="../../static/images/footer/n-cart.png" alt=""></dt>
        </dl>
        <dl>
            <dt><img src="../../static/images/footer/n-catergry.png" alt=""></dt>
        </dl>
        <dl>
            <dt><img src="../../static/images/footer/n-find.png" alt=""></dt>
        </dl>
        <dl>
            <dt><img src="../../static/images/footer/n-me.png" alt=""></dt>
        </dl>
    </div>
</template>     
<script>
export default {
  
}
</script>
<style scoped>
    .Footer{
        width: 100%;
        height: 45px;
        display: -webkit-flex;
        border-top: 1px solid #eee;
    }
    .Footer dl{
        flex: 1;
        overflow: hidden;   
    }
    .Footer dl dt{
        width: 80%;
        height: 100%;
        margin: auto;
    }
    .Footer dl dt img{
        width: 100%;
        height: auto;
    }
    
</style>
  