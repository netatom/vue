<script>
export default {
    data() {
        return {
            city_list: [
                'Seoul',
                'Busan',
                'Daejoen',
                'Osaka',
                'NewYork',
                'LosAngeles',
                'SanFrancisco',
                'LasVagas'
            ],
            input: '',
            methodFilterList: [],
            input2: '',
            // methodFilterList2는 computed에 있으므로 선언 안함
            input3: '',
            methodFilterList3: []
        }
    },
    created() {
        this.searchMethod()
    }, 
    computed: {
        methodFilterList2() {
            return this.city_list.filter(item =>
                    item.toLowerCase().includes(this.input2.toLowerCase())
                )
        }
    },
    watch: {
        input3: {
            handler() {
                this.methodFilterList3 =
                    this.city_list.filter(item => item.toLowerCase().includes(
                        this.input3.toLowerCase()
                    ))
            },
            immediate: true // 시작할때 로딩
        }
    },
    methods: {
        searchMethod() {
            // console.log('searchMethod')
            this.methodFilterList =
                this.city_list.filter(item =>
                    item.toLowerCase().includes(this.input.toLowerCase())
                )
        }
    }
}
</script>
<template>
    <div class="container">
        <h1>메서드, 워처, 프로퍼티</h1>
            <div class="col">
            <input type="text" placeholder="가고싶은도시" v-model="input" 
            @keyup="searchMethod"/>
                <ul>
                    <li v-for="(item, i) in methodFilterList">
                        {{ item }}
                    </li>
                </ul>
            </div>
            <div class="col">
            <input type="text" placeholder="살고싶은도시" v-model="input2" 
            @keyup="searchMethod"/>
                <ul>
                    <li v-for="(item, i) in methodFilterList2">
                        {{ item }}
                    </li>
                </ul>
            </div>
            <div class="col">
            <input type="text" placeholder="걷고싶은도시" v-model="input3" 
            @keyup="searchMethod"/>
                <ul>
                    <li v-for="(item, i) in methodFilterList3">
                        {{ item }}
                    </li>
                </ul>
            </div>
    </div>

</template>

<style lnag="css" scoped>
    .col {
        width: 33%;
        height: 100%;
        float: left;
    }
</style>