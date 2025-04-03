<script>
export default {
    data() {
        return {
            height: '',
            weight: '',
            bmi: '',
            validheight: false,
            validweight: false,
            heightmessage: '',
            weightmessage: ''
        }
    },
    methods: {
        onSubmit() {
            this.validheight = false
            if (this.height.length == 0) {
                this.heightmessage = "키는 필수입력입니다."
            } else if (parseFloat(this.height) < 0 || parseFloat(this.height) > 300) {
                this.heightmessage = "키는 0~300으로 입력바랍니다."
            } else {
                this.heightmessage = ''
                this.validheight = true
            }

            this.validweight = false
            if (this.weight.length == 0) {
                this.weightmessage = "몸무게게는 필수입력입니다."
            } else if (parseFloat(this.wight) < 0 || parseFloat(this.wight) > 1000) {
                this.weightmessage = "몸무게는 0~1000으로 입력바랍니다."
            } else {
                this.weightmessage = ''
                this.validweight = true
            }

            // console.log('키:' + this.height)
            // console.log('몸무게:' + this.weight)
            // 몸무게 / 키의 제곱
            const m_height = this.height / 100.0
            this.bmi = (this.weight / Math.pow(m_height, 2)).toFixed(1)
        }
    }
}
</script>
<template>
    <h2>BMI Form 입니다.</h2>
    <form @submit.prevent="onSubmit">
        <div class="mb-3">
            <label for="height" class="form-label">키</label>
            <input type="text" v-model="height" id="height" class="form-contrl">
            <div v-if="heightmessage.length > 0" class="alert alert-danger" role="alert">
                {{ heightmessage }}
            </div>
        </div>
        <div class="mb-3">
            <label for="weight" class="form-label">몸무게</label>
            <input type="text" v-model="weight" id="weight" class="form-contrl">
            <div v-if="weightmessage.length > 0" class="alert alert-danger" role="alert">
                {{ weightmessage }}
            </div>
        </div>
        <button type="submit" class="btn btn-primary">계산</button>

    </form>
    <br />
    <div class="card">
        <div class="card-body">
            키: {{ height }} cm
            <br />
            몸무게: {{ weight }} kg
            <br />
            BMI: {{ bmi }} kg
        </div>
    </div>
</template>