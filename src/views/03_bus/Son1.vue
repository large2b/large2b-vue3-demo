<template>
  <div class="son1">
    <h3>我是子组件1</h3>
    <button @click="sendCar">给兄弟送一辆🚗</button>
  </div>
</template>

<script setup lang="ts">
import $bus from '@/bus';

function sendCar() {
  console.log('哥哥投送一辆车');
  // $bus.emit(eventType, data)
  $bus.emit('car', {car: 'Porsche 911'})
}


</script>

<style scoped>
  .son1 {
    width: 100vw;
    height: 200px;
    background-color: rgb(173, 110, 121);
  }
</style>