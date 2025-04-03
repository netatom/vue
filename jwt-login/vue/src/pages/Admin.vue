<template>
    <div>
        <h2>Admin</h2>
        <p v-if="message">{{ message }}</p>
        <button @click="logout">로그아웃</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            // user: sessionStorage.getItem('user')
            message: ''
        }
    },
    async mounted() {
        const token = localStorage.getItem('token')
        console.log(token)

        if (!token) {
            this.$router.push('/login')
            return
        }

        // console.log("after console")
        try {
            const res = await axios.get('http://localhost:3040/api/protected', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            this.message = res.data.message
            // console.log(this.message)
        } catch (err) {
            this.message = '접근하실 수 없습니다'
            this.$router.push('/login')
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