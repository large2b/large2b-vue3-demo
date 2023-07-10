<template>
  <el-card>
    <h2>I am son 1</h2>
    <h3>通过Pinia获取的count: {{ counterStore.count }}</h3>
    <h3>通过Pinia获取的doubleCount: {{ counterStore.doubleCount }}</h3>
    <el-button @click="handler" type="primary">count++</el-button>

</el-card>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
// 获取小仓库对象
const counterStore = useCounterStore()

console.log('count', counterStore.count);
console.log(counterStore);


const handler = () => {
  // 1.
  // counterStore.count++; 
  // 2.
  // counterStore.$patch({
  //   count: 1111
  // })
  counterStore.increment()
}

</script>

<style scoped>

</style>