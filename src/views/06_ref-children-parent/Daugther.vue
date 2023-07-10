<template>
  <el-card class="daugther">
    <h2>
      I am the Daugther<br/>
      Account balance: {{ money }} 
    </h2>
    <el-button type="primary" @click="handler($parent)">向爸爸要10块钱</el-button>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const money = ref(500)

const handler = (p: any) => {
  money.value += 10;
  console.log(p);
}

defineExpose({
  money
})

</script>

<style scoped>
.daugther {
  /* height: 300px; */
}
</style>