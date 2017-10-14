<template>
    <div class="homeC">
        <div class="content">
            <p></p>
            <p></p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            mas:"1"
        }
    }
}
</script>
<style scoped>
.homeC {
    width: 100%;
    height: auto;
    border: 2px solid #000000;
}

.homeC .content {
    width: 10%;
    min-height: 40px;
    max-height: 80px;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
}

</style>
