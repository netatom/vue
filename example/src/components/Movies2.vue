<script>
import Movieitems from './Movieitems.vue'
export default {
    components: {
        Movieitems
    },
    data() {
        return {
            movies: []
        }
    },
    methods: {
        async fetchMovies() {
            const res = await fetch('http://localhost:3000/api/movie')
            const data = await res.json()
            console.log(data)
            return data
        }
    },
    async mounted() {
        this.movies = await this.fetchMovies()
    }
}
</script>
<template>
    <h1>영화 목록</h1>
    <div v-for="movie in movies" :key="movie.id">
        <Movieitems :movie="movie" />
    </div>

</template>