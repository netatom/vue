<script>
export default {
    data() {
        return {
            oldDiscount: 0,
            discount: 5
        }
    },
    watch: {
        discount(oldVal) {
            this.oldDiscount = oldVal -1
        }
    },
    methods: {
        updateDiscount() {
            this.discount += 5   

        }
    }
}
</script>
<template>
    <div class="container">
        <h1>Shop Watcher</h1>
        <div>
            블프 세일
            <strike>이전할인율 {{ oldDiscount }}%</strike>
            <strong>현재할인율 {{ discount }}%</strong>
            <br/>
            <a href="#" @click="updateDiscount" >할인율 증가</a>
        </div>
    </div>
</template>