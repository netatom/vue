<script>
export default {
    data() {
        return {
            want: '',
            want_number: '',
            discount: '',
            result: ''
        }
    },
    methods: {
        onSubmit() {
            const set_want = this.want.replace(/[\[\]"]/g, '');
            const set_number = this.want_number.replace(/[\[\]"]/g, '');
            const set_discount = this.discount.replace(/[\[\]"]/g, '');
            console.log('제품:' + set_want)
            console.log('제품수량:' + set_number)
            console.log('할인품목:' + set_discount)

            try {
                const want_array = set_want.split(',').map(s => s.trim());
                const number_array = set_number.split(',').map(n => parseInt(n.trim()));
                const discount_array = set_discount.split(',').map(s => s.trim());

                const want_map = {};
                for (let i = 0; i < want_array.length; i++) {
                    want_map[want_array[i]] = number_array[i];
                }
                let result_count = 0;

                // 10일
                for (let i = 0; i <= discount_array.length - 10; i++) {
                    const slice = discount_array.slice(i, i + 10);
                    const count_map = {};
                    // 10일 구간
                    for (let i = 0; i < slice.length; i++) {
                        const item = slice[i];
                        if (count_map[item] === undefined) {
                            count_map[item] = 1;
                        } else {
                            count_map[item] = count_map[item] + 1;
                        }
                    }

                    // 일치확인 후 더하기
                    let match = true;
                    for (let key in want_map) {
                        let wanted_count = want_map[key];          // 수량
                        let discounted_count = count_map[key];     // 현재할인

                        if (discounted_count === undefined || discounted_count < wanted_count) {
                            match = false;
                            break;
                        }
                    }
                    if (match) {
                        result_count++;
                    }
                }

                this.result = result_count;

                
            } catch (error) {
                console.error('err:', e);
            }
      
        }
    }
}
</script>
<template>
    <h2>Code - 할인행사</h2>
    <form @submit.prevent="onSubmit">
        <div class="mb-3">
            <label for="want" class="form-label">제품</label>
            <input type="text" v-model="want" id="want" class="form-contrl">
        </div>
        <div class="mb-3">
            <label for="want_number" class="form-label">제품수량</label>
            <input type="text" v-model="want_number" id="want_number" class="form-contrl">
        </div>
        <div class="mb-3">
            <label for="discount" class="form-label">할인품목</label>
            <input type="text" v-model="discount" id="discount" class="form-contrl">
        </div>
        <div class="mb-3">
            <button type="submit" class="btn btn-primary">계산</button>
        </div>
    </form>
    <br />
    <div class="discount">
        <div class="discount-body">
            제품: {{ want }}
            <br />
            제품수량: {{ want_number }}
            <br />
            할인품목: {{ discount }}
            <br />
            결과: {{ result }}
        </div>
    </div>
</template>