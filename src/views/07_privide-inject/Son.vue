<template>
  <el-card>
    <h2>I am son</h2>

    <el-divider/>
    <GrandSon/>
  </el-card>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import GrandSon from './GrandSon.vue'

let house = inject('TOKEN')

console.log(house);


</script>

<style scoped>

</style>