<template>
  <h1>Event Test</h1>
  <div class="father">
      <Son @run="runHandler"/>
  </div>
  <!-- Vue2 绑定组件的事件需要.native 才被认为是原生事件 -->
  <!-- Vue3 中直接 @click 就会被认为是默认事件 -->
</template>

<script setup lang="ts">
import Son from './EventSon.vue'
 
const runHandler = ( miles: number): void => {
  console.log('run', miles);
}

</script>

<style scoped>
  .father {
    width: 200px;
    height: 200px;
    background-color: pink;
  }

</style>