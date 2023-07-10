<template>
  <div class="son2">
    <h3>我是子组件2</h3>
  </div>
</template>

<script setup lang="ts">
  import $bus from '@/bus';
  import { onMounted } from 'vue';
  console.log($bus);


  onMounted(() => {
    // $bus.on(event, callback)
    $bus.on('car', (data) => {
      console.log('弟弟接收到了车车', data);
    })
  }) 
</script>

<style scoped>
  .son2 {
    width: 100vw;
    height: 200px;
    background-color: rgb(77, 81, 81);
  }
</style>