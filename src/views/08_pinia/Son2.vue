<template>
  <el-card>
    <h2>I am son 2</h2>
    <h3>通过Pinia获取的count: {{ counterStore.count }}</h3>

</el-card>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
// 获取小仓库对象
const counterStore = useCounterStore()

console.log(counterStore);
</script>

<style scoped>

</style>