<template>
  <div class="father">
    <h1>全局事件总线 $bus</h1>
    <div class="container">
      <Son1/>
      <Son2/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Son1 from  './Son1.vue'
  import Son2 from  './Son2.vue'


</script>

<style lang="less" scoped>
.father {
  width: 100%;
  .container {
    display: flex;
    justify-content: space-between;
  }
  
}
</style>