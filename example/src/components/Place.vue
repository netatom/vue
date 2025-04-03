<script>
export default {
    data() {
        return {
            place: '제주도',
            my_src: 'https://media.istockphoto.com/id/621616246/ko/%EC%82%AC%EC%A7%84/%EC%84%B1%EC%82%B0-%EC%9D%BC%EC%B6%9C-%EB%B4%89%EC%97%90%EC%84%9C-%EC%9D%BC%EC%B6%9C-%EC%A0%9C%EC%A3%BC-%EC%84%AC-south-korea.jpg?s=1024x1024&w=is&k=20&c=BNHNqPVsSSK-ePx3WHcf0DpyWmGCdpqmMa1-PQOfFkg='
        }
    },
    props: ['place2', 'pic2'] // 부모에서 place2와 pic2 받아오겠다는 뜻
}
</script>
<template>
    <h1>{{ '내가 가고싶은곳1: ' + place }}</h1>
    <img :src="my_src" />

    <h1>내가 가고 싶은 곳2: <span v-text="place2" /></h1>
    <img :src="pic2" />
</template>