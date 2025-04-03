<template>
    <div id="header">
        <div class="first">BMW M Series</div>
        <div class="second">BMW M Series 팬 페이지입니다</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    #header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        flex-direction: column;
        height: 200px;
        background-image: url('https://www.bmw.co.kr/content/dam/bmw/common/all-models/m-series/m2-coupe/2018/at-a-glance/bmw-m-series-m2-stage-desktop.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1654569260495.jpg');
        background-repeat: no-repeat;
        background-position: center;

        .first {
            float: right;
            color: white;
            font-weight: 700;
            font-size: 5em;
        }

        .second {
            float: right;
            color: green;
        }
}
</style>