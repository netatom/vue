<template>
    <div>
        <h2>Home입니다.</h2>
        <ul>
            <li v-for="park in parks">
                <router-link :to="`/park/${park.id}`">{{ park.title }}</router-link>
            </li>
        </ul>
        <p> Welcom to Home</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            parks: [
                {id:1, title: '공원1'},
                {id:2, title: '공원2'},
                {id:3, title: '공원3'}
            ]
        }
    }
}
</script>