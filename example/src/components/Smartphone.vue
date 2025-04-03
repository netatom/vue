<script>
export default {
    data() {
        return {
            phone: ""
        }
    }
}
</script>
<template>
    <div class="form">
        <h1>당신의 폰: <input type="text" v-model="phone"></h1>
    </div>
    <h1>{{ phone }}</h1>

    <img v-if="phone == 'S25'"
        src="https://images.unsplash.com/photo-1578925518470-4def7a0f08bb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width="200" height="200">

    <img v-else-if="phone == 'S24'"
        src="https://media.istockphoto.com/id/1854863653/ko/%EC%82%AC%EC%A7%84/%EB%AC%B4%EB%8F%84%ED%9A%8C%EC%97%90%EC%84%9C-%EC%9C%A0%EC%BE%8C%ED%95%98%EA%B2%8C-%EC%88%98%EB%8B%A4%EB%A5%BC-%EB%96%A8%EA%B3%A0-%EC%9E%88%EB%8A%94-%EC%9A%B0%EC%95%84%ED%95%9C-%EC%BB%A4%ED%94%8C.jpg?s=1024x1024&w=is&k=20&c=3-TQGzDOWPoH5oEHnQX5NywRFAptw-mBnCMoEM1-djA="
        width="200" height="200">

    <img v-else-if="phone == 'S23'"
        src="https://images.unsplash.com/photo-1517637633369-e4cc28755e01?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width="200" height="200">

    <img v-else
        src="https://images.unsplash.com/photo-1473649085228-583485e6e4d7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width="200" height="200">
</template>