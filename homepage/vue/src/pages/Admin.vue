<template>
    <div>
        <h2>Admin</h2>
        <p>{{ user }}님, 안녕하세요</p>
        <button @click="logout">로그아웃</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: sessionStorage.getItem('user')
        }
    },
    methods: {
        logout() {
            sessionStorage.removeItem('user')
            this.$router.push('/')
        }
    }
}
</script>