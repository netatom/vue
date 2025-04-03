<template>
    <div>
        <h2>Detail</h2>
        <ul>
            <li v-if="park">
                <p>{{ park.title }}입니다.</p>
                <img :src="park.img" alt="Park Image">
            </li>
        </ul>
    </div>
    <div v-if="else">
        There is no Park.
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    data() {
        return {
            parks: [
                {idx:1, title: '공원 이미지 1', img: 'https://img.freepik.com/free-photo/promenade-beautiful-city-park_1127-3520.jpg'},
                {idx:2, title: '공원 이미지 2', img: 'https://media.istockphoto.com/id/841278554/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4-%EC%95%84%EC%B9%A8%EC%9E%85%EB%8B%88%EB%8B%A4-%EB%8B%A8%EA%B6%A4-%EA%B3%B5%EA%B3%B5-%EA%B3%B5%EC%9B%90%EC%9D%98-%ED%91%B8%EB%A5%B8-%EC%9E%94%EB%94%94-%ED%95%84%EB%93%9C.jpg?s=612x612&w=0&k=20&c=iYZ8LQ9DK1P9y-C7r47WLHTrtVR-_qY8XwuJyCweTdI='},
                {idx:3, title: '공원 이미지 3', img: 'https://img.freepik.com/free-photo/beautiful-park_1417-1417.jpg'}
            ]
        }
    },
    computed: {
        park() {
            const id = parseInt(this.$route.params.id)
            return this.parks.find(park => park.idx === id)
        }
    }
}
</script>