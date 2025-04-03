<script>
import Movieitems from './Movieitems.vue'
export default {
    components: {
        Movieitems
    },
    data() {
        return {
            movies: [
                {
                    id: "1",
                    title: "블랙팬서",
                    year: "2020",
                    summary: "블랙팬서 입니다",
                    image: "https://plus.unsplash.com/premium_photo-1719842310360-c766d2bcfbf2?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    id: "2",
                    title: "캡틴 아메리카",
                    year: "2021",
                    summary: "캡틴 입니다",
                    image: "https://images.unsplash.com/photo-1638379036667-ee3e8d663f2d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                    id: "3",
                    title: "어벤저스",
                    year: "2023",
                    summary: "어벤저스 입니다",
                    image: "https://images.unsplash.com/photo-1626278664285-f796b9ee7806?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
            ]
        }
    }
}
</script>
<template>
    <h1>영화 목록</h1>
    <div v-for="movie in movies" :key="movie.id">
        <Movieitems :movie="movie" />
    </div>
</template>