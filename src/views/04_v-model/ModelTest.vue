<template>
  <div>
    <h1>v-model</h1>
    <h3>1. 收集表单数据 实现数据双向绑定</h3>
    <input type="text" v-model="info">
    <h4>输入内容:{{ info }} </h4>

    <br>
    <h2>给组件二的数据</h2>
    <div>
      <h3>PageNo: {{ PageNo }}</h3>
      <h3>PageSize: {{ PageSize }}</h3>
    </div>
    

    <h3>2. 父子组件数据同步</h3>
    <Son1 v-model="info"/>
    
    <!-- 多个model -->
    <Son2 v-model:PageNo="PageNo" v-model:PageSize="PageSize"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Son1 from './ModelSon1.vue'
import Son2 from './ModelSon2.vue'

  // 1. 收集表单数据 实现数据双向绑定
  // 2. 父子组件数据同步
  // 父 props 和 子 emit 结合
  // v-model 默认为 modelValue
  // 可手动 改为 => 如 v-model:PageSize="PageSize" 事件为update:PageSize
  const info = ref('');
  console.log(info);

  const PageNo = ref(0)
  const PageSize = ref(10)
  

</script>

<style scoped>
  div {
    background-color: rgb(52, 100, 119);
  }
</style>