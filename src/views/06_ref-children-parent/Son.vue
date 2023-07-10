<template>
  <el-card class="son">
    <h2>
      I am the son<br/>
      Account balance: {{ money }} 
    </h2>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const money = ref(500)

// 组件内部数据对外关闭
// 如果想让外部访问，需要通过 defineExpose 方法对外暴露
defineExpose({
  money
})

</script>

<style scoped>
.son {
  /* height: 300px; */
}
</style>