<script>
export default {
    data() {
        return {
            today: '',
            terms: '',
            privacies: '',
            result: ''
        }
    },
    methods: {
        onSubmit() {
            const set_today = this.today.replace(/[\[\]"]/g, '');
            const set_terms = this.terms.replace(/[\[\]"]/g, '');
            const set_privacies = this.privacies.replace(/[\[\]"]/g, '');
            console.log('오늘:' + set_today)
            console.log('유효기간:' + set_terms)
            console.log('개인정보:' + set_privacies)
            this.result = set_terms;

            try {
                // terms
                const term_array = set_terms.split(',').map(s => s.trim());
                const term_map = {};
                for (let t of term_array) {
                    let [type, period] = t.split(' ');
                    term_map[type] = parseInt(period);
                }

                // 날짜 일수 변환
                const get_today = (date_value) => {
                    const [y, m, d] = date_value.split('.').map(Number);
                    return (y * 12 * 28) + (m * 28) + d;
                };

                const today_day = get_today(set_today);

                // privacies 문자열처리
                const privacy_array = set_privacies.split(',').map(s => s.trim());
                const result_array = [];

                for (let i = 0; i < privacy_array.length; i++) {
                    const [date_value, term_type] = privacy_array[i].split(' ');
                    const collect_day = get_today(date_value);
                    const expire_day = collect_day + (term_map[term_type] * 28) - 1;

                    if (expire_day < today_day) {
                        result_array.push(i + 1); 
                    }
                }

                this.result = JSON.stringify(result_array);
            } catch (e) {
                console.error('err:', e);
            }
      
        }
    }
}
</script>
<template>
    <h2>Code - 개인정보</h2>
    <form @submit.prevent="onSubmit">
        <div class="mb-3">
            <label for="today" class="form-label">오늘</label>
            <input type="text" v-model="today" id="today" class="form-contrl">
        </div>
        <div class="mb-3">
            <label for="terms" class="form-label">유효기간</label>
            <input type="text" v-model="terms" id="terms" class="form-contrl">
        </div>
        <div class="mb-3">
            <label for="privacies" class="form-label">개인정보</label>
            <input type="text" v-model="privacies" id="privacies" class="form-contrl">
        </div>
        <div class="mb-3">
            <button type="submit" class="btn btn-primary">계산</button>
        </div>
    </form>
    <br />
    <div class="privacies">
        <div class="privacies-body">
            오늘: {{ today }}
            <br />
            유효기간: {{ terms }}
            <br />
            개인정보: {{ privacies }}
            <br />
            결과: {{ result }}
        </div>
    </div>
</template>