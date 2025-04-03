<script>
export default {
    data() {
        return {
            name: '',
            request_budget: '',
            budget: '',
            result: ''
        }
    },
    methods: {
        onSubmit() {
            const set_request_budget = this.request_budget.replace(/[\[\]"]/g, '');
            const set_budget = this.budget.replace(/[\[\]"]/g, '');
            console.log('부서이름:' + this.name)
            console.log('신청금:' + set_request_budget)
            console.log('예산:' + set_budget)
            this.result = set_request_budget;

            try {
                const requet_array = set_request_budget.split(',').map(val => parseInt(val.trim()));
                const budget_price = parseInt(set_budget);
                if (isNaN(budget_price)) {
                    alert("enter number");
                    return;
                }

                requet_array.sort((a, b) => a - b); // 오름차순정렬

                let total = 0;
                let count = 0;
                for (let i = 0; i < requet_array.length; i++) {
                    if (total + requet_array[i] <= budget_price) {
                        total += requet_array[i];
                        count++;
                    } else {
                        break;
                    }
                }

                this.result = count;
            } catch (e) {
                console.error('err:', e);
            }
      
        }
    }
}
</script>
<template>
    <h2>Code - 예산</h2>
    <form @submit.prevent="onSubmit">
        <div class="mb-3">
            <label for="name" class="form-label">부서이름</label>
            <input type="text" v-model="name" id="name" class="form-contrl">
        </div>
        <div class="mb-3">
            <label for="request_budget" class="form-label">신청금</label>
            <input type="text" v-model="request_budget" id="request_budget" class="form-contrl">
        </div>
        <div class="mb-3">
            <label for="budget" class="form-label">예산</label>
            <input type="text" v-model="budget" id="budget" class="form-contrl">
        </div>
        <div class="mb-3">
            <button type="submit" class="btn btn-primary">계산</button>
        </div>
    </form>
    <br />
    <div class="budget">
        <div class="budget-body">
            부서이름: {{ name }}
            <br />
            신청금: {{ request_budget }}
            <br />
            예산: {{ budget }}
            <br />
            결과: {{ result }}
        </div>
    </div>
</template>