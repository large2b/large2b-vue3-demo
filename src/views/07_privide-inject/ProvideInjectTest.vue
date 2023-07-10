<template>
  <el-card>
    <h1>provide / inject</h1>
    <h3>I got a {{ house }}</h3>

    <el-divider/>

    <Son/>

  </el-card>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import Son from './Son.vue'
// provide / inject 隔辈传递数据

let house = ref('Big house')

provide('TOKEN', house)

</script>

<style scoped>

</style>