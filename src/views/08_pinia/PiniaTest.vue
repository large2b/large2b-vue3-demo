<template>
  <el-card>
    <h1>Pinia</h1>
    <el-divider/>

    <div class="container">
      <Son1/>
      <Son2/>
    </div>
  </el-card>
</template>

<script setup lang="ts">
// vuex: 集中式状态管理容器, 可以实现任意组件之间通信
// state mutations actions getters modules

// pinia: 集中式状态管理容器, 可以实现任意组件之间通信
// state actions getters

import Son1 from './Son1.vue'
import Son2 from './Son2.vue'

</script>

<style lang="less" scoped>
  .container {
    display: flex;
    :nth-child(n) {
      flex: 1;
    }
  }
</style>