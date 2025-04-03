<template>
    <div id="content">
        <p v-if="photoNum">
            <img :src="`/photo/${photoNum}.jpg`" alt="">
        </p>
        <div v-else>
            <p>이곳은 BMW 팬 페이지 입니다</p>
            <p>메뉴를 클릭하시면 사진을 구경하실 수 있습니다.</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            photoNum: 1
        }
    },
    created() {
        this.photoNum = this.$route.params.photoNum;
        console.log(this.$route.params.photoNum);
    }    
}
</script>
<style scoped>
    #content {
        float: right;
        width: 75%;
    }
    #content::after {
        content: "";
        display: block;
        clear: both;
    }
</style>