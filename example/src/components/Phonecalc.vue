<script>
export default {
    data() {
        return {
            name: '',
            original_price: '',
            pay_period: '',
            interest: '',
            result: ''
        }
    },
    methods: {
        onSubmit() {
            console.log('폰이름:' + this.name)
            console.log('할부원금:' + this.original_price)
            console.log('납입기간:' + this.pay_period)
            console.log('연이율:' + this.interest)
            // 몸무게 / 키의 제곱
            // const m_height = this.height / 100.0
            // this.bmi = (this.weight / Math.pow(m_height, 2)).toFixed(1)
            // this.result = (this.original_price * this.interest) / (1 - (1 + this.pay_period);
            const result_interest = this.interest / 12;
            this.result = (this.original_price * result_interest) / (1 - Math.pow(1 + result_interest, this.pay_period));
        }
    }
}
</script>
<template>
    <h2>Phoen 할부금 입니다.</h2>
    <form @submit.prevent="onSubmit">
        <div class="mb-3">
            <label for="name" class="form-label">폰이름</label>
            <input type="text" v-model="name" id="name" class="form-contrl">
        </div>
        <div class="mb-3">
            <label for="original_price" class="form-label">할부원금</label>
            <input type="text" v-model="original_price" id="original_price" class="form-contrl">
        </div>
        <div class="mb-3">
            <label for="pay_period" class="form-label">납입기간</label>
            <input type="text" v-model="pay_period" id="pay_period" class="form-contrl">
        </div>
        <div class="mb-3">
            <label for="interest" class="form-label">연이율</label>
            <input type="text" v-model="interest" id="interest" class="form-contrl">
        </div>
        <button type="submit" class="btn btn-primary">계산</button>

    </form>
    <br />
    <div class="card">
        <div class="card-body">
            폰이름름: {{ name }} cm
            <br />
            할부원금: {{ original_price }} kg
            <br />
            납입기간: {{ pay_period }} cm
            <br />
            연이율: {{ interest }} kg
            <br />
            결과: {{ -result }} kg
        </div>
    </div>
</template>