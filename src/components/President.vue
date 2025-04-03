<script>
export default {
    data() {
        return {
            name: '홍길동',
            subject: ''
        }
    },
    computed: {
        formlName: {
            get() {
                this.subject = this.callSubjectApi(this.name)
                return this.name
            },
            set(val) {
                console.log(val)
                this.subject = this.callSubjectApi(val)
                // this.name = val
            }
        },
        
    },
    methods: {
            callSubjectApi(name) {
                if(name === '홍길동') {
                    return '소설'
                } else if(name === '이재명') {
                    return '정치'
                } else if(name === '빌게이츠') {
                    return 'it'
                } else if(name === 'backend') {
                    return 'web'
                } else {
                    return ''
                }
            },
            callSubjectApi2(name) {
                if(name === '이문열') {
                    return '소설'
                } else if(name === '이명박') {
                    return '정치'
                } else if(name === '김택진') {
                    return 'it'
                } else if(name === 'fornt') {
                    return 'web'
                } else {
                    return ''
                }
            }
        }
}
</script>
<template>
    <div>
        <input type="text" v-model="name">
        <p>{{ formlName }}</p>
        <p>강의과목: {{ subject }}</p>
    </div>
</template>