<script setup>
import { ref } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
import Work1 from './components/Work1.vue'
import Work2 from './components/Work2.vue'
import Work3 from './components/Work3.vue'
const currentTab = ref('Work1')

const tabs = {
  Work1,
  Work2,
  Work3
}
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <div>
    <!-- 탭 버튼 -->
    <div style="margin-bottom: 1rem;">
      <button @click="currentTab = 'Work1'">Work1</button>
      <button @click="currentTab = 'Work2'">Work2</button>
      <button @click="currentTab = 'Work3'">Work3</button>
    </div>

    <component :is="tabs[currentTab]" />
  </div>
</template>
