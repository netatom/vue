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
                const res = await fetch('http://localhost:3000/api/login', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        username: this.usernmae,
                        password: this.password
                    })
                })

                const data = await res.json()
                if(data.success) {
                    sessionStorage.setItem('user', data.username)
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