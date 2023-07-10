<template>
  <el-card>
    <h1>
      ref $parent
    </h1>
    <h2>
      I am father<br/>
      Account balance: {{ money }} 
    </h2>
    <el-button 
      type="primary"
      @click="handlerSon"
    >没收儿子十块钱</el-button>
    <el-divider></el-divider>

    <div class="container">
      <Son ref="son"/>
      <el-divider></el-divider>
      <Daugther/>
    </div>
  </el-card>
</template>

<script setup lang="ts">
// ref: 获取子组件实例VC/真实的DOM组件
// $parent: 可以在自建内部获取到父组件实例
// 引入子组件
import Son from './Son.vue'
import Daugther from './Daugther.vue'
import { ref } from 'vue';
const money = ref(1000)

// 必须同名
let son = ref();
const handlerSon = () => {
  money.value += 10;
  son.value.money -= 10;
}

defineExpose({
  money
})

</script>

<style lang="less" scoped>

</style>