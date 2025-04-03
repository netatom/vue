<template>
    <div>
        <h2>Login</h2>
        <input type="text" v-model="usernmae" placeholder="Username"/>
        <input type="password" v-model="password" placeholder="Password"/>
        <button @click="login">Login</button>
        <p v-if="error" style="color: red;">{{ error }}</p>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            usernmae: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async login() {
            try {
                const res = await axios.post('http://localhost:3040/api/login', {
                        username: this.usernmae,
                        password: this.password
                    })
                const token = res.data.token
                console.log(token)
                if(token) {
                    localStorage.setItem('token', token)
                    this.$router.push('/admin')
                } else {
                    this.error = data.message || '로그인 실패'
                }
            } catch (err) {
                this.error = 'Network error'
            }
        }
    }
}
</script>